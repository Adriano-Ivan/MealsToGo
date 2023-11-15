import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardContent = styled(Card.Content)``;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  background-color: ${(props) => props.theme.colors.bg.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const StarView = styled.View`
  flex-direction: row;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RatingLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RestaurantStatusView = styled.View`
  flex-direction: row;
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "295 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <Info>
          <Title>{name}</Title>
          <RatingLine>
            <StarView>
              {ratingArray.map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <SvgXml xml={star} width={20} height={20} key={index} />
              ))}
            </StarView>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <RestaurantStatusView>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

              <Spacer position="left" size="medium">
                <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
              </Spacer>
            </RestaurantStatusView>
          </RatingLine>
          <Address>{address}</Address>
        </Info>
      </RestaurantCardContent>
    </RestaurantCard>
  );
}
