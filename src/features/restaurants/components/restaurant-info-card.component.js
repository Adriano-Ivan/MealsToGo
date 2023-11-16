import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  RestaurantStatusView,
  Info,
  RatingLine,
  StarView,
  RestaurantCard,
  RestaurantCardContent,
  RestaurantCardCover,
  Address,
} from "./restaurant-info-card.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <Info>
          <Text variant="label">{name}</Text>
          <RatingLine>
            <StarView>
              {ratingArray.map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <SvgXml xml={star} width={20} height={20} key={index} />
              ))}
            </StarView>
            {isClosedTemporarily && <Text variant="caption">CLOSED TEMPORARILY</Text>}
            <RestaurantStatusView>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </RestaurantStatusView>
          </RatingLine>
          <Address>{address}</Address>
        </Info>
      </RestaurantCardContent>
    </RestaurantCard>
  );
}
