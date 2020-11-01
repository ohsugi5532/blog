import React from 'react';
import Head from 'next/head';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
