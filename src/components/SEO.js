import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`
      };

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="fb:app_id" content={process.env.FB_APP_ID} />

            {/* Open Graph data */}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}

            {/* Twitter Card data */}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
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
        titleTemplate
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
