import React from 'react';
import { Link } from 'gatsby'

import { CgNpm } from "@react-icons/all-files/cg/CgNpm";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";

import { Tags } from '@components';

const ProjectCard = (project) => {
    const { title, description, id, links, tags } = project;

    const styles = {
        root: {
            boxShadow: "rgb(0 0 0) 5px 5px 12px -5px",
            color: '#fff',
            background: "linear-gradient(90deg, rgb(160 2 189 / 67%), hsl(0deg 78% 50% / 67%))",
            borderRadius: 10,
            padding: 16,
            minHeight: 200,
            display: 'flex',
            justifyContent: 'space-between',
        },
        main: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        title: {
            margin: '0 0 10px 0',
        },
        description: {
            fontSize: '17px',
        },
        linksContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
        },
        link: {
            boxShadow: 'none',
            margin: '0px 5px',
        },
        linkIcon: {
            width: 30,
            height: 30,
            fill: '#fff',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#fff',
                fill: '#fff',
            }
        },
    }

    const renderLink = (link, Icon, label) => {
        return (
            <Link to={link} target="_blank" rel="noopener noreferrer" title={label} style={styles.link}>
                <Icon size={30} style={styles.linkIcon} />
            </Link>
        )
    }

    const renderLinks = (links) => {
        const { npm, github, liveURL } = links;
        return (
            <div style={styles.linksContainer}>
                {github && renderLink(github, FaGithubSquare, 'Source Code')}
                {npm && renderLink(npm, CgNpm, 'NPM')}
                {liveURL && renderLink(liveURL, CgWebsite, 'Demo')}
            </div>
        )

    }

    return (
        <div style={styles.root}>
            <div style={styles.main}>
                <div>
                    <h3 style={styles.title}>{title}</h3>
                    <div style={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>

                </div>
                <Tags tags={tags} />
            </div>
            {renderLinks(links)}

        </div>
    );
}

export default ProjectCard;
