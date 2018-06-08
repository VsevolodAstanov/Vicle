import React, { Component } from "react";
import { View, Text, ActivityIndicator, Linking, ViewPagerAndroid } from "react-native";
import { Avatar } from "react-native-elements";
import { Workout } from './Workout'

export class Plan extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			page: 1
		};
	}

	onPageScroll(e) {
		let position = e.nativeEvent.position;
		
		// switch(position) {
		// 	case 0:
		// 		this.setState({"subtitle": "Long Ride"});
		// 	case 1:
		// 		this.setState({"subtitle": "Intervals"});
		// 	case 2:
		// 		this.setState({"subtitle": "Uphill + Skills"});
		// 	case 3:
		// 		this.setState({"subtitle": "Relax Day"});
		// 	case 4:
		// 		this.setState({"subtitle": "Long Ride"});
		// 	case 5:
		// 		this.setState({"subtitle": "Sprints"});
		// 	case 6:
		// 		this.setState({"subtitle": "Relax Day"});
		// }

		//alert(this.state.subtitle)
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
				<View key="3">
					<Text>Uphill + Skills</Text>
				</View>
				<View key="4">
					<Text>Relax Day</Text>
				</View>
				<View key="5">
					<Text>Long Ride</Text>
				</View>
				<View key="6">
					<Text>Sprints</Text>
				</View>
				<View key="7">
					<Text>Relax Day</Text>
					<Avatar
						onPress={() => Linking.openURL('strava://record')}
						source={require('../img/strava48.png')}/>
				</View>
			</ViewPagerAndroid>
		);
	}
}