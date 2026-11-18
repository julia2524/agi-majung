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

// export const getDynamicFontFamily = (): string => {
//   const lang = i18n.locale || "en";

//   if (lang.startsWith("zh")) return "ZCOOLKuaiLe";
//   if (lang.startsWith("ko")) return "Jua";

//   return "Fredoka";
// };

// export function AppText({ style, ...props }: TextProps) {
//   const fontFamily = getDynamicFontFamily();

//   return (
//     <RNText
//       allowFontScaling={false}
//       style={[{ fontFamily }, style]}
//       {...props}
//     />
//   );
// }

// export function AppTextInput({
//   style,
//   ...props
// }: TextInputProps) {
//   const fontFamily = getDynamicFontFamily();

//   return (
//     <TextInput
//       allowFontScaling={false}
//       style={[{ fontFamily }, style]}
//       {...props}
//     />
//   );
// }
