import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, Alert, Keyboard, ScrollView } from "react-native";
import styled, { useTheme } from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import type { RootStackParamList } from "../navigation/types";
import BabyHeader from "../components/BabyHeader";
import {
  deleteMyCategory,
  getMyCategories,
  getMyItems,
  getMyItemsByCategory,
  saveMyItems,
  type CustomCategory,
  type MyItem,
} from "../storage/storage";
import BannerAd from "../services/BannerAd";
import { AppText, AppTextInput } from "../utils/AppText";
import CustomAlert from "../components/CustomAlert";

type Props = NativeStackScreenProps<RootStackParamList, "CustomItemScreen">;

type IconName = keyof typeof Ionicons.glyphMap;

export default function CustomItemScreen({ navigation, route }: Props) {
  const { categoryId } = route.params;

  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);

  const [category, setCategory] = useState<CustomCategory | null>(null);
  const [items, setItems] = useState<MyItem[]>([]);
  const [newItemTitle, setNewItemTitle] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [itemToDelete, setItemToDelete] = useState<MyItem | null>(null);
  const [deleting, setDeleting] = useState(false);

  const [categoryDeleteVisible, setCategoryDeleteVisible] = useState(false);
  const [categoryDeleting, setCategoryDeleting] = useState(false);

  const handleConfirmDeleteCategory = async () => {
    if (!category || categoryDeleting || saving || deleting) {
      return;
    }

    try {
      setCategoryDeleting(true);

      // 카테고리와 해당 카테고리의 준비물을 함께 삭제
      await deleteMyCategory(categoryId);

      setCategoryDeleteVisible(false);

      // 이전 화면으로 돌아가기
      navigation.goBack();
    } catch (error) {
      console.error("카테고리 삭제 실패:", error);
      Alert.alert("오류", "카테고리를 삭제하지 못했어요.");
    } finally {
      setCategoryDeleting(false);
    }
  };

  const handleCloseDeleteAlert = () => {
    if (!deleting) {
      setItemToDelete(null);
    }
  };

  // 현재 카테고리 데이터 불러오기
  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const [categories, categoryItems] = await Promise.all([
        getMyCategories(),
        getMyItemsByCategory(categoryId),
      ]);

      const currentCategory = categories.find((item) => item.id === categoryId);

      if (!currentCategory) {
        Alert.alert(
          "카테고리를 찾을 수 없어요.",
          "삭제되었거나 존재하지 않는 카테고리예요.",
          [
            {
              text: "확인",
              onPress: () => navigation.goBack(),
            },
          ],
        );
        return;
      }

      setCategory(currentCategory);
      setItems(categoryItems);
    } catch (error) {
      console.error("준비물 불러오기 실패:", error);
      Alert.alert("오류", "준비물을 불러오지 못했어요.");
    } finally {
      setLoading(false);
    }
  }, [categoryId, navigation]);

  useFocusEffect(
    useCallback(() => {
      void loadData();
    }, [loadData]),
  );

  // 전체 데이터에서 현재 카테고리 항목만 변경해서 저장
  const saveCategoryItems = async (updatedCategoryItems: MyItem[]) => {
    const allItems = await getMyItems();

    const updatedItems = [
      ...allItems.filter((item) => item.categoryId !== categoryId),
      ...updatedCategoryItems,
    ];

    await saveMyItems(updatedItems);
    setItems(updatedCategoryItems);
  };

  // 준비물 추가
  const handleAddItem = async () => {
    const title = newItemTitle.trim();

    if (!title || saving) {
      return;
    }

    try {
      setSaving(true);

      const newItem: MyItem = {
        id: `item_${Date.now()}`,
        title,
        isChecked: false,
        categoryId,
        createdAt: Date.now(),
      };

      await saveCategoryItems([...items, newItem]);

      setNewItemTitle("");
      Keyboard.dismiss();
    } catch (error) {
      console.error("준비물 추가 실패:", error);
      Alert.alert("오류", "준비물을 추가하지 못했어요.");
    } finally {
      setSaving(false);
    }
  };

  // 준비물 체크 상태 변경
  const handleToggleItem = async (targetItem: MyItem) => {
    if (saving) {
      return;
    }

    try {
      setSaving(true);

      const updatedItems = items.map((item) =>
        item.id === targetItem.id
          ? { ...item, isChecked: !item.isChecked }
          : item,
      );

      await saveCategoryItems(updatedItems);
    } catch (error) {
      console.error("준비물 체크 변경 실패:", error);
      Alert.alert("오류", "체크 상태를 변경하지 못했어요.");
    } finally {
      setSaving(false);
    }
  };

  // 삭제 버튼 클릭 시 CustomAlert 열기
  const handleDeleteItem = (targetItem: MyItem) => {
    if (saving || deleting) {
      return;
    }
    setItemToDelete(targetItem);
  };

  // CustomAlert에서 '삭제' 확정 시 실제 삭제 처리
  const handleConfirmDeleteItem = async () => {
    if (!itemToDelete || deleting) {
      return;
    }

    const targetItem = itemToDelete;

    try {
      setDeleting(true);

      const updatedItems = items.filter((item) => item.id !== targetItem.id);
      await saveCategoryItems(updatedItems);

      setItemToDelete(null);
    } catch (error) {
      console.error("준비물 삭제 실패:", error);
      Alert.alert("오류", "준비물을 삭제하지 못했어요.");
    } finally {
      setDeleting(false);
    }
  };

  // 진행률 계산
  const checkedCount = items.filter((item) => item.isChecked).length;
  const progress =
    items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0;

  const isAddDisabled = !newItemTitle.trim() || saving;

  // 맨 위로 이동
  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <Container edges={["top"]}>
      {/* 고정 헤더 */}
      <BabyHeader
        title={category?.name ?? "나만의 준비물"}
        onBackPress={() => navigation.goBack()}
      />

      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </LoadingContainer>
      ) : (
        <>
          <ScrollContent
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* 카테고리 진행률 */}
            <ProgressCard>
              <ProgressHeader>
                <CategoryHeading>
                  <CategoryIcon>
                    <Ionicons
                      name={(category?.icon ?? "heart-outline") as IconName}
                      size={25}
                      color={theme.colors.primary}
                    />
                  </CategoryIcon>

                  <CategoryTitleArea>
                    <ProgressTitle>{category?.name ?? "준비물"}</ProgressTitle>
                    <ProgressDescription>
                      우리 아기를 위한 준비 목록이에요.
                    </ProgressDescription>
                  </CategoryTitleArea>
                </CategoryHeading>

                <ProgressCount>{progress}%</ProgressCount>
              </ProgressHeader>

              <ProgressBar>
                <ProgressFill progress={progress} />
              </ProgressBar>

              <ProgressFooter>
                <ProgressFooterText>
                  {checkedCount}개 완료 · 전체 {items.length}개
                </ProgressFooterText>
                <ProgressFooterText>
                  {items.length > 0 && checkedCount === items.length
                    ? "모두 준비했어요!"
                    : "하나씩 준비해 봐요!"}
                </ProgressFooterText>
              </ProgressFooter>
            </ProgressCard>
            <CategoryDeleteButton
              onPress={() => setCategoryDeleteVisible(true)}
              disabled={saving || deleting || categoryDeleting}
            >
              <Ionicons
                name="trash-outline"
                size={16}
                color={theme.colors.textSecondary}
              />
              <CategoryDeleteText>이 카테고리 삭제하기</CategoryDeleteText>
            </CategoryDeleteButton>

            {/* 준비물 추가 */}
            <SectionHeader>
              <SectionTitle>준비물 추가하기</SectionTitle>
            </SectionHeader>

            <AddItemContainer>
              <AddItemInput
                value={newItemTitle}
                onChangeText={setNewItemTitle}
                placeholder="새로운 준비물을 입력해 주세요."
                placeholderTextColor={theme.colors.textSecondary}
                maxLength={50}
                returnKeyType="done"
                onSubmitEditing={handleAddItem}
                editable={!saving}
              />

              <AddButton
                disabled={isAddDisabled}
                $disabled={isAddDisabled}
                onPress={handleAddItem}
              >
                <Ionicons name="add" size={24} color="#FFFFFF" />
              </AddButton>
            </AddItemContainer>

            {/* 준비물 목록 */}
            <SectionHeader>
              <SectionTitle>우리 아기 준비물</SectionTitle>
              <SectionCount>{items.length}개</SectionCount>
            </SectionHeader>

            {items.length > 0 ? (
              <ItemList>
                {items.map((item) => (
                  <ItemCard key={String(item.id)}>
                    <ItemMain
                      onPress={() => handleToggleItem(item)}
                      disabled={saving}
                    >
                      <Checkbox checked={item.isChecked}>
                        {item.isChecked && (
                          <Ionicons
                            name="checkmark"
                            size={16}
                            color="#FFFFFF"
                          />
                        )}
                      </Checkbox>

                      <ItemTitle checked={item.isChecked}>
                        {item.title}
                      </ItemTitle>
                    </ItemMain>

                    <DeleteButton
                      onPress={() => handleDeleteItem(item)}
                      disabled={saving}
                      hitSlop={8}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={18}
                        color={theme.colors.textSecondary}
                      />
                    </DeleteButton>
                  </ItemCard>
                ))}
              </ItemList>
            ) : (
              <EmptyContainer>
                <EmptyIconWrapper>
                  <Ionicons
                    name="file-tray-outline"
                    size={44}
                    color={theme.colors.textSecondary}
                  />
                </EmptyIconWrapper>

                <EmptyTitle>아직 준비물이 없어요.</EmptyTitle>

                <EmptyDescription>
                  위 입력창에 준비물을 추가해 봐요!
                </EmptyDescription>
              </EmptyContainer>
            )}

            {saving && (
              <SavingIndicator>
                <ActivityIndicator size="small" color={theme.colors.primary} />
              </SavingIndicator>
            )}

            <BottomSpace />
          </ScrollContent>

          {/* 맨 위로 이동 */}
          <TopButton
            activeOpacity={0.8}
            onPress={handleScrollToTop}
            bottomInset={insets.bottom}
          >
            <Ionicons name="arrow-up" size={20} color="#FFFFFF" />
          </TopButton>
        </>
      )}
      {/* 준비물 삭제 확인 커스텀 알림 */}
      <CustomAlert
        visible={Boolean(itemToDelete)}
        title="준비물을 삭제할까요?"
        message={
          itemToDelete ? `"${itemToDelete.title}" 항목을 삭제할게요.` : ""
        }
        showCancel
        confirmText={deleting ? "삭제 중..." : "삭제"}
        confirmVariant="danger"
        onClose={handleCloseDeleteAlert}
        onCancel={handleCloseDeleteAlert}
        onConfirm={handleConfirmDeleteItem}
      />
      <CustomAlert
        visible={categoryDeleteVisible}
        title="카테고리를 삭제할까요?"
        message={`"${category?.name ?? "이 카테고리"}"카테고리와 안에 들어 있는 준비물이 모두 삭제돼요.`}
        showCancel
        confirmText={categoryDeleting ? "삭제 중..." : "삭제"}
        confirmVariant="danger"
        onClose={() => {
          if (!categoryDeleting) {
            setCategoryDeleteVisible(false);
          }
        }}
        onCancel={() => {
          if (!categoryDeleting) {
            setCategoryDeleteVisible(false);
          }
        }}
        onConfirm={handleConfirmDeleteCategory}
      />
      {/* 하단 광고 */}
      <BottomAdContainer bottomInset={insets.bottom}>
        <BannerAd />
      </BottomAdContainer>
    </Container>
  );
}

/* --------------------------------
   Styled Components
--------------------------------- */

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ScrollContent = styled.ScrollView`
  flex: 1;
  padding-horizontal: 20px;
`;

const ProgressCard = styled.View`
  margin-top: 12px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const ProgressHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
`;

const CategoryHeading = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

const CategoryIcon = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  margin-right: 11px;
`;

// const CategoryTitleArea = styled.View`
//   flex: 1;
// `;

// const ProgressTitle = styled(AppText)`
//   font-size: ${({ theme }) => theme.typography.button}px;
//   font-family: ${({ theme }) => theme.fontFamily.bold};
//   color: ${({ theme }) => theme.colors.text};
// `;

// const ProgressDescription = styled(AppText)`
//   margin-top: 4px;
//   font-size: ${({ theme }) => theme.typography.tiny}px;
//   font-family: ${({ theme }) => theme.fontFamily.regular};
//   color: ${({ theme }) => theme.colors.textSecondary};
// `;

const ProgressCount = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProgressBar = styled.View`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const ProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ProgressFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const ProgressFooterText = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.tiny}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 12px;
`;

const SectionTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const SectionCount = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const AddItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;

const AddItemInput = styled(AppTextInput)`
  flex: 1;
  height: 50px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 14px;
  font-size: ${({ theme }) => theme.typography.small}px;
  color: ${({ theme }) => theme.colors.text};
`;

const AddButton = styled.Pressable<{ $disabled: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 13px;
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.border : theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

const ItemList = styled.View`
  gap: 10px;
`;

const ItemCard = styled.View`
  width: 100%;
  min-height: 62px;
  padding: 6px 12px 6px 16px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  flex-direction: row;
  align-items: center;
`;

const ItemMain = styled.Pressable`
  flex: 1;
  min-height: 48px;
  flex-direction: row;
  align-items: center;
`;

const Checkbox = styled.View<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  border-width: 1.5px;
  border-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : theme.colors.border};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : "transparent"};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const ItemTitle = styled(AppText)<{ checked: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ checked, theme }) =>
    checked ? theme.fontFamily.regular : theme.fontFamily.medium};
  color: ${({ checked, theme }) =>
    checked ? theme.colors.textSecondary : theme.colors.text};
  text-decoration-line: ${({ checked }) => (checked ? "line-through" : "none")};
`;

const DeleteButton = styled.Pressable`
  width: 38px;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
`;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SavingIndicator = styled.View`
  padding-vertical: 14px;
`;

const BottomSpace = styled.View`
  height: 40px;
`;

const BottomAdContainer = styled.View<{ bottomInset: number }>`
  width: 100%;
  min-height: ${({ bottomInset }) => 60 + bottomInset}px;
  padding-bottom: ${({ bottomInset }) => bottomInset}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
`;

const TopButton = styled.TouchableOpacity<{ bottomInset: number }>`
  position: absolute;
  right: 20px;
  bottom: ${({ bottomInset }) => 75 + bottomInset}px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-radius: 6px;
  shadow-offset: 0px 3px;
`;

const CategoryTitleArea = styled.View`
  flex: 1;
`;

const ProgressTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  line-height: ${({ theme }) => Math.round(theme.typography.button * 1.25)}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressDescription = styled(AppText)`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.typography.tiny}px;
  line-height: ${({ theme }) => Math.round(theme.typography.tiny * 1.3)}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 28px 20px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const EmptyIconWrapper = styled.View`
  margin-bottom: 6px;
  opacity: 0.7;
`;

const EmptyTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const EmptyDescription = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const CategoryDeleteButton = styled.Pressable`
  min-height: 44px;
  margin-top: 12px;
  margin-bottom: 4px;
  padding-horizontal: 14px;
  border-radius: 13px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

const CategoryDeleteText = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
