import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  titleTemplate,
  description,
  excerpt,
  image,
  pathname,
  article
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultTitleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        titleTemplate: titleTemplate || defaultTitleTemplate,
        description: description || defaultDescription,
        excerpt: excerpt || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`
      };

      return (
        <>
          <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <link rel="canonical" href={seo.url} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="fb:app_id" content={process.env.FB_APP_ID} />

            {/* Open Graph data */}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.excerpt && (
              <meta property="og:description" content={seo.excerpt} />
            )}

            {/* Twitter Card data */}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.excerpt && (
              <meta name="twitter:description" content={seo.excerpt} />
            )}
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultTitleTemplate: titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
};
