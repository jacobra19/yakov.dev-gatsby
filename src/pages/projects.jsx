import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, SEO, ProjectCard } from '@components';

const Projects = ({ location }) => {
    const data = useStaticQuery(graphql`
        query ProjectsQuery {
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
                    tags
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
        projectsContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
        },

    };

    const renderHeader = (title) => {
        return (
            <header style={styles.header}>
                <h1 style={styles.h1Text}>{title}</h1>
            </header>
        );
    };

    const renderProjects = () => {
        return (
            <section style={styles.projectsContainer}>
                {data.allProject.nodes.map((node) => {
                    return <ProjectCard key={node.id} {...node} />;
                })}
            </section>
        );
    };

    return (
        <Layout location={location} title={title}>
            <SEO title="projects" />
            <article style={styles.articleCont}>
                {renderHeader('Projects')}
                {renderProjects()}
            </article>
        </Layout>
    );
};

export default Projects;
