import * as React from "react";
import { Ionicons, MaterialCommunityIcons  }from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Tickets from "./Pages/Tickets";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

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
    </NavigationContainer>
  );
}
