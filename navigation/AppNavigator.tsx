import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import MyItemScreen from "../screens/MyItemsScreen";
import SettingScreen from "../screens/SettingsScreen";
import { RootStackParamList } from "./types";
import BabyOrderScreen from "../screens/BabyOrderScreen";
import DueDateScreen from "../screens/DueDateScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="DueDateScreen" component={DueDateScreen} />
      <Stack.Screen name="BabyOrderScreen" component={BabyOrderScreen} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="MyItemScreen"
        component={MyItemScreen}
        options={{
          animation: "fade",
        }}
      />
      {/* 📖 통합 스티커북 등록 */}
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          animation: "fade",
        }}
      />
    </Stack.Navigator>
  );
}
