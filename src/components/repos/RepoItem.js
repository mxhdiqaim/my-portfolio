import React from 'react';
import PropTypes from 'prop-types';


const RepoItem = ({ repo }) => {
    
    return (
        <div className='card dark'>
            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
        </div>
    );
};


RepoItem.propsTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem;
