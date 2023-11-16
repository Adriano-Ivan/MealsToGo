/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utilities/safe-area.component";
import { theme } from "./src/infrastructure/theme";

function Maps() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Maps!</Text>
      </View>
    </SafeArea>
  );
}

function Configs() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const defineTabOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Restaurants") {
      iconName = "restaurant";
    } else if (route.name === "Maps") {
      iconName = "map";
    } else if (route.name === "Configs") {
      iconName = "settings";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  headerShown: false,
});

function Tabs() {
  return (
    <Tab.Navigator screenOptions={defineTabOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Configs" component={Configs} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Tabs />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
}
