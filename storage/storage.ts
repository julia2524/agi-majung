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

// 💡 [수정 1] id가 숫자로 고쳐졌으므로 (number | string)[] 또는 number[]로 변경
export type CheckedItemsByCategory = Record<string, (number | string)[]>;

// 💡 [수정 2] MyItem의 id 타입도 number | string 으로 맞춤 (숫자 id 기반)
export type MyItem = {
  id: number | string;
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

// -------------------------
// 내 준비물 저장
// -------------------------

export async function saveMyItems(items: MyItem[]) {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.MY_ITEMS, JSON.stringify(items));
  } catch (error) {
    console.error("내 준비물 저장 실패:", error);
  }
}

// -------------------------
// 내 준비물 불러오기
// -------------------------

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

// -------------------------
// 전체 데이터 삭제
// -------------------------

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

// -------------------------
// 체크리스트 초기화 (체크 상태만 지우기)
// -------------------------
export async function resetCheckedItems() {
  try {
    // 1. 카테고리별 체크 항목(기본 품목) 삭제
    await AsyncStorage.removeItem(STORAGE_KEYS.CHECKED_ITEMS);

    // 2. 내 준비물이 있다면 내 준비물의 isChecked 상태도 모두 false로 초기화
    const myItems = await getMyItems();
    if (myItems.length > 0) {
      const resetMyItems = myItems.map((item) => ({
        ...item,
        isChecked: false,
      }));
      await saveMyItems(resetMyItems);
    }
  } catch (error) {
    console.error("체크리스트 초기화 실패:", error);
  }
}
