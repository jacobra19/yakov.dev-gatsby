import React from 'react';

import { rhythm } from '../utils/typography';

import Header from './header';

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    let isRoot = location.pathname === rootPath;

    return (
        <div
            style={
                {
                    // marginLeft: `auto`,
                    // marginRight: `auto`,
                    // maxWidth: rhythm(24),
                    // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }
            }
        >
            <Header isRoot={isRoot} title={title} />
            <main
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
            >
                {children}
            </main>
            {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
        </div>
    );
};

export default Layout;
