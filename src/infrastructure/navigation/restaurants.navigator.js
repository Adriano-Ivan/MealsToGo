/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetail from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantsStack = createStackNavigator();

export function RestaurantsNavigator() {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
      <RestaurantsStack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </RestaurantsStack.Navigator>
  );
}
