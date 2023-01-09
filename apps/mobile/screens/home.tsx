import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import {
  FALLBACK_LATITUDE,
  FALLBACK_LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  ZOOM_ANIMATION_SPEED,
} from "../config";
import MarkerCallout from "../components/MarkerCallout";
import { trpc } from "../api/client";

const HomeScreen = (): JSX.Element => {
  const [location, setLocation] = useState(null);
  const mapRef = useRef<MapView>();
  const { data: events } = trpc.eventList.useQuery();

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
    <View className="w-full h-full flex-1 items-center justify-center">
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
        {events
          ? events.map((event) => (
              <Marker
                key={event.id}
                identifier={event.id}
                coordinate={{
                  latitude: event.latitude,
                  longitude: event.longitude,
                }}
                draggable={false}
                title={event.title}
              >
                <Image
                  source={require("../assets/location-icon.png")}
                  className="w-[30] h-10"
                />
                <MarkerCallout
                  date={event.date}
                  description={event.description}
                  title={event.title}
                  usersLimit={event.usersLimit}
                  activeUsers={event.activeUsers}
                />
              </Marker>
            ))
          : null}
      </MapView>
    </View>
  );
};

export default HomeScreen;
