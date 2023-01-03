import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import { RootStackParamList } from "interfaces/RootStackParamList";

type HomeProps = NativeStackScreenProps<RootStackParamList, "home">;

const HomeScreen = ({ navigation }: HomeProps): JSX.Element => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>test</Text>
        </View>
    );
};

export default HomeScreen;
