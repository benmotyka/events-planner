import React from "react";
import { Text, View, Image } from "react-native";
import { Callout } from "react-native-maps";
import Button from "../Button";
import { trpc } from "../../api/client";

const MarkerCallout = (): JSX.Element => {
  const user = trpc.userById.useQuery("1");

  console.log(user);
  console.log("WAWA");

  return (
    <Callout className="w-60 py-2 flex flex-col items-center justify-center">
      <Text className="font-bold text-left">
        Event Name: Andrzej Duda w Rzeszowie
      </Text>
      <Text className="my-4 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Text>
      <View className="flex flex-row justify-between items-center w-full mb-4">
        <View className="flex flex-row">
          <Image
            source={require("../../assets/clock.png")}
            className="w-4 h-4 mr-1"
          />
          <Text>19:00 08.01.2023</Text>
        </View>
        <View className="flex flex-row">
          <Text>20/40</Text>
          <Image
            source={require("../../assets/participants.png")}
            className="w-6 h-4 ml-1"
          />
        </View>
      </View>
      <Button title="Join now" />
    </Callout>
  );
};

export default MarkerCallout;
