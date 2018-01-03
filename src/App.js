import React, { Component } from 'react';
//import logo from './images/coin.jpg';
import logo from './logo.svg';
import './App.css';

import CoinList from './components/CoinList';

class App extends Component {

	render() {
		return (
			<div className="mainContainer">
				<header>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<CoinList />
				<div className="footerBlock">
					<p> copy right @2018</p>
					<p>Conceptualized & Developed by Pranay & Siju</p>
				</div>
			</div>
		);
	}
}

export default App;
