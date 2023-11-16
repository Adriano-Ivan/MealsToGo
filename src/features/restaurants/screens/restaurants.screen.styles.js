import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

export const SearchContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const InputSearchContainer = styled(View)`
  flex-direction: row;
  justify-content: top;
`;

export const RestaurantsScreenSearchbar = styled(Searchbar)`
  flex: 1;
  margin: ${(props) => props.theme.space[3]};
`;

export const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
