import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { trpc } from "./api/client";

import "./styles";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";
import HomeScreen from "./screens/home";
import SuperJSON from "superjson";
import ExploreScreen from "./screens/explore";

export type RootStackParamList = {
  home: undefined;
  explore: undefined;
};

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: "http://192.168.1.107:5678/trpc" })],
      transformer: SuperJSON,
    })
  );

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{ gestureEnabled: false }}
            />
             <Stack.Screen
              name="explore"
              component={ExploreScreen}
              options={{ gestureEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
