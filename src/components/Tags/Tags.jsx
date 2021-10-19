import React from 'react';
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaChrome } from "@react-icons/all-files/fa/FaChrome";
import { HiTerminal } from "@react-icons/all-files/hi/HiTerminal";
import { GrGraphQl } from "@react-icons/all-files/gr/GrGraphQl";

const tagsMap = {
    "gatsby": {
        icon: SiGatsby,
        label: 'Gatsby',
    },
    "react": {
        icon: FaReact,
        label: 'React',
    },
    "graphql": {
        icon: GrGraphQl,
        label: 'GraphQL',
    },
    "nodejs": {
        icon: FaNodeJs,
        label: 'Node.js',
    },
    "cli": {
        icon: HiTerminal,
        label: 'CLI',
    },
    "chrome-ext": {
        icon: FaChrome,
        label: 'Chrome extension',
    },
    "material-ui": {
        icon: SiMaterialUi,
        label: 'Material-UI',
    }
}


const Tag = ({ tag }) => {
    console.log('tag :>> ', tag);
    const Comp = tagsMap[tag]['icon'];
    const label = tagsMap[tag]['label'];
    if (!Comp) return null;
    return (
        <Comp size={30} title={label} style={{
            width: 25,
            height: 25,
            fill: '#fff',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#fff',
                fill: '#fff',

            }
        }}
        />
    )

}

const Tags = ({ tags = [] }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', 'flexDirection': 'row', gap: 16 }}>
            <span>Built with:</span>
            {tags.map((tag, index) => <Tag key={index} tag={tag} />)}
            {/* <FaNodeJs size={30} style={{
                width: 30,
                height: 30,
                fill: '#fff',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#fff',
                    fill: '#fff',

                }
            }} /> */}
        </div>
    );
}

export default Tags;
