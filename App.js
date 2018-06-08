import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Toolbar } from './components/Toolbar';
import { Plan } from './components/Plan';
import { Profile } from './components/Profile';

const AppNavigator = createStackNavigator(
	{
		Profile: Profile,
		Plan: Plan
	},
	{
		initialRouteName: 'Plan',
	}
);

type Props = {};
export default class App extends Component<Props> {

	constractor() {
		this.state = {
			title : "Profile",
			subtitle : ""
		};
	}

	render() {

		let { title } = this.state; 
		let { subtitle } = this.state;

		return (
			<View style={{flex: 1}}>
				<Toolbar title={title} subtitle={subtitle} style={{height: 56}}/>
				<AppNavigator style={{top: 0}} />
			</View>
		)
	}
}