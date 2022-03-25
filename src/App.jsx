//npm install -g firebase-tools
import React from 'react';
import  Widgets  from './Widgets';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import {useStateValue} from './StateProvider'

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
      <>
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}
    </div>
  );
}

export default App;
