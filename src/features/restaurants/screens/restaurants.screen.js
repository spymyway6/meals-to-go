import React from "react";
import styled from "styled-components/native";
import { StyleSheet, StatusBar, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

/* Styles*/
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const SearchContainer = styled(View)`
  padding: 16px;
`;
const RestListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;
/* Close Styles*/

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestListContainer>
      <RestaurantInfoCard />
    </RestListContainer>
  </SafeArea>
);
