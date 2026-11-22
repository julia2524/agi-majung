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
