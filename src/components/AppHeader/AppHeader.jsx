import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { rhythm } from '../../utils/typography';

const AppHeader = ({ isRoot, title }) => {
    const breakpoints = useBreakpoint();
    const isMobile = breakpoints.sm || breakpoints.xs;

    useEffect(() => {
        console.log('breakpoints :>> ', breakpoints);
    }, [breakpoints])
    const styles = (s) => {
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
            },
            denseTitle: {
                margin: '15px 0px',
                fontFamily: 'Comfortaa, cursive',
                fontWeight: 600,
            },
            link: {
                boxShadow: `none`,
                color: `inherit`,
            },
        };

        return styles[s];
    };

    const renderRootHeader = () => {
        return (
            <h1 style={{ ...styles('rootTitle'), fontSize: isMobile ? '1.7rem' : '2.5rem' }}>
                <Link
                    style={styles('link')}
                    to={`/`}
                // activeStyle={{ color: '#a002bd' }}
                >
                    {title}
                </Link>
            </h1>
        );
    };

    const renderMenu = () => {
        return (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <h2
                    style={{
                        margin: 0,
                        fontFamily: 'Comfortaa, cursive',
                        textTransform: 'lowercase',
                        fontSize: isMobile ? 18 : 24,
                    }}
                >
                    <Link
                        style={styles('link')}
                        to={`/projects`}
                        activeStyle={{ color: '#a002bd' }}
                    >
                        projects
                    </Link>
                </h2>
                <h2
                    style={{
                        margin: 0,
                        fontFamily: 'Comfortaa, cursive',
                        textTransform: 'lowercase',
                        fontSize: isMobile ? 18 : 24,
                    }}
                >
                    <Link
                        style={styles('link')}
                        to={`/about`}
                        activeStyle={{ color: '#a002bd' }}
                    >
                        about
                    </Link>
                </h2>
            </nav>
        );
    };

    return (
        <header style={styles('root')}>
            <div style={styles('container')}>
                {renderRootHeader()}
                {renderMenu()}
            </div>
        </header>
    );
};

export default AppHeader;
