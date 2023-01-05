import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import "./styles";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const latitude = 50.0412;
const longitude = 21.9991;
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          identifier="test"
          coordinate={{ latitude, longitude }}
          draggable={false}
          // image={{ uri: "custom_pin" }}
          title="test"
        />
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}
