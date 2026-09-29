import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export default function TopButton() {
  const scrollRef = useRef<ScrollView>(null);
  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  return (
    <TopButtonContainer activeOpacity={0.8} onPress={handleScrollToTop}>
      <Ionicons name="arrow-up" size={20} color="#FFFFFF" />
    </TopButtonContainer>
  );
}

const TopButtonContainer = styled.TouchableOpacity`
  position: absolute;

  right: 20px;
  bottom: 75px;

  width: 44px;
  height: 44px;

  border-radius: 22px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-radius: 6px;
  shadow-offset: 0px 3px;
`;
