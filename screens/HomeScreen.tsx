import React, { useCallback, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import Mascot from "../types/design-system/ui/Mascot";
import { RootStackParamList } from "../navigation/types";
import {
  HospitalIcon,
  SleepIcon,
  BathIcon,
  MilkIcon,
  ClothesIcon,
  LaundryIcon,
  BagIcon,
  MomIcon,
  HomeIcon,
} from "../components/icons/CategoryIcons";
import { getCheckedItems } from "../storage/storage";
import { babyItems } from "../data/babyItems";
import BannerAd from "../services/BannerAd";
import { getItemTimingStatus } from "../utils/itemTiming";
import { GlossyDot } from "../components/GlossyDot/GlossyDot";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const categories = [
  { id: "hospital", name: "출산/병원", Icon: HospitalIcon },
  { id: "sleep", name: "수면", Icon: SleepIcon },
  { id: "bath", name: "목욕", Icon: BathIcon },
  { id: "feeding", name: "수유", Icon: MilkIcon },
  { id: "clothing", name: "의류", Icon: ClothesIcon },
  { id: "hygiene", name: "위생/세탁", Icon: LaundryIcon },
  { id: "outdoor", name: "외출", Icon: BagIcon },
  { id: "mother", name: "산모", Icon: MomIcon },
  { id: "life", name: "생활", Icon: HomeIcon },
];

export default function HomeScreen({ navigation, route }: Props) {
  const theme = useTheme();
  const { dueDate, babyOrder } = route.params;

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
    let upcoming = 0;

    babyItems.forEach((item) => {
      const status = getItemTimingStatus(item, currentWeek);
      if (status === "NOW") now++;
      else if (status === "UPCOMING") upcoming++;
    });

    return { now, upcoming };
  }, [currentWeek]);

  // 카테고리별 진행률
  const categoryProgressMap = useMemo(() => {
    const result: Record<
      string,
      { total: number; checked: number; percent: number }
    > = {};

    categories.forEach((cat) => {
      const catItems = babyItems.filter((item) => item.category === cat.name);
      const total = catItems.length;
      const checkedList = checkedMap[cat.name] || [];
      const checked = new Set(checkedList).size;
      const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

      result[cat.id] = { total, checked, percent };
    });

    return result;
  }, [checkedMap]);

  // HomeScreen.tsx 수정

  // 1. 전체 아이템 수 (categories에 속한 아이템만 기준으로 맞추거나 babyItems 전체 사용)
  const totalCount = babyItems.length;

  // 2. 전체 체크된 아이템 수
  const totalCheckedCount = useMemo(() => {
    // checkedMap의 모든 카테고리 체크 목록을 단일 배열로 병합
    const allCheckedIds = new Set(
      Object.values(checkedMap).flat().map(String), // 타입을 string으로 통일
    );

    // babyItems 중 체크된 항목 카운트
    return babyItems.filter((item) => allCheckedIds.has(String(item.id)))
      .length;
  }, [checkedMap]);
  const totalProgressPercent =
    totalCount === 0 ? 0 : Math.round((totalCheckedCount / totalCount) * 100);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadProgress = async () => {
        const savedItems = await getCheckedItems();
        if (isActive) {
          // 복사본을 전달하여 React가 상태 변화를 확실히 감지하게 함
          setCheckedMap({ ...savedItems });
        }
      };

      loadProgress();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const handleCategoryPress = (categoryId: string, categoryName: string) => {
    navigation.navigate("ChecklistScreen", {
      categoryId,
      categoryName,
      dueDate,
      babyOrder,
    });
  };

  return (
    <Container>
      <ScrollContent showsVerticalScrollIndicator={false}>
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
            <Mascot size={80} />
          </MascotContainer>
          {/* 1. 상단: D-Day 배지 & 마스코트 */}
          <HeroTop>
            <HeroBadge>
              <HeroBadgeText>D-{dDay}</HeroBadgeText>
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
              <HeroButtonText>바로 확인하기</HeroButtonText>
              <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
            </HeroButton>
          </HeroBottomRow>
        </HeroCard>

        {/* ========== 2. 내가 이만큼 준비했네 ========== */}
        <ProgressCard>
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

        {/* ========== 3. 아직 괜찮은 것 (작게) ========== */}
        <LaterCard
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("ChecklistScreen", {
              categoryId: "all",
              categoryName: "아직 괜찮은 품목",
              dueDate,
              babyOrder,
              initialFilter: "UPCOMING",
            })
          }
        >
          <LaterLeft>
            <GlossyDot type="blue" size={14} />
            <LaterText>
              {" "}
              아직 서두르지 않아도 되는 품목{" "}
              <LaterCount>{statusCounts.upcoming}개</LaterCount>
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

                {/* 카테고리별 진행률 */}
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
        </CategoryGrid>
        {/* ========== 5. 나만의 준비물 ========== */}
        <MyListCard
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
            <MyListTitle>나만의 준비물 추가하기</MyListTitle>
            <MyListDesc>목록에 없는 물건을 직접 등록해요</MyListDesc>
          </MyListContent>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.colors.textSecondary}
          />
        </MyListCard>

        <BottomSpace />
      </ScrollContent>

      <BottomAdContainer>
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
  padding: 16px 20px;
`;

/* 헤더 */
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const SettingsButton = styled.TouchableOpacity`
  padding: 6px;
`;

/* 히어로 카드 - 가장 중요 */
const HeroCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
  padding: 20px;
  margin-bottom: 14px;
  position: relative;
`;

const MascotContainer = styled.View`
  position: absolute;
  right: 15px;
  top: 15px;
`;
const HeroTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px; /* 마스코트와 문구 사이 여백 조절 */
`;

/* 반투명 흰색으로 은은하고 세련된 D-Day 배지 */
const HeroBadge = styled.View`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 4px 10px;
  border-radius: 12px;
  align-self: flex-start;
`;

const HeroBadgeText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  include-font-padding: false;
`;

const HeroDesc = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: rgba(255, 255, 255, 0.95);
  line-height: 20px;
  margin-bottom: 12px;
`;

/* 하단 수량 + 버튼 한 줄 정렬 컨테이너 */
/* 3. 하단 수량 + 버튼 컨테이너: align-items: center 로 수직 중앙 정렬 */
const HeroBottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center; /* 💡 flex-end 대신 center로 변경하여 수직 중앙 정렬 */
  margin-top: 8px;
`;

const HeroCountGroup = styled.View`
  flex-direction: row;
  align-items: baseline; /* 💡 '31'과 '개'의 텍스트 밑선을 맞춤 */
`;

const HeroCount = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  line-height: 44px;
  include-font-padding: false; /* 💡 텍스트 내부 상하 여백 제거 */
`;

const HeroCountUnit = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  margin-left: 3px;
  include-font-padding: false;
`;

const HeroButton = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.22);
  padding: 8px 14px;
  border-radius: 20px;
  gap: 4px;
`;

const HeroButtonText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
  include-font-padding: false;
`;
/* 진행률 카드 */
const ProgressCard = styled.View`
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
  margin-bottom: 10px;
`;

const ProgressLabel = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressPercent = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProgressBar = styled.View`
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
  margin-bottom: 10px;
`;

const ProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${Math.max(progress, 0)}%`};
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ProgressBottom = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProgressCount = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressTotal = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 2px;
`;

/* 아직 괜찮은 카드 */
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
`;

const LaterLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
const StatusDot = styled.View<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${({ color }) => color};
  margin-right: 8px;
`;
const LaterEmoji = styled.Text`
  font-size: 16px;
  margin-right: 8px;
`;

const LaterText = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`;

const LaterCount = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

/* 섹션 헤더 */
const SectionHeader = styled.View``;

const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

/* 카테고리 그리드 */
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

const DoneBadge = styled.View`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 1;
`;

const CategoryName = styled.Text`
  margin-top: 6px;
  margin-bottom: 8px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const CategoryProgressWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

const CategoryProgressBar = styled.View`
  width: 70%;
  height: 3px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const CategoryProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const CategoryCountText = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 3px;
`;

/* 나만의 리스트 */
const MyListCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  padding: 14px 16px;
`;

const MyListIcon = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const MyListContent = styled.View`
  flex: 1;
`;

const MyListTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const MyListDesc = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: -20px;
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
