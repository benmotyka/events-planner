import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import * as Location from "expo-location";
import { trpc } from "./api/client";

import "./styles";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import {
  FALLBACK_LATITUDE,
  FALLBACK_LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  ZOOM_ANIMATION_SPEED,
} from "./config";
import MarkerCallout from "./components/MarkerCallout";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: "http://192.168.1.2:5000/trpc" })],
    })
  );
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
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <View className="flex-1 items-center justify-center bg-white">
          <MapView
        ref={(map) => {
          mapRef.current = map;
        }}
        zoomEnabled={true}
        className="w-full h-full"
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
          title="test"
        >
          <Image
            source={require("./assets/location-icon.png")}
            className="w-[30] h-10"
          />
          <MarkerCallout />
        </Marker>
      </MapView>
          <StatusBar style="auto" />
        </View>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
