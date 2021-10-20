import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { rhythm } from '../../utils/typography';

const NAV_ITEMS = [
    {
        label: 'about',
        to: '/about'
    },
    {
        label: 'projects',
        to: '/projects'
    }
]

const AppHeader = ({ isRoot, title }) => {
    const breakpoints = useBreakpoint();
    const isMobile = breakpoints.sm || breakpoints.xs;

    const styles = {
        root: {
            border: '3px solid',
            borderImageSource:
                'linear-gradient(90deg, rgba(160,2,189,1), rgba(227,30,30,1))',
            borderImageSlice: 1,
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            background: `linear-gradient(90deg, rgb(160, 2, 189,0.1), rgb(227, 30, 30,0.2))`,
        },
        container: {
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `0 ${rhythm(3 / 4)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        rootTitle: {
            marginBottom: rhythm(1.5),
            margin: '15px 0px',
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 600,
            fontSize: isMobile ? '1.7rem' : '2.5rem',
        },
        link: {
            boxShadow: `none`,
            color: `inherit`,
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: 20,
        },
        navItem: {
            margin: 0,
            fontFamily: 'Comfortaa, cursive',
            textTransform: 'lowercase',
            fontSize: isMobile ? 18 : 24,
        },
        navItemActive: {
            color: '#a002bd',
        },
    };

    const renderRootHeader = () => {
        return (
            <h1 style={styles.rootTitle}>
                <Link style={styles.link} to={`/`} >
                    {title}
                </Link>
            </h1>
        );
    };

    const renderMenu = () => {
        return (
            <nav style={styles.nav}>
                { NAV_ITEMS.map(renderNavItem) }
            </nav>
        );
    };

    const renderNavItem = (item) => {
        return (
            <h2 style={styles.navItem} >
                <Link
                    style={styles.link}
                    to={item.to}
                    activeStyle={styles.navItemActive}
                >
                    {item.label}
                </Link>
            </h2>
        )
    }

    return (
        <header style={styles.root}>
            <div style={styles.container}>
                {renderRootHeader()}
                {renderMenu()}
            </div>
        </header>
    );
};

export default AppHeader;
