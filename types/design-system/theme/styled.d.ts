import "styled-components/native";

// 방금 만든 theme 객체의 구조 타입 정의
declare module "styled-components/native" {
  export interface DefaultTheme {
    fontFamily: {
      regular: string;
      medium: string;
      bold: string;
      extraBold: string;
      black: string;
    };
    typography: {
      hero: number;
      display: number;
      giant: number;
      title: number;
      heading: number;
      subheading: number;
      body: number;
      small: number;
      tiny: number;
      level: number;
      button: number;
    };
    colors: {
      // Background & Surface
      background: string;
      card: string;

      // Brand Colors
      primary: string;
      secondary: string;
      primaryLight: string;
      primaryDark: string;

      // Accent Pastels
      mint: string;
      yellow: string;
      lavender: string;

      // Text & Line
      text: string;
      textSecondary: string;
      border: string;
      borderActive: string;

      // ★ 상태 배지 전용 (v2 명도 대비 가이드 반영)
      badge: {
        needBg: string; // 꼭 준비 (배경)
        needText: string; // 꼭 준비 (글자)
        handyBg: string; // 있으면 편함 (배경)
        handyText: string; // 있으면 편함 (글자)
        laterBg: string; // 나중에 준비 (배경)
        laterText: string; // 나중에 준비 (글자)
        avoidBg: string; // 미리 사지 마 (배경)
        avoidText: string; // 미리 사지 마 (글자)
        reuseBg: string; // 재사용 가능 (배경)
        reuseText: string; // 재사용 가능 (글자)
      };
    };
    radius: {
      sm: number;
      md: number;
      lg: number;
      pill: number;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}
