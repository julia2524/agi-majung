// import styled from "styled-components/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useTheme } from "styled-components/native";

// import BabyHeader from "../components/BabyHeader"; // 지난번에 만든 공통 헤더
// import { RootStackParamList } from "../navigation/types";
// import { babyItems } from "../data/babyItems";
// import {
//   getCategoryIcon,
//   getPriorityText,
//   getTimingText,
// } from "../utils/utils";
// import { SafeAreaView } from "react-native-safe-area-context";

// type Props = NativeStackScreenProps<RootStackParamList, "ItemDetailScreen">;

// export default function ItemDetailScreen({ route }: Props) {
//   const { itemId } = route.params;
//   const theme = useTheme();

//   const item = babyItems.find((i) => i.id === itemId);

//   if (!item) {
//     return (
//       <Container>
//         <BabyHeader />
//         <EmptyContainer>
//           <EmptyText>준비물 정보를 찾을 수 없어요.</EmptyText>
//         </EmptyContainer>
//       </Container>
//     );
//   }

//   return (
//     <Container>
//       <BabyHeader title="" />

//       <ScrollContent showsVerticalScrollIndicator={false}>
//         <ItemHeader>
//           <ItemIcon>
//             <MaterialCommunityIcons
//               name={getCategoryIcon(item.category)}
//               size={48}
//               color={theme.colors.primary}
//             />
//           </ItemIcon>
//           <ItemName>{item.title}</ItemName>
//         </ItemHeader>

//         <TagRow>
//           <ImportanceTag>
//             <TagText>{getPriorityText(item.priority)}</TagText>
//           </ImportanceTag>
//           {item.recommendedQuantity && (
//             <QuantityTag>
//               <QuantityTagText>추천 {item.recommendedQuantity}</QuantityTagText>
//             </QuantityTag>
//           )}
//         </TagRow>

//         {/* 4. 준비 시기 */}
//         <Section>
//           <SectionTitle>
//             <Ionicons
//               name="calendar-outline"
//               size={20}
//               color={theme.colors.primary}
//             />
//             <SectionTitleText>언제 준비할까요?</SectionTitleText>
//           </SectionTitle>

//           <InfoCard>
//             <InfoText>{getTimingText(item.timing)}</InfoText>
//           </InfoCard>
//         </Section>

//         <Section>
//           <SectionTitle>
//             <Ionicons
//               name="checkmark-circle-outline"
//               size={20}
//               color={theme.colors.primary}
//             />
//             <SectionTitleText>실전 판단</SectionTitleText>
//           </SectionTitle>

//           <DescriptionCard>
//             <InfoRow>
//               <InfoLabel>준비 방법</InfoLabel>
//               <InfoValue>{item.purchaseDecision}</InfoValue>
//             </InfoRow>

//             <Divider />

//             <InfoRow>
//               <InfoLabel>재사용</InfoLabel>
//               <InfoValue>
//                 {item.isReusable ? "재사용 가능" : "재사용하지 않음"}
//               </InfoValue>
//             </InfoRow>
//           </DescriptionCard>
//         </Section>

//         {item.noticeTag && (
//           <Section>
//             <SectionTitle>
//               <Ionicons
//                 name="information-circle-outline"
//                 size={20}
//                 color={theme.colors.primary}
//               />
//               <SectionTitleText>알아두세요</SectionTitleText>
//             </SectionTitle>
//             <NoticeCard>
//               <NoticeText>{item.noticeTag}</NoticeText>
//             </NoticeCard>
//           </Section>
//         )}

//         {item.review && (
//           <Section>
//             <SectionTitle>
//               <Ionicons
//                 name="create-outline"
//                 size={20}
//                 color={theme.colors.primary}
//               />
//               <SectionTitleText>실제 경험</SectionTitleText>
//             </SectionTitle>

//             <ReviewCard>
//               <ReviewText>{item.review}</ReviewText>
//             </ReviewCard>
//           </Section>
//         )}

//         {item.tip && (
//           <Section>
//             <SectionTitle>
//               <Ionicons
//                 name="bulb-outline"
//                 size={20}
//                 color={theme.colors.primary}
//               />
//               <SectionTitleText>실전 TIP</SectionTitleText>
//             </SectionTitle>

//             <TipCard>
//               <TipText>{item.tip}</TipText>
//             </TipCard>
//           </Section>
//         )}
//         <BottomSpace />
//       </ScrollContent>
//     </Container>
//   );
// }

// const Container = styled(SafeAreaView)`
//   flex: 1;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// const ScrollContent = styled.ScrollView`
//   flex: 1;
//   padding-horizontal: 24px;
// `;

// const ItemHeader = styled.View`
//   align-items: center;
// `;

// const ItemIcon = styled.View`
//   margin-bottom: -10px;
// `;

// const ItemName = styled.Text`
//   font-size: ${({ theme }) => theme.typography.heading}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const TagRow = styled.View`
//   flex-direction: row;
//   justify-content: center;
//   gap: 8px;
//   margin-top: -10px;
// `;

// const ImportanceTag = styled.View`
//   padding: 6px 14px;
//   border-radius: 20px;
//   background-color: ${({ theme }) => theme.colors.primary};
// `;

// const QuantityTag = styled.View`
//   padding: 6px 14px;
//   border-radius: 20px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
// `;

// const TagText = styled.Text`
//   font-size: ${({ theme }) => theme.typography.small}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: #ffffff; /* 중요 태그 텍스트 흰색 처리 */
// `;

// const QuantityTagText = styled.Text`
//   font-size: ${({ theme }) => theme.typography.small}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const Section = styled.View`
//   margin-top: 24px;
// `;

// const SectionTitle = styled.View`
//   flex-direction: row;
//   align-items: center;
//   gap: 6px;
// `;

// const SectionTitleText = styled.Text`
//   font-size: ${({ theme }) => theme.typography.subheading}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const InfoCard = styled.View`
//   padding: 16px;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
//   flex-direction: row;
//   align-items: center;
//   gap: 12px;
// `;

// const InfoText = styled.Text`
//   flex: 1;
//   font-size: ${({ theme }) => theme.typography.body}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const DescriptionCard = styled.View`
//   padding: 16px 18px;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
// `;

// const InfoRow = styled.View`
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
// `;

// const InfoLabel = styled.Text`
//   font-size: ${({ theme }) => theme.typography.body}px;
//   font-family: ${({ theme }) => theme.fontFamily.medium};
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const InfoValue = styled.Text`
//   flex: 1;
//   margin-left: 16px;
//   text-align: right;
//   font-size: ${({ theme }) => theme.typography.body}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const Divider = styled.View`
//   height: 1px;
//   margin-vertical: 14px;
//   background-color: ${({ theme }) => theme.colors.border};
// `;

// const NoticeCard = styled.View`
//   padding: 16px 18px;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
// `;

// const NoticeText = styled.Text`
//   font-size: ${({ theme }) => theme.typography.body}px;
//   font-family: ${({ theme }) => theme.fontFamily.medium};
//   line-height: 24px;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const ReviewCard = styled.View`
//   padding: 16px 18px;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
// `;

// const ReviewText = styled.Text`
//   font-size: ${({ theme }) => theme.typography.body}px;
//   font-family: ${({ theme }) => theme.fontFamily.regular};
//   line-height: 24px;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const TipCard = styled.View`
//   padding: 16px 18px;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.colors.secondary};
// `;

// const TipText = styled.Text`
//   font-size: ${({ theme }) => theme.typography.body}px;
//   font-family: ${({ theme }) => theme.fontFamily.medium};
//   line-height: 24px;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const EmptyContainer = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// const EmptyText = styled.Text`
//   font-size: ${({ theme }) => theme.typography.body}px;
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const BottomSpace = styled.View`
//   height: 40px;
// `;

import React from "react";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import BabyHeader from "../components/BabyHeader";
import { RootStackParamList } from "../navigation/types";
import { babyItems } from "../data/babyItems";
import { getCategoryIcon, getItemIcon, getPriorityText } from "../utils/utils";
import { getPreparationPeriodText } from "../utils/itemTiming";
import { GlossyDot } from "../components/GlossyDot/GlossyDot";

type Props = NativeStackScreenProps<RootStackParamList, "ItemDetailScreen">;

// purchaseDecision 코드값을 사용자 친화적인 한글 가이드로 매핑
// purchaseDecision 코드값을 사용자 친화적인 한글 가이드로 매핑 (dotType 추가)
const getDecisionGuide = (decision?: string) => {
  switch (decision) {
    case "PREPARE_IN_ADVANCE":
      return {
        dotType: "yellow" as const,
        badgeText: "미리 준비 추천",
        title: "출산 전에 미리 준비해두면 좋아요",
        desc: "출산 전에 미리 준비하고 세탁·세팅까지 해두면 출산 후에 바로 사용할 수 있어요.",
        bg: "#FFF3C4",
        color: "#D97706",
      };
    case "PREPARE_BEFORE_USE":
      return {
        dotType: "green" as const,
        badgeText: "사용 전에 준비",
        title: "사용하기 전에 준비해두세요",
        desc: "실제로 사용할 시기에 맞춰 준비하면 좋아요. 미리 준비해두거나 필요할 때 바로 구매할 수 있도록 알아두세요.",
        bg: "#E0F2FE",
        color: "#0284C7",
      };
    case "SEE_AND_BUY":
      return {
        dotType: "blue" as const,
        badgeText: "상황 보고 구매",
        title: "아기와 상황을 보고 결정해도 좋아요",
        desc: "아기의 성향이나 실제 사용 상황을 확인한 뒤 필요한지 결정해도 늦지 않아요.",
        bg: "#F3E8FF",
        color: "#9333EA",
      };
    case "BUY_AFTER_BIRTH":
      return {
        dotType: "blue" as const,
        badgeText: "출산 후 준비",
        title: "아기가 태어난 후 준비해도 좋아요",
        desc: "출산 전에 미리 준비하기보다 실제로 필요한지 확인한 뒤 구매해도 괜찮아요.",
        bg: "#F3E8FF",
        color: "#9333EA",
      };
    default:
      return {
        dotType: "green" as const,
        badgeText: "필요시 구매",
        title: "필요에 맞춰 선택하세요",
        desc: "상황에 따라 필요한 시기에 구매하시면 됩니다.",
        bg: "#F1F5F9",
        color: "#475569",
      };
  }
};
export default function ItemDetailScreen({ route }: Props) {
  const { itemId } = route.params;
  const theme = useTheme();

  // itemId가 string으로 오므로 데이터상의 id(number 또는 string)와 유연하게 비교
  const item = babyItems.find((i) => String(i.id) === String(itemId));

  if (!item) {
    return (
      <Container edges={["top"]}>
        <BabyHeader title="" />
        <EmptyContainer>
          <EmptyIconWrapper>
            <Ionicons
              name="search-outline"
              size={32}
              color={theme.colors.textSecondary}
            />
          </EmptyIconWrapper>
          <EmptyText>준비물 정보를 찾을 수 없어요.</EmptyText>
        </EmptyContainer>
      </Container>
    );
  }

  const guide = getDecisionGuide(item.purchaseDecision);

  return (
    <Container edges={["top"]}>
      <BabyHeader title="" />

      <ScrollContent showsVerticalScrollIndicator={false}>
        {/* 1. 상단 아이템 헤더 */}
        <ItemHeader>
          <ItemIcon>
            <MaterialCommunityIcons
              name={getItemIcon(item.title, item.category) as any}
              size={44}
              color={theme.colors.primary}
            />
          </ItemIcon>
          <ItemName>{item.title}</ItemName>

          <TagRow>
            <ImportanceTag>
              <TagText>{getPriorityText(item.priority)}</TagText>
            </ImportanceTag>
            {item.recommendedQuantity && (
              <QuantityTag>
                <QuantityTagText>
                  추천 수량: {item.recommendedQuantity}
                </QuantityTagText>
              </QuantityTag>
            )}
          </TagRow>
        </ItemHeader>

        {/* 2. ✨ [NEW] 직관적인 구매 결정 가이드 카드 (최상단 강조) */}
        <DecisionCard bg={guide.bg}>
          <DecisionBadge>
            <GlossyDot type={guide.dotType} size={14} />
            <DecisionBadgeText color={guide.color}>
              {guide.badgeText}
            </DecisionBadgeText>
          </DecisionBadge>
          <DecisionTitle>{guide.title}</DecisionTitle>
          <DecisionDesc>{guide.desc}</DecisionDesc>
        </DecisionCard>

        {/* 3. 체크 포인트 (재사용 여부 등) */}
        <Section>
          <SectionTitle>
            <Ionicons
              name="checkmark-circle-outline"
              size={20}
              color={theme.colors.primary}
            />
            <SectionTitleText>체크 포인트</SectionTitleText>
          </SectionTitle>

          <DescriptionCard>
            <InfoRow>
              <InfoLabel>물려받기</InfoLabel>
              <InfoValue>
                {item.reuseType === "GOOD" && "물려받아도 좋아요"}
                {item.reuseType === "CHECK" &&
                  "상태를 확인한 뒤 결정해도 좋아요"}
                {item.reuseType === "NEW" && "새 제품을 권장해요"}
              </InfoValue>
            </InfoRow>

            {item.preparationPeriod && (
              <>
                <Divider />
                <InfoRow>
                  <InfoLabel>준비하면 좋은 시기</InfoLabel>
                  <InfoValue>
                    {getPreparationPeriodText(
                      item.preparationPeriod.fromWeek,
                      item.preparationPeriod.toWeek,
                    )}
                  </InfoValue>
                </InfoRow>
              </>
            )}
          </DescriptionCard>
        </Section>

        {/* 4. 알아두세요 (주의사항) */}
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

        {/* 5. 선배 맘의 실전 후기 */}
        {item.review && (
          <Section>
            <SectionTitle>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={20}
                color={theme.colors.primary}
              />
              <SectionTitleText>선배 맘의 솔직 경험</SectionTitleText>
            </SectionTitle>

            <ReviewCard>
              <ReviewText>"{item.review}"</ReviewText>
            </ReviewCard>
          </Section>
        )}

        {/* 6. 실전 TIP */}
        {item.tip && (
          <Section>
            <SectionTitle>
              <Ionicons
                name="bulb-outline"
                size={20}
                color={theme.colors.primary}
              />
              <SectionTitleText>구매 TIP</SectionTitleText>
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

const ItemHeader = styled.View`
  align-items: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

const ItemIcon = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.card};
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const ItemName = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const TagRow = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

const ImportanceTag = styled.View`
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const QuantityTag = styled.View`
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const TagText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
`;

const QuantityTagText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* 구매 결정 강조 카드 */
const DecisionCard = styled.View<{ bg: string }>`
  padding: 18px 20px;
  border-radius: 20px;
  background-color: ${({ bg }) => bg};
  margin-top: 4px;
`;

/* 💡 GlossyDot과 텍스트를 수직 정렬하고 간격을 벌려주는 DecisionBadge */
const DecisionBadge = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 6px;
  margin-bottom: -8px;
`;

const DecisionBadgeText = styled.Text<{ color: string }>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ color }) => color};
  include-font-padding: false;
`;

const DecisionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #1e293b;
  margin-bottom: -4px;
`;

const DecisionDesc = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: #475569;
  line-height: 18px;
`;

const Section = styled.View`
  margin-top: 20px;
`;

const SectionTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const SectionTitleText = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const DescriptionCard = styled.View`
  padding: 16px;
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
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InfoValue = styled.Text`
  flex: 1;
  margin-left: 16px;
  text-align: right;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const Divider = styled.View`
  height: 1px;
  margin-vertical: 12px;
  background-color: ${({ theme }) => theme.colors.border};
`;

const NoticeCard = styled.View`
  padding: 14px 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const NoticeText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const ReviewCard = styled.View`
  padding: 14px 16px;
  border-radius: 16px;
  background-color: #f8fafc;
  border-width: 1px;
  border-color: #e2e8f0;
`;

const ReviewText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  line-height: 20px;
  color: #334155;
  font-style: italic;
`;

const TipCard = styled.View`
  padding: 14px 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const TipText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

/* 아이콘을 감싸주는 은은한 동그라미 배경 */
const EmptyIconWrapper = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const BottomSpace = styled.View`
  height: 80px;
`;
