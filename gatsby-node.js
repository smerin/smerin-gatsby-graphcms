const path = require("path");
const fetch = require("node-fetch");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {

  const { createNode } = actions;

  const processBanner = banner => {
    const nodeId = createNodeId(`banner-${banner.fileName}`);
    const nodeContent = JSON.stringify(banner);

    const nodeData = Object.assign({}, banner, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: "BannerImage",
        content: nodeContent,
        contentDigest: createContentDigest(banner)
      }
    });

    return nodeData;
  }

  const response = await fetch(
    "https://api-euwest.graphcms.com/v1/cjp6mu0pz871t01ghp77ep4es/master?query={blogs{banner{url,fileName}}}"
  )
  const { data: { blogs } } = await response.json();

  blogs.forEach(blog => {
    const nodeData = processBanner(blog.banner);
    createNode(nodeData);
  })

  return
};


exports.onCreateNode = async props => {

  if (props.node && props.node.internal.type !== "BannerImage") {
    return;
  }

  const { node, actions, store, cache } = props;
  const { createNode } = actions;

  const fileNode = await createRemoteFileNode({
    url: node.url,
    store,
    cache,
    createNode,
    createNodeId: id => `banner-${node.id}`
  });

  if (fileNode) {
    props.node.image___NODE = fileNode.id
  }
};


const createTagPages = (createPage, blogs) => {
  const allTagsIndexTemplate = path.resolve("src/templates/allTagsIndex.js");
  const singleTagIndexTemplate = path.resolve(
    "src/templates/singleTagIndex.js"
  );

  const blogsByTag = {};

  blogs.forEach((blog, index) => {
    if (blog.tags) {
      blog.tags.forEach(tag => {
        if (!blogsByTag[tag]) {
          blogsByTag[tag] = [];
        }
        blogsByTag[tag].push(blog);
      });
    }
  });

  const tags = Object.keys(blogsByTag);

  createPage({
    path: "/tags",
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  });

  tags.forEach(tagName => {
    const blogs = blogsByTag[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        blogs,
        tagName
      }
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  console.log("creating pages...");
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js");

    resolve(
      graphql(
        `
          query {
            gcms {
              blogs {
                pathname
                title
                tags
                banner {
                  url
                  fileName
                  mimeType
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const { blogs } = result.data.gcms;

        createTagPages(createPage, blogs);

        blogs.forEach((blog, index) => {
          createPage({
            path: blog.pathname,
            component: blogPostTemplate,
            context: {
              pathSlug: blog.pathname,
              bannerName: blog.banner.fileName,
              prev: index === 0 ? null : blogs[index - 1],
              next: index === blogs.length - 1 ? null : blogs[index + 1]
            }
          });
          resolve();
        });

        resolve();
      })
    );
  });
};
