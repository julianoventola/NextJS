import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import WithAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src='/static/dog.jpg' alt='Dog' width='200' />
    <h1>Hello World</h1>
    <Link href='/users'>
      <a>Usuários</a>
    </Link>
  </div>
);

export default WithAnalytics()(Home);
