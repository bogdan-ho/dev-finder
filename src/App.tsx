import React, { useState } from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import UserCard from './components/UserCard/UserCard';
import defaultUser from './mock';
import { GithubError, GithubUser, LocalGithubUser } from './types';
import extractLocalUser from './utils/extractLocalUser';
import isGithubUser from './utils/typeGuards';

const BASE_URL = 'https://api.github.com/users/';

const App = () => {
  const [currentUser, setCurrentUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;

    if (isGithubUser(user)) {
      const newLocalUser = extractLocalUser(user);
      setCurrentUser(newLocalUser);
    } else {
      setCurrentUser(null);
    }
  };
  return (
    <Container>
      <Header />
      <Search hasError={!currentUser} onSubmit={fetchUser} />
      {currentUser ? (
        <UserCard
          repos={currentUser.repos}
          followers={currentUser.followers}
          following={currentUser.following}
          avatar={currentUser.avatar}
          login={currentUser.login}
          id={currentUser.id}
          name={currentUser.name}
          company={currentUser.company}
          blog={currentUser.blog}
          location={currentUser.location}
          bio={currentUser.bio}
          twitter={currentUser.twitter}
          created={currentUser.created}
        />
      )
        : null}
    </Container>
  );
};

export default App;
