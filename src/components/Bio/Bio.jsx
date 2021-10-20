import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { StaticImage,getImage  } from "gatsby-plugin-image"

import { rhythm } from '../../utils/typography';

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
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
    // const image = getImage(data.avatar.childImageSharp.fixed)

    const { author, social } = data.site.siteMetadata;
    console.log('data.avatar.childImageSharp.fixed :>> ', data.avatar.childImageSharp.fixed);
    return (
        <div
            style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
                alignItems: 'center',
            }}
        >
            <StaticImage src={'../../images/profile-pic.jpg'} height={50} width={50} alt="A dinosaur" />
            <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                }}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
            <p
                style={{
                    fontFamily: 'Comfortaa, cursive',
                    fontWeight: 600,
                    margin: 0,
                }}
            >
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
