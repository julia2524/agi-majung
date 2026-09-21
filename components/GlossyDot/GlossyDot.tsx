import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

// 💡 1. 객체 끝에 `as const`를 붙여 colors 배열을 읽기 전용 튜플 타입으로 고정합니다.
const GLOSS_THEMES = {
  white: {
    colors: ["#FFFFFF", "#F3F0EE", "#D8D1CC"],
    shadow: "rgba(148, 137, 130, 0.28)",
  },

  yellow: {
    colors: ["#FFF3B0", "#F9D76E", "#E8B84B"],
    shadow: "rgba(232, 184, 75, 0.35)",
  },

  purple: {
    colors: ["#E9D9F5", "#C9A8DF", "#A97BC7"],
    shadow: "rgba(169, 123, 199, 0.35)",
  },

  blue: {
    colors: ["#D9F0FA", "#9DD5E8", "#68B8D4"],
    shadow: "rgba(104, 184, 212, 0.35)",
  },

  green: {
    colors: ["#D9F2E5", "#A8DCC2", "#72C19A"],
    shadow: "rgba(114, 193, 154, 0.35)",
  },
} as const;

interface GlossyDotProps {
  type: "white" | "yellow" | "purple" | "blue" | "green";
  size?: number;
}

export function GlossyDot({ type, size = 16 }: GlossyDotProps) {
  const theme = GLOSS_THEMES[type];

  return (
    <DotContainer size={size} shadowColor={theme.shadow}>
      <StyledGradient
        colors={theme.colors}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        size={size}
      >
        <Highlight size={size} />
      </StyledGradient>
    </DotContainer>
  );
}

/* -----------------------------
   Styled Components Props 타입
----------------------------- */

interface DotContainerProps {
  size: number;
  shadowColor: string;
}

interface SizeProps {
  size: number;
}

const DotContainer = styled.View<DotContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  justify-content: center;
  align-items: center;

  shadow-color: ${(props) => props.shadowColor};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 4px;
  elevation: 4;
`;

const StyledGradient = styled(LinearGradient)<SizeProps>`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.size / 2}px;
  position: relative;
  overflow: hidden;
`;

const Highlight = styled.View<SizeProps>`
  position: absolute;
  top: 15%;
  left: 20%;
  width: ${(props) => props.size * 0.45}px;
  height: ${(props) => props.size * 0.25}px;
  border-radius: ${(props) => props.size * 0.2}px;
  background-color: rgba(255, 255, 255, 0.65);
`;
