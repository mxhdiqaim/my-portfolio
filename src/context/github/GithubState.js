import { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SET_LOADING, GET_REPOS, SET_MODE } from '../types';

const GithubState = props => {
  const initialState = {
    repos: [],
    loading: false,
    nightMode: true,
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

  const toggleDarkMode = () => {
    if (state.nightMode) {
      document.getElementById('body').style.background = '#333333';
      document.getElementById('body').style.color = '#ffffff';
      document.getElementById('a').style.color = '#ffffff';
      document.getElementById('b').style.color = '#ffffff';
    } else {
      document.getElementById('body').style.background = '#ffffff';
      document.getElementById('body').style.color = '#333333';
      document.getElementById('a').style.color = '#333333';
      document.getElementById('b').style.color = '#333333';
    }
  };

  // Nightmode toggler
  const setNightmode = () => {
    dispatch({ type: SET_MODE, payload: state.nightMode });
    toggleDarkMode();
  };

  // SetLoading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        nightMode: state.nightMode,
        getGithubRepos,
        setNightmode,
        toggleDarkMode,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
