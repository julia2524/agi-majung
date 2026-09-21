import React, { useEffect, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigation/types";
import { babyItems } from "../data/babyItems";
import BabyHeader from "../components/BabyHeader";
import { getCheckedItems, saveCheckedItems } from "../storage/storage";
import BannerAd from "../services/BannerAd";
import { BabyItem } from "../types/baby";
import { getItemTimingStatus, ItemTimingStatus } from "../utils/itemTiming";
import { GlossyDot } from "../components/GlossyDot/GlossyDot";

type Props = NativeStackScreenProps<RootStackParamList, "ChecklistScreen">;
type FilterType = "ALL" | "NOW" | "UPCOMING";

export default function ChecklistScreen({ navigation, route }: Props) {
  const theme = useTheme();
  const { categoryId, categoryName, dueDate, babyOrder, initialFilter } =
    route.params;

  const [checkedItems, setCheckedItems] = useState<(string | number)[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(
    initialFilter || "ALL",
  );

  // 1. 현재 주수 계산
  const currentWeek = useMemo(() => {
    const today = new Date();
    const due = new Date(dueDate);

    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    const difference = due.getTime() - today.getTime();
    const diffDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
    const passedDays = 280 - diffDays;
    return Math.max(0, Math.floor(passedDays / 7));
  }, [dueDate]);

  // 2. 저장된 체크 데이터 로드

  useEffect(() => {
    const loadCheckedItems = async () => {
      const savedItems = await getCheckedItems();

      // 전체 보기
      // → 모든 실제 카테고리의 체크 상태를 하나로 합친다.
      if (categoryId === "all") {
        const allCheckedItems = [...new Set(Object.values(savedItems).flat())];

        setCheckedItems(allCheckedItems);
        return;
      }

      // 일반 카테고리 보기
      // → 해당 카테고리의 체크 상태만 가져온다.
      const categoryCheckedItems = savedItems[categoryName] ?? [];

      setCheckedItems(categoryCheckedItems);
    };

    loadCheckedItems();
  }, [categoryId, categoryName]);

  // 4. 필터링 및 정렬 로직 (미체크 우선 -> 시기 우선 -> 우선순위 높은 순)
  const filteredCategoryItems = useMemo(() => {
    // 카테고리 필터링 ("all" 카테고리면 전체 데이터 사용)
    let items =
      categoryId === "all"
        ? babyItems
        : babyItems.filter((item) => item.category === categoryName);

    // 시기 상태별 필터링
    if (selectedFilter !== "ALL") {
      items = items.filter(
        (item) => getItemTimingStatus(item, currentWeek) === selectedFilter,
      );
    }

    // 정렬
    return items.sort((a, b) => {
      const aChecked = checkedItems.includes(a.id);
      const bChecked = checkedItems.includes(b.id);

      // 1. 미체크 항목 우선
      if (aChecked !== bChecked) {
        return aChecked ? 1 : -1;
      }

      // 2. 우선순위 높은 순 (3 -> 2 -> 1)
      return b.priority - a.priority;
    });
  }, [categoryId, categoryName, checkedItems, selectedFilter, currentWeek]);

  // 체크 토글
  // 체크 토글
  const handleToggle = async (itemId: string | number) => {
    const savedItems = await getCheckedItems();

    // ==================================================
    // 전체 보기
    // ==================================================
    // "지금 준비할 품목", "아직 괜찮은 품목"은
    // 실제 카테고리가 아니므로 저장 키로 사용하지 않는다.
    // 체크한 아이템의 실제 category에 저장한다.
    // ==================================================
    if (categoryId === "all") {
      const targetItem = babyItems.find((item) => item.id === itemId);

      if (!targetItem) {
        return;
      }

      const categoryKey = targetItem.category;
      const categoryItems = savedItems[categoryKey] ?? [];

      const isChecked = categoryItems.includes(itemId);

      const updatedCategoryItems = isChecked
        ? categoryItems.filter((id) => id !== itemId)
        : [...categoryItems, itemId];

      const updatedSavedItems = {
        ...savedItems,
        [categoryKey]: updatedCategoryItems,
      };

      await saveCheckedItems(updatedSavedItems);

      // 전체 화면에서 현재 보여주는 체크 상태도 바로 업데이트
      const allCheckedItems = [
        ...new Set(Object.values(updatedSavedItems).flat()),
      ];

      setCheckedItems(allCheckedItems);

      return;
    }

    // ==================================================
    // 일반 카테고리 보기
    // ==================================================

    const categoryItems = savedItems[categoryName] ?? [];

    const isChecked = categoryItems.includes(itemId);

    const updatedCategoryItems = isChecked
      ? categoryItems.filter((id) => id !== itemId)
      : [...categoryItems, itemId];

    const updatedSavedItems = {
      ...savedItems,
      [categoryName]: updatedCategoryItems,
    };

    await saveCheckedItems(updatedSavedItems);

    // 현재 카테고리의 체크 상태 업데이트
    setCheckedItems(updatedCategoryItems);
  };

  const handleItemPress = (itemId: string | number) => {
    navigation.navigate("ItemDetailScreen", { itemId: String(itemId) });
  };
  const checkedCount = filteredCategoryItems.filter((item) =>
    checkedItems.includes(item.id),
  ).length;

  const totalCount = filteredCategoryItems.length;

  const progress = totalCount === 0 ? 0 : (checkedCount / totalCount) * 100;

  // 상태 배지 렌더러
  const renderTimingBadge = (status: ItemTimingStatus) => {
    switch (status) {
      case "NOW":
        return (
          <Badge bg="#FFF3C4">
            <GlossyDot type="yellow" size={14} />
            <BadgeText color="#D97706">지금 준비하면 좋아요</BadgeText>
          </Badge>
        );

      case "UPCOMING":
        return (
          <Badge bg="#E0F2FE">
            <GlossyDot type="blue" size={14} />
            <BadgeText color="#0284C7"> 아직 서두르지 않아도 돼요 </BadgeText>
          </Badge>
        );

      case "EXPIRED":
        return (
          <Badge bg="#F3F4F6">
            <GlossyDot type="white" size={14} />
            <BadgeText color="#6B7280">준비해두면 좋아요</BadgeText>
          </Badge>
        );
    }
  };

  return (
    <Container edges={["top"]}>
      {/* 1. 고정 헤더 */}
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
        {/* 진행률 카드 */}
        <ProgressCard>
          <ProgressHeader>
            <ProgressTitle>준비 완료</ProgressTitle>
            <ProgressCount>
              {checkedCount} / {totalCount}개
            </ProgressCount>
          </ProgressHeader>
          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>
        </ProgressCard>

        {/* 시기 필터 탭 */}
        <FilterContainer>
          <FilterTab
            active={selectedFilter === "ALL"}
            onPress={() => setSelectedFilter("ALL")}
          >
            <FilterTabText active={selectedFilter === "ALL"}>
              전체
            </FilterTabText>
          </FilterTab>

          <FilterTab
            active={selectedFilter === "NOW"}
            onPress={() => setSelectedFilter("NOW")}
          >
            <GlossyDot type="yellow" size={14} />
            <FilterTabText active={selectedFilter === "NOW"}>
              지금 준비
            </FilterTabText>
          </FilterTab>

          <FilterTab
            active={selectedFilter === "UPCOMING"}
            onPress={() => setSelectedFilter("UPCOMING")}
          >
            <GlossyDot type="blue" size={14} />
            <FilterTabText active={selectedFilter === "UPCOMING"}>
              나중에 준비
            </FilterTabText>
          </FilterTab>
        </FilterContainer>

        {/* 준비물 목록 */}
        <ItemList>
          {filteredCategoryItems.map((item) => {
            const isChecked = checkedItems.includes(item.id);
            const timingStatus = getItemTimingStatus(item, currentWeek);

            return (
              <ItemCard
                key={item.id}
                activeOpacity={0.8}
                onPress={() => handleToggle(item.id)}
              >
                <CardHeader>
                  <CheckButton
                    activeOpacity={0.7}
                    onPress={() => handleToggle(item.id)}
                  >
                    <CheckCircle checked={isChecked}>
                      {isChecked && (
                        <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                      )}
                    </CheckCircle>
                  </CheckButton>

                  <ItemTitleContainer>
                    <TitleRow>
                      <ItemName checked={isChecked}>{item.title}</ItemName>
                      {item.recommendedQuantity && (
                        <QuantityText>
                          ({item.recommendedQuantity})
                        </QuantityText>
                      )}
                    </TitleRow>

                    {/* 시기 직관 배지 */}
                    <BadgeRow>{renderTimingBadge(timingStatus)}</BadgeRow>
                  </ItemTitleContainer>
                  <DetailButton
                    activeOpacity={0.6}
                    onPress={() => handleItemPress(item.id)}
                  >
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color={theme.colors.textSecondary}
                    />
                  </DetailButton>
                </CardHeader>

                {/* 팁 미리보기 (체크 안 된 경우에만 가독성 있게 표시) */}
                {item.tip && !isChecked && (
                  <TipBox>
                    <TipContentRow>
                      <TipIcon>
                        <Ionicons
                          name="bulb-outline"
                          size={15}
                          color={theme.colors.primary}
                        />
                      </TipIcon>

                      <TipText numberOfLines={2}>{item.tip}</TipText>
                    </TipContentRow>
                  </TipBox>
                )}
              </ItemCard>
            );
          })}
        </ItemList>

        {filteredCategoryItems.length === 0 && (
          <EmptyContainer>
            <EmptyIconWrapper>
              <Ionicons
                name="basket-outline"
                size={44}
                color={theme.colors.textSecondary}
              />
            </EmptyIconWrapper>
            <EmptyText>준비물 정보를 찾을 수 없어요.</EmptyText>
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
  padding-horizontal: 20px;
`;

const ProgressCard = styled.View`
  margin-top: 12px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const ProgressHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ProgressTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressCount = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProgressBar = styled.View`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const ProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const FilterContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  gap: 6px;
`;

const FilterTab = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  padding-vertical: 8px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-direction: row;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.card};
  border-width: 1px;
  border-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.border};
`;

const FilterTabText = styled.Text<{ active: boolean }>`
  font-size: 11px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ active, theme }) =>
    active ? "#FFFFFF" : theme.colors.textSecondary};
`;

const ItemList = styled.View`
  margin-top: 16px;
  gap: 10px;
`;

const ItemCard = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckButton = styled.TouchableOpacity`
  padding: 4px;
  margin-right: 10px;
`;

const CheckCircle = styled.View<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.border};
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.card};
  align-items: center;
  justify-content: center;
`;

const ItemTitleContainer = styled.View`
  flex: 1;
`;
const DetailButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  margin-left: 4px;
  justify-content: center;
  align-items: center;
`;

const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const ItemName = styled.Text<{ checked: boolean }>`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.textSecondary : theme.colors.text};
  text-decoration-line: ${({ checked }) => (checked ? "line-through" : "none")};
`;

const QuantityText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BadgeRow = styled.View`
  margin-top: -5px;
  flex-direction: row;
`;

const Badge = styled.View<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  padding: 0px 8px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const BadgeText = styled.Text<{ color: string }>`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ color }) => color};
`;

const TipBox = styled.View`
  margin-top: 10px;
  min-height: 36px;
  padding: 10px 12px;

  background-color: #f8fafc;
  border-radius: 10px;

  justify-content: center;
`;

const TipContentRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;
`;

const TipIcon = styled.View`
  width: 15px;
  height: 16px;
  margin-top: 3px;
  justify-content: center;
  align-items: center;
`;

const TipText = styled.Text`
  flex: 1;

  font-size: ${({ theme }) => theme.typography.tiny}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};

  line-height: 16px;

  include-font-padding: false;
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
const EmptyIconWrapper = styled.View`
  margin-bottom: 12px;
  opacity: 0.7;
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
