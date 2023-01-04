import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StatusBar as NativeStatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
    useFonts,
    Inter_200ExtraLight,
    Inter_300Light,
} from "@expo-google-fonts/inter";
import { AkayaKanadaka_400Regular } from "@expo-google-fonts/akaya-kanadaka";
import HomeScreen from "screens/home";
import { RootStackParamList } from "interfaces/RootStackParamList";
import "config/i18n";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_200ExtraLight,
        Inter_300Light,
        AkayaKanadaka_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <SafeAreaView>
                <View style={{ paddingTop: NativeStatusBar.currentHeight }}>
                    <StatusBar />
                </View>
            </SafeAreaView>
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
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
