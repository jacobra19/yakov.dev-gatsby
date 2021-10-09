import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostCard from '../components/blog-post-card';

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Blog" />
            <Bio />
            {posts.map(({ node }) => (
                <BlogPostCard key={node.id} node={node} />
            ))}
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        difficulty
                        tags
                    }
                    id
                }
            }
        }
    }
`;
