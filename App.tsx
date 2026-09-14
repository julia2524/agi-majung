import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./types/design-system/theme/theme";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansKRBlack: require("./assets/fonts/NotoSansKR-Black.ttf"),
    NotoSansKRExtraBold: require("./assets/fonts/NotoSansKR-ExtraBold.ttf"),
    NotoSansKRBold: require("./assets/fonts/NotoSansKR-Bold.ttf"),
    NotoSansKRMedium: require("./assets/fonts/NotoSansKR-Medium.ttf"),
    NotoSansKRRegular: require("./assets/fonts/NotoSansKR-Regular.ttf"),
  });

  // ★ 폰트 로딩이 완료되기 전에는 아무것도 렌더링하지 않도록 예외 처리
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar hidden={false} translucent={true} />
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
