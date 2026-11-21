import React, { useCallback, useRef, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import {
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../navigation/types";
import BabyHeader from "../components/BabyHeader";
import {
  deleteMyCategory,
  getMyCategories,
  getMyItemsByCategory,
  saveMyCategories,
  CustomCategory,
} from "../storage/storage";
import BannerAd from "../services/BannerAd";
import { AppText } from "../utils/AppText";
import CustomAlert from "../components/CustomAlert";

type Props = NativeStackScreenProps<RootStackParamList, "CustomCategoryScreen">;

type IconName = keyof typeof Ionicons.glyphMap;

type CategoryWithProgress = CustomCategory & {
  total: number;
  checked: number;
};

const CATEGORY_ICONS = [
  "heart-outline",
  "shirt-outline",
  "bag-handle-outline",
  "home-outline",
  "bed-outline",
  "laptop-outline",
  "medkit-outline",
  "book-outline",
  "car-outline",
  "paw-outline",
  "gift-outline",
  "basket-outline",
  "star-outline",
  "flower-outline",
  "restaurant-outline",
  "game-controller-outline",
  "airplane-outline",
  "camera-outline",
  "musical-notes-outline",
  "football-outline",
  "water-outline",
  "sunny-outline",
  "cloud-outline",
  "cube-outline",
] as const satisfies readonly IconName[];

export default function CustomCategoryScreen({ navigation }: Props) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { width, fontScale } = useWindowDimensions();

  const isCompact = width < 360 || fontScale >= 1.3;
  const scrollRef = useRef<ScrollView>(null);

  const [categories, setCategories] = useState<CategoryWithProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CustomCategory | null>(
    null,
  );

  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconName>("heart-outline");
  const [saving, setSaving] = useState(false);

  const [categoryToDelete, setCategoryToDelete] =
    useState<CustomCategory | null>(null);
  const [deleting, setDeleting] = useState(false);

  // 카테고리와 각 카테고리의 준비물 진행률 불러오기
  //   const loadCategories = useCallback(async () => {
  //     try {
  //       setLoading(true);

  //       const savedCategories = await getMyCategories();

  //       const categoriesWithProgress = await Promise.all(
  //         savedCategories.map(async (category) => {
  //           const items = await getMyItemsByCategory(category.id);

  //           return {
  //             ...category,
  //             total: items.length,
  //             checked: items.filter((item) => item.isChecked).length,
  //           };
  //         }),
  //       );

  //       setCategories(categoriesWithProgress);
  //     } catch (error) {
  //       console.error("카테고리 불러오기 실패:", error);
  //       Alert.alert("오류", "카테고리를 불러오지 못했어요.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, []);
  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);

      const savedCategories = await getMyCategories();

      // 최신 생성순(createdAt 내림차순) 정렬
      const sortedCategories = [...savedCategories].sort((a, b) => {
        const timeA = a.createdAt ?? 0;
        const timeB = b.createdAt ?? 0;
        return timeB - timeA;
      });

      const categoriesWithProgress = await Promise.all(
        sortedCategories.map(async (category) => {
          const items = await getMyItemsByCategory(category.id);

          return {
            ...category,
            total: items.length,
            checked: items.filter((item) => item.isChecked).length,
          };
        }),
      );

      setCategories(categoriesWithProgress);
    } catch (error) {
      console.error("카테고리 불러오기 실패:", error);
      Alert.alert("오류", "카테고리를 불러오지 못했어요.");
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadCategories();
    }, [loadCategories]),
  );

  // 카테고리 추가 모달
  const openCreateModal = () => {
    setEditingCategory(null);
    setCategoryName("");
    setSelectedIcon("heart-outline");
    setModalVisible(true);
  };

  // 카테고리 수정 모달
  const openEditModal = (category: CustomCategory) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setSelectedIcon(category.icon as IconName);
    setModalVisible(true);
  };

  // 카테고리 저장
  const handleSaveCategory = async () => {
    const trimmedName = categoryName.trim();

    if (!trimmedName) {
      Alert.alert("카테고리 이름을 입력해 줘!");
      return;
    }

    const duplicated = categories.some(
      (category) =>
        category.name.trim().toLowerCase() === trimmedName.toLowerCase() &&
        category.id !== editingCategory?.id,
    );

    if (duplicated) {
      Alert.alert("이미 같은 이름의 카테고리가 있어요.");
      return;
    }

    try {
      setSaving(true);

      const currentCategories = await getMyCategories();

      let updatedCategories: CustomCategory[];

      if (editingCategory) {
        updatedCategories = currentCategories.map((category) =>
          category.id === editingCategory.id
            ? {
                ...category,
                name: trimmedName,
                icon: selectedIcon,
              }
            : category,
        );
      } else {
        const newCategory: CustomCategory = {
          id: `custom_${Date.now()}`,
          name: trimmedName,
          icon: selectedIcon,
          createdAt: Date.now(),
        };

        updatedCategories = [...currentCategories, newCategory];
      }

      await saveMyCategories(updatedCategories);

      setModalVisible(false);
      await loadCategories();
    } catch (error) {
      console.error("카테고리 저장 실패:", error);
      Alert.alert("오류", "카테고리를 저장하지 못했어요.");
    } finally {
      setSaving(false);
    }
  };

  // 삭제 버튼 클릭 시 CustomAlert 열기
  const handleDeleteCategory = (category: CustomCategory) => {
    setCategoryToDelete(category);
  };
  // CustomAlert에서 '삭제' 확정 시 실제 삭제 실행
  const handleConfirmDeleteCategory = async () => {
    if (!categoryToDelete || deleting) return;

    try {
      setDeleting(true);
      await deleteMyCategory(categoryToDelete.id);
      setCategoryToDelete(null);
      await loadCategories();
    } catch (error) {
      console.error("카테고리 삭제 실패:", error);
      Alert.alert("오류", "카테고리를 삭제하지 못했어요.");
    } finally {
      setDeleting(false);
    }
  };

  // 카테고리 삭제
  //   const handleDeleteCategory = (category: CustomCategory) => {
  //     Alert.alert(
  //       "카테고리를 삭제할까요?",
  //       `"${category.name}" 카테고리와 안에 들어 있는 준비물이 모두 삭제돼요.`,
  //       [
  //         {
  //           text: "취소",
  //           style: "cancel",
  //         },
  //         {
  //           text: "삭제",
  //           style: "destructive",
  //           onPress: async () => {
  //             try {
  //               await deleteMyCategory(category.id);
  //               await loadCategories();
  //             } catch (error) {
  //               console.error("카테고리 삭제 실패:", error);
  //               Alert.alert("오류", "카테고리를 삭제하지 못했어요.");
  //             }
  //           },
  //         },
  //       ],
  //     );
  //   };

  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const renderCategory = (item: CategoryWithProgress) => {
    const progress =
      item.total > 0 ? Math.round((item.checked / item.total) * 100) : 0;

    return (
      <CategoryCard key={item.id}>
        <CategoryMain
          onPress={() =>
            navigation.navigate("CustomItemScreen", {
              categoryId: item.id,
            })
          }
        >
          <IconContainer>
            <Ionicons
              name={item.icon as IconName}
              size={27}
              color={theme.colors.primary}
            />
          </IconContainer>

          <CategoryInfo>
            <CategoryName numberOfLines={1}>{item.name}</CategoryName>

            <ProgressText>
              {item.checked} / {item.total}개 준비 완료
            </ProgressText>

            <ProgressBackground>
              <ProgressFill progress={progress} />
            </ProgressBackground>
          </CategoryInfo>

          <Ionicons
            name="chevron-forward"
            size={21}
            color={theme.colors.textSecondary}
          />
        </CategoryMain>

        <CardActions>
          <ActionButton onPress={() => openEditModal(item)}>
            <Ionicons
              name="create-outline"
              size={17}
              color={theme.colors.textSecondary}
            />
            <ActionText>수정</ActionText>
          </ActionButton>

          <ActionDivider />

          <ActionButton onPress={() => handleDeleteCategory(item)}>
            <Ionicons name="trash-outline" size={16} color="#C28B8B" />
            <ActionText color="#C28B8B">삭제</ActionText>
          </ActionButton>
        </CardActions>
      </CategoryCard>
    );
  };

  return (
    <Container edges={["top"]}>
      {/* 고정 헤더 */}
      <BabyHeader
        title="나만의 카테고리"
        onBackPress={() => navigation.goBack()}
      />

      {/* 전체 스크롤 영역 */}
      <ScrollContent ref={scrollRef} showsVerticalScrollIndicator={false}>
        {/* 안내 영역 */}
        {/* <Intro>
          <IntroTitle>우리 아기만의 준비 목록을 만들어 봐!</IntroTitle>
          <IntroDescription>
            필요한 준비물을 카테고리별로 정리할 수 있어요.
          </IntroDescription>
        </Intro> */}

        {/* 카테고리 개수 및 진행률 */}
        <ProgressCard>
          <ProgressHeader>
            <ProgressTitle>나만의 카테고리</ProgressTitle>
            <ProgressCount>{categories.length}개</ProgressCount>
          </ProgressHeader>

          <ProgressBar>
            <ProgressFill
              progress={
                categories.length > 0
                  ? (categories.filter(
                      (item) => item.total > 0 && item.checked === item.total,
                    ).length /
                      categories.length) *
                    100
                  : 0
              }
            />
          </ProgressBar>

          <ProgressDescription>
            {
              categories.filter(
                (item) => item.total > 0 && item.checked === item.total,
              ).length
            }
            개 카테고리의 준비물을 모두 완료했어요.
          </ProgressDescription>
        </ProgressCard>

        {/* 카테고리 목록 */}
        {loading ? (
          <LoadingContainer>
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </LoadingContainer>
        ) : (
          <>
            <CategoryList>{categories.map(renderCategory)}</CategoryList>

            {categories.length === 0 && (
              <EmptyContainer>
                <EmptyIconWrapper>
                  <Ionicons
                    name="file-tray-outline"
                    size={44}
                    color={theme.colors.textSecondary}
                  />
                </EmptyIconWrapper>

                <EmptyTitle>아직 만든 카테고리가 없어요.</EmptyTitle>

                <EmptyDescription>
                  우리 아기에게 필요한 카테고리를 추가해 봐요!
                </EmptyDescription>
              </EmptyContainer>
            )}

            {/* 카테고리 추가 */}
            <AddCategoryButton onPress={openCreateModal}>
              <Ionicons
                name="add-circle-outline"
                size={23}
                color={theme.colors.primary}
              />
              <AddCategoryText>새 카테고리 추가하기</AddCategoryText>
            </AddCategoryButton>
          </>
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

      {/* 하단 광고 */}
      <BottomAdContainer bottomInset={insets.bottom}>
        <BannerAd />
      </BottomAdContainer>

      {/* 카테고리 생성 / 수정 모달 */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          if (!saving) setModalVisible(false);
        }}
      >
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>
                {editingCategory ? "카테고리 수정" : "새 카테고리 만들기"}
              </ModalTitle>

              <Pressable
                disabled={saving}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons
                  name="close"
                  size={25}
                  color={theme.colors.textSecondary}
                />
              </Pressable>
            </ModalHeader>

            <InputLabel>카테고리 이름</InputLabel>

            <NameInput
              value={categoryName}
              onChangeText={setCategoryName}
              placeholder="예: 외출 준비물"
              placeholderTextColor={theme.colors.textSecondary}
              maxLength={20}
              autoFocus
              returnKeyType="done"
            />

            <InputLabel>아이콘 선택</InputLabel>

            <IconScroll
              contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
                paddingBottom: 5,
              }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {CATEGORY_ICONS.map((icon) => {
                const selected = selectedIcon === icon;

                return (
                  <IconOption
                    key={icon}
                    selected={selected}
                    onPress={() => setSelectedIcon(icon)}
                  >
                    <Ionicons
                      name={icon}
                      size={25}
                      color={selected ? "#FFFFFF" : theme.colors.primary}
                    />
                  </IconOption>
                );
              })}
            </IconScroll>

            <ModalButtons>
              <CancelButton
                onPress={() => setModalVisible(false)}
                disabled={saving}
              >
                <CancelButtonText>취소</CancelButtonText>
              </CancelButton>

              <SaveButton onPress={handleSaveCategory} disabled={saving}>
                {saving ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <SaveButtonText>저장하기</SaveButtonText>
                )}
              </SaveButton>
            </ModalButtons>
          </ModalContainer>
        </ModalOverlay>
      </Modal>
      <CustomAlert
        visible={Boolean(categoryToDelete)}
        title="카테고리를 삭제할까요?"
        message={
          categoryToDelete
            ? `"${categoryToDelete.name}" 카테고리와 안에 들어 있는 준비물이 모두 삭제돼요.`
            : ""
        }
        showCancel
        confirmText={deleting ? "삭제 중..." : "삭제"}
        confirmVariant="danger"
        onClose={() => {
          if (!deleting) setCategoryToDelete(null);
        }}
        onCancel={() => {
          if (!deleting) setCategoryToDelete(null);
        }}
        onConfirm={handleConfirmDeleteCategory}
      />
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

const Intro = styled.View`
  padding-top: 20px;
  padding-bottom: 16px;
`;

const IntroTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
`;

const IntroDescription = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
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
  margin-bottom: 8px;
`;

const ProgressTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressCount = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.small}px;
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

const ProgressDescription = styled(AppText)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.typography.tiny}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
`;

const EmptyIconWrapper = styled.View`
  margin-bottom: 12px;
  opacity: 0.7;
`;

const EmptyTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const EmptyDescription = styled(AppText)`
  margin-top: 7px;
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const AddCategoryButton = styled.Pressable`
  min-height: 55px;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-style: dashed;
  background-color: ${({ theme }) => theme.colors.card};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const AddCategoryText = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 7px;
`;

const LoadingContainer = styled.View`
  flex: 1;
  min-height: 220px;
  align-items: center;
  justify-content: center;
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
  background-color: #f8fafc;
  border-top-width: 1px;
  border-top-color: #e2e8f0;
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

/* 모달 */

const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(35, 29, 48, 0.4);
  justify-content: center;
  align-items: center;
  padding-horizontal: 22px;
`;

const ModalContainer = styled.View`
  width: 100%;
  max-height: 85%;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 22px;
  padding: 22px;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const ModalTitle = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.heading}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const InputLabel = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 10px;
`;

const NameInput = styled.TextInput`
  height: 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 14px;
  font-size: ${({ theme }) => theme.typography.body}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 22px;
`;

const IconScroll = styled.ScrollView`
  max-height: 190px;
`;

const IconOption = styled.Pressable<{ selected: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.background};
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.border};
`;

const ModalButtons = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 24px;
`;

const CancelButton = styled.Pressable`
  flex: 1;
  height: 48px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

const CancelButtonText = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SaveButton = styled.Pressable`
  flex: 1;
  height: 48px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

const SaveButtonText = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.button}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: #ffffff;
`;
const CategoryMain = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding-bottom: 14px;
`;

const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

const CategoryInfo = styled.View`
  flex: 1;
  margin-right: 10px;
  justify-content: center;
`;

const CategoryName = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 21px;
  margin-bottom: 3px;
`;

const ProgressText = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.tiny}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 16px;
  margin-bottom: 10px;
`;

const ProgressBackground = styled.View`
  height: 6px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  overflow: hidden;
`;

const CategoryList = styled.View`
  margin-top: 16px;
  gap: 12px; /* 기존 10px → 12px */
`;

const CategoryCard = styled.View`
  width: 100%;
  padding: 16px 16px 6px; /* 위/좌우는 16px 유지, 아래는 CardActions 높이와 맞춤 */
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const CardActions = styled.View`
  min-height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
`;

const ActionButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
  padding-vertical: 8px;
  gap: 4px;
`;

const ActionText = styled(AppText)<{ color?: string }>`
  font-size: ${({ theme }) => theme.typography.tiny}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};
  line-height: 16px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const ActionDivider = styled.View`
  width: 1px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.border};
`;
