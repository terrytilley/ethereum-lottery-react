import React, { Component } from 'react';
import web3 from './web3';
import lottery from './lottery';
import './App.css';

class App extends Component {
  state = { manager: '', players: [], balance: '', value: '', message: '' };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  onSubmit = async event => {
    event.preventDefault();

    const { value } = this.state;
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, 'ether'),
    });

    this.setState({ message: 'You have been entered!' });
  };

  render() {
    const { manager, players, balance, value, message } = this.state;
    const pot = web3.utils.fromWei(balance, 'ether');

    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {manager}.</p>
        <p>
          There are currently {players.length} people entered, competing to win{' '}
          {pot} ether!
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <br />
            <input
              value={value}
              onChange={e => this.setState({ value: e.target.value })}
            />
            <input type="submit" value="Enter" />
          </div>
        </form>

        <hr />

        <h2>{message}</h2>
      </div>
    );
  }
}

export default App;
