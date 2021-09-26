import { useContext } from 'react';
import RepoItem from './RepoItem';
import Spinner from '../pages/Spinner';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const githubContext = useContext(GithubContext);

  const { repos, loading } = githubContext;

  return (
    <div className='card'>
      <h2>Recent Github Repos</h2>
      {/* if loading is FALSE then display RepoItem  */}
      {loading ? (
        <Spinner />
      ) : (
        repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
      )}
    </div>
  );
};

export default Repos;
