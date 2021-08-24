import { mockImages, mocks } from "../services/restaurants/mock/index";
import camelize from "camelize";
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSE_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

restaurantRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    // console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
