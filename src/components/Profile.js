import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity } from "react-native";

export class Profile extends Component {
	render() {
		return (
			 <TouchableOpacity onPress={() => Linking.openURL('strava://')}>
			        <Text>Run Strava</Text>
			 </TouchableOpacity>
		);
	}
}