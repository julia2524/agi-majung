import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import BabyHeader from "../components/BabyHeader"; // 표준 Header 사용
import { RootStackParamList } from "../navigation/types";
import { getMyItems, MyItem, saveMyItems } from "../storage/storage";

type Props = NativeStackScreenProps<RootStackParamList, "MyItemScreen">;

export default function MyItemScreen({ navigation }: Props) {
  const theme = useTheme();

  const [items, setItems] = useState<MyItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const loadMyItems = async () => {
      const savedItems = await getMyItems();
      setItems(savedItems);
    };

    loadMyItems();
  }, []);

  // 준비물 추가
  const handleAddItem = async () => {
    const title = newItem.trim();

    if (!title) return;

    const item: MyItem = {
      id: `my_${Date.now()}`,
      title,
      isChecked: false,
    };

    const nextItems = [...items, item];

    setItems(nextItems);

    await saveMyItems(nextItems);

    setNewItem("");
    setModalVisible(false);
  };
  // 체크 토글
  const handleToggle = async (id: string) => {
    const nextItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            isChecked: !item.isChecked,
          }
        : item,
    );

    setItems(nextItems);

    await saveMyItems(nextItems);
  };

  // 준비물 삭제
  const handleDeleteItem = async (id: string) => {
    const nextItems = items.filter((item) => item.id !== id);

    setItems(nextItems);

    await saveMyItems(nextItems);
  };

  return (
    <Container>
      {/* 1. 표준 헤더 적용 */}
      <BabyHeader title="내 준비물" />

      <ScrollContent showsVerticalScrollIndicator={false}>
        <Description>
          기본 준비물에 없는 물건은{"\n"}직접 추가해서 관리해보세요.
        </Description>

        {/* 2. 준비물 목록 또는 빈 화면 */}
        {items.length === 0 ? (
          <EmptyContainer>
            <EmptyIconContainer>
              <Ionicons
                name="clipboard-outline"
                size={40}
                color={theme.colors.primary}
              />
            </EmptyIconContainer>
            <EmptyTitle>아직 추가한 준비물이 없어요</EmptyTitle>
            <EmptyDescription>
              아래 버튼을 눌러 필요한 물건을 추가해보세요.
            </EmptyDescription>
          </EmptyContainer>
        ) : (
          <ItemList>
            {items.map((item) => (
              <ItemCard
                key={item.id}
                activeOpacity={0.7}
                onPress={() => handleToggle(item.id)}
              >
                <CheckCircle checked={item.isChecked}>
                  {item.isChecked && (
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  )}
                </CheckCircle>

                <ItemName checked={item.isChecked}>{item.title}</ItemName>

                {/* 삭제 버튼 */}
                <DeleteButton
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  onPress={() => handleDeleteItem(item.id)}
                >
                  <Ionicons
                    name="trash-outline"
                    size={20}
                    color={theme.colors.textSecondary}
                  />
                </DeleteButton>
              </ItemCard>
            ))}
          </ItemList>
        )}

        {/* 추가 버튼 */}
        <AddButton activeOpacity={0.8} onPress={() => setModalVisible(true)}>
          <Ionicons name="add" size={22} color="#FFFFFF" />
          <AddButtonText>준비물 추가하기</AddButtonText>
        </AddButton>

        <BottomSpace />
      </ScrollContent>

      {/* 3. 키보드 대응 모달 */}
      <ModalOverlay
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ModalBackground>
            <ModalCard>
              <ModalTitle>준비물 추가</ModalTitle>
              <ModalDescription>
                직접 준비할 물건의 이름을 입력해주세요.
              </ModalDescription>

              <Input
                value={newItem}
                onChangeText={setNewItem}
                placeholder="예: 수유등, 분유 포트"
                placeholderTextColor={theme.colors.textSecondary}
                autoFocus
                returnKeyType="done"
                onSubmitEditing={handleAddItem}
              />

              <ModalButtons>
                <CancelButton
                  activeOpacity={0.8}
                  onPress={() => {
                    setNewItem("");
                    setModalVisible(false);
                  }}
                >
                  <CancelText>취소</CancelText>
                </CancelButton>

                <ConfirmButton activeOpacity={0.8} onPress={handleAddItem}>
                  <ConfirmText>추가하기</ConfirmText>
                </ConfirmButton>
              </ModalButtons>
            </ModalCard>
          </ModalBackground>
        </KeyboardAvoidingView>
      </ModalOverlay>
    </Container>
  );
}

/* =========================================================
   Styled Components (추가된 요소 포함)
========================================================= */

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
  padding-horizontal: 24px;
`;

const Description = styled.Text`
  text-align: center;
  margin-top: 12px;
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 60px 20px 40px;
`;

const EmptyIconContainer = styled.View`
  width: 76px;
  height: 76px;
  border-radius: 38px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 16px;
`;

const EmptyTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const EmptyDescription = styled.Text`
  margin-top: 6px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const ItemList = styled.View`
  margin-top: 20px;
  gap: 10px;
`;

const ItemCard = styled.TouchableOpacity`
  width: 100%;
  min-height: 60px;
  padding: 14px 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  flex-direction: row;
  align-items: center;
`;

const CheckCircle = styled.View<{ checked: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border-width: 2px;
  border-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.border};
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.card};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const ItemName = styled.Text<{ checked: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.textSecondary : theme.colors.text};
  text-decoration-line: ${({ checked }) => (checked ? "line-through" : "none")};
`;

const DeleteButton = styled.TouchableOpacity`
  padding: 4px;
  justify-content: center;
  align-items: center;
`;

const AddButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  margin-top: 20px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  elevation: 2;
`;

const AddButtonText = styled.Text`
  margin-left: 6px;
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
`;

const ModalOverlay = styled.Modal``;

const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const ModalCard = styled.View`
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.card};
`;

const ModalTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subheading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const ModalDescription = styled.Text`
  margin-top: 6px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  margin-top: 18px;
  padding: 0 16px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const ModalButtons = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 18px;
`;

const CancelButton = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const CancelText = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ConfirmText = styled.Text`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
`;

const BottomSpace = styled.View`
  height: 40px;
`;
