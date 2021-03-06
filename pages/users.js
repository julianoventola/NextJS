import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import WithAnalytics from '../src/hocs/withAnalytics';

function User({ users }) {
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.login} -
            <Link href={`/users/${user.login}`}>
              <a>Acessar detalhes</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/'>
        <a>Voltar</a>
      </Link>
    </div>
  );
}

// Set an inicial value to component to show how next "prerender"
User.getInitialProps = async () => {
  // Get users from Github API to test
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  return { users: response.data };
};

export default WithAnalytics()(User);
