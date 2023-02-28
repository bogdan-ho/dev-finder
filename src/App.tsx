import React from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import UserCard from './components/UserCard/UserCard';
import defaultUser from './mock';

const App = () => {
  const {
    login, id, avatar, name, company, blog, location, bio,
    twitter, repos, followers, following, created,
  } = defaultUser;
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={console.log} />
      <UserCard
        repos={repos}
        followers={followers}
        following={following}
        avatar={avatar}
        login={login}
        id={id}
        name={name}
        company={company}
        blog={blog}
        location={location}
        bio={bio}
        twitter={twitter}
        created={created}
      />
    </Container>
  );
};

export default App;
