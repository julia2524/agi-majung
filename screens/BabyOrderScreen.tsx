import { useState } from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Mascot from "../types/design-system/ui/Mascot";
import PrimaryButton from "../types/design-system/ui/PrimaryButton";
import { RootStackParamList } from "../navigation/types";
import { saveBabyProfile } from "../storage/storage";
import { AppText } from "../utils/AppText";
import { theme } from "../types/design-system/theme/theme";

type Props = NativeStackScreenProps<RootStackParamList, "BabyOrderScreen">;

export default function BabyOrderScreen({ navigation, route }: Props) {
  const { dueDate } = route.params;

  const { width, height } = useWindowDimensions();

  const [babyOrder, setBabyOrder] = useState<"first" | "secondOrMore" | null>(
    null,
  );

  // 화면 크기에 따른 마스코트 크기
  const mascotSize = Math.min(150, Math.max(100, height * 0.19), width * 0.42);

  const handleNext = async () => {
    if (!babyOrder) return;

    await saveBabyProfile({
      dueDate,
      babyOrder,
    });

    navigation.navigate("HomeScreen", {
      dueDate,
      babyOrder,
    });
  };

  return (
    <Container>
      <ScreenScroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {/* =========================
            Main Content
        ========================= */}

        <Content>
          <MascotWrapper>
            <Mascot size={mascotSize} />
          </MascotWrapper>

          <Main>
            <Title>몇 번째 아기인가요?</Title>

            <SubTitle>
              {"아기의 순서에 따라\n준비할 것들이 조금 달라질 수 있어요."}
            </SubTitle>
          </Main>

          {/* =========================
              Options
          ========================= */}

          <OptionContainer>
            <Option
              selected={babyOrder === "first"}
              onPress={() => setBabyOrder("first")}
              activeOpacity={0.8}
              accessibilityRole="radio"
              accessibilityState={{
                selected: babyOrder === "first",
              }}
            >
              <IconContainer>
                <MaterialCommunityIcons
                  name="baby-bottle-outline"
                  size={25}
                  color={theme.colors.primary}
                />
              </IconContainer>

              <OptionTextContainer>
                <OptionTitle>첫째 아기</OptionTitle>

                <OptionDescription>
                  처음이라 하나씩 준비하고 있어요
                </OptionDescription>
              </OptionTextContainer>

              <Radio selected={babyOrder === "first"}>
                {babyOrder === "first" && <RadioInner />}
              </Radio>
            </Option>

            <Option
              selected={babyOrder === "secondOrMore"}
              onPress={() => setBabyOrder("secondOrMore")}
              activeOpacity={0.8}
              accessibilityRole="radio"
              accessibilityState={{
                selected: babyOrder === "secondOrMore",
              }}
            >
              <IconContainer>
                <MaterialCommunityIcons
                  name="baby-bottle-outline"
                  size={25}
                  color={theme.colors.primary}
                />
              </IconContainer>

              <OptionTextContainer>
                <OptionTitle>둘째 이상</OptionTitle>

                <OptionDescription>
                  이미 가지고 있는 물건도 있어요
                </OptionDescription>
              </OptionTextContainer>

              <Radio selected={babyOrder === "secondOrMore"}>
                {babyOrder === "secondOrMore" && <RadioInner />}
              </Radio>
            </Option>
          </OptionContainer>
        </Content>

        {/* =========================
            Bottom Button
        ========================= */}

        <ButtonContainer>
          <PrimaryButton
            title="다음"
            onPress={handleNext}
            disabled={!babyOrder}
          />
        </ButtonContainer>
      </ScreenScroll>
    </Container>
  );
}

/* =============================
   Screen
============================= */

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScreenScroll = styled.ScrollView`
  flex: 1;
`;

const Content = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 24px 24px 20px;
`;

const MascotWrapper = styled.View`
  margin-bottom: 20px;
`;

const Main = styled.View`
  width: 100%;
  align-items: center;
`;

const Title = styled(AppText)`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.heading * 1.4}px;
  margin-bottom: 12px;
`;

const SubTitle = styled(AppText)`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.button * 1.5}px;
`;

/* =============================
   Options
============================= */

const OptionContainer = styled.View`
  width: 100%;
  margin-top: 36px;
  gap: 12px;
`;

const Option = styled.TouchableOpacity<{ selected: boolean }>`
  width: 100%;
  min-height: 82px;

  padding: 16px 18px;

  border-radius: 20px;

  background-color: ${({ theme, selected }) =>
    selected
      ? (theme.colors.primaryLight ?? theme.colors.background)
      : theme.colors.card};

  border-width: 2px;

  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.border};

  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 42px;
  height: 42px;
  flex-shrink: 0;

  margin-right: 14px;
  border-radius: 21px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

const OptionTextContainer = styled.View`
  flex: 1;
  min-width: 0;
  justify-content: center;
`;

const OptionTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};

  line-height: ${({ theme }) => theme.typography.button * 1.4}px;

  margin-bottom: 5px;
`;

const OptionDescription = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};

  line-height: ${({ theme }) => theme.typography.small * 1.5}px;
`;

const Radio = styled.View<{ selected: boolean }>`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  margin-left: 10px;

  border-radius: 12px;
  border-width: 2px;

  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.border};

  align-items: center;
  justify-content: center;
`;

const RadioInner = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

/* =============================
   Bottom Button
============================= */

const ButtonContainer = styled.View`
  width: 100%;
  padding: 12px 24px 17px;
`;
