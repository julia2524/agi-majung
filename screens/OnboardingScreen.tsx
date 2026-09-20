import { ImageBackground } from "react-native";
import { ASSETS } from "../assets/assets";
import Mascot from "../types/design-system/ui/Mascot";
import PrimaryButton from "../types/design-system/ui/PrimaryButton";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

type OnboardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingScreen"
>;

export default function OnboardingScreen() {
  const navigation = useNavigation<OnboardNavigationProp>();
  const handleStart = () => {
    navigation.navigate("DueDateScreen" as never);
  };

  return (
    <ImageBackground
      source={ASSETS.onBoardBackground}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Container>
        <Content>
          <MascotWrapper>
            <Mascot size={200} />
          </MascotWrapper>

          <Main>
            <Title>아기마중</Title>

            <SubTitle>{"아기 오기 전,\n필요한 것만 차근차근."}</SubTitle>
          </Main>
        </Content>

        <ButtonContainer>
          <PrimaryButton title="시작하기" onPress={handleStart} />
        </ButtonContainer>
      </Container>
    </ImageBackground>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MascotWrapper = styled.View``;

export const Main = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.typography.hero}px;
  font-family: ${(props) => props.theme.fontFamily.extraBold};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-bottom: -23px;
`;

export const SubTitle = styled.Text`
  font-size: ${(props) => props.theme.typography.button}px;
  font-family: ${(props) => props.theme.fontFamily.extraBold};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  line-height: 30px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  padding-bottom: 17px;
`;
