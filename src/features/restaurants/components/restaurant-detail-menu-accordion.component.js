/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export default function RestaurantDetailMenuAccordion() {
  const [breakFastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const handleBreakfastPress = () => setBreakfastExpanded(!breakFastExpanded);
  const handleLunchPress = () => setLunchExpanded(!lunchExpanded);
  const handleDinnerPress = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinksPress = () => setDrinksExpanded(!drinksExpanded);

  const renderBreakfastIcon = (props) => <List.Icon {...props} icon="coffee" />;
  const renderLunchIcon = (props) => <List.Icon {...props} icon="hamburger" />;
  const renderDinnerIcon = (props) => <List.Icon {...props} icon="food-turkey" />;
  const renderDrinksIcon = (props) => <List.Icon {...props} icon="cup" />;

  return (
    <ScrollView>
      <List.Accordion
        title="Breakfast"
        left={renderBreakfastIcon}
        expanded={breakFastExpanded}
        onPress={handleBreakfastPress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        left={renderLunchIcon}
        expanded={lunchExpanded}
        onPress={handleLunchPress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Dinner"
        left={renderDinnerIcon}
        expanded={dinnerExpanded}
        onPress={handleDinnerPress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Drinks"
        left={renderDrinksIcon}
        expanded={drinksExpanded}
        onPress={handleDrinksPress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </ScrollView>
  );
}
