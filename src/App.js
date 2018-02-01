import React from 'react';
import web3 from './web3';
import './App.css';

const App = () => {
  web3.eth.getAccounts().then(console.log);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ethereum Lottery</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
