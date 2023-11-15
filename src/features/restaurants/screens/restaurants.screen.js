import React, { useState } from "react";
import {
  SafeAreaView, View, Platform, StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantsScreenSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" && `padding-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const InputSearchContainer = styled(View)`
  flex-direction: row;
  justify-content: top;
`;

const RestaurantsScreenSearchbar = styled(Searchbar)`
  flex: 1;
  margin: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreenListContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export default function RestaurantsScreen() {
  const [text, setText] = useState();

  return (
    <RestaurantsScreenSafeAreaView>
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
      <RestaurantsScreenListContainer>
        <RestaurantInfoCard />
      </RestaurantsScreenListContainer>
    </RestaurantsScreenSafeAreaView>
  );
}
