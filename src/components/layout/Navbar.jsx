import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import mahdiImg from '../../img/mahdi.jpg';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

const Navbar = () => {
  const githubContext = useContext(GithubContext);

  const { getGithubRepos, setNightmode, nightMode } = githubContext;

  useEffect(() => {
    getGithubRepos();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='navbar'>
      <p
        style={{
          float: 'right',
          position: 'absolute',
          right: '24px',
          top: '20px',
        }}
        onClick={setNightmode}>
        {nightMode ? <i class='far fa-sun' /> : <i class='fal fa-moon' />}
      </p>
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
        <ul id='navbar'>
          <li>
            <Link id='a' className='a link' to='/'>
              About
            </Link>
          </li>
          <li>
            <Link
              id='b'
              to='/contact'
              className='b link'
              onClick={getGithubRepos}>
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

export default Navbar;
