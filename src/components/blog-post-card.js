import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

const BlogPostCard = ({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    const styles = (s) => {
        const styles = {
            root: {},
            titleText: {
                marginBottom: rhythm(1 / 4),
                fontFamily: 'Comfortaa, cursive',
                fontWeight: 600,
            },
            link: {
                boxShadow: `none`,
                border: ' 1px solid',
                // borderImageSource: "linear-gradient(90deg, rgba(160,2,189,1), rgba(227,30,30,1))",
                // borderImageSource: "linear-gradient(90deg, rgba(160,2,189,0.5), rgba(227,30,30,0.5))",

                // borderImageSource: "linear-gradient(90deg, rgba(160,2,189,1) 0%, rgba(227,30,30,1) 50%, rgba(255,255,255,1) 100%)",
                borderImageSource:
                    'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(160, 2, 189) 33%, rgb(227, 30, 30) 66%, rgb(255, 255, 255) 100%)',
                color: 'rgba(227,30,30,1)',
                borderImageSlice: 1,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
            },
            subTitle: {
                fontFamily: 'Comfortaa, cursive',
            },
            descriptionText: {
                fontFamily: 'Comfortaa, cursive',
            },
        };
        return styles[s];
    };

    const renderHeader = () => {
        return (
            <header>
                <h3 style={styles('titleText')}>
                    <Link style={styles('link')} to={node.fields.slug}>
                        {title}
                    </Link>
                </h3>
                <small style={styles('subTitle')}>
                    {node.frontmatter.date}
                </small>
            </header>
        );
    };

    const renderSection = () => {
        return (
            <section>
                <p
                    style={styles('descriptionText')}
                    dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                    }}
                />
            </section>
        );
    };

    return (
        <article key={node.fields.slug}>
            {renderHeader()}
            {renderSection()}
        </article>
    );
};

export default BlogPostCard;
