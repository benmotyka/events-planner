import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StatusBar as NativeStatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { RootSiblingParent } from "react-native-root-siblings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
    useFonts,
    Inter_200ExtraLight,
    Inter_300Light,
} from "@expo-google-fonts/inter";
import { AkayaKanadaka_400Regular } from "@expo-google-fonts/akaya-kanadaka";
import * as Sentry from "sentry-expo";
import { ThemeProvider } from "styled-components/native";

import HomeScreen from "screens/home";
import { darkTheme, lightTheme } from "styles/theme";
import "config/i18n";

Sentry.init({
    dsn: sentryDsn,
    enableInExpoDevelopment: true,
    debug: true,
});

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_200ExtraLight,
        Inter_300Light,
        AkayaKanadaka_400Regular,
    });

    const appTheme = useAppConfigStore.persistent((state) => state.theme);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        
    );
}
