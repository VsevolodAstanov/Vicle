import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,
	TouchableWithoutFeedback, Statusbar,
	TextInput, SafeAreaView, Keyboard, TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';

export default class Login extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Statusbar barStyle='light-content'/>
				<KeyboardAvoidingView behavior='padding' style={styles.container}>
					<TouchableWithoutFeedback style={styles.container}>
						<View style={styles.logoContainer}>
							<View style={styles.logoContainer}>
								<Image
									style={styles.logo}
									source={require('../img/logo.png')}>
								</Image>
							</View>
							<View style={styles.inputContainer}>
								<TextInput 
									style={styles.input}
									placeholed="Enter username"
									placeholderTextColor="rgba(255,255,255,0.8)"
									keyboardType="email-address"
									returnKeyType="next"
									autoCorrect={false}
									onSubmitEditing={ ()=> this.refs.txtPassword.focus() }
								/>
								<TextInput 
									style={styles.input}
									placeholed="Enter password"
									placeholderTextColor="rgba(255,255,255,0.8)"
									returnKeyType="go"
									autoCorrect={false}
									securityTextEntry={true}
									ref={"txtPassword"}
								/>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>	
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#323131',
		flex: 1,
		flexDirection: 'column',
	},
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	logo: {
		width: 180,
		height: 180
	},
	inputContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		height: 200,
		padding: 20,
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)'
	}
})
