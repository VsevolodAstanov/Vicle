import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Linking } from "react-native";
import { List, ListItem, Avatar } from "react-native-elements";

export class Workout extends Component {

	render() {
		return (
			<ListItem
              rightIcon={<Avatar
                onPress={() => Linking.openURL('strava://record')}
                source={require('../img/strava48.png')}
              />}
              title={`${this.props.item.name.first} ${this.props.item.name.last}`}
              subtitle={this.props.item.email}
              containerStyle={{ borderBottomWidth: 0 }}
            />
		);
	}
}