import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const space = theme.space[sizeIndex];
  return `${property}: ${space}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export function Spacer({ position, size, children }) {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
}

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
