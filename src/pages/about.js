import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import GitHubIcon from '../svgs/github.inline.svg';
import InstagramIcon from '../svgs/instagram.inline.svg';
import LinkedinIcon from '../svgs/linkedin.inline.svg';
import TwitterIcon from '../svgs/twitter.inline.svg';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ProjectCard from '../components/ProjectCard';

const AboutMe = ({ location }) => {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    fixed(width: 80, height: 80, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            allProject {
                nodes {
                    description
                    title
                    id
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
    const styles = (s) => {
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
            },
            link: {
                boxShadow: 'none',
                margin: '0px 5px',
            },
            socialIcon: {
                width: 40,
                height: 40,
                // fill:'#e31e1e',
                '&:hover': {
                    backgroundColor: '#ff0000',
                },
            },
        };
        return styles[s];
    };

    const renderHeader = (title) => {
        return (
            <header style={styles('header')}>
                <h1 style={styles('h1Text')}>{title}</h1>
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
                <section style={styles('middleSection')}>
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
            <div style={styles('socialLinksCont')}>
                <Link to={github} style={styles('link')} target={'_blank'}>
                    <GitHubIcon style={styles('socialIcon')} title={'dasdds'} />
                </Link>
                <Link to={twitter} style={styles('link')} target={'_blank'}>
                    <TwitterIcon style={styles('socialIcon')} />
                </Link>
                <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author.name}
                    style={{
                        borderRadius: `100%`,
                        margin: '0px 15px',
                    }}
                    imgStyle={{
                        borderRadius: `50%`,
                    }}
                />
                <Link to={linkedin} style={styles('link')} target={'_blank'}>
                    <LinkedinIcon style={styles('socialIcon')} />
                </Link>
                <Link to={instagram} style={styles('link')} target={'_blank'}>
                    <InstagramIcon style={styles('socialIcon')} />
                </Link>
            </div>
        );
    };

    const renderProjects = () => {
        console.log(`data.allProject`, data.allProject);
        return (
            <section
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
            >
                {data.allProject.nodes.map((node) => {
                    return <ProjectCard key={node.id} {...node} />;
                })}
            </section>
        );
    };

    return (
        <Layout location={location} title={title}>
            <SEO title="about" />
            {/* <article style={styles('articleCont')}>
                {renderHeader('About Me')}
                {renderContent()}
            </article> */}
            {renderSocialLinks()}
            <article style={styles('articleCont')}>
                {renderHeader('Projects')}
                {renderProjects()}
            </article>
        </Layout>
    );
};

export default AboutMe;
