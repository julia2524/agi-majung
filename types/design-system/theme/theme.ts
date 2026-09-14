export const theme = {
  colors: {
    // Background & Surface
    background: "#FFF9F5",
    card: "#FFFFFF",

    // Brand Colors
    primary: "#EFA7A7", // 기본 브랜드 핑크
    primaryLight: "#FDF0F0", // ★ 카드/버튼 선택 시 배경용 (투명하고 연한 핑크)
    primaryDark: "#D88B8B", // ★ 텍스트 강조 및 활성화 텍스트용 진한 핑크
    secondary: "#F3E4D3",

    // Accent Pastels
    mint: "#BFE3D0",
    yellow: "#F8D98B",
    lavender: "#DDD2EA",

    // Text & Line
    text: "#4A403C",
    textSecondary: "#8A7D77",
    border: "#EDE3DE",
    borderActive: "#EFA7A7", // ★ 선택된 테두리 (primary)

    // ★ 상태 배지 전용 (v2 명도 대비 가이드 반영)
    badge: {
      needBg: "#EFA7A7", // 꼭 준비 (배경)
      needText: "#7A2E2E", // 꼭 준비 (글자)
      handyBg: "#F3D58A", // 있으면 편함 (배경)
      handyText: "#6B4E14", // 있으면 편함 (글자)
      laterBg: "#BFDCCB", // 나중에 준비 (배경)
      laterText: "#2F5240", // 나중에 준비 (글자)
      avoidBg: "#DDD2EA", // 미리 사지 마 (배경)
      avoidText: "#4A2E5C", // 미리 사지 마 (글자)
      reuseBg: "#D6E8F5", // 재사용 가능 (배경)
      reuseText: "#1F4A63", // 재사용 가능 (글자)
    },
  },

  radius: {
    sm: 12,
    md: 20,
    lg: 24,
    pill: 30,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  fontFamily: {
    regular: "NotoSansKRRegular",
    medium: "NotoSansKRMedium",
    bold: "NotoSansKRBold",
    extraBold: "NotoSansKRExtraBold", // 추가
    black: "NotoSansKRBlack", // 가장 굵음 ★
  },

  typography: {
    hero: 48, // 가장 강조되는 타이틀 ★
    display: 40, // 대형 타이틀 ★
    giant: 32, // 기존 최고 크기
    title: 28,
    heading: 24,
    subheading: 20,
    body: 16,
    small: 14,
    tiny: 12,
    level: 26,
    button: 18,
  },
};
