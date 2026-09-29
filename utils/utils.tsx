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
    case "의류":
      return "tshirt-crew-outline"; // 옷 아이콘

    case "잡화":
      return "bag-personal-outline"; // 가방/잡화 아이콘

    case "가구,수납":
      return "bed-outline"; // 침대/가구 아이콘

    case "가전,디지털":
      return "washing-machine"; // 가전/세탁기 아이콘

    case "생활,위생":
      return "paper-roll-outline"; // 휴지/위생용품 아이콘

    case "케어,건강":
      return "thermometer"; // 체온계/건강케어 아이콘

    case "완구,도서":
      return "toy-brick-outline"; // 장난감/블록 아이콘

    case "수유용품":
      return "baby-bottle-outline"; // 젖병/수유 아이콘

    default:
      return "baby-face-outline";
  }
}

// MaterialCommunityIcons 우선 매핑 (일부 아이콘은 Ionicons 사용 가능)
export const ITEM_ICON_MAP: Record<string, string> = {
  // 1. 카시트 / 이동 / 외출
  카시트: "car-child-seat",
  유모차: "baby-carriage",
  아기띠: "baby-carriage",
  기저귀가방: "bag-personal-outline",
  "휴대용 기저귀매트": "diaper-outline",
  "아기띠 침받이": "square-outline",
  "유모차 라이너 / 쿨시트": "baby-carriage",
  "기저귀 교환매트": "human-baby-changing-table",
  "아기 외출용 담요(블랭킷)": "baby-carriage",

  // 2. 수면 / 이불 / 의류
  아기침대: "bed-outline",
  속싸개: "human-baby-changing-table",
  "스와들(속싸개 대체)": "human-baby-changing-table",
  배냇저고리: "tshirt-crew",
  바디수트: "tshirt-v-outline",
  "신생아 옷 전반": "hanger",
  "아기 내의/실내복": "tshirt-crew",
  "외출용 겉옷(방한복)": "hanger",
  "아기이불/베개": "bed-outline",
  방수패드: "bed-outline",
  "양말/모자/손싸개": "baby-face-outline",
  "신생아 양말": "shoe-print",
  "신생아 모자": "hat-fedora",
  손싸개: "hand-clap",
  수면조끼: "tshirt-crew",
  침대매트: "bed-double-outline",
  "아기 바운서": "cradle-outline",
  "아기 모빌": "baby-face-outline",

  // 3. 목욕 / 위생 / 세탁
  아기욕조: "bathtub-outline",
  "목욕용품(세정제/샴푸)": "lotion-outline",
  목욕타월: "shower-head",
  "목욕 온도계": "thermometer-water",
  "욕조 등받이/보조용품": "shower-head",
  "기저귀(신생아 사이즈)": "diaper-outline",
  "물티슈(신생아용)": "paper-roll",
  "방수 비닐/아기 쓰레기통 (휴지통)": "trash-can-outline",
  "기저귀 캐디(소형 이동 바구니)": "basket-outline",
  "아기 전용 세탁바구니": "basket",
  "아기 세탁세제/빨래망": "washing-machine",
  "아기 세탁세제": "washing-machine",
  "아기 섬유유연제": "bottle-tonic-plus-outline",
  "아기 빨래망": "washing-machine",
  세탁용품: "spray-bottle",
  "손·얼굴 전용 세정제": "lotion-outline",
  아기비데: "toilet",
  "아기 빗": "hair-dryer-outline",
  기저귀갈이대: "human-baby-changing-table",
  "아기 전용 세탁기": "washing-machine",

  // 4. 건강 / 케어
  체온계: "thermometer",
  콧물흡인기: "medical-bag",
  "아기 로션/수딩젤": "bottle-tonic-outline",
  "아기 손톱관리 세트": "content-cut",
  "거즈/엠보 손수건": "square-outline",
  "공갈젖꼭지(쪽쪽이)": "baby-face-outline",
  턱받이: "baby-face-outline",
  "아기 면봉 (안전면봉/점착면봉)": "medical-cotton-swab",
  온습도계: "home-thermometer-outline",
  "기저귀 발진 크림": "bottle-tonic-outline",

  // 5. 수유 / 분유 / 젖병 관리
  젖병: "baby-bottle-outline",
  젖병소독기: "baby-bottle-outline",
  "젖병 건조대": "baby-bottle-outline",
  "젖병 세척솔/젖꼭지 솔": "baby-bottle-outline",
  "젖병 세정제": "baby-bottle-outline",
  "분유 보관용기": "baby-bottle-outline",
  "분유쉐이커 / 젖병 믹서": "baby-bottle-outline",
  "젖병 보온/워머": "baby-bottle-outline",
  유축기: "baby-bottle-outline",
  수유쿠션: "baby-bottle-outline",
  수유시트: "baby-bottle-outline",
  분유포트: "kettle-outline",
  수유등: "lamp-outline",
  모유저장팩: "baby-bottle-outline",
  "분유 제조기 (자동)": "baby-bottle-outline",
  수유가리개: "account-child-circle",

  // 6. 산모 용품
  "회음부 관리용품": "heart-pulse",
  "수유브라/나시": "human-female",
  "수유나시/수유복": "human-female-boy",
  산모패드: "mother-heart",
  수유패드: "baby-bottle-outline",
  산모수첩: "book-outline",
  "아기 퇴원복": "tshirt-crew",
  "산모용 슬리퍼": "shoe-print",
  "유두보호크림(라놀린)": "medical-bag",
  "유두 보호 크림 / 상처 연고": "medical-bag",
  "산모용 돌기/무압박 양말": "shoe-print",
  "수면양말 (산모용)": "shoe-print",
  수면양말: "shoe-print",
  "산후용 위생 팬티": "human-female",
  손목보호대: "bandage",
  "손목 보호대": "bandage",
  압박스타킹: "bandage",
  "산후 복대": "bandage",
  "가슴 쿨링팩 / 마사지팩": "bandage",
  "회음부 방석 (도넛방석)": "bandage",
  "개인용 좌욕 대야 (좌욕기)": "toilet",

  // 7. 가전 / 가구 / 교구
  "트롤리 (아기용품 이동식 정리함)": "cart-outline",
  가습기: "air-humidifier",
  공기청정기: "air-purifier",
  "아기 병풍/사운드북": "baby-face-outline",
  "아기 병풍": "baby-face-outline",
  사운드북: "baby-face-outline",
  백색소음기: "bed-outline",
};

export function getItemIcon(title: string, category?: string | number): string {
  // 1. 물품 이름과 정확히 매칭되는 아이콘이 있는지 확인
  if (ITEM_ICON_MAP[title]) {
    return ITEM_ICON_MAP[title];
  }

  // 2. 키워드 포함 여부 검사 (부분 매칭 Fallback)
  if (title.includes("기저귀")) return "diaper-outline";
  if (title.includes("유모차")) return "baby-carriage";
  if (title.includes("카시트")) return "car-child-seat";
  if (
    title.includes("옷") ||
    title.includes("의류") ||
    title.includes("내의") ||
    title.includes("저고리")
  ) {
    return "tshirt-crew-outline";
  }
  if (
    title.includes("세제") ||
    title.includes("세탁") ||
    title.includes("빨래")
  ) {
    return "washing-machine";
  }
  if (title.includes("체온계") || title.includes("온습도"))
    return "thermometer";
  if (
    title.includes("젖병") ||
    title.includes("수유") ||
    title.includes("분유")
  ) {
    return "baby-bottle-outline";
  }
  if (
    title.includes("목욕") ||
    title.includes("욕조") ||
    title.includes("비데")
  ) {
    return "bathtub-outline";
  }
  if (
    title.includes("침대") ||
    title.includes("이불") ||
    title.includes("패드")
  ) {
    return "bed-outline";
  }
  if (
    title.includes("로션") ||
    title.includes("크림") ||
    title.includes("오일")
  ) {
    return "bottle-tonic-outline";
  }
  if (
    title.includes("양말") ||
    title.includes("신발") ||
    title.includes("슬리퍼")
  ) {
    return "shoe-print";
  }
  // category가 숫자(id)인 경우와 문자열(name)인 경우 모두 대응
  if (typeof category === "number") {
    // categoryId(1~8) 숫자에 맞춰 아이콘 반환
    switch (category) {
      case 1:
        return "tshirt-crew-outline"; // 의류
      case 2:
        return "bag-personal-outline"; // 잡화
      case 3:
        return "bed-outline"; // 가구,수납
      case 4:
        return "washing-machine"; // 가전,디지털
      case 5:
        return "paper-roll-outline"; // 생활,위생
      case 6:
        return "thermometer"; // 케어,건강
      case 7:
        return "toy-brick-outline"; // 완구,도서
      case 8:
        return "baby-bottle-outline"; // 수유용품
      default:
        return "baby-face-outline";
    }
  }

  // 3. 매칭되는 키워드가 없으면 카테고리 대표 아이콘으로 대체
  return getCategoryIcon(category || "");
}
