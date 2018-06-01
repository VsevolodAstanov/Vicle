import React, { Component } from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Plan } from  './components/Plan';
import { Profile } from  './components/Profile';


const MainNavigator = createMaterialTopTabNavigator(
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
        return <Icon name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarComponent: MaterialTopTabBar,
    tabBarOptions: {
      activeTintColor: '#FF8104',
      inactiveTintColor: '#D2D2D2',
      labelStyle: {
        fontSize: 11,
        fontWeight: 'bold',
        margin: 0
      },
      showIcon: true,
      showLabel: false,
      iconStyle: {
          width: 40,
          height: 40
      },
      pressColor: '#FF8104',
      tabStyle: {
        backgroundColor: '#FFFFFF',
        opacity: 1
      }
    }
  }
);

export default class Main extends Component {
  render() {
    return (
      <MainNavigator />
    )
  }
}

