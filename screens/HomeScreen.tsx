import React, { useCallback, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import Mascot from "../types/design-system/ui/Mascot";
import { RootStackParamList } from "../navigation/types";
import {
  ClothesIcon,
  BagIcon,
  GoodsIcon,
  FurnitureIcon,
  ElectronicsIcon,
  HygieneIcon,
  CareIcon,
  ToyBookIcon,
  FeedingIcon,
} from "../components/icons/CategoryIcons";
import {
  CustomCategory,
  getCheckedItems,
  getMyCategories,
  getMyItems,
  MyItem,
} from "../storage/storage";
import { babyItems } from "../data/babyItems";
import BannerAd from "../services/BannerAd";
import { calculateUrgency, getItemTimingStatus } from "../utils/itemTiming";
import { GlossyDot } from "../components/GlossyDot/GlossyDot";
import { useWindowDimensions } from "react-native";
import { AppText } from "../utils/AppText";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const categories = [
  { id: 1, name: "의류", Icon: ClothesIcon },
  { id: 2, name: "잡화", Icon: GoodsIcon },
  { id: 3, name: "가구·수납", Icon: FurnitureIcon },
  { id: 4, name: "가전·디지털", Icon: ElectronicsIcon },
  { id: 5, name: "생활·위생", Icon: HygieneIcon },
  { id: 6, name: "케어·건강", Icon: CareIcon },
  { id: 7, name: "완구·도서", Icon: ToyBookIcon },
  { id: 8, name: "수유용품", Icon: FeedingIcon },
  //  { id: 9, name: "나만의 준비물", Icon: BagIcon },
];

function formatDDay(dDay: number): string {
  if (dDay === 0) {
    return "D-Day";
  } else if (dDay > 0) {
    return `D-${dDay}`; // 아직 남은 날 → D-10, D-9 ...
  } else {
    return `D+${Math.abs(dDay)}`; // 이미 지난 날 → D+1, D+2 ...
  }
}

export default function HomeScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const { width: windowWidth, fontScale } = useWindowDimensions();

  // 디스플레이 크기를 최대로 했을 때도
  // 기존 3열 디자인을 최대한 유지하고,
  // 정말 좁은 화면에서만 2열로 전환
  const categoryColumns = windowWidth < 330 ? 2 : 3;

  // 시스템 글자 크기 확대 여부
  const isLargeText = fontScale >= 1.3;

  // 마스코트는 좁은 화면과 큰 글자 환경에서 조금 작게
  const mascotSize = isLargeText || windowWidth < 360 ? 64 : 80;
  const theme = useTheme();
  const { dueDate, babyOrder } = route.params;
  const [myItems, setMyItems] = useState<MyItem[]>([]);
  const [myCategories, setMyCategories] = useState<CustomCategory[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadMyItems = async () => {
        const savedItems = await getMyItems();
        setMyItems(savedItems);
      };

      loadMyItems();
    }, []),
  );
  // const myItemProgress = useMemo(() => {
  //   const total = myItems.length;
  //   const checked = myItems.filter((item) => item.isChecked).length;

  //   return {
  //     total,
  //     checked,
  //     percent: total === 0 ? 0 : Math.round((checked / total) * 100),
  //   };
  // }, [myItems]);

  const customCategoryProgressMap = useMemo(() => {
    const result: Record<
      string,
      { total: number; checked: number; percent: number }
    > = {};

    myCategories.forEach((category) => {
      const categoryItems = myItems.filter(
        (item) => item.categoryId === category.id,
      );

      const total = categoryItems.length;
      const checked = categoryItems.filter((item) => item.isChecked).length;

      result[category.id] = {
        total,
        checked,
        percent: total === 0 ? 0 : Math.round((checked / total) * 100),
      };
    });

    return result;
  }, [myCategories, myItems]);

  const [checkedMap, setCheckedMap] = useState<
    Record<string, (string | number)[]>
  >({});
  const dDay = useMemo(() => {
    const today = new Date();
    const due = new Date(dueDate);

    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    const difference = due.getTime() - today.getTime();
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }, [dueDate]);

  // 임신 주수 계산
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

  // 지금 / 나중에 카운트
  const statusCounts = useMemo(() => {
    let now = 0;
    let urgent = 0;
    let upcoming = 0;

    babyItems.forEach((item) => {
      const status = getItemTimingStatus(item, currentWeek);
      if (status === "NOW") {
        now++;
      } else if (status === "URGENT") {
        urgent++;
      } else if (status === "UPCOMING") {
        upcoming++;
      }
    });

    return { now, urgent, upcoming };
  }, [currentWeek]);

  // 카테고리별 진행률

  const categoryProgressMap = useMemo(() => {
    const result: Record<
      string | number,
      { total: number; checked: number; percent: number }
    > = {};

    categories.forEach((cat) => {
      // 1. categoryId(숫자)로 데이터 필터링 (하위 호환을 위해 cat.name도 fallback 체크)
      const catItems = babyItems.filter(
        (item) => item.categoryId === cat.id || item.category === cat.name,
      );
      const total = catItems.length;

      // 2. checkedMap의 Key가 cat.id (숫자/문자열) 또는 cat.name 기준 모두 대응
      const checkedList =
        checkedMap[cat.id] ||
        checkedMap[String(cat.id)] ||
        checkedMap[cat.name] ||
        [];
      const checked = new Set(checkedList).size;
      const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

      result[cat.id] = { total, checked, percent };
    });

    return result;
  }, [checkedMap]);

  // HomeScreen.tsx 수정

  // 1. 전체 아이템 수 (categories에 속한 아이템만 기준으로 맞추거나 babyItems 전체 사용)
  const totalCount = babyItems.length + myItems.length;

  // 2. 전체 체크된 아이템 수
  const totalCheckedCount = useMemo(() => {
    // checkedMap의 모든 카테고리 체크 목록을 단일 배열로 병합
    const allCheckedIds = new Set(
      Object.values(checkedMap).flat().map(String), // 타입을 string으로 통일
    );

    // babyItems 중 체크된 항목 카운트
    const checkedBabyItems = babyItems.filter((item) =>
      allCheckedIds.has(String(item.id)),
    ).length;
    const checkedMyItems = myItems.filter((item) => item.isChecked).length;

    return checkedBabyItems + checkedMyItems;
  }, [checkedMap, myItems]);
  const totalProgressPercent =
    totalCount === 0 ? 0 : Math.round((totalCheckedCount / totalCount) * 100);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadMyData = async () => {
        try {
          const [savedItems, savedCategories] = await Promise.all([
            getMyItems(),
            getMyCategories(),
          ]);

          if (isActive) {
            setMyItems(savedItems);
            setMyCategories(savedCategories);
          }
        } catch (error) {
          console.error("사용자 준비물 데이터 불러오기 실패:", error);
        }
      };

      loadMyData();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const handleCategoryPress = (categoryId: number, categoryName: string) => {
    navigation.navigate("ChecklistScreen", {
      categoryId: String(categoryId),
      categoryName,
      dueDate,
      babyOrder,
    });
  };

  return (
    <Container>
      <ScrollContent
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: insets.top,
          paddingBottom: 24,
        }}
      >
        {/* ========== 헤더 (최소화) ========== */}
        <Header>
          <HeaderText>아기마중</HeaderText>
          <SettingsButton
            activeOpacity={0.7}
            onPress={() => navigation.navigate("SettingScreen")}
          >
            <Ionicons
              name="settings-outline"
              size={22}
              color={theme.colors.text}
            />
          </SettingsButton>
        </Header>

        {/* ========== 1. 가장 중요한 카드: 지금 준비해야 할 것 ========== */}
        <HeroCard
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate("ChecklistScreen", {
              categoryId: "all",
              categoryName: "지금 준비할 품목",
              dueDate,
              babyOrder,
              initialFilter: "NOW",
            })
          }
        >
          <MascotContainer>
            <Mascot size={mascotSize} />
          </MascotContainer>

          {/* 1. 상단: D-Day 배지 & 마스코트 */}
          <HeroTop>
            <HeroBadge>
              <HeroBadgeText>{formatDDay(dDay)}</HeroBadgeText>
            </HeroBadge>
          </HeroTop>
          {/* 2. 설명 문구 */}
          <HeroDesc>
            임신 {currentWeek}주차 기준으로{"\n"}
            지금 챙기면 좋은 품목이에요
          </HeroDesc>
          {/* 3. 하단: 수량(왼쪽) + 바로가기 버튼(우측 밀착) */}
          <HeroBottomRow>
            <HeroCountGroup>
              <HeroCount>{statusCounts.now}</HeroCount>
              <HeroCountUnit>개</HeroCountUnit>
            </HeroCountGroup>

            <HeroButton>
              <HeroButtonText>전체 확인하기</HeroButtonText>
              <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
            </HeroButton>
          </HeroBottomRow>
        </HeroCard>

        {/* ========== 2. 내가 이만큼 준비했네 ========== */}
        <ProgressCard
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate("ChecklistScreen", {
              categoryId: "all",
              categoryName: "지금 준비할 품목",
              dueDate,
              babyOrder,
              initialFilter: "NOW",
            })
          }
        >
          <ProgressTop>
            <ProgressLabel>전체 준비 현황</ProgressLabel>
            <ProgressPercent>{totalProgressPercent}%</ProgressPercent>
          </ProgressTop>

          <ProgressBar>
            <ProgressFill progress={totalProgressPercent} />
          </ProgressBar>

          <ProgressBottom>
            <ProgressCount>{totalCheckedCount}개 준비 완료</ProgressCount>
            <ProgressTotal>/ {totalCount}개</ProgressTotal>
          </ProgressBottom>
        </ProgressCard>

        {/* ========== 3. 지금 서둘러야 하는 것 ========== */}
        <LaterCard
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("ChecklistScreen", {
              categoryId: "all",
              categoryName: "지금 서둘러야 하는 품목",
              dueDate,
              babyOrder,
              initialFilter: "URGENT",
            })
          }
        >
          <LaterLeft>
            <GlossyDot type="red" size={14} />
            <LaterText>
              {" "}
              지금이라도 서둘러야 하는 품목{" "}
              <LaterCount>{statusCounts.urgent}개</LaterCount>
            </LaterText>
          </LaterLeft>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.colors.textSecondary}
          />
        </LaterCard>

        {/* ========== 4. 카테고리 (심플하게) ========== */}
        <SectionHeader>
          <SectionTitle>카테고리별로 보기</SectionTitle>
        </SectionHeader>
        <CategoryGrid>
          {categories.map(({ id, name, Icon }) => {
            const prog = categoryProgressMap[id] || {
              total: 0,
              checked: 0,
              percent: 0,
            };

            const isAllDone = prog.total > 0 && prog.checked === prog.total;

            return (
              <CategoryCard
                key={id}
                activeOpacity={0.7}
                onPress={() => handleCategoryPress(id, name)}
              >
                {isAllDone && (
                  <DoneBadge>
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color={theme.colors.primary}
                    />
                  </DoneBadge>
                )}

                <Icon size={34} />

                <CategoryName>{name}</CategoryName>

                <CategoryProgressWrapper>
                  <CategoryProgressBar>
                    <CategoryProgressFill progress={prog.percent} />
                  </CategoryProgressBar>

                  <CategoryCountText>
                    {prog.checked}/{prog.total}
                  </CategoryCountText>
                </CategoryProgressWrapper>
              </CategoryCard>
            );
          })}
          {/* 사용자 카테고리 */}
          {/* {myCategories.map((category) => {
            const prog = customCategoryProgressMap[category.id] || {
              total: 0,
              checked: 0,
              percent: 0,
            };

            const isAllDone = prog.total > 0 && prog.checked === prog.total;

            return (
              <CategoryCard
                key={`custom-${category.id}`}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("CustomItemScreen", {
                    categoryId: category.id,
                  })
                }
              >
                {isAllDone && (
                  <DoneBadge>
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color={theme.colors.primary}
                    />
                  </DoneBadge>
                )}

                <Ionicons
                  name={category.icon as keyof typeof Ionicons.glyphMap}
                  size={34}
                  color={theme.colors.primary}
                />

                <CategoryName numberOfLines={1}>{category.name}</CategoryName>

                <CategoryProgressWrapper>
                  <CategoryProgressBar>
                    <CategoryProgressFill progress={prog.percent} />
                  </CategoryProgressBar>

                  <CategoryCountText>
                    {prog.checked}/{prog.total}
                  </CategoryCountText>
                </CategoryProgressWrapper>
              </CategoryCard>
            );
          })} */}

          {/* 사용자 카테고리 */}
          {myCategories.map((category) => {
            const prog = customCategoryProgressMap[category.id] || {
              total: 0,
              checked: 0,
              percent: 0,
            };

            const isAllDone = prog.total > 0 && prog.checked === prog.total;

            return (
              <CategoryCard
                key={`custom-${category.id}`}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("CustomItemScreen", {
                    categoryId: category.id,
                  })
                }
              >
                {isAllDone && (
                  <DoneBadge>
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color={theme.colors.primary}
                    />
                  </DoneBadge>
                )}

                <CustomIconBadge>
                  <Ionicons
                    name={category.icon as keyof typeof Ionicons.glyphMap}
                    size={18}
                    color={theme.colors.primary}
                  />
                </CustomIconBadge>

                <CategoryName numberOfLines={1}>{category.name}</CategoryName>

                <CategoryProgressWrapper>
                  <CategoryProgressBar>
                    <CategoryProgressFill progress={prog.percent} />
                  </CategoryProgressBar>

                  <CategoryCountText>
                    {prog.checked}/{prog.total}
                  </CategoryCountText>
                </CategoryProgressWrapper>
              </CategoryCard>
            );
          })}
          {/* <CategoryCard
            activeOpacity={0.7}
            onPress={() => navigation.navigate("MyItemScreen")}
          >
            {myItemProgress.total > 0 &&
              myItemProgress.checked === myItemProgress.total && (
                <DoneBadge>
                  <Ionicons
                    name="checkmark-circle"
                    size={16}
                    color={theme.colors.primary}
                  />
                </DoneBadge>
              )}

            <BagIcon size={34} />

            <CategoryName>나만의 준비물</CategoryName>

            <CategoryProgressWrapper>
              <CategoryProgressBar>
                <CategoryProgressFill progress={myItemProgress.percent} />
              </CategoryProgressBar>

              <CategoryCountText>
                {myItemProgress.checked}/{myItemProgress.total}
              </CategoryCountText>
            </CategoryProgressWrapper>
          </CategoryCard> */}
        </CategoryGrid>
        {/* ========== 5. 나만의 준비물 ========== */}
        {/* <MyListCard
          activeOpacity={0.7}
          onPress={() => navigation.navigate("MyItemScreen")}
        >
          <MyListIcon>
            <Ionicons
              name="add-circle-outline"
              size={22}
              color={theme.colors.primary}
            />
          </MyListIcon>
          <MyListContent>
            <MyListTitle>나만의 카테고리 추가하기</MyListTitle>
            <MyListDesc>목록에 없는 카테고리를 직접 등록해요</MyListDesc>
          </MyListContent>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.colors.textSecondary}
          />
        </MyListCard> */}
        <MyListCard
          activeOpacity={0.7}
          onPress={() => navigation.navigate("CustomCategoryScreen")}
        >
          <MyListIcon>
            <Ionicons
              name="add-circle-outline"
              size={22}
              color={theme.colors.primary}
            />
          </MyListIcon>

          <MyListContent>
            <MyListTitle>나만의 카테고리 추가하기</MyListTitle>
            <MyListDesc>
              우리 아기에게 필요한 카테고리를 직접 만들어요
            </MyListDesc>
          </MyListContent>

          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.colors.textSecondary}
          />
        </MyListCard>
        <BottomSpace />
      </ScrollContent>

      <BottomAdContainer bottomInset={insets.bottom}>
        <BannerAd />
      </BottomAdContainer>
    </Container>
  );
}

/* -----------------------------
   Styled Components
----------------------------- */

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  min-height: 44px;
`;

const HeaderText = styled(AppText)`
  flex-shrink: 1;
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.brand};
  color: ${({ theme }) => theme.colors.text};
`;

const SettingsButton = styled.TouchableOpacity`
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

const HeroCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
  padding: 20px;
  margin-bottom: 14px;
  position: relative;
  overflow: hidden;
`;

const MascotContainer = styled.View`
  position: absolute;
  right: 12px;
  top: 12px;
  opacity: 0.95;
`;

const HeroTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  padding-right: 64px;
`;

const HeroBadge = styled.View`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 6px 12px;
  border-radius: 12px;
  align-self: flex-start;
`;

const HeroBadgeText = styled(AppText)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  flex-shrink: 1;
`;

const HeroDesc = styled(AppText)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: rgba(255, 255, 255, 0.95);
  line-height: 20px;
  margin-bottom: 12px;
  padding-right: 48px;
  flex-shrink: 1;
`;

const HeroBottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 8px;
  margin-top: 4px;
`;

const HeroCountGroup = styled.View`
  flex-direction: row;
  align-items: baseline;
  flex-shrink: 1;
`;

const HeroCount = styled(AppText)`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  flex-shrink: 1;
`;

const HeroCountUnit = styled(AppText)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  margin-left: 3px;
`;

const HeroButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.22);
  padding: 10px 14px;
  border-radius: 20px;
  flex-shrink: 1;
  gap: 4px;
`;

const HeroButtonText = styled(AppText)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  flex-shrink: 1;
  text-align: center;
`;

const ProgressCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 18px;
  padding: 16px 18px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 10px;
`;

const ProgressTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 6px;
  column-gap: 8px;
  margin-bottom: 12px;
`;

const ProgressLabel = styled(AppText)`
  flex-shrink: 1;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressPercent = styled(AppText)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

const ProgressBottom = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const ProgressCount = styled(AppText)`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 1;
`;

const ProgressTotal = styled(AppText)`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 2px;
`;

const ProgressBar = styled.View`
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
  margin-bottom: 10px;
`;

const ProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${Math.max(0, Math.min(progress, 100))}%`};
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const LaterCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 14px;
  padding: 14px 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 24px;
  min-height: 54px;
`;

const LaterLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  min-width: 0px;
`;

const LaterText = styled(AppText)`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  flex-shrink: 1;
`;

const LaterCount = styled(AppText)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionHeader = styled.View`
  margin-bottom: 12px;
`;

const SectionTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 1;
`;

const CategoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
  margin-bottom: 16px;
`;
const CategoryCard = styled.TouchableOpacity`
  width: 31%;
  position: relative;
  align-items: center;
  padding: 12px 6px 10px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const CategoryName = styled(AppText)`
  width: 100%;
  margin-top: 6px;
  margin-bottom: 8px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  flex-shrink: 1;
`;

const CategoryCountText = styled(AppText)`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 3px;
  flex-shrink: 1;
`;
const DoneBadge = styled.View`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 1;
`;

const CategoryProgressWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const CategoryProgressBar = styled.View`
  width: 70%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const CategoryProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${Math.max(0, Math.min(progress, 100))}%`};
  height: 100%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const MyListCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  padding: 14px 16px;
  min-height: 68px;
`;

const MyListContent = styled.View`
  flex: 1;
  min-width: 0px;
`;

const MyListIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
`;

const BottomSpace = styled.View`
  height: 24px;
`;

const BottomAdContainer = styled.View<{ bottomInset: number }>`
  width: 100%;
  min-height: ${({ bottomInset }) => 60 + bottomInset}px;
  padding-bottom: ${({ bottomInset }) => bottomInset}px;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  border-top-width: 1px;
  border-top-color: #e2e8f0;
`;

const CustomIconBadge = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

const MyListTitle = styled(AppText)`
  font-size: 14px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 1;
`;

const MyListDesc = styled(AppText)`
  font-size: 12px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 2px;
  flex-shrink: 1;
`;
