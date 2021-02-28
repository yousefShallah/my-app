import React, { useContext } from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { StoreContext, StoreProvider } from './functions/mobx.js';
import './App.css';
import NewItem from './components/newItem';

// const StoreContext = React.createContext();



function App() {
    return (
        <StoreProvider>
          <div className = "App" >
            <NewItem />
          </div>
        </StoreProvider>
    );
}

export default App;