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
			<span>
				<FormatTime date={this.state.date} />&nbsp;<Locale locale={this.state.locale} />
			</span>
		);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
}

class Field extends Component {
	constructor(props) {
		super(props);
		this.state = {value: props.value}
	}

	render() {
        return (
			<span onClick={() => this.setState({value: (this.state.value + 1) % 3})}>{this.state.value}</span>
		);
    }
}

class Playground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x11: 0,
			x12: 0,
			x13: 0,
			x21: 0,
			x22: 0,
			x23: 0,
			x31: 0,
			x32: 0,
			x33: 0,
		}
	}
	render() {
		return (
			<table>
				<tbody>
					<tr>
						<td><Field value={this.state.x11} /></td>
						<td><Field value={this.state.x12} /></td>
						<td><Field value={this.state.x13} /></td>
					</tr>
					<tr>
						<td><Field value={this.state.x21} /></td>
						<td><Field value={this.state.x22} /></td>
						<td><Field value={this.state.x23} /></td>
					</tr>
					<tr>
						<td><Field value={this.state.x31} /></td>
						<td><Field value={this.state.x32} /></td>
						<td><Field value={this.state.x33} /></td>
					</tr>
				</tbody>
			</table>
		);
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to hello-world-react</h2>
        </div>
        <Playground />
        <p className="App-intro">
          It's currently <Clock />.
        </p>
      </div>
    );
  }
}

export default App;
