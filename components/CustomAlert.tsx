import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { AppText } from "../utils/AppText";

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
  showCancel?: boolean;
  onCancel?: () => void;
  confirmText?: string;
  confirmVariant?: "default" | "danger";
}
export default function CustomAlert({
  visible,
  title,
  message,
  onClose,
  showCancel = false,
  onCancel,
  onConfirm,
  confirmText = "확인",
  confirmVariant,
}: CustomAlertProps) {
  const handleConfirmPress = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onClose();
    }
  };
  const handleCancelPress = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      statusBarTranslucent
      onRequestClose={handleCancelPress}
    >
      <Overlay>
        <AlertBox>
          <AlertTitle>{title}</AlertTitle>
          <AlertMessage>{message}</AlertMessage>

          <ButtonContainer>
            {showCancel && (
              <CancelButton onPress={handleCancelPress} activeOpacity={0.8}>
                <CancelButtonText>취소</CancelButtonText>
              </CancelButton>
            )}

            <ConfirmButton
              variant={confirmVariant}
              onPress={handleConfirmPress}
              activeOpacity={0.8}
            >
              <ConfirmButtonText>{confirmText}</ConfirmButtonText>
            </ConfirmButton>
          </ButtonContainer>
        </AlertBox>
      </Overlay>
    </Modal>
  );
}

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const AlertBox = styled.View`
  width: 100%;
  max-width: 340px;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 24px;
  align-items: center;
`;

const AlertTitle = styled(AppText)`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.heading}px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  text-align: center;
`;

const AlertMessage = styled(AppText)`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.typography.body}px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
  text-align: center;
`;

const ConfirmButton = styled.TouchableOpacity<{
  variant?: "default" | "danger";
}>`
  flex: 1;
  min-height: 48px;
  background-color: ${({ theme, variant }) =>
    variant === "danger" ? "#E06A6A" : theme.colors.primary};
  padding: 12px 8px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  align-items: center;
  justify-content: center;
  elevation: 2;
`;

const CancelButton = styled.TouchableOpacity`
  flex: 1;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 12px 8px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  align-items: center;
  justify-content: center;
`;

const ConfirmButtonText = styled(AppText)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.button}px;
  color: #ffffff;
  text-align: center;
`;

const CancelButtonText = styled(AppText)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.button}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
