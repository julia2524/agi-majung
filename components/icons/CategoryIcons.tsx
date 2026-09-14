import React from "react";
import Svg, { Circle, Path, Rect, G } from "react-native-svg";

interface IconProps {
  size?: number;
}

// 1. 출산/병원 (핑크)
export const HospitalIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#FCE4EC" />
    <Rect x="16" y="19" width="16" height="13" rx="3" fill="#F48FB1" />
    <Path
      d="M20 19V17C20 15.3431 21.3431 14 23 14H25C26.6569 14 28 15.3431 28 17V19"
      stroke="#E91E63"
      strokeWidth="2"
    />
    <Path
      d="M24 22V29M20.5 25.5H27.5"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </Svg>
);

// 2. 수면 (노랑)
export const SleepIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#FFF8E1" />
    <Path
      d="M27 15C21.4772 15 17 19.4772 17 25C17 30.5228 21.4772 35 27 35C29.2155 35 31.2581 34.2818 32.9152 33.069C28.2721 32.8872 24.5 29.0838 24.5 24.4167C24.5 19.7495 28.2721 15.9461 32.9152 15.7643C31.2581 14.5515 29.2155 15 27 15Z"
      fill="#FFE082"
      stroke="#FFB300"
      strokeWidth="1.5"
    />
  </Svg>
);

// 3. 목욕 (민트/블루)
export const BathIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#E1F5FE" />
    <Path
      d="M15 24C15 21.7909 16.7909 20 19 20H29C31.2091 20 33 21.7909 33 24V26C33 28.7614 30.7614 31 28 31H20C17.2386 31 15 28.7614 15 26V24Z"
      fill="#81D4FA"
      stroke="#0288D1"
      strokeWidth="1.5"
    />
    <Path
      d="M18 31L17 34M30 31L31 34"
      stroke="#0288D1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Circle cx="22" cy="16" r="1.5" fill="#B3E5FC" />
    <Circle cx="26" cy="14" r="2" fill="#B3E5FC" />
  </Svg>
);

// 4. 수유 (주황/옐로우)
export const MilkIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#FFF3E0" />
    <Rect
      x="19"
      y="21"
      width="10"
      height="12"
      rx="2"
      fill="#FFE0B2"
      stroke="#FB8C00"
      strokeWidth="1.5"
    />
    <Path
      d="M21 21V18H27V21"
      fill="#FFE0B2"
      stroke="#FB8C00"
      strokeWidth="1.5"
    />
    <Path
      d="M22 18V16C22 15.4477 22.4477 15 23 15H25C25.5523 15 26 15.4477 26 16V18"
      fill="#FFB74D"
    />
  </Svg>
);

// 5. 의류 (라벤더)
export const ClothesIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#F3E5F5" />
    <Path
      d="M18 17L15 21L18 23V32H30V23L33 21L30 17C28 18.5 26 19 24 19C22 19 20 18.5 18 17Z"
      fill="#E1BEE7"
      stroke="#8E24AA"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </Svg>
);

// 6. 위생/세탁 (연두)
export const LaundryIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#E8F5E9" />
    <Path d="M17 21L19 16H29L31 21" stroke="#43A047" strokeWidth="1.5" />
    <Rect
      x="16"
      y="21"
      width="16"
      height="11"
      rx="2"
      fill="#C8E6C9"
      stroke="#43A047"
      strokeWidth="1.5"
    />
    <Path
      d="M21 16V19M27 16V19"
      stroke="#43A047"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

// 7. 외출 (퍼플/보라)
export const BagIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#EDE7F6" />
    <Rect
      x="16"
      y="22"
      width="16"
      height="11"
      rx="3"
      fill="#D1C4E9"
      stroke="#5E35B1"
      strokeWidth="1.5"
    />
    <Path
      d="M20 22V18C20 16.3431 21.3431 15 23 15H25C26.6569 15 28 16.3431 28 18V22"
      stroke="#5E35B1"
      strokeWidth="1.5"
    />
  </Svg>
);

// 8. 산모 (코랄/핑크)
export const MomIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#FBE9E7" />
    <G fill="#FFAB91">
      <Circle cx="24" cy="21" r="3" />
      <Circle cx="20" cy="24" r="3" />
      <Circle cx="28" cy="24" r="3" />
      <Circle cx="22" cy="28" r="3" />
      <Circle cx="26" cy="28" r="3" />
    </G>
    <Circle cx="24" cy="24.5" r="2.5" fill="#FF5722" />
  </Svg>
);

// 9. 생활 (베이지/워밀)
export const HomeIcon = ({ size = 48 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Circle cx="24" cy="24" r="22" fill="#EFEBE9" />
    <Path
      d="M18 22L24 17L30 22V31H18V22Z"
      fill="#D7CCC8"
      stroke="#6D4C41"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <Rect x="22" y="25" width="4" height="6" rx="1" fill="#6D4C41" />
  </Svg>
);
