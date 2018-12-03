const path = require("path");

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve("src/templates/allTagsIndex.js");
  const singleTagIndexTemplate = path.resolve(
    "src/templates/singleTagIndex.js"
  );

  const postsByTag = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);

  createPage({
    path: "/tags",
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  });

  tags.forEach(tagName => {
    const posts = postsByTag[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName
      }
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
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
                tags
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const posts = result.data.gcms.blogs;
        console.log(posts);

        // createTagPages(createPage, posts);

        posts.forEach((blog, index) => {
          createPage({
            path: blog.pathname,
            component: blogPostTemplate,
            context: {
              pathSlug: blog.pathname,
              prev: index === 0 ? null : posts[index - 1],
              next: index === posts.length - 1 ? null : posts[index + 1]
            }
          });
          resolve();
        });
        resolve();
      })
    );
  });
};
