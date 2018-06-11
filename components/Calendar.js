import React, { Component } from "react";
import { View, Text, ActivityIndicator, Linking, ViewPagerAndroid } from "react-native";
import { Avatar } from "react-native-elements";
import { Workout } from './Workout'

export class Calendar extends Component {
	constructor(props) {
		super(props);
	}

	onPageScroll(e) {
		let position = e.nativeEvent.position;
	}

	render() {

		return (
			<ViewPagerAndroid
				style={{flex: 1}}
				initialPage={0}
				onPageSelected={this.onPageScroll.bind(this)}>
				<View key="1">
					<Text>Long Ride</Text>
				</View>
				<View key="2">
					<Text>Intervals</Text>
				</View>
			</ViewPagerAndroid>
		);
	}
}