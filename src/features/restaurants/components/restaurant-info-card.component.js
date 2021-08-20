import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: #fff;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: #fff;
`;

const CardTitle = styled(Text)`
  padding-top: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "TaskFunnels",
    icon,
    photos = [
      "https://coloradoskyway.com/wp-content/uploads/2020/12/Chipeta-Exterior-LowRes.jpg",
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <CardTitle>{name}</CardTitle>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};
