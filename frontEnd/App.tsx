import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CounterPage from "./src/pages/counterPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/pages/LoginPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsPage from "./src/pages/SettingsPage";
import NationalizePage from "./src/pages/NationalizePage";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";

const stack = createStackNavigator();

const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Counter" component={CounterPage} />
      <stack.Screen name="Login" component={LoginPage} />
    </stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) =>
          auth?.isLoggedIn ? (
            <NavigationContainer>
              <bottom_tab.Navigator>
                <bottom_tab.Screen
                  name="Dashboard"
                  component={BasicDashboardScreen}
                />
                <bottom_tab.Screen name="Settings" component={SettingsPage} />
                <bottom_tab.Screen
                  name="Nationalize"
                  component={NationalizePage}
                />
              </bottom_tab.Navigator>
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen name="Counter" component={CounterPage} />
                <stack.Screen name="Login" component={LoginPage} />
              </stack.Navigator>
            </NavigationContainer>
          )
        }
        ;
      </AuthContext.Consumer>
    </AuthProvider>
  );
};

export default App;
