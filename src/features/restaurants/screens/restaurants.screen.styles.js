import { View, FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
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

export const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
