export type PriorityLevel = 3 | 2 | 1;
// export interface BabyItem {
//   id: string;
//   category: string;
//   title: string;
//   priority: "MUST" | "HANDY" | "LATER";
//   timing: "BEFORE_BIRTH" | "AFTER_BIRTH" | "CASE_BY_CASE" | "NEED_ON_SITE";
//   recommendedQuantity: string | null;
//   noticeTag: string | null;
//   purchaseDecision: string;
//   isReusable: boolean;
//   review: string;
//   tip: string;
// }

// 3. 기존 BabyItem 인터페이스 수정
export interface BabyItem {
  id: number;
  category: string;
  title: string;
  priority: PriorityLevel; // 👈 "MUST" | "HANDY" | "LATER" 에서 숫자 타입으로 변경!
  timing: string;
  recommendedQuantity: string | null;
  noticeTag: string | null;
  purchaseDecision: string;
  isReusable: boolean;
  review: string;
  tip: string;
}
