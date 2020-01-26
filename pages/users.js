import React from "react";
import axios from "axios";

export default function User({ users }) {
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

// Set an inicial value to component to show how next "prerender"
User.getInitialProps = async () => {
  // Get users from Github API to test
  const response = await axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );

  return { users: response.data };
};
