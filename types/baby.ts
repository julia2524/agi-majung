// 1. Priority (우선순위 정렬용) - 숫자 값이 클수록 상단 노출
export type PriorityLevel = 3 | 2 | 1;
// 3: MUST (필수) | 2: HANDY (유용) | 1: LATER (천천히)

// 2. PreparationTiming (준비 권장 기간: 임신 주수 ~ 생후 월령)
export interface WeekRange {
  fromWeek: number; // 예: -3 (임신 3주 전부터)
  toWeek: number; // 예: 1  (생후 1주까지)
}

// 3. PurchaseDecisionType (구매 판단 상태 4가지)
export type PurchaseDecisionType =
  | "PREPARE_IN_ADVANCE" // 🟢 미리 준비해두면 좋은 것 -출산 전에 준비하는 걸 권장
  | "PREPARE_BEFORE_USE" // 🟡 필요해지기 전에 준비하면 되는 것 -미리 사재기할 필요는 없음
  | "SEE_AND_BUY" // 🔵 실제 사용 여부 보고 준비해도 되는 것 -아기/상황을 보고 결정
  | "BUY_AFTER_BIRTH"; // ⚪ 출산 후 필요할 때 사도 되는 것 -출산 전에 없어도 괜찮음

export type ReuseType = "GOOD" | "CHECK" | "NEW";

export interface BabyItem {
  id: number;
  category: string;
  title: string;
  priority: PriorityLevel;

  // 실제 사용이 시작되는 대략적인 시점
  usageStartWeek: number | null;

  // 사용자가 준비를 시작해도 좋은 시점 ~ 준비되어 있으면 좋은 시점
  preparationPeriod: WeekRange;

  // 구매를 어떻게 판단하면 좋은지
  purchaseDecision: PurchaseDecisionType;

  recommendedQuantity: string | null;
  noticeTag: string | null;

  // 물려받기/중고 구매 판단
  reuseType: ReuseType;

  review: string;
  tip: string;
}
