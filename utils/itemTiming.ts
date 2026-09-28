import { BabyItem, WeekRange } from "../types/baby";

export type ItemTimingStatus = "NOW" | "UPCOMING" | "EXPIRED" | "URGENT";

// export const getItemTimingStatus = (
//   item: BabyItem,
//   currentWeek: number,
// ): ItemTimingStatus => {
//   const { fromWeek, toWeek } = item.preparationPeriod;

//   // 임신 주수 → 출산까지 남은 주수 (대략)
//   // 만삭을 40주로 가정
//   const weeksUntilBirth = 40 - currentWeek;

//   // fromWeek, toWeek가 음수인 경우 (출산 전)
//   // 예: fromWeek = -12, toWeek = -4
//   // → 남은 주수가 12 ~ 4 사이일 때 NOW

//   if (toWeek < 0) {
//     // 순수 출산 전 구간
//     if (weeksUntilBirth > Math.abs(fromWeek)) return "UPCOMING";
//     if (weeksUntilBirth >= Math.abs(toWeek)) return "NOW";
//     return "EXPIRED";
//   }

//   if (fromWeek >= 0) {
//     // 순수 출산 후 구간
//     // 현재는 임신 중이므로 아직 UPCOMING으로 보는 게 맞음
//     return "UPCOMING";
//   }

//   // fromWeek 음수 + toWeek 양수 (출산 전~후를 걸침)
//   if (weeksUntilBirth > Math.abs(fromWeek)) return "UPCOMING";
//   return "NOW"; // 이미 구간 안에 들어옴
// };

export const getItemTimingStatus = (
  item: BabyItem,
  currentWeek: number,
): ItemTimingStatus => {
  const { fromWeek, toWeek } = item.preparationPeriod;

  // 출산까지 남은 주수
  const weeksUntilBirth = 40 - currentWeek;

  // ==========================================
  // 1. 출산 후에 사용하는 물품
  // ==========================================
  // 예: 4 ~ 16
  //
  // 임신 중에는 아직 준비 시기가 아니므로
  // UPCOMING
  //
  if (fromWeek >= 0) {
    return "UPCOMING";
  }

  // ==========================================
  // 2. 출산 전부터 출산 후까지 사용하는 물품
  // ==========================================
  // 예: -4 ~ 4
  //
  // 출산 4주 전부터 준비하면 되는 물품
  //
  if (fromWeek < 0 && toWeek >= 0) {
    // 아직 준비 시작 시점 전
    if (weeksUntilBirth > Math.abs(fromWeek)) {
      return "UPCOMING";
    }

    // 준비 시작 시점에 들어옴
    return "NOW";
  }

  // ==========================================
  // 3. 출산 전에 준비해야 하는 물품
  // ==========================================
  // 예: -12 ~ -4
  //
  // 출산 12주 전 ~ 4주 전
  // ==========================================

  // 아직 준비 시작 전
  if (weeksUntilBirth > Math.abs(fromWeek)) {
    return "UPCOMING";
  }

  // 준비 권장 기간
  if (weeksUntilBirth >= Math.abs(toWeek)) {
    return "NOW";
  }

  // 준비 권장 기간을 지나감
  return "URGENT";
};
export const getPreparationPeriodText = (fromWeek: number, toWeek: number) => {
  if (toWeek < 0) {
    return `출산 ${Math.abs(fromWeek)} ~ ${Math.abs(toWeek)}주 전`;
  }

  if (fromWeek >= 0) {
    return `출산 후 ${fromWeek} ~ ${toWeek}주`;
  }

  return `출산 ${Math.abs(fromWeek)}주 전 ~ 출산 후 ${toWeek}주`;
};

export type UrgencyLevel = "SAFE" | "RECOMMENDED" | "URGENT" | "PASSED";
export interface PreparationPeriod {
  fromWeek: number;
  toWeek: number;
}

export const calculateUrgency = (
  currentWeek: number,
  period: PreparationPeriod,
): UrgencyLevel => {
  const { fromWeek, toWeek } = period;

  const weeksUntilBirth = 40 - currentWeek;

  // -----------------------------
  // 출산 후에 사용하는 물품
  // -----------------------------
  if (fromWeek >= 0) {
    return "SAFE";
  }

  // -----------------------------
  // 출산 전 ~ 출산 후에 걸친 물품
  // -----------------------------
  if (fromWeek < 0 && toWeek >= 0) {
    if (weeksUntilBirth > Math.abs(fromWeek)) {
      return "SAFE";
    }

    return "RECOMMENDED";
  }

  // -----------------------------
  // 순수 출산 전 준비물
  // -----------------------------

  // 아직 준비 시작 시점 전
  if (weeksUntilBirth > Math.abs(fromWeek)) {
    return "SAFE";
  }

  // 준비 권장 기간
  if (weeksUntilBirth >= Math.abs(toWeek)) {
    return "RECOMMENDED";
  }

  // 준비 기간이 지나감
  return "URGENT";
};
