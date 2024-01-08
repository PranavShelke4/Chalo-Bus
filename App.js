import * as React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "./Component/SettingOptions/General/Profile";
import Wallet from "./Component/SettingOptions/General/Wallet";
import Rewards from "./Component/SettingOptions/General/Rewards";
import TermsConditions from "./Component/SettingOptions/Others/TermsConditions";
import PrivacyPolicy from "./Component/SettingOptions/Others/PrivacyPolicy";
import ContactUs from "./Component/SettingOptions/Others/ContactUs";

import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Tickets from "./Pages/Tickets";

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={
                  focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline"
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Tickets") {
            return (
              <MaterialCommunityIcons
                name={focused ? "ticket-percent" : "ticket-percent-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Wallet" component={Wallet} />
        <RootStack.Screen name="Rewards" component={Rewards} />
        <RootStack.Screen name="Terms and Conditions" component={TermsConditions} />
        <RootStack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <RootStack.Screen name="Contact Us" component={ContactUs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
