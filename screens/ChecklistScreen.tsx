import React, { useEffect, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/types";
import { babyItems } from "../data/babyItems";
import BabyHeader from "../components/BabyHeader";
import { Ionicons } from "@expo/vector-icons";
import { getPriorityText } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCheckedItems, saveCheckedItems } from "../utils/storage";
import BannerAd from "../services/BannerAd";

type Props = NativeStackScreenProps<RootStackParamList, "ChecklistScreen">;

export default function ChecklistScreen({ navigation, route }: Props) {
  // theme 객체를 직접 가져옵니다.
  const theme = useTheme();
  const { categoryName, dueDate, babyOrder } = route.params;

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    const loadCheckedItems = async () => {
      const savedItems = await getCheckedItems();

      const categoryCheckedItems = savedItems[categoryName] ?? [];

      setCheckedItems(categoryCheckedItems);
    };

    loadCheckedItems();
  }, [categoryName]);
  const categoryItems = useMemo(() => {
    return babyItems.filter((item) => item.category === categoryName);
  }, [categoryName]);

  const handleToggle = async (itemId: string) => {
    const next = checkedItems.includes(itemId)
      ? checkedItems.filter((id) => id !== itemId)
      : [...checkedItems, itemId];

    setCheckedItems(next);

    const savedItems = await getCheckedItems();

    await saveCheckedItems({
      ...savedItems,
      [categoryName]: next,
    });
  };

  const handleItemPress = (itemId: string) => {
    navigation.navigate("ItemDetailScreen", { itemId });
  };

  const checkedCount = checkedItems.length;

  const totalCount = categoryItems.length;
  const progress = totalCount === 0 ? 0 : (checkedCount / totalCount) * 100;

  return (
    <Container edges={["top"]}>
      {/* 1. 상단 뒤로가기 헤더 (고정) */}
      <BabyHeader
        title={categoryName}
        onBackPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate("HomeScreen", { dueDate, babyOrder });
          }
        }}
      />

      {/* 2. 전체 스크롤 영역 */}
      <ScrollContent showsVerticalScrollIndicator={false}>
        {/* 진행률 요약 */}
        <Header>
          <ProgressText>
            {checkedCount} / {totalCount} 준비했어요
          </ProgressText>
        </Header>

        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>

        <Description>
          필요한 준비물을 확인하고{"\n"}
          준비가 끝난 물건은 체크해보세요.
        </Description>

        {/* 준비물 목록 */}
        <ItemList>
          {categoryItems.map((item) => {
            const isChecked = checkedItems.includes(item.id);

            return (
              <ItemCard
                key={item.id}
                activeOpacity={0.8}
                onPress={() => handleItemPress(item.id)}
              >
                <CheckButton
                  activeOpacity={0.7}
                  onPress={() => handleToggle(item.id)}
                >
                  <CheckCircle checked={isChecked}>
                    {isChecked && (
                      <CheckMark>
                        <Ionicons
                          name="checkmark"
                          size={20}
                          color={theme.colors.secondary}
                        />
                      </CheckMark>
                    )}
                  </CheckCircle>
                </CheckButton>

                <ItemContent>
                  <ItemName checked={isChecked}>{item.title}</ItemName>
                  <ItemMeta>
                    {getPriorityText(item.priority)}
                    {item.recommendedQuantity
                      ? ` · ${item.recommendedQuantity}`
                      : ""}
                  </ItemMeta>
                </ItemContent>

                <Arrow>
                  <Ionicons
                    name="chevron-forward"
                    size={28}
                    color={theme.colors.textSecondary}
                  />
                </Arrow>
              </ItemCard>
            );
          })}
        </ItemList>

        {categoryItems.length === 0 && (
          <EmptyContainer>
            <EmptyEmoji>🧺</EmptyEmoji>
            <EmptyText>아직 준비물이 등록되지 않았어요.</EmptyText>
          </EmptyContainer>
        )}

        <BottomSpace />
      </ScrollContent>
      {/* 하단 광고 */}
      <BottomAdContainer>
        <BannerAd />
      </BottomAdContainer>
    </Container>
  );
}

/* -----------------------------
   Styled Components
----------------------------- */

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
  padding-horizontal: 24px;
`;

const Header = styled.View`
  margin-top: 8px;
`;

const ProgressText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProgressBar = styled.View`
  width: 100%;
  height: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const ProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.Text`
  margin-top: 18px;
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ItemList = styled.View`
  margin-top: 20px;
  gap: 12px;
`;

const ItemCard = styled.TouchableOpacity`
  width: 100%;
  min-height: 72px;
  padding: 14px 16px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  flex-direction: row;
  align-items: center;
`;

const CheckButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const CheckCircle = styled.View<{ checked: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border-width: 2px;
  border-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.border};
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.card};
  align-items: center;
  justify-content: center;
`;

const CheckMark = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.card};
`;

const ItemContent = styled.View`
  flex: 1;
`;

const ItemName = styled.Text<{ checked: boolean }>`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.textSecondary : theme.colors.text};
  text-decoration-line: ${({ checked }) => (checked ? "line-through" : "none")};
`;

const ItemMeta = styled.Text`
  margin-top: -20px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Arrow = styled.Text`
  margin-left: 8px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
`;

const EmptyEmoji = styled.Text`
  font-size: 42px;
  margin-bottom: 12px;
`;

const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const BottomSpace = styled.View`
  height: 40px;
`;
const BottomAdContainer = styled.View`
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  border-top-width: 1px;
  border-top-color: #e2e8f0;
`;
