import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
interface Props {}

const Navbar = ({}: Props): JSX.Element => {
  return (
    <View className="h-14 w-full bg-gray-800 flex items-center justify-around flex-row">
       <FontAwesome name="search" size={24} color="black" />
        <FontAwesome name="map" size={24} color="black" />
        <MaterialIcons name="explore" size={24} color="black" />
    </View>
  );
};

export default Navbar;
