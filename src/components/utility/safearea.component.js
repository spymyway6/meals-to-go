import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
