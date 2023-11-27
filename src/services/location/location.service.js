import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => new Promise((resolve, reject) => {
  const locationMock = locations[searchTerm];
  if (!locationMock) {
    reject(new Error("not found"));
  }

  resolve(locationMock);
});

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, long } = geometry.location;

  return { lat, long };
};
