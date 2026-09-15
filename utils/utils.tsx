export function getPriorityText(priority: "MUST" | "HANDY" | "LATER") {
  switch (priority) {
    case "MUST":
      return "꼭 준비";
    case "HANDY":
      return "있으면 편함";
    case "LATER":
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
