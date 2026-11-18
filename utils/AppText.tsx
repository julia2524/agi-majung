import React from "react";
import {
  Text as RNText,
  TextProps,
  TextInput,
  TextInputProps,
} from "react-native";

export function AppText({ style, ...props }: TextProps) {
  return <RNText allowFontScaling={false} style={style} {...props} />;
}

export function AppTextInput({ style, ...props }: TextInputProps) {
  return <TextInput allowFontScaling={false} style={style} {...props} />;
}

// import React from "react";
// import {
//   Text as RNText,
//   TextProps,
//   TextInput,
//   TextInputProps,
// } from "react-native";

// import i18n from "../i18n";

// export const getDynamicFontFamily = (
//   weight: "regular" | "medium" | "bold" | "extraBold" | "black" = "regular",
// ): string => {
//   const lang = i18n.locale || "en";

//   // 현재 프로젝트에 등록된 폰트만 사용
//   const koreanFonts = {
//     regular: "NotoSansKRRegular",
//     medium: "NotoSansKRMedium",
//     bold: "NotoSansKRBold",
//     extraBold: "NotoSansKRExtraBold",
//     black: "NotoSansKRBlack",
//   };

//   if (lang.startsWith("ko")) {
//     return koreanFonts[weight];
//   }

//   // 다른 언어는 현재 등록된 기본 폰트 사용
//   // 추후 Noto Sans 언어별 폰트를 등록하면 교체
//   return "NotoSansKRRegular";
// };

// export function AppText({ style, ...props }: TextProps) {
//   return (
//     <RNText
//       allowFontScaling={false}
//       style={[{ fontFamily: getDynamicFontFamily() }, style]}
//       {...props}
//     />
//   );
// }

// export function AppTextInput({ style, ...props }: TextInputProps) {
//   return (
//     <TextInput
//       allowFontScaling={false}
//       style={[{ fontFamily: getDynamicFontFamily() }, style]}
//       {...props}
//     />
//   );
// }
