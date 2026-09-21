import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

// 💡 1. 객체 끝에 `as const`를 붙여 colors 배열을 읽기 전용 튜플 타입으로 고정합니다.
const GLOSS_THEMES = {
  yellow: {
    colors: ["#FFE27A", "#F59E0B", "#D97706"],
    shadow: "rgba(245, 158, 11, 0.4)",
  },
  green: {
    colors: ["#A7F3D0", "#10B981", "#059669"],
    shadow: "rgba(16, 185, 129, 0.4)",
  },
  blue: {
    colors: ["#BAE6FD", "#0EA5E9", "#0284C7"],
    shadow: "rgba(14, 165, 233, 0.4)",
  },
} as const;

interface GlossyDotProps {
  type: "yellow" | "green" | "blue";
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
