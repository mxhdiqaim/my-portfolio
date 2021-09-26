import { Route, Switch } from 'react-router-dom';
import GithubState from './context/github/GithubState';

// My Imported Resources
import Navbar from './components/layout/Navbar';
import About from './components/layout/About';
import NotFound from './components/layout/NotFound';
import ContactReposFooter from './components/layout/ContactReposFooter';

// Styles Sheet
import './App.scss';

const App = () => {
  return (
    <GithubState>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={ContactReposFooter} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </GithubState>
  );
};

export default App;
