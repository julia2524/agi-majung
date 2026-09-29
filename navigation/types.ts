import { BabyItem } from "../types/baby";

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
    itemId: number;
    babyOrder: "first" | "secondOrMore";
  };
  ChecklistScreen: {
    categoryId: string;
    categoryName: string;
    dueDate: string;
    babyOrder: "first" | "secondOrMore";
    initialFilter?: "NOW" | "UPCOMING" | "URGENT";
  };
  MyItemScreen: undefined;
  SettingScreen: undefined;
};
