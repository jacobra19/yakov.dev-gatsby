import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../../utils/typography';

const BlogPostCard = ({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    const styles = {
        titleText: {
            marginBottom: rhythm(1 / 4),
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 600,
        },
        link: {
            boxShadow: `none`,
            border: ' 1px solid',

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


    const renderHeader = () => {
        return (
            <header>
                <h3 style={styles.titleText}>
                    <Link style={styles.link} to={node.fields.slug}>
                        {title}
                    </Link>
                </h3>
                <small style={styles.subTitle}>
                    {node.frontmatter.date}
                </small>
            </header>
        );
    };

    const renderSection = () => {
        return (
            <section>
                <p
                    style={styles.descriptionText}
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
