import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import { Toolbar } from './components/Toolbar';
import { Plan } from './components/Plan';
import { Profile } from './components/Profile';
import { Calendar } from './components/Calendar';

const AppNavigator = createStackNavigator(
	{	
		Plan:  {
			screen: Plan,
			name: 'workout/:name'
		},
		Calendar: {
			screen: Calendar
		}, 
		Profile: {
			screen: Profile,
		}
		
	},
	{
		initialRouteName: 'Plan',
		headerMode: 'none',
	}
);

type Props = {};
export default class App extends Component<Props> {

	constructor(props) {
		super(props);

		this.state = {
			title : "Profile" //default Title on Start APP
		};
	}

	setTitle(title) {
		this.setState({title: title});
		console.log(NavigationActions.navigate({routeName: "Profile"}));
	}

	setSubtitle(subtitle) {

		if(subtitle) {
			this.setState({subtitle: subtitle});
		} else {
			this.setState({subtitle: ""});
		}
	}

	render() {

		let { title } = this.state; 
		let { subtitle } = this.state;

		return (
			<View style={{flex: 1}}>
				<Toolbar
					title={title}
					self={this}
					subtitle={subtitle}
					setTitle={this.setTitle}
					setSubtitle={this.setSubtitle} />
				<AppNavigator
					self={this}
					screenProps={{
						self: this,
						setTitle: this.setTitle,
						setSubtitle: this.setSubtitle
					}}/>
			</View>
		)
	}
}