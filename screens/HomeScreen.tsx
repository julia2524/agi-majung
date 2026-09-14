import { useMemo } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Mascot from "../types/design-system/ui/Mascot";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const categories = [
  {
    id: "hospital",
    name: "출산 · 병원",
    icon: "🏥",
  },
  {
    id: "sleep",
    name: "수면",
    icon: "🛏️",
  },
  {
    id: "bath",
    name: "목욕",
    icon: "🛁",
  },
  {
    id: "feeding",
    name: "수유",
    icon: "🍼",
  },
  {
    id: "clothing",
    name: "의류",
    icon: "👕",
  },
  {
    id: "hygiene",
    name: "위생 · 세탁",
    icon: "🧺",
  },
  {
    id: "outdoor",
    name: "외출",
    icon: "👜",
  },
  {
    id: "mother",
    name: "산모",
    icon: "🤰",
  },
  {
    id: "life",
    name: "생활",
    icon: "🏠",
  },
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

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");

    return `${year}년 ${Number(month)}월 ${Number(day)}일`;
  };

  const handleCategoryPress = (categoryId: string, categoryName: string) => {
    console.log(categoryId, categoryName);
    // navigation.navigate("Checklist", {
    //   categoryId,
    //   categoryName,
    //   dueDate,
    //   babyOrder,
    // });
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
          <DDayMascot>
            <Mascot size={90} />
          </DDayMascot>

          <DDayContent>
            <DDayLabel>아기와 만날 날까지</DDayLabel>

            <DDayText>{dDayText}</DDayText>

            <DDayDate>{formatDate(dueDate)}</DDayDate>
          </DDayContent>
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

        {/* 카테고리 */}
        <SectionHeader>
          <SectionTitle>무엇부터 준비할까요?</SectionTitle>

          <SectionSubTitle>
            필요한 것들을 카테고리별로 살펴보세요.
          </SectionSubTitle>
        </SectionHeader>

        <CategoryGrid>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              activeOpacity={0.8}
              onPress={() => handleCategoryPress(category.id, category.name)}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>

              <CategoryName>{category.name}</CategoryName>

              <CategoryArrow>›</CategoryArrow>
            </CategoryCard>
          ))}
        </CategoryGrid>

        {/* 내 준비물 */}
        {/* <MyListCard
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("MyItems")
          }
        > */}
        <MyListCard activeOpacity={0.8} onPress={() => {}}>
          <MyListIcon>📝</MyListIcon>

          <MyListContent>
            <MyListTitle>내 준비물</MyListTitle>

            <MyListDescription>
              직접 필요한 물건을 추가해보세요.
            </MyListDescription>
          </MyListContent>

          <MyListArrow>›</MyListArrow>
        </MyListCard>

        <BottomSpace />
      </ScrollContent>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

const Header = styled.View`
  margin-top: 12px;
  margin-bottom: 20px;
`;

const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading}px;

  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme }) => theme.colors.text};
`;

const HeaderSubText = styled.Text`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.body}px;

  font-family: ${({ theme }) => theme.fontFamily.regular};

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const DDayCard = styled.View`
  width: 100%;
  min-height: 150px;

  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors.primary};

  padding: 18px;

  flex-direction: row;
  align-items: center;

  shadow-color: ${({ theme }) => theme.colors.primary};

  shadow-offset: 0px 5px;
  shadow-opacity: 0.18;
  shadow-radius: 10px;

  elevation: 4;
`;

const DDayMascot = styled.View`
  width: 105px;
  align-items: center;
  justify-content: center;
`;

const DDayContent = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const DDayLabel = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;

  font-family: ${({ theme }) => theme.fontFamily.medium};

  color: ${({ theme }) => theme.colors.card};

  opacity: 0.9;
`;

const DDayText = styled.Text`
  margin-top: 2px;

  font-size: 38px;

  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme }) => theme.colors.card};
`;

const DDayDate = styled.Text`
  margin-top: 2px;

  font-size: ${({ theme }) => theme.typography.small}px;

  font-family: ${({ theme }) => theme.fontFamily.medium};

  color: ${({ theme }) => theme.colors.card};

  opacity: 0.9;
`;

const ProgressCard = styled.View`
  width: 100%;

  margin-top: 16px;

  padding: 18px;

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

const ProgressFill = styled.View<{
  progress: number;
}>`
  width: ${({ progress }) => `${progress}%`};

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
  margin-bottom: 14px;
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

const CategoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 12px;
`;

const CategoryCard = styled.TouchableOpacity`
  width: 48%;

  min-height: 112px;

  padding: 16px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.card};

  border-width: 1px;

  border-color: ${({ theme }) => theme.colors.border};

  justify-content: center;

  shadow-color: ${({ theme }) => theme.colors.primary};

  shadow-offset: 0px 3px;
  shadow-opacity: 0.06;
  shadow-radius: 6px;

  elevation: 2;
`;

const CategoryIcon = styled.Text`
  font-size: 30px;

  margin-bottom: 8px;
`;

const CategoryName = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;

  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme }) => theme.colors.text};
`;

const CategoryArrow = styled.Text`
  position: absolute;

  right: 14px;
  top: 12px;

  font-size: 24px;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MyListCard = styled.TouchableOpacity`
  width: 100%;

  min-height: 82px;

  margin-top: 16px;

  padding: 16px 18px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};

  flex-direction: row;
  align-items: center;
`;

const MyListIcon = styled.Text`
  font-size: 30px;

  margin-right: 14px;
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
  margin-top: 3px;

  font-size: ${({ theme }) => theme.typography.small}px;

  font-family: ${({ theme }) => theme.fontFamily.regular};

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MyListArrow = styled.Text`
  font-size: 26px;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BottomSpace = styled.View`
  height: 30px;
`;
