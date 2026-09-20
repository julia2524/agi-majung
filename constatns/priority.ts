import { PriorityLevel, PurchaseDecisionType } from "../types/baby";
import { theme } from "../types/design-system/theme/theme";

// ==========================================
// 🎨 UI 렌더링용 매핑 객체 (사용자 친화적 문구 & 스타일)
// ==========================================

// 1. 구매 판단별 UI 카드 라벨 & 안내 문구 매핑
export const PURCHASE_DECISION_CONFIG: Record<
  PurchaseDecisionType,
  {
    badgeText: string; // 배지용 텍스트 (예: 🟢 미리 준비)
    mainGuideText: string; // 화면에 강조할 핵심 문구
    subGuideText: string; // 부연 설명
    color: string; // 테마 색상 (필요시)
  }
> = {
  PREPARE_IN_ADVANCE: {
    badgeText: "🟢 미리 준비",
    mainGuideText: "지금 준비해두면 좋아요",
    subGuideText: "출산 후 바로 사용할 수 있도록 미리 챙겨두세요.",
    color: "#2E7D32", // 초록 계열
  },
  PREPARE_BEFORE_USE: {
    badgeText: "🟡 필요 전 준비",
    mainGuideText: "아직 서두르지 않아도 돼요",
    subGuideText: "실제 사용 시점이 오기 전에 여유 있게 준비하세요.",
    color: "#F57F17", // 노랑/주황 계열
  },
  SEE_AND_BUY: {
    badgeText: "🔵 필요시 구매",
    mainGuideText: "상황을 보고 결정해도 괜찮아요",
    subGuideText: "아기 성향이나 수유 방식이 정해진 뒤 사도 늦지 않아요.",
    color: "#1565C0", // 파랑 계열
  },
  BUY_AFTER_BIRTH: {
    badgeText: "⚪ 출산 후 구매",
    mainGuideText: "출산 후에 사도 충분해요",
    subGuideText: "병원이나 조리원에서 필요성을 느낄 때 천천히 준비하세요.",
    color: "#616161", // 회색 계열
  },
};

// 2. Priority 배지 스타일 매핑
export const PRIORITY_CONFIG: Record<
  PriorityLevel,
  {
    label: string;
    bg: string;
    text: string;
  }
> = {
  3: {
    label: "필수",
    bg: theme.colors.badge.needBg,
    text: theme.colors.badge.needText,
  },
  2: {
    label: "유용",
    bg: theme.colors.badge.handyBg,
    text: theme.colors.badge.handyText,
  },
  1: {
    label: "천천히",
    bg: theme.colors.badge.laterBg,
    text: theme.colors.badge.laterText,
  },
};
