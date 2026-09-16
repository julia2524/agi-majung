import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEYS = {
  BABY_PROFILE: "@agimajung/babyProfile",
  CHECKED_ITEMS: "@agimajung/checkedItems",
  MY_ITEMS: "@agimajung/myItems",
} as const;

export type BabyProfile = {
  dueDate: string;
  babyOrder: "first" | "secondOrMore";
};

// 카테고리별 체크 상태
export type CheckedItemsByCategory = Record<string, string[]>;

export type MyItem = {
  id: string;
  title: string;
  isChecked: boolean;
};

// -------------------------
// 아기 정보 저장
// -------------------------

export async function saveBabyProfile(profile: BabyProfile) {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.BABY_PROFILE,
      JSON.stringify(profile),
    );
  } catch (error) {
    console.error("아기 정보 저장 실패:", error);
  }
}

// -------------------------
// 아기 정보 불러오기
// -------------------------

export async function getBabyProfile(): Promise<BabyProfile | null> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.BABY_PROFILE);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("아기 정보 불러오기 실패:", error);
    return null;
  }
}

// -------------------------
// 아기 정보 다시 설정
// -------------------------

export async function resetBabyData() {
  try {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.BABY_PROFILE,
      STORAGE_KEYS.CHECKED_ITEMS,
    ]);
  } catch (error) {
    console.error("아기 정보 초기화 실패:", error);
  }
}

// -------------------------
// 카테고리별 체크 상태 저장
// -------------------------

export async function saveCheckedItems(
  checkedItemsByCategory: CheckedItemsByCategory,
) {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.CHECKED_ITEMS,
      JSON.stringify(checkedItemsByCategory),
    );
  } catch (error) {
    console.error("체크 상태 저장 실패:", error);
  }
}

// -------------------------
// 카테고리별 체크 상태 불러오기
// -------------------------

export async function getCheckedItems(): Promise<CheckedItemsByCategory> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.CHECKED_ITEMS);

    if (!data) {
      return {};
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("체크 상태 불러오기 실패:", error);
    return {};
  }
}

export async function saveMyItems(items: MyItem[]) {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.MY_ITEMS, JSON.stringify(items));
  } catch (error) {
    console.error("내 준비물 저장 실패:", error);
  }
}

export async function getMyItems(): Promise<MyItem[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.MY_ITEMS);

    if (!data) return [];

    return JSON.parse(data);
  } catch (error) {
    console.error("내 준비물 불러오기 실패:", error);
    return [];
  }
}

export async function deleteAllData() {
  try {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.BABY_PROFILE,
      STORAGE_KEYS.CHECKED_ITEMS,
      STORAGE_KEYS.MY_ITEMS,
    ]);
  } catch (error) {
    console.error("데이터 삭제 실패:", error);
  }
}
