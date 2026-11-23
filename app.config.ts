import "dotenv/config";

import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: "아기마중",
  slug: "agi_Ma-jung",
  version: "1.0.1",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,

  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#FFF9F5",
  },

  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.julia2524.agi-Majung",
  },

  android: {
    versionCode: 7,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFF9F5",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: "com.julia2524.agi_Majung",
  },

  web: {
    favicon: "./assets/favicon.png",
  },

  plugins: [
    "./plugins/withOptionalPortraitFeature",
    "expo-localization",
    "expo-font",
    "@react-native-community/datetimepicker",

    [
      "react-native-google-mobile-ads",
      {
        androidAppId: process.env.EXPO_PUBLIC_ADMOB_APP_ID,
        iosAppId: "ca-app-pub-3940256099942544~1458002511",
      },
    ],

    [
      "expo-build-properties",
      {
        android: {
          enableMinifyInReleaseBuilds: true,
          enableShrinkResourcesInReleaseBuilds: false,
          extraProguardRules: `
-keep class * extends androidx.room.RoomDatabase { <init>(); }
-keep class * extends androidx.work.InputMerger { <init>(); }
          `,
        },
      },
    ],
  ],

  extra: {
    eas: {
      projectId: "f1d084b3-4d08-4324-955b-7a72dc73da91",
    },
  },
});
