// import React, { useCallback, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   FlatList,
//   Modal,
//   Pressable,
//   View,
// } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useFocusEffect } from "@react-navigation/native";
// import type { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { SafeAreaView } from "react-native-safe-area-context";
// import styled from "styled-components/native";

// import type { RootStackParamList } from "../navigation/types";
// import {
//   deleteMyCategory,
//   getMyCategories,
//   getMyItemsByCategory,
//   saveMyCategories,
//   type CustomCategory,
// } from "../storage/storage";

// type Props = NativeStackScreenProps<RootStackParamList, "CustomCategoryScreen">;

// type CategoryWithProgress = CustomCategory & {
//   total: number;
//   checked: number;
// };

// type IconName = keyof typeof Ionicons.glyphMap;

// const CATEGORY_ICONS = [
//   "heart-outline",
//   "shirt-outline",
//   "bag-handle-outline",
//   "home-outline",
//   "bed-outline",
//   "laptop-outline",
//   "medkit-outline",
//   "book-outline",
//   "car-outline",
//   "paw-outline",
//   "gift-outline",
//   "basket-outline",
//   "star-outline",
//   "flower-outline",
//   "restaurant-outline",
//   "game-controller-outline",
//   "airplane-outline",
//   "camera-outline",
//   "musical-notes-outline",
//   "football-outline",
//   "water-outline",
//   "sunny-outline",
//   "cloud-outline",
//   "cube-outline",
// ] as const satisfies readonly IconName[];

// export default function CustomCategoryScreen({ navigation }: Props) {
//   const [categories, setCategories] = useState<CategoryWithProgress[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [modalVisible, setModalVisible] = useState(false);
//   const [editingCategory, setEditingCategory] = useState<CustomCategory | null>(
//     null,
//   );

//   const [categoryName, setCategoryName] = useState("");
//   const [selectedIcon, setSelectedIcon] = useState<IconName>("heart-outline");
//   const [saving, setSaving] = useState(false);

//   // 카테고리 및 준비물 진행률 불러오기
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

//   useFocusEffect(
//     useCallback(() => {
//       loadCategories();
//     }, [loadCategories]),
//   );

//   // 카테고리 추가 모달
//   const openCreateModal = () => {
//     setEditingCategory(null);
//     setCategoryName("");
//     setSelectedIcon("heart-outline");
//     setModalVisible(true);
//   };

//   // 카테고리 수정 모달
//   const openEditModal = (category: CustomCategory) => {
//     setEditingCategory(category);
//     setCategoryName(category.name);
//     setSelectedIcon(category.icon as IconName);
//     setModalVisible(true);
//   };

//   // 카테고리 저장
//   const handleSaveCategory = async () => {
//     const trimmedName = categoryName.trim();

//     if (!trimmedName) {
//       Alert.alert("카테고리 이름을 입력해 줘!");
//       return;
//     }

//     const duplicated = categories.some(
//       (category) =>
//         category.name.trim().toLowerCase() === trimmedName.toLowerCase() &&
//         category.id !== editingCategory?.id,
//     );

//     if (duplicated) {
//       Alert.alert("이미 같은 이름의 카테고리가 있어요.");
//       return;
//     }

//     try {
//       setSaving(true);

//       const currentCategories = await getMyCategories();

//       let updatedCategories: CustomCategory[];

//       if (editingCategory) {
//         updatedCategories = currentCategories.map((category) =>
//           category.id === editingCategory.id
//             ? {
//                 ...category,
//                 name: trimmedName,
//                 icon: selectedIcon,
//               }
//             : category,
//         );
//       } else {
//         const newCategory: CustomCategory = {
//           id: `custom_${Date.now()}`,
//           name: trimmedName,
//           icon: selectedIcon,
//           createdAt: Date.now(),
//         };

//         updatedCategories = [...currentCategories, newCategory];
//       }

//       await saveMyCategories(updatedCategories);

//       setModalVisible(false);
//       await loadCategories();
//     } catch (error) {
//       console.error("카테고리 저장 실패:", error);
//       Alert.alert("오류", "카테고리를 저장하지 못했어요.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // 카테고리 삭제
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

//   const renderCategory = ({ item }: { item: CategoryWithProgress }) => {
//     const progress =
//       item.total > 0 ? Math.round((item.checked / item.total) * 100) : 0;

//     return (
//       <CategoryCard>
//         <CategoryMain
//           onPress={() =>
//             navigation.navigate("CustomItemScreen", {
//               categoryId: item.id,
//             })
//           }
//         >
//           <IconContainer>
//             <Ionicons name={item.icon as IconName} size={27} color="#8B78C8" />
//           </IconContainer>

//           <CategoryInfo>
//             <CategoryName>{item.name}</CategoryName>

//             <ProgressText>
//               {item.checked} / {item.total}개 준비 완료
//             </ProgressText>

//             <ProgressBackground>
//               <ProgressFill $width={progress} />
//             </ProgressBackground>
//           </CategoryInfo>

//           <Ionicons name="chevron-forward" size={21} color="#B7B1C5" />
//         </CategoryMain>

//         <CardActions>
//           <ActionButton onPress={() => openEditModal(item)}>
//             <Ionicons name="create-outline" size={17} color="#82769E" />
//             <ActionText>수정</ActionText>
//           </ActionButton>

//           <ActionDivider />

//           <ActionButton onPress={() => handleDeleteCategory(item)}>
//             <Ionicons name="trash-outline" size={16} color="#C28B8B" />
//             <ActionText $color="#C28B8B">삭제</ActionText>
//           </ActionButton>
//         </CardActions>
//       </CategoryCard>
//     );
//   };

//   return (
//     <Container>
//       <Header>
//         <BackButton onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={25} color="#514966" />
//         </BackButton>

//         <HeaderTitle>나만의 카테고리</HeaderTitle>

//         <HeaderRight />
//       </Header>

//       <Content>
//         <Intro>
//           <IntroTitle>우리 아기만의 준비 목록을 만들어 봐!</IntroTitle>
//           <IntroDescription>
//             필요한 준비물을 카테고리별로 정리할 수 있어요.
//           </IntroDescription>
//         </Intro>

//         {loading ? (
//           <LoadingContainer>
//             <ActivityIndicator size="large" color="#9583CA" />
//           </LoadingContainer>
//         ) : (
//           <FlatList
//             data={categories}
//             keyExtractor={(item) => item.id}
//             renderItem={renderCategory}
//             contentContainerStyle={{ paddingBottom: 30, flexGrow: 1 }}
//             showsVerticalScrollIndicator={false}
//             ListEmptyComponent={
//               <EmptyContainer>
//                 <Ionicons name="file-tray-outline" size={48} color="#C8C1D7" />
//                 <EmptyTitle>아직 만든 카테고리가 없어요.</EmptyTitle>
//                 <EmptyDescription>
//                   우리 아기에게 필요한 카테고리를 추가해 봐요!
//                 </EmptyDescription>
//               </EmptyContainer>
//             }
//             ListFooterComponent={
//               <AddCategoryButton onPress={openCreateModal}>
//                 <Ionicons name="add-circle-outline" size={23} color="#8976C2" />
//                 <AddCategoryText>새 카테고리 추가하기</AddCategoryText>
//               </AddCategoryButton>
//             }
//           />
//         )}
//       </Content>

//       {/* 카테고리 생성 / 수정 모달 */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <ModalOverlay>
//           <ModalContainer>
//             <ModalHeader>
//               <ModalTitle>
//                 {editingCategory ? "카테고리 수정" : "새 카테고리 만들기"}
//               </ModalTitle>

//               <Pressable onPress={() => setModalVisible(false)}>
//                 <Ionicons name="close" size={25} color="#827B91" />
//               </Pressable>
//             </ModalHeader>

//             <InputLabel>카테고리 이름</InputLabel>

//             <NameInput
//               value={categoryName}
//               onChangeText={setCategoryName}
//               placeholder="예: 외출 준비물"
//               placeholderTextColor="#B8B2C2"
//               maxLength={20}
//               autoFocus
//               returnKeyType="done"
//             />

//             <InputLabel>아이콘 선택</InputLabel>

//             <IconScroll
//               contentContainerStyle={{
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 gap: 10,
//                 paddingBottom: 5,
//               }}
//               showsVerticalScrollIndicator={false}
//               keyboardShouldPersistTaps="handled"
//             >
//               {CATEGORY_ICONS.map((icon) => {
//                 const selected = selectedIcon === icon;

//                 return (
//                   <IconOption
//                     key={icon}
//                     $selected={selected}
//                     onPress={() => setSelectedIcon(icon)}
//                   >
//                     <Ionicons
//                       name={icon}
//                       size={25}
//                       color={selected ? "#FFFFFF" : "#8B78C8"}
//                     />
//                   </IconOption>
//                 );
//               })}
//             </IconScroll>

//             <ModalButtons>
//               <CancelButton
//                 onPress={() => setModalVisible(false)}
//                 disabled={saving}
//               >
//                 <CancelButtonText>취소</CancelButtonText>
//               </CancelButton>

//               <SaveButton onPress={handleSaveCategory} disabled={saving}>
//                 {saving ? (
//                   <ActivityIndicator color="#FFFFFF" />
//                 ) : (
//                   <SaveButtonText>저장하기</SaveButtonText>
//                 )}
//               </SaveButton>
//             </ModalButtons>
//           </ModalContainer>
//         </ModalOverlay>
//       </Modal>
//     </Container>
//   );
// }

// const Container = styled(SafeAreaView)`
//   flex: 1;
//   background-color: #faf9fc;
// `;

// const Header = styled.View`
//   height: 56px;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding-horizontal: 16px;
//   border-bottom-width: 1px;
//   border-bottom-color: #f0edf4;
// `;

// const BackButton = styled.Pressable`
//   width: 40px;
//   height: 40px;
//   justify-content: center;
// `;

// const HeaderTitle = styled.Text`
//   font-size: 18px;
//   font-weight: 700;
//   color: #514966;
// `;

// const HeaderRight = styled.View`
//   width: 40px;
// `;

// const Content = styled.View`
//   flex: 1;
//   padding-horizontal: 20px;
// `;

// const Intro = styled.View`
//   padding-top: 25px;
//   padding-bottom: 20px;
// `;

// const IntroTitle = styled.Text`
//   font-size: 18px;
//   font-weight: 700;
//   color: #514966;
//   margin-bottom: 7px;
// `;

// const IntroDescription = styled.Text`
//   font-size: 13px;
//   color: #9992a6;
// `;

// const CategoryCard = styled.View`
//   background-color: #ffffff;
//   border-radius: 17px;
//   margin-bottom: 13px;
//   padding-horizontal: 15px;
//   padding-top: 16px;
//   border-width: 1px;
//   border-color: #f0edf5;
// `;

// const CategoryMain = styled.Pressable`
//   flex-direction: row;
//   align-items: center;
//   padding-bottom: 15px;
// `;

// const IconContainer = styled.View`
//   width: 52px;
//   height: 52px;
//   border-radius: 16px;
//   background-color: #f2effa;
//   align-items: center;
//   justify-content: center;
//   margin-right: 13px;
// `;

// const CategoryInfo = styled.View`
//   flex: 1;
//   margin-right: 10px;
// `;

// const CategoryName = styled.Text`
//   font-size: 15px;
//   font-weight: 700;
//   color: #514966;
//   margin-bottom: 5px;
// `;

// const ProgressText = styled.Text`
//   font-size: 11px;
//   color: #a19aaa;
//   margin-bottom: 7px;
// `;

// const ProgressBackground = styled.View`
//   height: 5px;
//   background-color: #f0edf5;
//   border-radius: 5px;
//   overflow: hidden;
// `;

// const ProgressFill = styled.View<{ $width: number }>`
//   height: 100%;
//   width: ${({ $width }) => `${$width}%`};
//   background-color: #a99ad5;
//   border-radius: 5px;
// `;

// const CardActions = styled.View`
//   height: 39px;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
//   border-top-width: 1px;
//   border-top-color: #f4f1f7;
// `;

// const ActionButton = styled.Pressable`
//   flex-direction: row;
//   align-items: center;
//   padding-horizontal: 10px;
//   padding-vertical: 7px;
// `;

// const ActionText = styled.Text<{ $color?: string }>`
//   font-size: 11px;
//   color: ${({ $color }) => $color ?? "#82769e"};
//   margin-left: 4px;
// `;

// const ActionDivider = styled.View`
//   width: 1px;
//   height: 13px;
//   background-color: #eae6f0;
// `;

// const EmptyContainer = styled.View`
//   flex: 1;
//   min-height: 230px;
//   align-items: center;
//   justify-content: center;
// `;

// const EmptyTitle = styled.Text`
//   font-size: 14px;
//   font-weight: 600;
//   color: #777084;
//   margin-top: 15px;
// `;

// const EmptyDescription = styled.Text`
//   font-size: 12px;
//   color: #aaa4b3;
//   margin-top: 7px;
// `;

// const AddCategoryButton = styled.Pressable`
//   height: 55px;
//   border-radius: 15px;
//   border-width: 1px;
//   border-color: #dcd4ef;
//   border-style: dashed;
//   background-color: #f7f5fb;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   margin-top: 5px;
// `;

// const AddCategoryText = styled.Text`
//   font-size: 14px;
//   font-weight: 600;
//   color: #8976c2;
//   margin-left: 7px;
// `;

// const LoadingContainer = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;

// const ModalOverlay = styled.View`
//   flex: 1;
//   background-color: rgba(35, 29, 48, 0.4);
//   justify-content: center;
//   align-items: center;
//   padding-horizontal: 22px;
// `;

// const ModalContainer = styled.View`
//   width: 100%;
//   max-height: 85%;
//   background-color: #ffffff;
//   border-radius: 22px;
//   padding: 22px;
// `;

// const ModalHeader = styled.View`
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 23px;
// `;

// const ModalTitle = styled.Text`
//   font-size: 18px;
//   font-weight: 700;
//   color: #514966;
// `;

// const InputLabel = styled.Text`
//   font-size: 13px;
//   font-weight: 600;
//   color: #716982;
//   margin-bottom: 10px;
// `;

// const NameInput = styled.TextInput`
//   height: 48px;
//   border-radius: 12px;
//   background-color: #f8f6fa;
//   border-width: 1px;
//   border-color: #eae5f1;
//   padding-horizontal: 14px;
//   font-size: 14px;
//   color: #514966;
//   margin-bottom: 22px;
// `;

// const IconScroll = styled.ScrollView`
//   max-height: 190px;
// `;

// const IconOption = styled.Pressable<{ $selected: boolean }>`
//   width: 48px;
//   height: 48px;
//   border-radius: 14px;
//   background-color: ${({ $selected }) => ($selected ? "#9583ca" : "#f5f2fa")};
//   align-items: center;
//   justify-content: center;
//   border-width: 1px;
//   border-color: ${({ $selected }) => ($selected ? "#806dbb" : "transparent")};
// `;

// const ModalButtons = styled.View`
//   flex-direction: row;
//   gap: 10px;
//   margin-top: 24px;
// `;

// const CancelButton = styled.Pressable`
//   flex: 1;
//   height: 48px;
//   border-radius: 13px;
//   background-color: #f3f1f6;
//   align-items: center;
//   justify-content: center;
// `;

// const CancelButtonText = styled.Text`
//   font-size: 14px;
//   font-weight: 600;
//   color: #817a8e;
// `;

// const SaveButton = styled.Pressable`
//   flex: 1;
//   height: 48px;
//   border-radius: 13px;
//   background-color: #9583ca;
//   align-items: center;
//   justify-content: center;
// `;

// const SaveButtonText = styled.Text`
//   font-size: 14px;
//   font-weight: 700;
//   color: #ffffff;
// `;

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

  // 카테고리와 각 카테고리의 준비물 진행률 불러오기
  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);

      const savedCategories = await getMyCategories();

      const categoriesWithProgress = await Promise.all(
        savedCategories.map(async (category) => {
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

  // 카테고리 삭제
  const handleDeleteCategory = (category: CustomCategory) => {
    Alert.alert(
      "카테고리를 삭제할까요?",
      `"${category.name}" 카테고리와 안에 들어 있는 준비물이 모두 삭제돼요.`,
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteMyCategory(category.id);
              await loadCategories();
            } catch (error) {
              console.error("카테고리 삭제 실패:", error);
              Alert.alert("오류", "카테고리를 삭제하지 못했어요.");
            }
          },
        },
      ],
    );
  };

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

const CategoryList = styled.View`
  margin-top: 16px;
  gap: 10px;
`;

const CategoryCard = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

const CategoryMain = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
`;

const IconContainer = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;

const CategoryInfo = styled.View`
  flex: 1;
  margin-right: 10px;
`;

const CategoryName = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

const ProgressText = styled(AppText)`
  font-size: ${({ theme }) => theme.typography.tiny}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 7px;
`;

const ProgressBackground = styled.View`
  height: 5px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  overflow: hidden;
`;

const CardActions = styled.View`
  height: 39px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
`;

const ActionButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
  padding-vertical: 7px;
`;

const ActionText = styled(AppText)<{ color?: string }>`
  font-size: ${({ theme }) => theme.typography.tiny}px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};
  margin-left: 4px;
`;

const ActionDivider = styled.View`
  width: 1px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.border};
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
