import { PriorityLevel } from "../types/baby";

export function getPriorityText(priority: PriorityLevel) {
  switch (priority) {
    case 3:
      return "꼭 준비";
    case 2:
      return "있으면 편함";
    case 1:
      return "나중에 준비";
    default:
      return "";
  }
}

export function getTimingText(
  timing: "BEFORE_BIRTH" | "AFTER_BIRTH" | "CASE_BY_CASE" | "NEED_ON_SITE",
) {
  switch (timing) {
    case "BEFORE_BIRTH":
      return "출산 전에 준비해요";

    case "AFTER_BIRTH":
      return "출산 후 준비해도 괜찮아요";

    case "CASE_BY_CASE":
      return "상황에 따라 준비해요";

    case "NEED_ON_SITE":
      return "현장에서 필요한 경우 준비해요";

    default:
      return "";
  }
}

export function getCategoryIcon(category: string) {
  switch (category) {
    case "출산/병원":
      return "hospital-box-outline";

    case "수면":
      return "bed-outline";

    case "목욕":
      return "bathtub-outline";

    case "수유":
      return "baby-bottle-outline";

    case "의류":
      return "tshirt-crew-outline";

    case "위생/세탁":
      return "washing-machine";

    case "외출":
      return "bag-personal-outline";

    case "산모":
      return "human-pregnant";

    case "생활":
      return "home-outline";

    default:
      return "baby-face-outline";
  }
}
