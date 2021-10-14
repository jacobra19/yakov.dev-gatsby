import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, SEO, ProjectCard } from '@components';

const Projects = ({ location }) => {
    const data = useStaticQuery(graphql`
        query ProjectsQuery {
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
                }
            }
        }
    `);

    const { title } = data.site.siteMetadata;
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
            link: {
                boxShadow: 'none',
                margin: '0px 5px',
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
            <SEO title="projects" />
            <article style={styles('articleCont')}>
                {renderHeader('Projects')}
                {renderProjects()}
            </article>
        </Layout>
    );
};

export default Projects;
