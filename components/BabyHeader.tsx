import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

export default function Header({
  title,
  onBackPress,
  rightComponent,
}: HeaderProps) {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <TopNavigation>
      <BackButton
        activeOpacity={0.5}
        onPress={handleBack}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        {/* pointerEvents를 주지 않아도 아이콘은 터치 간섭을 일으키지 않습니다 */}
        <Ionicons name="chevron-back" size={28} color="#111111" />
      </BackButton>

      {title ? <NavTitle numberOfLines={1}>{title}</NavTitle> : <EmptySpace />}

      <RightArea>{rightComponent ? rightComponent : <EmptySpace />}</RightArea>
    </TopNavigation>
  );
}

const TopNavigation = styled.View`
  height: 76px;
  padding-horizontal: 16px;
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 100;
`;

const BackButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  margin-left: -8px; /* 좌측 여백 시각적 보정 */
`;

const NavTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const EmptySpace = styled.View`
  width: 44px;
`;

const RightArea = styled.View`
  width: 44px;
  align-items: flex-end;
  justify-content: center;
`;
