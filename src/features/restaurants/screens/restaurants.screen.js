import React, { useContext } from "react";
import { MD2Colors } from "react-native-paper";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantsList, LoadingContainer, LoadingIndicator } from "./restaurants.screen.styles";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import Search from "../components/search.component";

export default function RestaurantsScreen() {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  console.log(restaurants.length);
  return (
    <SafeArea>
      <Search />
      {!isLoading ? (
        <RestaurantsList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <LoadingContainer>
          <LoadingIndicator animating color={MD2Colors.blue200} size={55} />
        </LoadingContainer>
      )}
    </SafeArea>
  );
}
