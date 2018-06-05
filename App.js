import React, { Component } from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Plan } from  './components/Plan';
import { Profile } from  './components/Profile';


const AppNavigator = createMaterialTopTabNavigator(
  {
    Plan: { 
      screen: Plan,
    },
    Profile: {
      screen: Profile 
    }
  }, {
    initialRouteName: 'Plan',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Plan') {
          iconName = 'calendar-check-o';
        } else if (routeName === 'Profile') {
          iconName = 'user-circle-o';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: MaterialTopTabBar,
    tabBarOptions: {
      activeTintColor: '#FF8104',
      inactiveTintColor: '#D2D2D2',
      showIcon: true,
      showLabel: false,
      iconStyle: {
          width: 25,
          height: 25
      },
      pressColor: '#FF8104',
      tabStyle: {
        backgroundColor: '#FFFFFF',
        opacity: 1
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}

