import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapsScreen from "../../features/maps/screens/maps.screen";

const MapsStack = createStackNavigator();

export function MapsNavigator() {
  return (
    <MapsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MapsStack.Screen name="MapsScreen" component={MapsScreen} />
    </MapsStack.Navigator>
  );
}
