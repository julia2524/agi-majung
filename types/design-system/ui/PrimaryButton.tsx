import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 28px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.border : theme.colors.primary};

  align-items: center;
  justify-content: center;
  /* iOS 그림자 */
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.15;
  shadow-radius: 8px;

  /* Android 그림자 */
  elevation: 5;
`;

const ButtonText = styled.Text`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textSecondary : theme.colors.card};

  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;

export default function PrimaryButton({
  title,
  onPress,
  disabled,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Button activeOpacity={0.75} onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
}
