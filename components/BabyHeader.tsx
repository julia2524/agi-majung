import React from "react";
import styled, { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

export default function BabyHeader({
  title,
  onBackPress,
  rightComponent,
}: HeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <TopNavigation>
      {/* 1. 좌측 뒤로가기 버튼 */}
      <LeftArea>
        <BackButton
          activeOpacity={0.5}
          onPress={handleBack}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Ionicons name="chevron-back" size={26} color={theme.colors.text} />
        </BackButton>
      </LeftArea>

      {/* 2. 중앙 타이틀 */}
      <TitleWrapper pointerEvents="none">
        {title ? <NavTitle numberOfLines={1}>{title}</NavTitle> : null}
      </TitleWrapper>

      {/* 3. 우측 커스텀 영역 */}
      <RightArea>{rightComponent ? rightComponent : <EmptySpace />}</RightArea>
    </TopNavigation>
  );
}

/* -----------------------------
   Styled Components
----------------------------- */

const TopNavigation = styled.View`
  height: 44px;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 100;
`;

const LeftArea = styled.View`
  width: 36px;
  height: 44px;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
`;

/* 36x36 크기의 정정사각형 안에서 아이콘 정중앙 배치 */
const BackButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.View`
  position: absolute;
  left: 52px;
  right: 52px;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const NavTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  include-font-padding: false; /* 안드로이드 폰트 수직 쏠림 방지 */
`;

const RightArea = styled.View`
  width: 36px;
  height: 44px;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
`;

const EmptySpace = styled.View`
  width: 36px;
`;
