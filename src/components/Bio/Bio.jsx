import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage, getImage } from 'gatsby-plugin-image';

import { rhythm } from '../../utils/typography';

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    const styles = {
        root: {
            display: `flex`,
            marginBottom: rhythm(2.5),
            alignItems: 'center',
        },
        staticImageContainer: {
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
        },
        staticImage: {
            borderRadius: `50%`,
        },
        text: {
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 600,
            margin: 0,
        },
    }

    const { author, social } = data.site.siteMetadata;


    return (
        <div style={styles.root} >
            <StaticImage
                src={'../../images/profile-pic.jpg'}
                height={50}
                width={50}
                alt={author.name}
                style={styles.staticImageContainer}
                imgStyle={styles.staticImage}
            />
            <p style={styles.text}>
                Web Development blog by <strong>{author.name}</strong>.<br />
                {/* {` `}
        <a href={social.twitter}>
          Follow me on Twitter
        </a> */}
            </p>
        </div>
    );
};

export default Bio;
