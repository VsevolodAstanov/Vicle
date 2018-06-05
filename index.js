import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import App from './App';
import Login from './components/Login';
import Splash from './components/Splash';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { currentScreen: 'Splash' };
	}

	render() {
		const { currentScreen } = this.state;
		let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
		return mainScreen;
	}

}

AppRegistry.registerComponent('Viver', () => Main);
