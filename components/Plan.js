import React, { Component } from "react";
import { View, Text, ActivityIndicator, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar } from "react-native-elements";
import { Workout } from './Workout'

export class Plan extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			page: 1
		};
	}

	render() {
		return (
			<TouchableOpacity onPress={() => Linking.openURL('strava://record')}>
				<Text>Run Strava</Text>
			</TouchableOpacity>
		);
	}
}