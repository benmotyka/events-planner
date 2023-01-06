import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as Location from "expo-location";

import "./styles";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import { FALLBACK_LATITUDE, FALLBACK_LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA, ZOOM_ANIMATION_SPEED } from "./config";


export default function App() {
  const [location, setLocation] = useState(null);
  const mapRef = useRef<MapView>();

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    return await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
  };

  useEffect(() => {
    getCurrentLocation().then((location) => {
      setLocation(location);
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        ZOOM_ANIMATION_SPEED
      );
    });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <MapView
        ref={(map) => {
          mapRef.current = map;
        }}
        zoomEnabled={true}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: FALLBACK_LATITUDE,
          longitude: FALLBACK_LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        <Marker
          identifier="test"
          coordinate={{
            latitude: FALLBACK_LATITUDE,
            longitude: FALLBACK_LONGITUDE,
          }}
          draggable={false}
          // image={{ uri: "custom_pin" }}
          title="test"
        />
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}
