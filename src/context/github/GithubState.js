import { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SET_LOADING, GET_REPOS } from '../types';

const GithubState = props => {
  const initialState = {
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get Repos
  const getGithubRepos = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/mahdiabubakar/repos?per_page=10&sort=created:asc?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // SetLoading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        getGithubRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
