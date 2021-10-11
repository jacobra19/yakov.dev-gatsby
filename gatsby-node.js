const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const projects = require('./src/data/projects.json');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    projects.forEach(project => {
        createNode({
            ...project,
            id: createNodeId(`project-${project.title}`),
            parent: null,
            children: [],
            internal: {
                type: `Project`,
                content: JSON.stringify(project),
                contentDigest: createContentDigest(project),
            },
        })
    })
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
