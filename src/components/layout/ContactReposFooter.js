import React, { Fragment , useContext} from 'react';
import Contact from '../pages/Contact';
import Repos from '../repos/Repos';
import Footer from '../layout/Footer';

import GithubContext from '../../context/github/githubContext';


const ContactReposFooter = () => {

    const githubContext = useContext(GithubContext)
    
    const { loading } = githubContext;

    return <Fragment>
            <Contact />
            <Repos />
            { loading === false && <Footer /> }        
    </Fragment>
}

export default ContactReposFooter;