import styled from "styled-components/native";
import Mascot from "../types/design-system/ui/Mascot";

export default function LoadingScreen() {
  return (
    <Container>
      <Mascot size={140} />

      <Title>아기마중</Title>
      <SubTitle>준비물을 불러오는 중이에요...</SubTitle>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.typography.title}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const SubTitle = styled.Text`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
