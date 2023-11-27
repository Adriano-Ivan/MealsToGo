import React, { useState, useContext } from "react";
import { MD2Colors } from "react-native-paper";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import {
  SearchContainer,
  InputSearchContainer,
  RestaurantsScreenSearchbar,
  RestaurantsList,
  LoadingContainer,
  LoadingIndicator,
} from "./restaurants.screen.styles";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export default function RestaurantsScreen() {
  const [text, setText] = useState();
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(restaurants.length);
  return (
    <SafeArea>
      <SearchContainer>
        <InputSearchContainer>
          <RestaurantsScreenSearchbar
            placeholder="search"
            value={text}
            onChangeText={(textI) => {
              setText(textI);
            }}
          />
        </InputSearchContainer>
      </SearchContainer>
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
