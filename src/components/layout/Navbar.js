import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import mahdiImg from '../../img/mahdi.jpg';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

const Navbar = () => {
  const githubContext = useContext(GithubContext);

  const { getGithubRepos } = githubContext;

  // useEffect(() => {getGithubRepos(), []);
  useEffect(() => {
    getGithubRepos();
    // eslint-diasble-next-line
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar-img'>
        <img
          src={mahdiImg}
          alt='Mahdi Abubakar'
          className='round-img img'
          style={{ width: '200px' }}
        />
      </div>
      <div className='navbar-links'>
        <h1>NigerianCoder</h1>
        <p style={styles}>Mahdi Abubakar</p>
        <ul id='navbar'>
          <li>
            <Link className='a' to='/'>
              About
            </Link>
          </li>
          {/* <li>
                        <Link to='/blog'>Blog</Link>
                    </li> */}
          <li>
            <Link to='/contact' className='b' onClick={getGithubRepos}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propsType = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

const styles = {
  marginTop: '-20px',
  marginRight: '18px',
  marginBottom: '10px',
  textDecoration: 'underline',
  fontStyle: 'italic',
};

export default Navbar;
