import camelize from "camelize";
import { mockImages, mocks } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => new Promise((resolve, reject) => {
  const mock = mocks[location];
  if (!mock) {
    reject(new Error("not found"));
  } else {
    resolve(mock);
  }
});

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      (p) => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
    );
    return {
      ...restaurant,
      isOpenNow: !!(restaurant.opening_hours && restaurant.opening_hours.open_now),
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    // console.log(transformedResponse);
  })
  .catch((error) => console.log(error));
