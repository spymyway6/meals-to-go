import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safearea.component";
import { RestaurantContext } from "../../../services/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants, onSearchResto } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);
  console.log(location, 'location resto');
  const latLng = `${location?.lat},${location?.lng}`;
  useEffect(() => {
    onSearchResto(latLng);
  }, [latLng]);


  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={isLoading ? [] : restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
