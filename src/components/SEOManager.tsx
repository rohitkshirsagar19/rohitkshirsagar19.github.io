import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEOManager: React.FC<SEOProps> = ({
    title = "Rohit Kshirsagar | Software Engineer",
    description = "Portfolio of Rohit Kshirsagar - Incoming SDE, GenAI Engineer, and Systems Enthusiast.",
    keywords = "Rohit Kshirsagar, Software Engineer, Portfolio, GenAI, Golang, React, Systems Engineering",
    image = "/og-image.png",
    url = "https://rohitkshirsagar19.github.io"
}) => {
    const fullTitle = title === "Rohit Kshirsagar | Software Engineer" ? title : `${title} | Rohit Kshirsagar`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEOManager;
