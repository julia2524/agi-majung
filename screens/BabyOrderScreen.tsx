import { useState } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Mascot from "../types/design-system/ui/Mascot";
import PrimaryButton from "../types/design-system/ui/PrimaryButton";
import { RootStackParamList } from "../navigation/types";
import { saveBabyProfile } from "../utils/storage";

type Props = NativeStackScreenProps<RootStackParamList, "BabyOrderScreen">;

export default function BabyOrderScreen({ navigation, route }: Props) {
  const { dueDate } = route.params;

  const [babyOrder, setBabyOrder] = useState<"first" | "secondOrMore" | null>(
    null,
  );

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
      <Content>
        <MascotWrapper>
          <Mascot size={150} />
        </MascotWrapper>

        <Title>몇 번째 아기인가요?</Title>

        <SubTitle>
          {"아기의 순서에 따라\n준비할 것들이 조금 달라질 수 있어요."}
        </SubTitle>

        <OptionContainer>
          <Option
            selected={babyOrder === "first"}
            onPress={() => setBabyOrder("first")}
            activeOpacity={0.8}
          >
            <OptionEmoji>👶</OptionEmoji>

            <OptionTextContainer>
              <OptionTitle selected={babyOrder === "first"}>
                첫째 아기
              </OptionTitle>

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
          >
            <OptionEmoji>👶🏻</OptionEmoji>

            <OptionTextContainer>
              <OptionTitle selected={babyOrder === "secondOrMore"}>
                둘째 이상
              </OptionTitle>

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

      <ButtonContainer>
        <PrimaryButton
          title="다음"
          onPress={handleNext}
          disabled={!babyOrder}
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MascotWrapper = styled.View`
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 12px;
`;

const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  line-height: 24px;
`;

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

const OptionEmoji = styled.Text`
  font-size: 34px;
  margin-right: 14px;
`;

const OptionTextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const OptionTitle = styled.Text<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.typography.button}px;

  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: -15px;
`;

const OptionDescription = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;

  font-family: ${({ theme }) => theme.fontFamily.medium};

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Radio = styled.View<{ selected: boolean }>`
  width: 24px;
  height: 24px;

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

const ButtonContainer = styled.View`
  width: 100%;
  padding-bottom: 12px;
`;
