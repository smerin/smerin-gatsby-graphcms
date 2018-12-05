const path = require("path");

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

exports.onCreateNode = props => {
  if (props.node.typeName === "GCMS") {
    // console.log(props.getNodes());
    console.log("creating nodes...");
  }
};
