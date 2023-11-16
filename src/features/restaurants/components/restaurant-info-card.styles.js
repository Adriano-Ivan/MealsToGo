import styled from "styled-components/native";
import { Image } from "react-native";
import { Card, Text } from "react-native-paper";

export const RestaurantStatusView = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const StarView = styled.View`
  flex-direction: row;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RatingLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardContent = styled(Card.Content)``;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
