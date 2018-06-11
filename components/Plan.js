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

		const { self } = this.props.screenProps;
		const { setSubtitle } = this.props.screenProps;

		switch(position) {
			case 0:{
				setSubtitle.call(self,  "Long Ride");
				break;
			}
			case 1:{
				setSubtitle.call(self,  "Intervals");
				break;
			}
			case 2:{
				setSubtitle.call(self,  "Uphill + Skills");
				break;
			}
			case 3:{
				setSubtitle.call(self,  "Relax Day");
				break;
			}
			case 4:{
				setSubtitle.call(self,  "Long Ride");
				break;
			}
			case 5:{
				setSubtitle.call(self,  "Sprints");
				break;
			}
			case 6:{
				setSubtitle.call(self,  "Relax Day");
				break;
			}
		}
	}

	render() {

		return (
			<ViewPagerAndroid
				style={{flex: 1}}
				initialPage={0}
				onPageSelected={(e)=>this.onPageScroll(e)}>
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