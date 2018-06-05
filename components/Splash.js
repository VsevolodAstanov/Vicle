import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Splash extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image 
					style={styles.logo}
					source={require('../img/logo.png')}
				/>
			</View>
		) 
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#323131',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 256,
		height: 256
	}
});