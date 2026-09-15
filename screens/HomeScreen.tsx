import React, { useMemo } from "react";
import styled from "styled-components/native";
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

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

// 카테고리 데이터에 Component 직접 매핑
const categories = [
  { id: "hospital", name: "출산·병원", Icon: HospitalIcon },
  { id: "sleep", name: "수면", Icon: SleepIcon },
  { id: "bath", name: "목욕", Icon: BathIcon },
  { id: "feeding", name: "수유", Icon: MilkIcon },
  { id: "clothing", name: "의류", Icon: ClothesIcon },
  { id: "hygiene", name: "위생·세탁", Icon: LaundryIcon },
  { id: "outdoor", name: "외출", Icon: BagIcon },
  { id: "mother", name: "산모", Icon: MomIcon },
  { id: "life", name: "생활", Icon: HomeIcon },
];

export default function HomeScreen({ navigation, route }: Props) {
  const { dueDate, babyOrder } = route.params;

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

  const handleCategoryPress = (categoryId: string, categoryName: string) => {
    console.log(categoryId, categoryName);
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
            <Mascot size={80} />
          </DDayMascot>
        </DDayCard>

        {/* 진행률 */}
        <ProgressCard>
          <ProgressHeader>
            <ProgressTitle>준비 진행률</ProgressTitle>
            <ProgressPercent>0%</ProgressPercent>
          </ProgressHeader>

          <ProgressBar>
            <ProgressFill progress={0} />
          </ProgressBar>

          <ProgressDescription>
            아직 준비한 물건이 없어요. 하나씩 체크해볼까요?
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

        {/* 내 준비물 카드 */}
        <MyListCard activeOpacity={0.8} onPress={() => {}}>
          <MyListIconContainer>
            <MyListIconText>📝</MyListIconText>
          </MyListIconContainer>

          <MyListContent>
            <MyListTitle>나만의 준비물 추가하기</MyListTitle>
            <MyListDescription>
              리스트에 없는 필요한 물건을 직접 추가해요.
            </MyListDescription>
          </MyListContent>

          <MyListArrow>›</MyListArrow>
        </MyListCard>

        <BottomSpace />
      </ScrollContent>
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
  margin-bottom: 16px;
`;

const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const HeaderSubText = styled.Text`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const DDayCard = styled.View`
  width: 100%;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 24px;
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
  margin-vertical: 2px;
  font-size: 34px;
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
  margin-top: 16px;
  padding: 18px 20px;
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
  margin-top: 12px;
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
  margin-top: 10px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionHeader = styled.View`
  margin-top: 28px;
  margin-bottom: 16px;
`;

const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubTitle = styled.Text`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* 3열 그리드 스타일 */
const CategoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 16px;
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
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  align-items: center;
`;

const MyListIconContainer = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.card};
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

const MyListIconText = styled.Text`
  font-size: 22px;
`;

const MyListContent = styled.View`
  flex: 1;
`;

const MyListTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const MyListDescription = styled.Text`
  margin-top: 2px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MyListArrow = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BottomSpace = styled.View`
  height: 40px;
`;
