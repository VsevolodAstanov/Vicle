import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity } from "react-native";

export class Profile extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<View>
				<TouchableOpacity onPress={() => Linking.openURL('strava://record')}>
					<Text>Run Strava</Text>
				</TouchableOpacity>
			</View>
		);
	}
}