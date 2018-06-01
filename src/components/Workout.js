import React, { Component } from 'react';
import { View, Text } from "react-native";

export class WorkoutItem extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.item.type}</Text>
			</View>
		);
	}
}