module.exports = {
    siteMetadata: {
        title: `yakov.dev`,
        author: {
            name: `Yakov Rakhamimov`,
            summary: `Frontend Web Developer`,
        },
        description: `Web Development Blog By Yakov Rakhamimov`,
        image: './static/favicon.ico',
        siteUrl: `https://yakov.dev`,
        social: {
            twitter: `https://twitter.com/yakovrakhamimov`,
            github: `https://github.com/jacobra19`,
            linkedin: `https://www.linkedin.com/in/rakhamimov`,
            instagram: `https://www.instagram.com/raxamimov/`,
        },
    },
    plugins: [
        'gatsby-plugin-webpack-bundle-analyser-v2',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-feed`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `https://yakov.dev`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-158178670-1`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `yakov.dev`,
                short_name: `yakov.dev`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `content/assets/code-icon.png`,
                crossOrigin: `use-credentials`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `limelight`,
                    `comfortaa\:300,400,400i,700`,
                    `raleway\:300,400,400,500,600,700,800,900`,
                ],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/*`],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
