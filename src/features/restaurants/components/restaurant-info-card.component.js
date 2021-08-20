import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardTitle = styled(Text)`
  padding-top: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const CardAddress = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.medium};
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
        <CardAddress>{address}</CardAddress>
      </Card.Content>
    </Card>
  );
};
