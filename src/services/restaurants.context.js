import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const retrieveRestaurants = () => {
    setIsloading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsloading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsloading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
