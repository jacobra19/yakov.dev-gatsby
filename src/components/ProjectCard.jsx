import React from 'react';

import { FaNpm } from "@react-icons/all-files/fa/FaNpm";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { GoLogoGithub } from "@react-icons/all-files/go/GoLogoGithub";

const ProjectCard = ({ title, description, id }) => {

    const renderLinks = () => {

    }

    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.9)', borderRadius: 10, padding:10,height:200}}>
            <h3 style={{margin:0}}>{title}</h3>
            <div dangerouslySetInnerHTML={{__html:description}}></div>
            <FaNpm size={30} />
            <GoLogoGithub size={30} />
            <CgWebsite size={30} />

        </div>
    );
}

export default ProjectCard;
