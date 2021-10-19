import React from 'react';
import { Link } from 'gatsby'

import { CgNpm } from "@react-icons/all-files/cg/CgNpm";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";

import { Tags } from '@components';

const ProjectCard = (project) => {
    console.log('project :>> ', project);
    const { title, description, id, links, tags } = project;
    const renderLink = (link, Icon, label) => {

        return (
            <Link to={link} target="_blank" rel="noopener noreferrer" title={label} style={{
                boxShadow: 'none',
                margin: '0px 5px',
            }}>
                <Icon size={30} style={{
                    width: 30,
                    height: 30,
                    fill: '#fff',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#fff',
                        fill: '#fff',

                    }
                }}
                />
            </Link>
        )
    }

    const renderLinks = (links) => {
        console.log('links :>> ', links);
        const { npm, github, liveURL } = links;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {github && renderLink(github, FaGithubSquare, 'Source Code')}
                {npm && renderLink(npm, CgNpm, 'NPM')}
                {liveURL && renderLink(liveURL, CgWebsite, 'Demo')}
            </div>
        )

    }

    return (
        <div style={{
            boxShadow: "rgb(0 0 0) 5px 5px 12px -5px", color: '#fff',
            background: "linear-gradient(90deg, rgb(160 2 189 / 67%), hsl(0deg 78% 50% / 67%))"
            ,
            borderRadius: 10, padding: 16, minHeight: 200, display: 'flex', justifyContent: 'space-between'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div >
                    <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
                    <div style={{ fontSize: '17px' }} dangerouslySetInnerHTML={{ __html: description }}></div>

                </div>
                <Tags tags={tags}/>
            </div>
            {renderLinks(links)}

        </div>
    );
}

export default ProjectCard;
