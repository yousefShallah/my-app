import React, { useState } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../../functions/mobx.js';
import UserImage from '../../images/Group 192.svg';

import './index.css';


const Commitcount = () => {
    const store = React.useContext(StoreContext);
  
    return useObserver(() => (
      <h1 key={store.commitCount} className="commit-count"> {store.commitCount} { store.commitCount <= 2 ? 'Commit' : 'Commits'} </h1>
    ))
  }
  
  const CommitList = () => {
    const store = React.useContext(StoreContext);
    return useObserver(() => (
      <ul className="commit-list">
        {store.commits.map(commit => {
            return(
              <li key={commit}> {commit} </li>
            )
          })}
      </ul>
    ))
  }
  
  
  const AddCommitForm = () => {
    const store = React.useContext(StoreContext);
    const [commit, setCommit] = React.useState("");
    return(
      <form onSubmit={e => {
        store.addCommit(commit);
        setCommit("")
        e.preventDefault();
      }}
      className="form-contienr"
      >
        <input className="input-item" type="text" value={commit} onChange={e => { setCommit(e.target.value) } } placeholder="Comment" />
        <button type="submit" className="btn-add"> Add </button> 
      </form> 
    )
}

const PostContent = () => {
    return(
        <div className="post-content">
             <div className="user-content"> 
                 <img src={UserImage} alt="user image" />
                 <h2> Mohammed D </h2>
             </div>
             <p> Whenever you have a function that you're defining as a class(in this case its component) it's best practice to use a 
                 capital letter as that is the common naming convention between languages and it's much more clear than what a 
                 lowercase letter is, that said it plays no part in how the code actually functions so you can call it anything you 
                 like. And in javascript, it is treated as es5 class if you start with capital naming case. </p>
        </div> 
    )
}
const NewItem = () => {
    return(
        <div className="newItem-continer">
            <PostContent />
            <Commitcount />
            <div className="commit-continer">
                <AddCommitForm />
                <CommitList />
            </div>
        </div>
    )
}

export default NewItem;