import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import WithAnalytics from '../src/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src='/static/dog.jpg' alt='Dog' width='200' />
    <Title>Hello World</Title>
    <Link href='/users'>
      <a>Usuários</a>
    </Link>
  </div>
);

export default WithAnalytics()(Home);
