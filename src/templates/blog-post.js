import React from 'react';
import { Link, graphql } from 'gatsby';

import { Bio, Layout, SEO } from '@components';
import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    const styles = {
        headerTitle: {
            marginTop: rhythm(1),
            marginBottom: 0,
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 600,
        },
        headerParagraph: {
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            fontFamily: 'Comfortaa, cursive',
        },
        postContent: {
            fontFamily: 'Comfortaa, cursive',
            h2: {
                fontFamily: 'Comfortaa, cursive',
            },
        },
        postHR: {
            marginBottom: rhythm(1),
        },
        postsNav: {
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
        },
    };

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article>
                <header>
                    <h1 style={styles.headerTitle}>{post.frontmatter.title}</h1>
                    <p style={styles.headerParagraph}>
                        {post.frontmatter.date}
                    </p>
                </header>
                <section
                    style={styles.postContent}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <hr style={styles.postHR} />
                <footer>
                    <Bio />
                </footer>
            </article>

            <nav>
                <ul style={styles.postsNav}>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
