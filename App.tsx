// import React, { useCallback, useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import AppNavigator from "./navigation/AppNavigator";
// import { StatusBar } from "expo-status-bar";
// import { ThemeProvider } from "styled-components/native";
// import { theme } from "./types/design-system/theme/theme";
// import { useFonts } from "expo-font";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import MobileAds from "react-native-google-mobile-ads";
// import * as SplashScreen from "expo-splash-screen";

// // 앱이 준비될 때까지 네이티브 Splash 화면 유지
// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [navigatorReady, setNavigatorReady] = useState(false);

//   const handleNavigatorReady = useCallback(() => {
//     setNavigatorReady(true);
//   }, []);

//   useEffect(() => {
//     MobileAds()
//       .initialize()
//       .then((adapterStatuses) => {
//         console.log("AdMob SDK 초기화 완료:", adapterStatuses);
//       });
//   }, []);

//   const [fontsLoaded] = useFonts({
//     NotoSansKRBlack: require("./assets/fonts/NotoSansKR-Black.ttf"),
//     NotoSansKRExtraBold: require("./assets/fonts/NotoSansKR-ExtraBold.ttf"),
//     NotoSansKRBold: require("./assets/fonts/NotoSansKR-Bold.ttf"),
//     NotoSansKRMedium: require("./assets/fonts/NotoSansKR-Medium.ttf"),
//     NotoSansKRRegular: require("./assets/fonts/NotoSansKR-Regular.ttf"),
//     BMJUA: require("./assets/fonts/Jua-Regular.ttf"), // ★ 파일 경로와 이름을 맞춰주세요
//   });

//   useEffect(() => {
//     if (fontsLoaded && navigatorReady) {
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, navigatorReady]);

//   // 폰트 로딩이 완료되기 전에는 아무것도 렌더링하지 않음
//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       {/* <LanguageProvider> */}
//       <ThemeProvider theme={theme}>
//         <NavigationContainer>
//           <StatusBar hidden={false} translucent={true} />
//           <AppNavigator onReady={handleNavigatorReady} />
//         </NavigationContainer>
//       </ThemeProvider>
//       {/* </LanguageProvider> */}
//     </SafeAreaProvider>
//   );
// }

import React, { useCallback, useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./types/design-system/theme/theme";

import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MobileAds from "react-native-google-mobile-ads";
import * as SplashScreen from "expo-splash-screen";

// 업데이트 기능
import { useInAppUpdates } from "./hooks/useInAppUpdates";
import UpdateModal from "./components/common/UpdateModal";

// 앱이 준비될 때까지 네이티브 Splash 화면 유지
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [navigatorReady, setNavigatorReady] = useState(false);

  const handleNavigatorReady = useCallback(() => {
    setNavigatorReady(true);
  }, []);

  // AdMob 초기화
  useEffect(() => {
    MobileAds()
      .initialize()
      .then((adapterStatuses) => {
        console.log("AdMob SDK 초기화 완료:", adapterStatuses);
      });
  }, []);

  // 폰트 로딩
  const [fontsLoaded] = useFonts({
    NotoSansKRBlack: require("./assets/fonts/NotoSansKR-Black.ttf"),
    NotoSansKRExtraBold: require("./assets/fonts/NotoSansKR-ExtraBold.ttf"),
    NotoSansKRBold: require("./assets/fonts/NotoSansKR-Bold.ttf"),
    NotoSansKRMedium: require("./assets/fonts/NotoSansKR-Medium.ttf"),
    NotoSansKRRegular: require("./assets/fonts/NotoSansKR-Regular.ttf"),
    BMJUA: require("./assets/fonts/Jua-Regular.ttf"),
  });

  // 업데이트 확인 및 모달 상태 관리
  // 폰트와 네비게이션이 모두 준비된 이후에만 확인
  const { isUpdateModalVisible, isUpdating, onUpdate, onLater } =
    useInAppUpdates(fontsLoaded && navigatorReady);

  // SplashScreen 숨기기
  useEffect(() => {
    if (fontsLoaded && navigatorReady) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, navigatorReady]);

  // 폰트 로딩이 완료되기 전에는 아무것도 렌더링하지 않음
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <>
          <NavigationContainer>
            <StatusBar hidden={false} translucent={true} />
            <AppNavigator onReady={handleNavigatorReady} />
          </NavigationContainer>

          {/* 앱 업데이트 모달 */}
          <UpdateModal
            visible={isUpdateModalVisible}
            isUpdating={isUpdating}
            onUpdate={onUpdate}
            onLater={onLater}
          />
        </>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
