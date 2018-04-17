import React from "react";
import { TabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/dist/Ionicons";

import CalendarScreen from "./screens/Calendar";
import Home from "./screens/Home";
import Inbox from "./screens/Inbox";
import People from "./screens/People";
import Profile from "./screens/Profile";

const RootNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Hjem",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-home-outline" size={25} color={tintColor} />;
        }
      })
    },
    People: {
      screen: People,
      navigationOptions: ({ navigation }) => ({
        title: "BORGERE",
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-people-outline" size={25} color={tintColor} />;
        }
      })
    },
    CalendarScreen: {
      screen: CalendarScreen,
      navigationOptions: ({ navigation }) => ({
        title: "KALENDAR",
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon name="ios-calendar-outline" size={25} color={tintColor} />
          );
        }
      })
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: ({ navigation }) => ({
        title: "INDBAKKE",
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon name="ios-chatboxes-outline" size={25} color={tintColor} />
          );
        }
      })
    },

    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: "PROFIL",
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon name="ios-settings-outline" size={25} color={tintColor} />
          );
        }
      })
    }
  },
  {
    initialRouteName: "CalendarScreen",
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#8bc250",
      labelStyle: {
        fontSize: 8,
        margin: 0,
        marginTop: 5,
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#fff"
      },
      inactiveTintColor: "#4e4e4e",
      indicatorStyle: {
        backgroundColor: "#8bc250"
      }
    }
  }
);

export default RootNavigator;
