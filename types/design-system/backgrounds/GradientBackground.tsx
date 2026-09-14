import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { theme } from "../theme/theme";

export default function GradientBackground() {
  return (
    <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
      <Defs>
        <LinearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
          {/* 상단: 따뜻한 크림/아이보리 배경색 */}
          <Stop offset="0" stopColor={theme.colors.background} />
          {/* 하단: 베이지 Accent 컬러로 따뜻한 감성 연출 */}
          <Stop offset="1" stopColor={theme.colors.secondary} />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#skyGradient)" />
    </Svg>
  );
}
