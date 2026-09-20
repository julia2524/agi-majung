import { PriorityLevel } from "../types/baby";

// 2. UI 및 필터링용 Mapping 객체
export const PRIORITY_CONFIG: Record<
  PriorityLevel,
  { label: string; badgeText: string; color: string; sortOrder: number }
> = {
  3: {
    label: "필수 준비",
    badgeText: "MUST",
    color: "#FF6B6B", // 직관적인 레드/핑크 계열
    sortOrder: 1, // 내림차순 정렬 시 우선순위 상위
  },
  2: {
    label: "유용한 품목",
    badgeText: "HANDY",
    color: "#4ECDC4", // 정돈된 민트/블루 계열
    sortOrder: 2,
  },
  1: {
    label: "천천히 준비",
    badgeText: "LATER",
    color: "#95A5A6", // 차분한 그레이 계열
    sortOrder: 3,
  },
};
