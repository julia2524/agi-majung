import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import BabyHeader from "../components/BabyHeader"; // 지난번에 만든 공통 헤더
import { RootStackParamList } from "../navigation/types";
import { babyItems } from "../data/babyItems";
import {
  getCategoryIcon,
  getPriorityText,
  getTimingText,
} from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "ItemDetailScreen">;

export default function ItemDetailScreen({ route }: Props) {
  const { itemId } = route.params;
  const theme = useTheme();

  const item = babyItems.find((i) => i.id === itemId);

  if (!item) {
    return (
      <Container>
        <BabyHeader />
        <EmptyContainer>
          <EmptyText>준비물 정보를 찾을 수 없어요.</EmptyText>
        </EmptyContainer>
      </Container>
    );
  }

  return (
    <Container>
      <BabyHeader title="" />

      <ScrollContent showsVerticalScrollIndicator={false}>
        <ItemHeader>
          <ItemIcon>
            <MaterialCommunityIcons
              name={getCategoryIcon(item.category)}
              size={48}
              color={theme.colors.primary}
            />
          </ItemIcon>
          <ItemName>{item.title}</ItemName>
        </ItemHeader>

        <TagRow>
          <ImportanceTag>
            <TagText>{getPriorityText(item.priority)}</TagText>
          </ImportanceTag>
          {item.recommendedQuantity && (
            <QuantityTag>
              <QuantityTagText>추천 {item.recommendedQuantity}</QuantityTagText>
            </QuantityTag>
          )}
        </TagRow>

        {/* 4. 준비 시기 */}
        <Section>
          <SectionTitle>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={theme.colors.primary}
            />
            <SectionTitleText>언제 준비할까요?</SectionTitleText>
          </SectionTitle>

          <InfoCard>
            <InfoText>{getTimingText(item.timing)}</InfoText>
          </InfoCard>
        </Section>

        <Section>
          <SectionTitle>
            <Ionicons
              name="checkmark-circle-outline"
              size={20}
              color={theme.colors.primary}
            />
            <SectionTitleText>실전 판단</SectionTitleText>
          </SectionTitle>

          <DescriptionCard>
            <InfoRow>
              <InfoLabel>준비 방법</InfoLabel>
              <InfoValue>{item.purchaseDecision}</InfoValue>
            </InfoRow>

            <Divider />

            <InfoRow>
              <InfoLabel>재사용</InfoLabel>
              <InfoValue>
                {item.isReusable ? "재사용 가능" : "재사용하지 않음"}
              </InfoValue>
            </InfoRow>
          </DescriptionCard>
        </Section>

        {item.noticeTag && (
          <Section>
            <SectionTitle>
              <Ionicons
                name="information-circle-outline"
                size={20}
                color={theme.colors.primary}
              />
              <SectionTitleText>알아두세요</SectionTitleText>
            </SectionTitle>
            <NoticeCard>
              <NoticeText>{item.noticeTag}</NoticeText>
            </NoticeCard>
          </Section>
        )}

        {item.review && (
          <Section>
            <SectionTitle>
              <Ionicons
                name="create-outline"
                size={20}
                color={theme.colors.primary}
              />
              <SectionTitleText>실제 경험</SectionTitleText>
            </SectionTitle>

            <ReviewCard>
              <ReviewText>{item.review}</ReviewText>
            </ReviewCard>
          </Section>
        )}

        {item.tip && (
          <Section>
            <SectionTitle>
              <Ionicons
                name="bulb-outline"
                size={20}
                color={theme.colors.primary}
              />
              <SectionTitleText>실전 TIP</SectionTitleText>
            </SectionTitle>

            <TipCard>
              <TipText>{item.tip}</TipText>
            </TipCard>
          </Section>
        )}
        <BottomSpace />
      </ScrollContent>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
  padding-horizontal: 24px;
`;

const ItemHeader = styled.View`
  align-items: center;
`;

const ItemIcon = styled.View`
  margin-bottom: -10px;
`;

const ItemName = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const TagRow = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-top: -10px;
`;

const ImportanceTag = styled.View`
  padding: 6px 14px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const QuantityTag = styled.View`
  padding: 6px 14px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const TagText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff; /* 중요 태그 텍스트 흰색 처리 */
`;

const QuantityTagText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Section = styled.View`
  margin-top: 24px;
`;

const SectionTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const SectionTitleText = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const InfoCard = styled.View`
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const InfoText = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const DescriptionCard = styled.View`
  padding: 16px 18px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoLabel = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InfoValue = styled.Text`
  flex: 1;
  margin-left: 16px;
  text-align: right;
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const Divider = styled.View`
  height: 1px;
  margin-vertical: 14px;
  background-color: ${({ theme }) => theme.colors.border};
`;

const NoticeCard = styled.View`
  padding: 16px 18px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const NoticeText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const ReviewCard = styled.View`
  padding: 16px 18px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const ReviewText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const TipCard = styled.View`
  padding: 16px 18px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const TipText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BottomSpace = styled.View`
  height: 40px;
`;
