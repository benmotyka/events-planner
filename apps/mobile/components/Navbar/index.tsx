import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Navigation } from "../../interfaces/Navigation";
import { RootStackParamList } from "../../App";

interface Props extends Navigation {
  activeScreen: keyof RootStackParamList;
}

const Navbar = ({ navigation, activeScreen }: Props): JSX.Element => {
  return (
    <View className="h-14 w-full bg-gray-800 flex items-center justify-around flex-row">
      <FontAwesome name="search" size={24} color="black" />
      <FontAwesome
        name="map"
        size={24}
        color={activeScreen === "home" ? "white" : "black"}
        onPress={() => {
          navigation.navigate("home");
        }}
      />
      <MaterialIcons
        name="explore"
        size={24}
        color={activeScreen === "explore" ? "white" : "black"}
        onPress={() => {
          navigation.navigate("explore");
        }}
      />
    </View>
  );
};

export default Navbar;
