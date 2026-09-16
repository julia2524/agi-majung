import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import MyItemScreen from "../screens/MyItemsScreen";
import SettingScreen from "../screens/SettingsScreen";
import BabyOrderScreen from "../screens/BabyOrderScreen";
import DueDateScreen from "../screens/DueDateScreen";
import ChecklistScreen from "../screens/ChecklistScreen";

import { RootStackParamList } from "./types";
import { getBabyProfile } from "../storage/storage";
import LoadingScreen from "../screens/LoadingScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState<
    "OnboardingScreen" | "HomeScreen" | null
  >(null);

  const [babyProfile, setBabyProfile] = useState<{
    dueDate: string;
    babyOrder: "first" | "secondOrMore";
  } | null>(null);

  useEffect(() => {
    const checkBabyProfile = async () => {
      const profile = await getBabyProfile();

      if (profile) {
        setBabyProfile(profile);
        setInitialRoute("HomeScreen");
      } else {
        setInitialRoute("OnboardingScreen");
      }
    };

    checkBabyProfile();
  }, []);

  // AsyncStorage 확인하는 동안 잠깐 대기
  if (!initialRoute) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
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
        initialParams={
          babyProfile
            ? {
                dueDate: babyProfile.dueDate,
                babyOrder: babyProfile.babyOrder,
              }
            : undefined
        }
      />

      <Stack.Screen
        name="MyItemScreen"
        component={MyItemScreen}
        options={{
          animation: "fade",
        }}
      />

      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          animation: "fade",
        }}
      />

      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={{
          title: "준비물 상세",
          animation: "fade",
        }}
      />

      <Stack.Screen
        name="ChecklistScreen"
        component={ChecklistScreen}
        options={{
          title: "준비물",
          animation: "fade",
        }}
      />
    </Stack.Navigator>
  );
}
