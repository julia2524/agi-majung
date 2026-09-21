import { BabyItem } from "../types/baby";

export type ItemTimingStatus = "NOW" | "UPCOMING" | "EXPIRED";

// export const getItemTimingStatus = (
//   item: BabyItem,
//   currentWeek: number,
// ): ItemTimingStatus => {
//   const { fromWeek, toWeek } = item.preparationPeriod;

//   // 아직 준비 시기가 오지 않음
//   if (currentWeek < fromWeek) {
//     return "UPCOMING";
//   }

//   // 지금 준비할 시기
//   if (currentWeek <= toWeek) {
//     return "NOW";
//   }

//   // 준비 시기가 지남
//   return "EXPIRED";
// };
export const getItemTimingStatus = (
  item: BabyItem,
  currentWeek: number,
): ItemTimingStatus => {
  const { fromWeek, toWeek } = item.preparationPeriod;

  // 임신 주수 → 출산까지 남은 주수 (대략)
  // 만삭을 40주로 가정
  const weeksUntilBirth = 40 - currentWeek;

  // fromWeek, toWeek가 음수인 경우 (출산 전)
  // 예: fromWeek = -12, toWeek = -4
  // → 남은 주수가 12 ~ 4 사이일 때 NOW

  if (toWeek < 0) {
    // 순수 출산 전 구간
    if (weeksUntilBirth > Math.abs(fromWeek)) return "UPCOMING";
    if (weeksUntilBirth >= Math.abs(toWeek)) return "NOW";
    return "EXPIRED";
  }

  if (fromWeek >= 0) {
    // 순수 출산 후 구간
    // 현재는 임신 중이므로 아직 UPCOMING으로 보는 게 맞음
    return "UPCOMING";
  }

  // fromWeek 음수 + toWeek 양수 (출산 전~후를 걸침)
  if (weeksUntilBirth > Math.abs(fromWeek)) return "UPCOMING";
  return "NOW"; // 이미 구간 안에 들어옴
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
