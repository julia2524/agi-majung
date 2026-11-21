import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import type { RootStackParamList } from "../navigation/types";
import {
  getMyCategories,
  getMyItems,
  getMyItemsByCategory,
  saveMyItems,
  type CustomCategory,
  type MyItem,
} from "../storage/storage";

type Props = NativeStackScreenProps<RootStackParamList, "CustomItemScreen">;

type IconName = keyof typeof Ionicons.glyphMap;

export default function CustomItemScreen({ navigation, route }: Props) {
  const { categoryId } = route.params;

  const [category, setCategory] = useState<CustomCategory | null>(null);
  const [items, setItems] = useState<MyItem[]>([]);
  const [newItemTitle, setNewItemTitle] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 현재 카테고리의 데이터 불러오기
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
      loadData();
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

    if (!title) {
      return;
    }

    if (saving) {
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

  // 준비물 삭제
  const handleDeleteItem = (targetItem: MyItem) => {
    Alert.alert(
      "준비물을 삭제할까요?",
      `"${targetItem.title}" 항목을 삭제할게요.`,
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제",
          style: "destructive",
          onPress: async () => {
            if (saving) {
              return;
            }

            try {
              setSaving(true);

              const updatedItems = items.filter(
                (item) => item.id !== targetItem.id,
              );

              await saveCategoryItems(updatedItems);
            } catch (error) {
              console.error("준비물 삭제 실패:", error);
              Alert.alert("오류", "준비물을 삭제하지 못했어요.");
            } finally {
              setSaving(false);
            }
          },
        },
      ],
    );
  };

  const checkedCount = items.filter((item) => item.isChecked).length;
  const progress =
    items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0;

  const renderItem = ({ item }: { item: MyItem }) => (
    <View style={styles.itemCard}>
      <Pressable
        style={styles.itemMain}
        onPress={() => handleToggleItem(item)}
        disabled={saving}
      >
        <View
          style={[styles.checkbox, item.isChecked && styles.checkboxChecked]}
        >
          {item.isChecked && (
            <Ionicons name="checkmark" size={17} color="#FFFFFF" />
          )}
        </View>

        <Text
          style={[styles.itemTitle, item.isChecked && styles.itemTitleChecked]}
        >
          {item.title}
        </Text>
      </Pressable>

      <Pressable
        style={styles.deleteButton}
        onPress={() => handleDeleteItem(item)}
        disabled={saving}
        hitSlop={8}
      >
        <Ionicons name="trash-outline" size={19} color="#C4A5A5" />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={25} color="#514966" />
        </Pressable>

        <Text style={styles.headerTitle} numberOfLines={1}>
          {category?.name ?? "준비물"}
        </Text>

        <View style={styles.headerRight} />
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#9583CA" />
        </View>
      ) : (
        <View style={styles.content}>
          {/* 카테고리 정보 */}
          <View style={styles.categoryInfo}>
            <View style={styles.categoryIcon}>
              <Ionicons
                name={(category?.icon ?? "heart-outline") as IconName}
                size={29}
                color="#8B78C8"
              />
            </View>

            <View style={styles.categoryTextArea}>
              <Text style={styles.categoryName}>{category?.name}</Text>

              <Text style={styles.progressText}>
                {checkedCount}개 완료 · 전체 {items.length}개
              </Text>
            </View>

            <Text style={styles.progressPercent}>{progress}%</Text>
          </View>

          {/* 진행률 */}
          <View style={styles.progressBackground}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>

          {/* 준비물 추가 */}
          <View style={styles.addItemContainer}>
            <TextInput
              style={styles.addItemInput}
              value={newItemTitle}
              onChangeText={setNewItemTitle}
              placeholder="새로운 준비물을 입력해 봐!"
              placeholderTextColor="#B8B2C2"
              maxLength={50}
              returnKeyType="done"
              onSubmitEditing={handleAddItem}
              editable={!saving}
            />

            <Pressable
              style={[
                styles.addButton,
                (!newItemTitle.trim() || saving) && styles.addButtonDisabled,
              ]}
              onPress={handleAddItem}
              disabled={!newItemTitle.trim() || saving}
            >
              <Ionicons name="add" size={23} color="#FFFFFF" />
            </Pressable>
          </View>

          {/* 준비물 목록 */}
          <FlatList
            data={items}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            ListHeaderComponent={
              items.length > 0 ? (
                <Text style={styles.listHeader}>우리 아기 준비물</Text>
              ) : null
            }
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Ionicons name="clipboard-outline" size={48} color="#C8C1D7" />
                <Text style={styles.emptyTitle}>아직 준비물이 없어요.</Text>
                <Text style={styles.emptyDescription}>
                  위 입력창에 준비물을 추가해 봐요!
                </Text>
              </View>
            }
            ListFooterComponent={
              saving ? (
                <View style={styles.savingIndicator}>
                  <ActivityIndicator size="small" color="#9583CA" />
                </View>
              ) : null
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9FC",
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0EDF4",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#514966",
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  categoryInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 17,
  },
  categoryIcon: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: "#F0ECF9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  categoryTextArea: {
    flex: 1,
  },
  categoryName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#514966",
    marginBottom: 6,
  },
  progressText: {
    fontSize: 12,
    color: "#9992A6",
  },
  progressPercent: {
    fontSize: 17,
    fontWeight: "700",
    color: "#9583CA",
  },
  progressBackground: {
    height: 7,
    backgroundColor: "#EDE9F4",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 22,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#A99AD5",
    borderRadius: 10,
  },
  addItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23,
    gap: 9,
  },
  addItemInput: {
    flex: 1,
    height: 49,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#EAE5F1",
    paddingHorizontal: 14,
    fontSize: 13,
    color: "#514966",
  },
  addButton: {
    width: 49,
    height: 49,
    borderRadius: 13,
    backgroundColor: "#9583CA",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonDisabled: {
    backgroundColor: "#C9C1DD",
  },
  listContent: {
    paddingBottom: 30,
    flexGrow: 1,
  },
  listHeader: {
    fontSize: 14,
    fontWeight: "700",
    color: "#716982",
    marginBottom: 12,
  },
  itemCard: {
    minHeight: 59,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    marginBottom: 9,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0EDF5",
  },
  itemMain: {
    flex: 1,
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#D8D1E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: "#9583CA",
    borderColor: "#9583CA",
  },
  itemTitle: {
    flex: 1,
    fontSize: 14,
    color: "#5D566B",
  },
  itemTitleChecked: {
    color: "#B4AEBB",
    textDecorationLine: "line-through",
  },
  deleteButton: {
    width: 36,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  emptyContainer: {
    flex: 1,
    minHeight: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#777084",
    marginTop: 15,
  },
  emptyDescription: {
    fontSize: 12,
    color: "#AAA4B3",
    marginTop: 7,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  savingIndicator: {
    paddingVertical: 12,
  },
});
