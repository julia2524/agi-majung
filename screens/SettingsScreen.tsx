// import React from "react";
// import { Alert } from "react-native";
// import styled, { useTheme } from "styled-components/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";

// import { RootStackParamList } from "../navigation/types";
// import BabyHeader from "../components/BabyHeader";
// import { deleteAllData } from "../storage/storage";

// type Props = NativeStackScreenProps<RootStackParamList, "SettingScreen">;

// export default function SettingScreen({ navigation }: Props) {
//   const theme = useTheme();

//   // -----------------------------
//   // 아기 정보 다시 설정
//   // -----------------------------
//   const handleResetBabyData = () => {
//     Alert.alert(
//       "아기 정보 다시 설정",
//       "예정일과 아기 순서를 다시 설정할까요?",
//       [
//         {
//           text: "취소",
//           style: "cancel",
//         },
//         {
//           text: "다시 설정",
//           onPress: () => {
//             navigation.navigate("DueDateScreen");
//           },
//         },
//       ],
//     );
//   };

//   // -----------------------------
//   // 모든 데이터 삭제
//   // -----------------------------
//   const handleDeleteAllData = () => {
//     Alert.alert(
//       "내 데이터 삭제",
//       "저장된 아기 정보와 준비물 체크 상태,\n내 준비물을 모두 삭제할까요?",
//       [
//         {
//           text: "취소",
//           style: "cancel",
//         },
//         {
//           text: "삭제",
//           style: "destructive",
//           onPress: async () => {
//             await deleteAllData();

//             navigation.reset({
//               index: 0,
//               routes: [{ name: "OnboardingScreen" }],
//             });
//           },
//         },
//       ],
//     );
//   };

//   return (
//     <Container>
//       <BabyHeader
//         title="설정"
//         onBackPress={() => {
//           if (navigation.canGoBack()) {
//             navigation.goBack();
//           }
//         }}
//       />

//       <ScrollContent showsVerticalScrollIndicator={false}>
//         {/* -----------------------------
//             아기 정보
//         ----------------------------- */}
//         <Section>
//           <SectionTitle>아기 정보</SectionTitle>

//           <MenuButton activeOpacity={0.8} onPress={handleResetBabyData}>
//             <MenuContent>
//               <IconContainer>
//                 <Ionicons
//                   name="refresh-outline"
//                   size={22}
//                   color={theme.colors.primary}
//                 />
//               </IconContainer>

//               <TextContainer>
//                 <MenuTitle>아기 정보 다시 설정</MenuTitle>
//                 <MenuDescription>
//                   예정일과 아기 순서를 다시 설정해요.
//                 </MenuDescription>
//               </TextContainer>

//               <Arrow>
//                 <Ionicons
//                   name="chevron-forward"
//                   size={24}
//                   color={theme.colors.textSecondary}
//                 />
//               </Arrow>
//             </MenuContent>
//           </MenuButton>
//         </Section>

//         {/* -----------------------------
//             데이터
//         ----------------------------- */}
//         <Section>
//           <SectionTitle>데이터</SectionTitle>

//           <DeleteButton activeOpacity={0.8} onPress={handleDeleteAllData}>
//             <DeleteIcon>
//               <Ionicons name="trash-outline" size={22} color="#E57373" />
//             </DeleteIcon>

//             <TextContainer>
//               <DeleteTitle>내 데이터 삭제</DeleteTitle>
//               <DeleteDescription>
//                 저장된 모든 데이터를 삭제해요.
//               </DeleteDescription>
//             </TextContainer>
//           </DeleteButton>
//         </Section>
//         {/* -----------------------------
//             앱 정보
//         ----------------------------- */}
//         <Section>
//           <SectionTitle>앱 정보</SectionTitle>

//           <InfoCard>
//             <InfoRow>
//               <InfoLabel>버전</InfoLabel>
//               <InfoValue>1.0.0</InfoValue>
//             </InfoRow>
//           </InfoCard>
//         </Section>

//         <BottomSpace />
//       </ScrollContent>
//     </Container>
//   );
// }

// /* =========================================================
//    Styled Components
// ========================================================= */

// const Container = styled(SafeAreaView)`
//   flex: 1;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// const ScrollContent = styled.ScrollView`
//   flex: 1;
//   padding-horizontal: 24px;
// `;

// const Section = styled.View`
//   margin-top: 24px;
// `;

// const SectionTitle = styled.Text`
//   font-size: ${({ theme }) => theme.typography.subheading}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const MenuButton = styled.TouchableOpacity`
//   width: 100%;
//   min-height: 76px;
//   padding: 14px 16px;
//   border-radius: 18px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
// `;

// const MenuCard = styled.View`
//   width: 100%;
//   min-height: 76px;
//   padding: 14px 16px;
//   border-radius: 18px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
// `;

// const MenuContent = styled.View`
//   flex-direction: row;
//   align-items: center;
// `;

// const IconContainer = styled.View`
//   width: 42px;
//   height: 42px;
//   border-radius: 21px;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// const TextContainer = styled.View`
//   flex: 1;
//   margin-left: 12px;
// `;

// const MenuTitle = styled.Text`
//   font-size: ${({ theme }) => theme.typography.button}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const MenuDescription = styled.Text`
//   margin-top: -20px;
//   font-size: ${({ theme }) => theme.typography.small}px;
//   font-family: ${({ theme }) => theme.fontFamily.regular};
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const Arrow = styled.View`
//   margin-left: 8px;
// `;

// const InfoCard = styled.View`
//   width: 100%;
//   border-radius: 18px;
//   padding: 18px 16px;
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
//   color: ${({ theme }) => theme.colors.text};
// `;

// const InfoValue = styled.Text`
//   font-size: ${({ theme }) => theme.typography.body}px;
//   font-family: ${({ theme }) => theme.fontFamily.medium};
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const DeleteButton = styled.TouchableOpacity`
//   width: 100%;
//   min-height: 76px;
//   padding: 14px 16px;
//   border-radius: 18px;
//   background-color: ${({ theme }) => theme.colors.card};
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
//   flex-direction: row;
//   align-items: center;
// `;

// const DeleteIcon = styled.View`
//   width: 42px;
//   height: 42px;
//   border-radius: 21px;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff1f1;
// `;

// const DeleteTitle = styled.Text`
//   font-size: ${({ theme }) => theme.typography.button}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: #e57373;
// `;

// const DeleteDescription = styled.Text`
//   margin-top: -20px;
//   font-size: ${({ theme }) => theme.typography.small}px;
//   font-family: ${({ theme }) => theme.fontFamily.regular};
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

// const BottomSpace = styled.View`
//   height: 40px;
// `;

import React from "react";
import { Alert } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation/types";
import BabyHeader from "../components/BabyHeader";
import {
  deleteAllData,
  resetBabyData,
  resetCheckedItems,
} from "../storage/storage";

type Props = NativeStackScreenProps<RootStackParamList, "SettingScreen">;

export default function SettingScreen({ navigation }: Props) {
  const theme = useTheme();

  // -----------------------------
  // 아기 정보 다시 설정
  // -----------------------------
  const handleResetBabyData = () => {
    Alert.alert(
      "아기 정보 다시 설정",
      "예정일과 아기 순서를 다시 설정할까요?",
      [
        { text: "취소", style: "cancel" },
        {
          text: "다시 설정",
          onPress: () => {
            navigation.navigate("DueDateScreen");
          },
        },
      ],
    );
  };

  // -----------------------------
  // 체크리스트 초기화 (체크 상태만 지우기)
  // -----------------------------
  const handleResetCheckedItems = () => {
    Alert.alert(
      "체크리스트 초기화",
      "모든 품목의 체크 상태를 해제할까요?\n(아기 정보와 내 준비물 목록은 유지돼요)",
      [
        { text: "취소", style: "cancel" },
        {
          text: "초기화",
          style: "destructive",
          onPress: async () => {
            await resetCheckedItems();
            Alert.alert("알림", "체크리스트가 초기화되었어요.");
          },
        },
      ],
    );
  };

  // -----------------------------
  // 모든 데이터 삭제 (전체 초기화)
  // -----------------------------
  const handleDeleteAllData = () => {
    Alert.alert(
      "전체 데이터 삭제",
      "저장된 아기 정보, 체크 상태, 내 준비물을 모두 삭제하고 초기화할까요?",
      [
        { text: "취소", style: "cancel" },
        {
          text: "삭제",
          style: "destructive",
          onPress: async () => {
            await deleteAllData();
            navigation.reset({
              index: 0,
              routes: [{ name: "OnboardingScreen" }],
            });
          },
        },
      ],
    );
  };

  return (
    <Container>
      <BabyHeader
        title="설정"
        onBackPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      />

      <ScrollContent showsVerticalScrollIndicator={false}>
        {/* -----------------------------
            아기 정보
        ----------------------------- */}
        <Section>
          <SectionTitle>아기 정보</SectionTitle>

          <MenuButton activeOpacity={0.8} onPress={handleResetBabyData}>
            <MenuContent>
              <IconContainer>
                <Ionicons
                  name="refresh-outline"
                  size={22}
                  color={theme.colors.primary}
                />
              </IconContainer>

              <TextContainer>
                <MenuTitle>아기 정보 다시 설정</MenuTitle>
                <MenuDescription>
                  예정일과 아기 순서를 다시 설정해요.
                </MenuDescription>
              </TextContainer>

              <Arrow>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={theme.colors.textSecondary}
                />
              </Arrow>
            </MenuContent>
          </MenuButton>
        </Section>

        {/* -----------------------------
            데이터 관리
        ----------------------------- */}
        <Section>
          <SectionTitle>데이터 관리</SectionTitle>

          {/* 1. 체크 상태만 초기화 */}
          <MenuButton
            activeOpacity={0.8}
            onPress={handleResetCheckedItems}
            style={{ marginBottom: 10 }}
          >
            <MenuContent>
              <IconContainer>
                <Ionicons
                  name="checkbox-outline"
                  size={22}
                  color={theme.colors.primary}
                />
              </IconContainer>

              <TextContainer>
                <MenuTitle>체크리스트 초기화</MenuTitle>
                <MenuDescription>
                  체크한 상태만 해제하고 다시 시작해요.
                </MenuDescription>
              </TextContainer>

              <Arrow>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={theme.colors.textSecondary}
                />
              </Arrow>
            </MenuContent>
          </MenuButton>

          {/* 2. 전체 데이터 삭제 */}
          <DeleteButton activeOpacity={0.8} onPress={handleDeleteAllData}>
            <DeleteIcon>
              <Ionicons name="trash-outline" size={22} color="#E57373" />
            </DeleteIcon>

            <TextContainer>
              <DeleteTitle>전체 데이터 삭제</DeleteTitle>
              <DeleteDescription>
                모든 데이터를 삭제하고{"\n"}앱을 처음 상태로 돌아가요.
              </DeleteDescription>
            </TextContainer>

            <Arrow>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={theme.colors.textSecondary}
              />
            </Arrow>
          </DeleteButton>
        </Section>

        {/* -----------------------------
            앱 정보
        ----------------------------- */}
        <Section>
          <SectionTitle>앱 정보</SectionTitle>

          <InfoCard>
            <InfoRow>
              <InfoLabel>버전</InfoLabel>
              <InfoValue>1.0.0</InfoValue>
            </InfoRow>
          </InfoCard>
        </Section>

        <BottomSpace />
      </ScrollContent>
    </Container>
  );
}

/* =========================================================
   Styled Components
========================================================= */

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
  padding-horizontal: 24px;
`;

const Section = styled.View`
  margin-top: 24px;
`;

const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const MenuButton = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 16px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const MenuContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const TextContainer = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const MenuTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const MenuDescription = styled.Text`
  margin-top: -20px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Arrow = styled.View`
  margin-left: 8px;
`;

const InfoCard = styled.View`
  width: 100%;
  border-radius: 18px;
  padding: 18px 16px;
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
  color: ${({ theme }) => theme.colors.text};
`;

const InfoValue = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 16px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  flex-direction: row;
  align-items: center;
`;

const DeleteIcon = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  background-color: #fff1f1;
`;

const DeleteTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #e57373;
`;

const DeleteDescription = styled.Text`
  margin-top: -20px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BottomSpace = styled.View`
  height: 40px;
`;
