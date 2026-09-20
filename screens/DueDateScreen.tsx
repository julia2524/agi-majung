import { useState } from "react";
import { Modal } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Mascot from "../types/design-system/ui/Mascot";
import PrimaryButton from "../types/design-system/ui/PrimaryButton";
import { RootStackParamList } from "../navigation/types";
import CustomCalendar from "../components/CustomCalendar";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "DueDateScreen">;

export default function DueDateScreen({ navigation }: Props) {
  const theme = useTheme();

  // 실제로 확정된 예정일
  const [dueDate, setDueDate] = useState<string | null>(null);

  // 달력에서 현재 선택하고 있는 날짜
  const [selectedDate, setSelectedDate] = useState<string>("");

  // 달력 Modal 표시 여부
  const [isPickerVisible, setPickerVisible] = useState(false);

  const todayString = new Date().toISOString().split("T")[0];

  // 날짜 박스 클릭
  const handleOpenCalendar = () => {
    // 이미 선택한 날짜가 있다면 그 날짜부터 보여주기
    // 없다면 오늘부터 시작
    setSelectedDate(dueDate ?? todayString);
    setPickerVisible(true);
  };

  // 달력에서 날짜 선택
  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
  };

  // 취소
  const handleCancel = () => {
    setPickerVisible(false);
  };

  // 달력에서 선택 완료
  const handleConfirm = () => {
    if (!selectedDate) return;

    setDueDate(selectedDate);
    setPickerVisible(false);
  };

  // 다음 화면
  const handleNext = () => {
    if (!dueDate) return;

    navigation.navigate("BabyOrderScreen", {
      dueDate,
    });
  };

  // YYYY-MM-DD → YYYY년 M월 D일
  const formatDate = (dateString: string | null) => {
    if (!dateString) {
      return "날짜를 선택해주세요";
    }

    const [year, month, day] = dateString.split("-");

    return `${year}년 ${Number(month)}월 ${Number(day)}일`;
  };

  return (
    <Container>
      <Content>
        <MascotWrapper>
          <Mascot size={150} />
        </MascotWrapper>

        <Title>아기와 만날 날을 알려주세요</Title>

        <SubTitle>
          {"출산 예정일을 알려주시면\n준비할 시간을 함께 계산해드릴게요."}
        </SubTitle>

        <DateSection>
          <SectionLabel>출산 예정일</SectionLabel>

          <DateButton onPress={handleOpenCalendar}>
            <DateText selected={!!dueDate}>{formatDate(dueDate)}</DateText>

            <Arrow>›</Arrow>
          </DateButton>
        </DateSection>
      </Content>

      <ButtonContainer>
        <PrimaryButton title="다음" onPress={handleNext} disabled={!dueDate} />
      </ButtonContainer>

      {/* =========================
          Calendar Modal
      ========================= */}

      <Modal
        visible={isPickerVisible}
        transparent
        animationType="fade"
        onRequestClose={handleCancel}
      >
        <ModalOverlay>
          <CalendarCard>
            <CalendarTitle>출산 예정일을 선택해주세요</CalendarTitle>

            <CalendarWrapper>
              <CustomCalendar
                selectedDate={selectedDate}
                onSelectDate={handleSelectDate}
                minDate={todayString}
              />
            </CalendarWrapper>

            <ModalButtons>
              <CancelButton onPress={handleCancel}>
                <CancelButtonText>취소</CancelButtonText>
              </CancelButton>

              <ConfirmButton onPress={handleConfirm}>
                <ConfirmButtonText>선택하기</ConfirmButtonText>
              </ConfirmButton>
            </ModalButtons>
          </CalendarCard>
        </ModalOverlay>
      </Modal>
    </Container>
  );
}

/* =============================
   Screen
============================= */

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

/* =============================
   Date
============================= */

const DateSection = styled.View`
  width: 100%;
  margin-top: 36px;
`;

const SectionLabel = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.extraBold};
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 10px;
  margin-left: 4px;
`;

const DateButton = styled.TouchableOpacity`
  width: 100%;
  height: 58px;

  padding: 0 20px;

  border-radius: 18px;

  background-color: ${({ theme }) => theme.colors.card};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DateText = styled.Text<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme, selected }) =>
    selected ? theme.colors.text : theme.colors.textSecondary};
`;

const Arrow = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* =============================
   Bottom Button
============================= */

const ButtonContainer = styled.View`
  width: 100%;
  padding-bottom: 12px;
`;

/* =============================
   Modal
============================= */

const ModalOverlay = styled.View`
  flex: 1;

  background-color: rgba(0, 0, 0, 0.35);

  align-items: center;
  justify-content: center;

  padding: 24px;
`;

const CalendarCard = styled.View`
  width: 100%;

  padding: 20px;

  border-radius: ${({ theme }) => theme.radius.lg}px;

  background-color: ${({ theme }) => theme.colors.card};

  shadow-color: #000000;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.15;
  shadow-radius: 16px;

  elevation: 8;
`;

const CalendarTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme }) => theme.colors.text};

  text-align: center;

  margin-bottom: 16px;
`;

const CalendarWrapper = styled.View`
  width: 100%;
`;

const ModalButtons = styled.View`
  flex-direction: row;

  gap: 10px;

  margin-top: 16px;
`;

const CancelButton = styled.TouchableOpacity`
  flex: 1;

  height: 50px;

  border-radius: 25px;

  background-color: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;
`;

const CancelButtonText = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ConfirmButton = styled.TouchableOpacity`
  flex: 1;

  height: 50px;

  border-radius: 25px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

const ConfirmButtonText = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};

  color: ${({ theme }) => theme.colors.card};
`;
