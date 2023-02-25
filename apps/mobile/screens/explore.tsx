import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

import { trpc } from "../api/client";
import { RootStackParamList } from "../App";
import Navbar from "../components/Navbar";

type Props = NativeStackScreenProps<RootStackParamList, "explore">;

const ExploreScreen = ({ navigation }: Props): JSX.Element => {
  return (
    <>
      <View className="w-full h-full flex-1 items-center justify-center">
        <Text>Explore</Text>
      </View>
      <Navbar navigation={navigation} activeScreen="explore" />
    </>
  );
};

export default ExploreScreen;
