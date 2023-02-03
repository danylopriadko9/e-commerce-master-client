import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
