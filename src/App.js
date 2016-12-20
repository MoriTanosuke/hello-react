import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function FormatTime(props) {
	return <span className="time">{props.date.toLocaleTimeString()}</span>;
}

function Locale(props) {
	var value = props.locale;
	if(props.locale === 'de') {
		value = '🇩🇪';
	}
	return <span className="locale">{value}</span>;
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(), locale: 'de'};
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return (
			<div>
				<FormatTime date={this.state.date} />
				<Locale locale={this.state.locale} />
			</div>
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
          To get started, edit <code>src/App.js</code>. 🦄
        </p>
        <p>
          <Clock />
        </p>
      </div>
    );
  }
}

export default App;
