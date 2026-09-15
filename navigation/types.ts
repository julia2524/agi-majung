import { BabyItem } from "../types/types";

// 1. 전체 라우트 파라미터 타입 정의 (Home과 게임 화면 추가)
export type RootStackParamList = {
  OnboardingScreen: undefined;
  DueDateScreen: undefined;
  BabyOrderScreen: {
    dueDate: string;
  };
  HomeScreen: {
    dueDate: string;
    babyOrder: "first" | "secondOrMore";
  };
  ItemDetailScreen: {
    itemId: string;
  };

  ChecklistScreen: {
    categoryId: string;
    categoryName: string;
    dueDate: string;
    babyOrder: "first" | "secondOrMore";
  };
  MyItemScreen: undefined;
  SettingScreen: undefined;
};
