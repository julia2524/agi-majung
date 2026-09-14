export interface BabyItem {
  id: string;
  category: string;
  title: string;
  priority: "MUST" | "HANDY" | "LATER";
  timing: "BEFORE_BIRTH" | "AFTER_BIRTH" | "CASE_BY_CASE" | "NEED_ON_SITE";
  recommendedQuantity: string | null;
  noticeTag: string | null;
  purchaseDecision: string;
  isReusable: boolean;
  review: string;
  tip: string;
}
