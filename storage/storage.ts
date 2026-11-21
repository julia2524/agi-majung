// import AsyncStorage from "@react-native-async-storage/async-storage";

// const STORAGE_KEYS = {
//   BABY_PROFILE: "@agimajung/babyProfile",
//   CHECKED_ITEMS: "@agimajung/checkedItems",
//   MY_ITEMS: "@agimajung/myItems",
// } as const;

// export type BabyProfile = {
//   dueDate: string;
//   babyOrder: "first" | "secondOrMore";
// };

// // 💡 [수정 1] id가 숫자로 고쳐졌으므로 (number | string)[] 또는 number[]로 변경
// export type CheckedItemsByCategory = Record<string, (number | string)[]>;

// // 💡 [수정 2] MyItem의 id 타입도 number | string 으로 맞춤 (숫자 id 기반)
// export type MyItem = {
//   id: number | string;
//   title: string;
//   isChecked: boolean;
// };

// // -------------------------
// // 아기 정보 저장
// // -------------------------

// export async function saveBabyProfile(profile: BabyProfile) {
//   try {
//     await AsyncStorage.setItem(
//       STORAGE_KEYS.BABY_PROFILE,
//       JSON.stringify(profile),
//     );
//   } catch (error) {
//     console.error("아기 정보 저장 실패:", error);
//   }
// }

// // -------------------------
// // 아기 정보 불러오기
// // -------------------------

// export async function getBabyProfile(): Promise<BabyProfile | null> {
//   try {
//     const data = await AsyncStorage.getItem(STORAGE_KEYS.BABY_PROFILE);

//     if (!data) {
//       return null;
//     }

//     return JSON.parse(data);
//   } catch (error) {
//     console.error("아기 정보 불러오기 실패:", error);
//     return null;
//   }
// }

// // -------------------------
// // 아기 정보 다시 설정
// // -------------------------

// export async function resetBabyData() {
//   try {
//     await AsyncStorage.multiRemove([
//       STORAGE_KEYS.BABY_PROFILE,
//       STORAGE_KEYS.CHECKED_ITEMS,
//     ]);
//   } catch (error) {
//     console.error("아기 정보 초기화 실패:", error);
//   }
// }

// // -------------------------
// // 카테고리별 체크 상태 저장
// // -------------------------

// export async function saveCheckedItems(
//   checkedItemsByCategory: CheckedItemsByCategory,
// ) {
//   try {
//     await AsyncStorage.setItem(
//       STORAGE_KEYS.CHECKED_ITEMS,
//       JSON.stringify(checkedItemsByCategory),
//     );
//   } catch (error) {
//     console.error("체크 상태 저장 실패:", error);
//   }
// }

// // -------------------------
// // 카테고리별 체크 상태 불러오기
// // -------------------------

// export async function getCheckedItems(): Promise<CheckedItemsByCategory> {
//   try {
//     const data = await AsyncStorage.getItem(STORAGE_KEYS.CHECKED_ITEMS);

//     if (!data) {
//       return {};
//     }

//     return JSON.parse(data);
//   } catch (error) {
//     console.error("체크 상태 불러오기 실패:", error);
//     return {};
//   }
// }

// // -------------------------
// // 내 준비물 저장
// // -------------------------

// export async function saveMyItems(items: MyItem[]) {
//   try {
//     await AsyncStorage.setItem(STORAGE_KEYS.MY_ITEMS, JSON.stringify(items));
//   } catch (error) {
//     console.error("내 준비물 저장 실패:", error);
//   }
// }

// // -------------------------
// // 내 준비물 불러오기
// // -------------------------

// export async function getMyItems(): Promise<MyItem[]> {
//   try {
//     const data = await AsyncStorage.getItem(STORAGE_KEYS.MY_ITEMS);

//     if (!data) return [];

//     return JSON.parse(data);
//   } catch (error) {
//     console.error("내 준비물 불러오기 실패:", error);
//     return [];
//   }
// }

// // -------------------------
// // 전체 데이터 삭제
// // -------------------------

// export async function deleteAllData() {
//   try {
//     await AsyncStorage.multiRemove([
//       STORAGE_KEYS.BABY_PROFILE,
//       STORAGE_KEYS.CHECKED_ITEMS,
//       STORAGE_KEYS.MY_ITEMS,
//     ]);
//   } catch (error) {
//     console.error("데이터 삭제 실패:", error);
//   }
// }

// // -------------------------
// // 체크리스트 초기화 (체크 상태만 지우기)
// // -------------------------
// export async function resetCheckedItems() {
//   try {
//     // 1. 카테고리별 체크 항목(기본 품목) 삭제
//     await AsyncStorage.removeItem(STORAGE_KEYS.CHECKED_ITEMS);

//     // 2. 내 준비물이 있다면 내 준비물의 isChecked 상태도 모두 false로 초기화
//     const myItems = await getMyItems();
//     if (myItems.length > 0) {
//       const resetMyItems = myItems.map((item) => ({
//         ...item,
//         isChecked: false,
//       }));
//       await saveMyItems(resetMyItems);
//     }
//   } catch (error) {
//     console.error("체크리스트 초기화 실패:", error);
//   }
// }

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  BABY_PROFILE: "@agimajung/babyProfile",
  CHECKED_ITEMS: "@agimajung/checkedItems",
  MY_ITEMS: "@agimajung/myItems",
  MY_CATEGORIES: "@agimajung/myCategories",
  MY_DATA_MIGRATED: "@agimajung/myDataMigrated",
} as const;

// -------------------------
// 타입 정의
// -------------------------

export type BabyProfile = {
  dueDate: string;
  babyOrder: "first" | "secondOrMore";
};

export type CheckedItemsByCategory = Record<string, (number | string)[]>;

// 사용자 카테고리
export type CustomCategory = {
  id: string;
  name: string;
  icon: string;
  createdAt: number;
};

// 사용자 준비물
export type MyItem = {
  id: number | string;
  title: string;
  isChecked: boolean;
  categoryId?: string;
  createdAt?: number;
};

// 카테고리 소속이 필수인 준비물
export type CustomItem = MyItem & {
  categoryId: string;
};

// -------------------------
// 기존 데이터 마이그레이션
// -------------------------

let migrationPromise: Promise<void> | null = null;

async function migrateMyData(): Promise<void> {
  if (migrationPromise) {
    return migrationPromise;
  }

  migrationPromise = (async () => {
    try {
      const migrated = await AsyncStorage.getItem(
        STORAGE_KEYS.MY_DATA_MIGRATED,
      );

      if (migrated === "true") {
        return;
      }

      const [categoryData, itemData] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.MY_CATEGORIES),
        AsyncStorage.getItem(STORAGE_KEYS.MY_ITEMS),
      ]);

      const categories: CustomCategory[] = categoryData
        ? JSON.parse(categoryData)
        : [];

      const items: MyItem[] = itemData ? JSON.parse(itemData) : [];

      // 기존 준비물 중 카테고리가 없는 항목 확인
      const legacyItems = items.filter((item) => !item.categoryId);

      if (legacyItems.length > 0) {
        const legacyCategoryId = "custom_category_legacy";

        // 기존 준비물을 담을 기본 카테고리 생성
        if (!categories.some((category) => category.id === legacyCategoryId)) {
          categories.push({
            id: legacyCategoryId,
            name: "나만의 준비물",
            icon: "clipboard-outline",
            createdAt: Date.now(),
          });
        }

        // 기존 준비물에 새 카테고리 ID 연결
        const migratedItems = items.map((item) =>
          item.categoryId
            ? item
            : {
                ...item,
                categoryId: legacyCategoryId,
              },
        );

        await Promise.all([
          AsyncStorage.setItem(
            STORAGE_KEYS.MY_CATEGORIES,
            JSON.stringify(categories),
          ),
          AsyncStorage.setItem(
            STORAGE_KEYS.MY_ITEMS,
            JSON.stringify(migratedItems),
          ),
        ]);
      }

      // 마이그레이션 완료 표시
      await AsyncStorage.setItem(STORAGE_KEYS.MY_DATA_MIGRATED, "true");
    } catch (error) {
      console.error("나만의 준비물 데이터 이전 실패:", error);

      // 실패 시 다음 호출에서 다시 시도할 수 있도록 처리
      migrationPromise = null;
      throw error;
    }
  })();

  return migrationPromise;
}

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

export async function getBabyProfile(): Promise<BabyProfile | null> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.BABY_PROFILE);

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("아기 정보 불러오기 실패:", error);
    return null;
  }
}

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
// 기본 준비물 체크 상태
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

export async function getCheckedItems(): Promise<CheckedItemsByCategory> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.CHECKED_ITEMS);

    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("체크 상태 불러오기 실패:", error);
    return {};
  }
}

// -------------------------
// 사용자 카테고리
// -------------------------

export async function saveMyCategories(categories: CustomCategory[]) {
  try {
    await migrateMyData();

    await AsyncStorage.setItem(
      STORAGE_KEYS.MY_CATEGORIES,
      JSON.stringify(categories),
    );
  } catch (error) {
    console.error("사용자 카테고리 저장 실패:", error);
  }
}

export async function getMyCategories(): Promise<CustomCategory[]> {
  try {
    await migrateMyData();

    const data = await AsyncStorage.getItem(STORAGE_KEYS.MY_CATEGORIES);

    if (!data) return [];

    return JSON.parse(data);
  } catch (error) {
    console.error("사용자 카테고리 불러오기 실패:", error);
    return [];
  }
}

// -------------------------
// 사용자 준비물
// -------------------------

export async function saveMyItems(items: MyItem[]) {
  try {
    await migrateMyData();

    await AsyncStorage.setItem(STORAGE_KEYS.MY_ITEMS, JSON.stringify(items));
  } catch (error) {
    console.error("내 준비물 저장 실패:", error);
  }
}

export async function getMyItems(): Promise<MyItem[]> {
  try {
    await migrateMyData();

    const data = await AsyncStorage.getItem(STORAGE_KEYS.MY_ITEMS);

    if (!data) return [];

    return JSON.parse(data);
  } catch (error) {
    console.error("내 준비물 불러오기 실패:", error);
    return [];
  }
}

// 특정 카테고리의 준비물만 불러오기
export async function getMyItemsByCategory(
  categoryId: string,
): Promise<CustomItem[]> {
  const items = await getMyItems();

  return items.filter(
    (item): item is CustomItem => item.categoryId === categoryId,
  );
}

// -------------------------
// 사용자 카테고리 삭제
// -------------------------

export async function deleteMyCategory(categoryId: string) {
  try {
    await migrateMyData();

    const [categories, items] = await Promise.all([
      getMyCategories(),
      getMyItems(),
    ]);

    const nextCategories = categories.filter(
      (category) => category.id !== categoryId,
    );

    // 해당 카테고리에 속한 준비물도 함께 삭제
    const nextItems = items.filter((item) => item.categoryId !== categoryId);

    await Promise.all([
      AsyncStorage.setItem(
        STORAGE_KEYS.MY_CATEGORIES,
        JSON.stringify(nextCategories),
      ),
      AsyncStorage.setItem(STORAGE_KEYS.MY_ITEMS, JSON.stringify(nextItems)),
    ]);
  } catch (error) {
    console.error("사용자 카테고리 삭제 실패:", error);
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
      STORAGE_KEYS.MY_CATEGORIES,
      STORAGE_KEYS.MY_DATA_MIGRATED,
    ]);

    migrationPromise = null;
  } catch (error) {
    console.error("데이터 삭제 실패:", error);
  }
}

// -------------------------
// 체크리스트 초기화
// -------------------------

export async function resetCheckedItems() {
  try {
    // 기본 준비물 체크 상태 초기화
    await AsyncStorage.removeItem(STORAGE_KEYS.CHECKED_ITEMS);

    // 사용자 준비물 체크 상태 초기화
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
