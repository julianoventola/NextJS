import React from 'react';
import axios from 'axios';

import Link from 'next/link';

import WithAnalytics from '../src/hocs/withAnalytics';

const Detail = ({ user }) => (
  <div>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} alt='User Avatar' width='200' />
    <Link href='/users'>
      <a>Voltar</a>
    </Link>
  </div>
);

// Query is a prop sent by routes
Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );
  return { user: response.data };
};

export default WithAnalytics()(Detail);
