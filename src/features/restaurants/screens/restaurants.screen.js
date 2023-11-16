import React, { useState } from "react";
import {
  SearchContainer,
  InputSearchContainer,
  RestaurantsScreenSearchbar,
  RestaurantsList,
} from "./restaurants.screen.styles";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export default function RestaurantsScreen() {
  const [text, setText] = useState();

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
      <RestaurantsList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
