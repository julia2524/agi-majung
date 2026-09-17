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

const Stack = createNativeStackNavigator<RootStackParamList>();
interface AppNavigatorProps {
  onReady: () => void;
}

export default function AppNavigator({ onReady }: AppNavigatorProps) {
  const [initialRoute, setInitialRoute] = useState<
    "OnboardingScreen" | "HomeScreen" | null
  >(null);

  const [babyProfile, setBabyProfile] = useState<{
    dueDate: string;
    babyOrder: "first" | "secondOrMore";
  } | null>(null);
  // ========================================
  // AsyncStorage 확인
  // ========================================

  useEffect(() => {
    const checkBabyProfile = async () => {
      try {
        const profile = await getBabyProfile();

        if (profile) {
          // 기존 사용자
          setBabyProfile(profile);
          setInitialRoute("HomeScreen");
        } else {
          // 처음 사용하는 사용자
          setInitialRoute("OnboardingScreen");
        }
      } catch (error) {
        console.error("아기 정보 확인 실패:", error);

        // 문제가 생겨도 Onboarding으로 시작
        setInitialRoute("OnboardingScreen");
      }
    };

    checkBabyProfile();
  }, []);

  // ========================================
  // 첫 화면 결정이 끝나면
  // App에게 "이제 준비됐어" 전달
  // ========================================

  useEffect(() => {
    if (initialRoute) {
      onReady();
    }
  }, [initialRoute, onReady]);
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
