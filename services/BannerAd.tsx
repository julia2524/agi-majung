import React from "react";
import { View } from "react-native";
import {
  BannerAd as GoogleBannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export default function BannerAd() {
  const adUnitId = __DEV__
    ? "ca-app-pub-3940256099942544/9214589741" // 개발용 테스트 광고
    : "ca-app-pub-5145202325745375/9440073957"; // 실제 광고
  console.log("광고 Unit ID:", adUnitId);

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GoogleBannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        onAdLoaded={() => {
          console.log("✅ 광고 로드 성공");
        }}
        onAdFailedToLoad={(error) => {
          console.log("❌ 광고 로드 실패:", error);
        }}
      />
    </View>
  );
}
