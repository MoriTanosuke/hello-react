import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return (
			<span>{this.state.date.toLocaleTimeString()}</span>
		);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code>. 🦄 It is <Clock /> now.
        </p>
      </div>
    );
  }
}

export default App;
