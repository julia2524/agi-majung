import React, { useCallback, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Mascot from "../types/design-system/ui/Mascot";
import { RootStackParamList } from "../navigation/types";

// 아까 만든 SVG 아이콘 가져오기
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
import { useFocusEffect } from "@react-navigation/native";
import { getCheckedItems } from "../utils/storage";
import { babyItems } from "../data/babyItems";
import { Ionicons } from "@expo/vector-icons";
import BannerAd from "../services/BannerAd";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

// 카테고리 데이터에 Component 직접 매핑
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
  // theme 객체를 직접 가져옵니다.
  const theme = useTheme();
  const { dueDate, babyOrder } = route.params;
  const [checkedCount, setCheckedCount] = useState(0);
  const totalCount = babyItems.length;

  const progress = totalCount === 0 ? 0 : (checkedCount / totalCount) * 100;

  const progressPercent = Math.round(progress);

  useFocusEffect(
    useCallback(() => {
      const loadProgress = async () => {
        const savedItems = await getCheckedItems();

        const allCheckedItemIds = Object.values(savedItems).flat();

        setCheckedCount(allCheckedItemIds.length);
      };

      loadProgress();
    }, []),
  );

  const dDay = useMemo(() => {
    const today = new Date();
    const due = new Date(dueDate);

    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    const difference = due.getTime() - today.getTime();
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }, [dueDate]);

  const dDayText =
    dDay > 0 ? `D-${dDay}` : dDay === 0 ? "D-DAY" : `D+${Math.abs(dDay)}`;

  // ISO String 안전하게 변환
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
  };

  // const handleCategoryPress = (categoryId: string, categoryName: string) => {
  //   console.log(categoryId, categoryName);
  // };

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
        {/* 상단 인사 */}
        <Header>
          <HeaderText>아기마중</HeaderText>
          <HeaderSubText>아기 오기 전, 하나씩 준비해봐요 💛</HeaderSubText>
        </Header>

        {/* D-Day 카드 */}
        <DDayCard>
          <DDayContent>
            <DDayLabel>아기와 만날 날까지</DDayLabel>
            <DDayText>{dDayText}</DDayText>
            <DDayDate>{formatDate(dueDate)}</DDayDate>
          </DDayContent>

          <DDayMascot>
            <Mascot size={140} />
          </DDayMascot>
        </DDayCard>

        {/* 진행률 */}
        <ProgressCard>
          <ProgressHeader>
            <ProgressTitle>준비 진행률</ProgressTitle>
            <ProgressPercent>{progressPercent}%</ProgressPercent>
          </ProgressHeader>

          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>

          <ProgressDescription>
            {checkedCount === 0
              ? "아직 준비한 물건이 없어요. 하나씩 체크해볼까요?"
              : `${checkedCount}개 준비했어요! 하나씩 차근차근 준비해봐요 💛`}
          </ProgressDescription>
        </ProgressCard>

        {/* 카테고리 (3열 아기자기 그리드로 개선) */}
        <SectionHeader>
          <SectionTitle>무엇부터 준비할까요?</SectionTitle>
          <SectionSubTitle>
            필요한 것들을 카테고리별로 살펴보세요.
          </SectionSubTitle>
        </SectionHeader>

        <CategoryGrid>
          {categories.map(({ id, name, Icon }) => (
            <CategoryCard
              key={id}
              activeOpacity={0.7}
              onPress={() => handleCategoryPress(id, name)}
            >
              <Icon size={52} />
              <CategoryName>{name}</CategoryName>
            </CategoryCard>
          ))}
        </CategoryGrid>

        <MyListCard
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("MyItemScreen");
          }}
        >
          <MyListIconBadge>
            <Ionicons
              name="add-circle-outline"
              size={24}
              color={theme.colors.primary}
            />
          </MyListIconBadge>

          <MyListContent>
            <MyListTitle numberOfLines={1}>나만의 준비물 추가하기</MyListTitle>
            <MyListDescription>
              리스트에 없는 필요한 물건을 직접 추가해요.
            </MyListDescription>
          </MyListContent>

          <MyListArrowContainer>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </MyListArrowContainer>
        </MyListCard>

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

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
  padding: 20px 24px;
`;

const Header = styled.View`
  margin-top: 8px;
  margin-bottom: 7px; /* 16 → 10: 다음 D-Day 카드와의 체감 간격 축소 */
`;

const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const HeaderSubText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const DDayCard = styled.View`
  width: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 18px 20px; /* 20/24 → 18/20: 카드 내부 여백 축소 */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset: 0px 6px;
  shadow-opacity: 0.25;
  shadow-radius: 10px;
  elevation: 4;
`;

const DDayContent = styled.View`
  flex: 1;
`;

const DDayLabel = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.card};
  opacity: 0.9;
`;

const DDayText = styled.Text`
  margin-vertical: -20px; /* 2px → 0: 라벨·날짜와 더 밀착 */
  font-size: ${({ theme }) => theme.typography.hero}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.card};
`;

const DDayDate = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.card};
  opacity: 0.85;
`;

const DDayMascot = styled.View`
  align-items: center;
  justify-content: center;
`;

const ProgressCard = styled.View`
  width: 100%;
  margin-top: 14px; /* 16 → 14 */
  padding: 16px 18px; /* 18/20 → 16/18 */
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const ProgressHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProgressTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressPercent = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProgressBar = styled.View`
  width: 100%;
  height: 10px;
  margin-top: 10px; /* 12 → 10 */
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const ProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${Math.max(progress, 0)}%`};
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ProgressDescription = styled.Text`
  margin-top: 8px; /* 10 → 8 */
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionHeader = styled.View`
  margin-top: 20px; /* 28 → 20 */
  margin-bottom: 10px; /* 16 → 10 */
`;

const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubTitle = styled.Text`
  margin-top: -20px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* 3열 그리드 스타일 */
const CategoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 14px; /* 16 → 14 */
`;

const CategoryCard = styled.TouchableOpacity`
  width: 30%;
  align-items: center;
  justify-content: center;
  padding: 12px 4px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};

  /* 파스텔 입체감 */
  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.08;
  shadow-radius: 6px;
  elevation: 2;
`;

const CategoryName = styled.Text`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const MyListCard = styled.TouchableOpacity`
  width: 100%;
  margin-top: 14px; /* 20 → 14 */
  padding: 18px 10px; /* 16/20 → 14/18 */
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  align-items: center;
`;

const BottomSpace = styled.View`
  height: 60px; /* 40 → 32 */
`;

const MyListIconBadge = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 14px; /* 완만한 라운드 스퀘어로 세련된 느낌 */
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const MyListContent = styled.View`
  flex: 1;
`;

const MyListTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 20px;
`;

const MyListDescription = styled.Text`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 16px;
`;

const MyListArrowContainer = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
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
