/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createStackNavigator();

export function RestaurantsNavigator() {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen name="Restaurants" component={RestaurantsScreen} />
    </RestaurantsStack.Navigator>
  );
}
