import React, { Component } from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import { Avatar } from "react-native-elements";
import { Plan } from './components/Plan';
import { Profile } from './components/Profile';


const AppNavigator = createMaterialTopTabNavigator(
  { 
    'Mon': {
      screen: Plan,
    },
    'Tue': {
      screen: Plan,
    },
    'Wed': {
      screen: Plan,
    },
    'Thu': {
      screen: Plan,
    },
    'Fri': {
      screen: Plan,
    },
    'Sat': {
      screen: Plan,
    },
    'San': {
      screen: Plan,
    },
  }, {
    initialRouteName: 'Mon',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconTitle;
        switch(routeName) {
          case 'Mon':
            iconTitle = "MN";
            break;
          case 'Tue':
            iconTitle = "TU";
            break;
          case 'Wed':
            iconTitle = "WE";
            break;
          case 'Thu':
            iconTitle = "TH";
            break;
          case 'Fri':
            iconTitle = "FR";
            break;
          case 'Sat':
            iconTitle = "SA";
            break;
          case 'San':
            iconTitle = "SN";
            break;
        }

        return <Avatar 
          rounded
          containerStyle={{"backgroundColor": tintColor}}
          title={iconTitle}/>;
      }
    }),
    tabBarComponent: MaterialTopTabBar,
    tabBarOptions: {
      activeTintColor: '#f65624',
      inactiveTintColor: '#D2D2D2',
      showIcon: true,
      showLabel: false,
      iconStyle: {
          width: 35,
          height: 35,
      },
      tabStyle: {
        backgroundColor: '#FFFFFF',
        opacity: 1
      }
    }
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
    )
  }
}

