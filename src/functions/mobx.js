import React from 'react';
import { useLocalStore,  } from 'mobx-react';

export const StoreContext = React.createContext();

export const StoreProvider = ({children}) => {
    const Store = useLocalStore(() => ({
      commits: ["commit 1"],
      likes: 7,
      addCommit: commit => {
        Store.commits.push(commit)
      },
      addLike: like => {
        Store.likes = like + 1
      },
      get commitCount (){
        return Store.commits.length;
      },
      get likeCount (){
        return Store.likes.length;
      }
    }))
    return <StoreContext.Provider value={Store}> {children} </StoreContext.Provider>
}

