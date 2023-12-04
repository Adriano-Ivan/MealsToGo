import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default function MapsScreen() {
  return <Map />;
}