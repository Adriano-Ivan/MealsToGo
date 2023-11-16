import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" && `padding-top:${StatusBar.currentHeight}px`};
`;
