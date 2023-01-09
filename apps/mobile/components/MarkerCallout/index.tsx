import React from "react";
import { Text, View, Image } from "react-native";
import { Callout } from "react-native-maps";
import Button from "../Button";
import { trpc } from "../../api/client";

interface Props {
  title: string;
  description: string;
  date: Date;
  activeUsers: number;
  usersLimit?: number;
}

const MarkerCallout = ({
  title,
  description,
  date,
  activeUsers,
  usersLimit,
}: Props): JSX.Element => {
  
  return (
    <Callout className="w-60 py-2 flex flex-col items-center justify-center">
      <Text className="font-bold text-left">{title}</Text>
      <Text className="my-4 text-left">{description}</Text>
      <View className="flex flex-row justify-between items-center w-full mb-4">
        <View className="flex flex-row">
          <Image
            source={require("../../assets/clock.png")}
            className="w-4 h-4 mr-1"
          />
          {date ? <Text>{date}</Text> : null}
        </View>
        <View className="flex flex-row">
          <Text>
            {activeUsers}/{usersLimit ? usersLimit : "∞"}
          </Text>
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
