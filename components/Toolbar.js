import React, { Component } from "react";
import { ToolbarAndroid, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

let toolbarActions = [
	{ title: 'Assignemnt', iconName: 'done', show: 'always'},
	{ title: 'Calendar', iconName: 'assignment', show: 'always' },
	{ title: 'Profile', iconName: 'person-outline', show: 'always' },
];

export class Toolbar extends Component {

	constructor(props) {
		super(props);
	}

	onActionSelected(pos) {

		let { title } = this.props; 
		let { subtitle } = this.props;
		const { self } = this.props;

		switch(pos) {
			case 0: {
				this.props.setTitle.call(self, "Workout");
				break;
			}

			case 1: {
				this.props.setTitle.call(self, "Plan");
				this.props.setSubtitle.call(self, "");
				break;
			}

			case 2: {
				this.props.setTitle.call(self, "Profile");
				this.props.setSubtitle.call(self, "");
				break;
			}
		}
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