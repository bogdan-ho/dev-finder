import { GithubError, GithubUser } from '../types';

const isGithubUser = (user: GithubUser | GithubError): user is GithubUser => 'id' in user;

export default isGithubUser;
