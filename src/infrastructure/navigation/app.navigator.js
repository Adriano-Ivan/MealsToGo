/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapsNavigator } from "./maps.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Maps: "map",
  Configs: "settings",
};

const defineTabOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    const iconName = TAB_ICON[route.name];

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  headerShown: false,
});

function Configs() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

export default function NavigationTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={defineTabOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Maps" component={MapsNavigator} />
        <Tab.Screen name="Configs" component={Configs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
