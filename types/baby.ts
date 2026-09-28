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

// 4. 중고/당근 거래 적합도
export type SecondHandType = "GOOD" | "CHECK" | "NEW";
// [마이그레이션용] 기존 ReuseType 마핑용
export type ReuseType = SecondHandType;

export const categories = [
  { id: 1, name: "의류" },
  { id: 2, name: "잡화" },
  { id: 3, name: "가구,수납" },
  { id: 4, name: "가전,디지털" },
  { id: 5, name: "생활,위생" },
  { id: 6, name: "케어,건강" },
  { id: 7, name: "완구,도서" },
  { id: 8, name: "수유용품" },
  { id: 9, name: "나만의 준비물" },
];
export const tags = [
  { id: 1, name: "수유" },
  { id: 2, name: "수면" },
  { id: 3, name: "외출" },
  { id: 4, name: "위생" },
  { id: 5, name: "배변" },
  { id: 6, name: "목욕" },
  { id: 7, name: "놀이,발달" },
  { id: 8, name: "출산가방" },
  { id: 9, name: "산모케어" },
  { id: 10, name: "출산준비" },
  { id: 11, name: "아기케어" },
];
export interface BabyItem {
  id: number;

  // [신규] ID 체계
  categoryId?: number; // categories 마스터의 id
  tagIds?: number[]; // tags 마스터의 id 배열 (N:M 멀티 태깅)

  // [하위 호환용] 기존 UI가 덜 고쳐졌을 때 터지는 것을 방지
  category?: string;
  reuseType: ReuseType; // 하위 호환용 (= secondHandType 동일값 세팅)

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

  // [신규/개선] 첫째/둘째 분기용
  secondHandType?: SecondHandType; // 타인 중고/당근 구매 적합도
  isReusableFromFirst?: boolean; // 첫째 물건 둘째 재사용 가능 여부
  reuseGuideNote?: string | null; // 첫째 물건 재사용 시 상세 체크포인트

  review: string;
  tip: string;
}
