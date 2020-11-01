import React from 'react';
import Head from 'next/head';

const Header: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>johnny.blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
