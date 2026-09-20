import { BabyItem } from "../types/baby";

export type ItemTimingStatus = "NOW" | "UPCOMING" | "EXPIRED";

export const getItemTimingStatus = (
  item: BabyItem,
  currentWeek: number,
): ItemTimingStatus => {
  const { fromWeek, toWeek } = item.preparationPeriod;

  // 아직 준비 시기가 오지 않음
  if (currentWeek < fromWeek) {
    return "UPCOMING";
  }

  // 지금 준비할 시기
  if (currentWeek <= toWeek) {
    return "NOW";
  }

  // 준비 시기가 지남
  return "EXPIRED";
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
