import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

import { Layout, SEO } from '@components';

const AboutMe = ({ location }) => {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            allProject {
                nodes {
                    description
                    title
                    id
                    links {
                        github
                        liveURL
                        npm
                    }
                }
            }
            site {
                siteMetadata {
                    title
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                        github
                        linkedin
                        instagram
                    }
                }
            }
        }
    `);

    const { author, title } = data.site.siteMetadata;
    const { twitter, github, linkedin, instagram } =
        data.site.siteMetadata.social;
    const styles = {
        root: {},
        articleCont: {
            fontSize: 18,
        },
        header: {
            display: 'flex',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
        },
        h1Text: {
            margin: 0,
        },
        middleSection: {
            margin: '10px 0px',
        },
        socialLinksCont: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            gap: 10,
        },
        link: {
            boxShadow: 'none',
            margin: '0px 5px',
        },
        socialIcon: {
            width: 30,
            height: 30,
            fill: '#000',
            '&:hover': {
                backgroundColor: '#ff0000',
            },
        },
        staticImageComp: {
            borderRadius: `100%`,
            margin: '0px 15px',
        },
        staticImage: {
            borderRadius: `50%`,
        },
    };

    const renderHeader = (title) => {
        return (
            <header style={styles.header}>
                <h1 style={styles.h1Text}>{title}</h1>
            </header>
        );
    };

    const renderContent = () => {
        return (
            <>
                <section>
                    Hi! I'm Yakov Rakhamimov, a Frontend Web Developer from
                    Haifa, Israel.
                </section>
                <section style={styles.middleSection}>
                    I have started this blog to document everything I learn and
                    simplify it for others who wish to understand better simple
                    and complex topics in the web development world. My
                    open-source projects are available on GitHub.
                </section>
                <section>
                    Aside from coding, I'm an amateur photographer, Fantasy NBA
                    player, and a huge Manchester United fan!
                </section>
            </>
        );
    };

    const renderSocialLinks = () => {
        return (
            <div style={styles.socialLinksCont}>
                <Link to={github} style={styles.link} target={'_blank'}>
                    <FaGithub size={30} style={styles.socialIcon} title={'GitHub'} />
                </Link>
                <Link to={twitter} style={styles.link} target={'_blank'}>
                    <FaTwitter size={30} style={styles.socialIcon} title={'Twitter'} />
                </Link>
                <StaticImage
                    src={'../images/profile-pic.jpg'}
                    height={100}
                    width={100}
                    alt={author.name}
                    style={styles.staticImageComp}
                    imgStyle={styles.staticImage}
                />
                <Link to={linkedin} style={styles.link} target={'_blank'}>
                    <FaLinkedin size={30} style={styles.socialIcon} title={'Linkedin'} />
                </Link>
                <Link to={instagram} style={styles.link} target={'_blank'}>
                    <FaInstagram size={30} style={styles.socialIcon} title={'Instagram'} />
                </Link>
            </div>
        );
    };

    return (
        <Layout location={location} title={title}>
            <SEO title="about" />
            <article style={styles.articleCont}>
                {renderHeader('About Me')}
                {renderContent()}
            </article>
            {renderSocialLinks()}
        </Layout>
    );
};

export default AboutMe;
