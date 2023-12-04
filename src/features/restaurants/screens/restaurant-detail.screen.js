import React from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import RestaurantDetailMenuAccordion from "../components/restaurant-detail-menu-accordion.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";

export default function RestaurantDetails({ route }) {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantDetailMenuAccordion />
    </SafeArea>
  );
}
