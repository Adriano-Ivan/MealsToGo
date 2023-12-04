import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { MD2Colors } from "react-native-paper";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantsList, LoadingContainer, LoadingIndicator } from "./restaurants.screen.styles";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import Search from "../components/search.component";

export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {!isLoading ? (
        <RestaurantsList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
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
