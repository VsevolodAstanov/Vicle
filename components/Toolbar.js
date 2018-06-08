import React, { Component } from "react";
import { ToolbarAndroid, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

let toolbarActions = [
	{ title: 'Assignemnt', iconName: 'assignment', show: 'always'},
	{ title: 'Profile', iconName: 'person-outline', show: 'always' },
];

export class Toolbar extends Component {

	onActionSelected(pos) {

		let { title } = this.props; 
		let { subtitle } = this.props;

		if(pos === 0){
			title = "Workout";
		}
		else{
			subtitle = "Profile";
		}

		alert(title);
	}

	render() {

		let { title } = this.props; 
		let { subtitle } = this.props;

		return (
			<MaterialIcon.ToolbarAndroid
				title={title}
				subtitle={subtitle}
				titleColor='white'
				subtitleColor='white'
				style={styles.toolbar}
				actions={toolbarActions}
				onActionSelected={(pos)=>this.onActionSelected(pos)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	toolbar: {
		height: 64,
		margin: 0,
		backgroundColor: "#f65624"
	}
});