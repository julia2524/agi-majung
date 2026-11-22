import React from "react";
import { ActivityIndicator, Image, Modal, Platform } from "react-native";
import styled from "styled-components/native";
import { AppText } from "../../utils/AppText";
import { ASSETS } from "../../assets/assets";

interface UpdateModalProps {
  visible: boolean;
  isUpdating: boolean;
  onUpdate: () => void | Promise<void>;
  onLater: () => void | Promise<void>;
}

export default function UpdateModal({
  visible,
  isUpdating,
  onUpdate,
  onLater,
}: UpdateModalProps) {
  const handleLater = () => {
    if (isUpdating) return;
    onLater();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={handleLater}
    >
      <Overlay>
        <ModalContainer>
          {/* 업데이트 마스코트 */}
          <UpdateMascot>
            <Image
              source={ASSETS.updateMascot}
              style={{
                width: 144,
                height: 144,
              }}
              resizeMode="contain"
            />
          </UpdateMascot>

          {/* 안내 문구 */}
          <Eyebrow>AGI MAJUNG · NEW UPDATE</Eyebrow>

          <Title>새로운 소식이{"\n"}도착했어요!</Title>

          <Description>
            아기마중을 더 편리하고 즐겁게{"\n"}
            이용할 수 있도록 새로운 버전이 준비됐어요.
          </Description>

          {/* 업데이트 안내 */}
          <InfoBox>
            <InfoText>
              지금 업데이트하고{"\n"}
              새로운 아기마중을 만나보세요.
            </InfoText>
          </InfoBox>

          {/* 업데이트 버튼 */}
          <UpdateButton
            onPress={onUpdate}
            disabled={isUpdating}
            isUpdating={isUpdating}
          >
            {({ pressed }) =>
              isUpdating ? (
                <LoadingRow>
                  <ActivityIndicator color="#FFFFFF" size="small" />
                  <UpdateButtonText>업데이트 준비 중...</UpdateButtonText>
                </LoadingRow>
              ) : (
                <UpdateButtonText
                  style={{
                    opacity: pressed ? 0.86 : 1,
                  }}
                >
                  업데이트하기
                </UpdateButtonText>
              )
            }
          </UpdateButton>

          {/* 나중에 버튼 */}
          <LaterButton onPress={handleLater} disabled={isUpdating}>
            <LaterButtonText isUpdating={isUpdating}>
              나중에 할게요
            </LaterButtonText>
          </LaterButton>

          <Footer>더 좋은 아기마중을 위해 노력할게요 :)</Footer>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
}

// ==========================================
// Styles
// ==========================================

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(74, 64, 60, 0.48);
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
`;

const ModalContainer = styled.View`
  width: 100%;
  max-width: 370px;
  background-color: #fffdf9;
  border-radius: 32px;
  padding-horizontal: 26px;
  padding-top: 26px;
  padding-bottom: 24px;
  align-items: center;
  overflow: hidden;

  ${Platform.select({
    android: `
      elevation: 14;
    `,
    ios: `
      shadow-color: #786b83;
      shadow-offset: 0px 10px;
      shadow-opacity: 0.18;
      shadow-radius: 20px;
    `,
  })}
`;

const UpdateMascot = styled.View`
  width: 154px;
  height: 154px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Eyebrow = styled(AppText)`
  color: #d88b8b;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

const Title = styled(AppText)`
  color: #4a403c;
  font-size: 24px;
  font-weight: 800;
  line-height: 34px;
  text-align: center;
  margin-bottom: 12px;
`;

const Description = styled(AppText)`
  color: #8a7d77;
  font-size: 14px;
  font-weight: 500;
  line-height: 23px;
  text-align: center;
`;

const InfoBox = styled.View`
  width: 100%;
  min-height: 66px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fdf0f0;
  border-radius: 18px;
  padding-horizontal: 14px;
  padding-vertical: 12px;
  margin-top: 22px;
  margin-bottom: 20px;
`;

const InfoText = styled(AppText)`
  color: #a87575;
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  flex-shrink: 1;
`;

interface UpdateButtonProps {
  isUpdating: boolean;
}

const UpdateButton = styled.Pressable<UpdateButtonProps>`
  width: 100%;
  min-height: 54px;
  background-color: #efa7a7;
  border-radius: 19px;
  justify-content: center;
  align-items: center;
  opacity: ${({ isUpdating }) => (isUpdating ? 0.7 : 1)};
`;

const UpdateButtonText = styled(AppText)`
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
`;

const LoadingRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LaterButton = styled.Pressable`
  padding-horizontal: 24px;
  padding-vertical: 15px;
`;

interface LaterButtonTextProps {
  isUpdating: boolean;
}

const LaterButtonText = styled(AppText)<LaterButtonTextProps>`
  color: #aaa09a;
  font-size: 13px;
  font-weight: 600;
  opacity: ${({ isUpdating }) => (isUpdating ? 0.4 : 1)};
`;

const Footer = styled(AppText)`
  color: #c6b9b2;
  font-size: 10px;
  font-weight: 500;
  margin-top: 3px;
`;
