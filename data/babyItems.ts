import { theme } from "../types/design-system/theme/theme";
import { BabyItem } from "../types/baby";

export type ReuseType = "GOOD" | "CHECK" | "NEW";

export const babyItems: BabyItem[] = [
  {
    id: 1,
    categoryId: 2,
    tagIds: [3, 8, 10],
    category: "잡화",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "카시트",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -4,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "신생아 전용(바구니) 또는 겸용 카시트 필수",
    isReusableFromFirst: true,
    reuseGuideNote:
      "사고 이력이 없고 제조일자 기준 유효기간(보통 5~6년) 이내일 때 재사용 가능합니다.",
    review:
      "조리원 퇴원 날 바로 사용해야 해서 출산 전에 차에 미리 설치해뒀어요. 처음 설치할 때 시간이 걸리니 남편이 미리 연습해보는 게 좋습니다.",
    tip: "신생아를 안고 차에 타는 것은 위험하며 불법입니다. 중고 구매 시에는 사고 이력 확인이 어려우므로 가급적 새 제품이나 내력을 아는 지인에게 받는 것을 권장합니다.",
  },
  {
    id: 2,
    categoryId: 3,
    tagIds: [2, 10, 11],
    category: "가구,수납",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기침대",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -4,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "출산 전 조립 및 패드 사전 세탁 필수",
    isReusableFromFirst: true,
    reuseGuideNote:
      "프레임은 그대로 재사용 가능합니다. 매트리스 오염 상태를 확인하고 커버/패드를 미리 세탁해두세요.",
    review:
      "출산 전에 미리 조립/세팅하고 매트리스 패드를 세탁해두었더니, 조리원 퇴소 후 집에 와서 바로 눕힐 수 있어 정말 안심됐어요.",
    tip: "신생아 침대(원목/플라스틱/이동식)는 사용 기간이 3~6개월로 짧아 대여나 중고 거래도 좋은 방법입니다. 프레임 닦기와 매트리스 커버·패드 세탁은 출산 전에 미리 마쳐두세요 다만 침대 주변에 범퍼가드 등을 미리 설치하기보다는 아기가 성장하면서 필요한 시점에 안전성을 확인해 추가하는 것이 좋아요.",
  },
  {
    id: 3,
    categoryId: 1,
    tagIds: [2, 6, 3, 11],
    category: "의류",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "속싸개",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -4,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "2~3개",
    noticeTag: "조리원 퇴원 선물 여부 확인 후 준비",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 및 삶음 소독 후 재사용 가능합니다 (보풀 및 늘어남 정도 확인 필요).",
    review:
      "신생아 땐 모로반사 잡는 용도로 매일 썼고, 아기가 좀 자란 뒤에는 목욕 타월이나 유모차 블랭킷으로도 계속 유용하게 활용했어요.",
    tip: "초보 부모는 일반 속싸개 싸기가 어려울 수 있으니, 지퍼나 벨크로형 스와들(스와들업 등)을 1~2개 섞어서 준비하면 밤잠 재울 때 훨씬 수월합니다.",
  },
  {
    id: 4,
    categoryId: 5,
    tagIds: [6, 11],
    category: "생활,위생",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "아기욕조",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "2개",
    noticeTag: "헹굼용 포함 2개 필요 (대야 형태 추천)",
    isReusableFromFirst: true,
    reuseGuideNote:
      "물때 및 미세 스크래치(세균 번식 위험)를 깨끗이 세척 및 소독 후 재사용하세요.",
    review:
      "비싼 기능성 욕조 대신 다이소나 기본 욕조 2개를 샀는데, 신생아 목욕(비눗물용/헹굼물용)시킬 때 최고였습니다.",
    tip: "신생아 목욕은 헹굼물이 필수라 욕조 2개가 필요합니다. 등받이가 있거나 크기가 너무 큰 것보다는 부모 손목에 무리가 안 가고 가벼운 대야 형태가 초반엔 제일 편합니다.",
  },
  {
    id: 5,
    categoryId: 1,
    tagIds: [2, 10, 11, 8],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "배냇저고리",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -4,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "2~3벌",
    noticeTag: "병원·조리원 선물 여부 확인 (3~4벌 적당)",
    isReusableFromFirst: true,
    reuseGuideNote:
      "사용 기간이 짧아 상태가 대체로 양호합니다. 출산 전 밤가시 세탁 후 바로 재사용하세요.",
    review:
      "생각보다 아기가 금방 자라고, 병원과 조리원에서 받아온 게 많아서 직접 산 건 몇 번 못 입혔어요.",
    tip: "배냇저고리는 착용 기간이 3~4주로 아주 짧습니다. 병원이나 조리원에서 제공받거나 선물로 들어오는 경우도 많아서 직접 구매는 최소화해도 괜찮아요. 퇴원할 때 입힐 옷으로 활용할 수 있으니, 제공 여부를 먼저 확인하고 필요하다면 배냇수트로 대체하는 것도 좋은 방법입니다.",
  },
  {
    id: 6,
    categoryId: 1,
    tagIds: [2, 11, 10],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "바디수트",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "2~3벌",
    noticeTag: "머리로 안 뒤집는 앞트임/똑딱이형 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "목 부위 늘어남이나 똑딱이 단추 상태, 황변 여부를 확인한 뒤 세탁하여 재사용하세요.",
    review:
      "기저귀 갈 때 밑에 똑딱이 단추만 풀면 돼서 배냇저고리보다 말려 올라가지 않고 훨씬 편했어요.",
    tip: "목을 아직 못 가누는 신생아용은 머리로 뒤집어쓰는 형태보다 앞트임(가디건형/똑딱이) 스타일로 구매해야 입히기 수월합니다.",
  },
  {
    id: 7,
    categoryId: 1,
    tagIds: [2, 11],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "아기 내의/실내복",
    priority: 2,
    usageStartWeek: 6,
    preparationPeriod: {
      fromWeek: 4,
      toWeek: 12,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "3~5벌",
    noticeTag: "신생아용은 60사이즈, 이후 70~80사이즈",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 및 삶음 소독 후 재사용 가능합니다 (목 늘어남 및 황변 오염 확인 필요).",
    review:
      "신생아 시기에는 배냇저고리와 바디수트를 주로 입히고, 내의는 아기가 조금 자란 뒤부터 활용도가 높았어요. 60사이즈는 필요하다면 소량만 준비하고, 70~80사이즈 내의는 생후 2~3개월 전후부터 필요에 따라 천천히 준비해도 충분합니다.",
    tip: "신생아용 내의를 준비한다면 60사이즈 3~4벌 정도로 최소화하고, 70~80사이즈는 아기의 성장 속도와 계절에 맞춰 출산 후 준비하세요. 매일 세탁한다면 많은 수량이 필요하지 않습니다.",
  },
  {
    id: 8,
    categoryId: 5,
    tagIds: [5, 4, 8, 11],
    category: "생활,위생",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "기저귀(신생아 사이즈)",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 2,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1~2팩",
    noticeTag: "아기 출생 체중에 따라 사이즈 변경",
    isReusableFromFirst: false,
    reuseGuideNote:
      "소모품이며 보관 기간에 따른 습기/오염 위험이 있어 둘째용도 새 제품 사용을 권장합니다. (미개봉품은 유효기간 내 사용 가능)",
    review:
      "첫째 때 박스째로 사뒀다가 아기 살이 금방 붙어 NB(신생아) 사이즈를 절반도 못 쓰고 다른 산모에게 나눔했습니다.",
    tip: "신생아 단계(NB)는 보통 3~4kg 내외로 빠르게 지나갑니다. 조리원에서 아기 성장 속도를 보고 퇴소 직전에 1~2단계 기저귀를 주문하는 것이 안전합니다.",
  },
  {
    id: 9,
    categoryId: 6,
    tagIds: [4, 11, 2],
    category: "케어,건강",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "콧물흡인기",
    priority: 1,
    usageStartWeek: 4,
    preparationPeriod: {
      fromWeek: 2,
      toWeek: 8,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1개",
    noticeTag: "출산 후 필요시 전동/수동 선택 구매",
    isReusableFromFirst: true,
    reuseGuideNote:
      "본체 및 전동 기기는 재사용 가능합니다. 다만 노즐/팁 등 피부/코에 직접 닿는 소모품은 새것으로 교체해 주세요.",
    review:
      "신생아 때는 거의 쓰지 않았는데, 감기 걸리거나 환절기에 콧물 때문에 잠을 잘 못 잘 때 정말 큰 도움이 됐어요. 그럴 땐 작은 구원자 같았답니다.",
    tip: "출산 전에 미리 준비해야 하는 필수품은 아니에요. 신생아기가 지나고, 수유나 잠자리에서 콧물 때문에 힘들어할 때 필요성을 느끼면 전동형이나 수동형 중에서 골라서 준비해도 충분합니다.",
  },
  {
    id: 10,
    categoryId: 2,
    tagIds: [3, 11],
    category: "잡화",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "유모차",
    priority: 3,
    usageStartWeek: 4,
    preparationPeriod: {
      fromWeek: 2,
      toWeek: 12,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "거주 환경 및 출생 계절 고려 후 천천히 준비",
    isReusableFromFirst: true,
    reuseGuideNote:
      "프레임과 바퀴 상태가 양호하다면 재사용 가능합니다. 시트 커버는 깨끗이 세탁/스팀 소독 후 사용하세요.",
    review:
      "늦가을생이라 겨울엔 외출을 못 해서 100일 지나 봄부터 탔어요. 미리 샀으면 집안에서 짐만 될 뻔했습니다.",
    tip: "디럭스, 절디(절충), 휴대용 등 종류가 다양합니다. 아기가 태어난 계절과 거주 환경(엘리베이터 유무, 보도 상태)을 직접 경험해본 후 50일~100일 전후로 구매하셔도 됩니다.",
  },
  {
    id: 11,
    categoryId: 2,
    tagIds: [3, 2, 11, 10],
    category: "잡화",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기띠",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "체형 조절 가능 여부 및 신생아 지원 확인",
    isReusableFromFirst: true,
    reuseGuideNote:
      "버클, 버클 끈, 버팀목 이상 유무를 확인 후 세탁하여 재사용 가능합니다. (침받이 패드는 새것 권장)",
    review:
      "신생아 땐 헝겊 슬링으로 안아 재우기 할 때 썼고, 목 가눈 뒤엔 버클형 올인원 아기띠 하나로 18개월까지 알차게 썼어요.",
    tip: "신생아 시기에는 천 슬링이나 코나 아기띠가 편하고, 이후에는 체중 분산이 잘 되는 구조의 아기띠를 추천합니다. 착용자(부모)의 체형에 맞춰 조절이 잘 되는지 확인하세요.",
  },
  {
    id: 12,
    categoryId: 4,
    tagIds: [1, 9, 10],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "유축기",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 2,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1개",
    noticeTag: "보건소 대여 사업 및 수유 방식 확인 후 준비",
    isReusableFromFirst: true,
    reuseGuideNote:
      "유축기 본체는 재사용 가능합니다. 단, 깔때기, 호스, 젖병 등 유선에 직접 닿는 깔때기 세트는 반드시 새것으로 교체해 주세요.",
    review:
      "직수 위주 완모라 거의 안 썼지만, 젖몸살이 왔을 때 양 조절용으로 며칠 동안 유용하게 썼습니다.",
    tip: "구매 전 관할 보건소의 유축기 대여 사업을 먼저 확인해보세요. 모유 수유 여부와 울혈(젖몸살) 상황을 보고 조리원에서 주문해도 배송이 빠릅니다.",
  },
  {
    id: 13,
    categoryId: 2,
    tagIds: [1, 11, 10],
    category: "잡화",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "수유쿠션",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "C자형/D자형 수유 계획에 맞춰 선택",
    isReusableFromFirst: true,
    reuseGuideNote:
      "내장재 충전재 꺼짐 정도를 확인하고 외부 커버를 세탁/소독하여 재사용 가능합니다.",
    review:
      "조리원에서부터 매일 썼어요. 수유할 때 손목과 허리로 가던 무리를 확 줄여줘서 없어서는 안 될 효자템이었습니다.",
    tip: "C자형(모유수유용)과 D자형(버클 고정형) 중 수유 계획에 맞춰 선택하세요. 높이가 낮아 아기 머리가 떨어질 땐 아래에 수건을 말아 받치면 각도가 딱 맞습니다.",
  },
  {
    id: 14,
    categoryId: 8,
    tagIds: [1, 3],
    category: "수유용품",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "수유시트",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 4,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0~1개",
    noticeTag: "호불호가 갈리므로 필요시 후구매 권장",
    isReusableFromFirst: true,
    reuseGuideNote:
      "폼 형태나 표면 오염을 확인하고 세척/소독 후 재사용 가능합니다.",
    review:
      "손목 아플까 봐 샀는데 아기가 답답해하고 자꾸 미끄러져서 몇 번 못 쓰고 처분했어요.",
    tip: "초보 부모나 수유 시 아기 안는 게 미숙할 땐 도움 될 수 있으나 필수품은 아닙니다. 필요성을 느끼실 때 추가 구매를 고민해보세요.",
  },
  {
    id: 15,
    categoryId: 4,
    tagIds: [1, 11],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "분유포트",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -2,
      toWeek: 2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1개",
    noticeTag: "쿨링 및 40도 보온 기능 전용 포트 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "유리/스텐 포트는 연마제 세척 및 구연산 통세척 후 재사용 가능합니다.",
    review:
      "냉장 보관해 둔 유축 모유를 중탕할 때나, 산후 회복용 미온수를 언제든 바로 마실 수 있어서 밤중 수유할 때 체력과 시간을 정말 많이 아꼈어요.",
    tip: "완모 중이라도 유축 모유 중탕(40~55도 적정)이나 산모의 수분 섭취용 보온 물로 유용하게 쓰입니다. 지정 온도가 오래 유지되는 디밍/보온 기능이 있는 제품을 선택하면 완모 육아에도 큰 도움이 됩니다.",
  },
  {
    id: 16,
    categoryId: 4,
    tagIds: [1, 2, 10],
    category: "가전,디지털",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "수유등",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "터치 조작 및 디밍(밝기 조절) 기능 필수",
    isReusableFromFirst: true,
    reuseGuideNote:
      "배터리 충전 상태 및 작동 이상 여부 확인 후 그대로 재사용 가능합니다.",
    review:
      "컴컴한 밤에 아기 상태 확인하고 밤중 수유할 때 눈부심 없이 은은해서 산후 우울감도 줄여주는 따뜻한 아이템이었어요.",
    tip: "자다 깨서 버튼을 찾기보다 터치형으로 켜지고, 미세하게 밝기 조절(디밍)이 가능한 제품을 고르세요. 타이머 기능이 있으면 더욱 편합니다.",
  },
  {
    id: 17,
    categoryId: 1,
    tagIds: [1, 9, 10],
    category: "의류",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "수유브라/나시",
    priority: 3,
    usageStartWeek: -2,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "3~4벌",
    noticeTag: "출산 후 가슴 사이즈 변화 고려 필수",
    isReusableFromFirst: false,
    reuseGuideNote:
      "개인 착용 의류 및 늘어남, 유즙 오염이 발생하는 와이어리스 속옷이므로 둘째 출산 시에도 새로 구매하는 것을 권장합니다.",
    review:
      "기존에 입던 브라는 답답해서 못 입겠더라고요. 랩 스타일이나 캡을 내릴 수 있는 수유 나시가 기저귀 갈고 수유할 때 훨씬 편했습니다.",
    tip: "출산 후 모유(유즙) 생성으로 가슴이 1~2사이즈 커지고 조임에 민감해집니다. 와이어가 없고 한 치수 여유 있는 원단으로 준비하세요.",
  },
  {
    id: 18,
    categoryId: 6,
    tagIds: [9, 8, 4, 10],
    category: "케어,건강",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "산모패드",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1~2팩",
    noticeTag: "병원·조리원 제공 수량 사전 확인",
    isReusableFromFirst: false,
    reuseGuideNote:
      "미개봉 새제품이라도 유통기한 및 위생 오염 우려가 있으므로 둘째 때 새로 구매하세요.",
    review:
      "병원에서 준 건 출산 당일에 다 썼어요. 오로 양이 생각보다 많아서 개인용으로 사간 입는 오버나이트가 훨씬 편하고 유용했습니다.",
    tip: "일반 산모패드보다 팬티형 오버나이트(입는 생리대)를 1~2팩 챙기시면 착용감도 편하고 샐 걱정 없이 조리원 생활을 할 수 있습니다.",
  },
  {
    id: 19,
    categoryId: 8,
    tagIds: [1, 9, 4],
    category: "수유용품",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "수유패드",
    priority: 2,
    usageStartWeek: -1,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 2,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1팩",
    noticeTag: "유량 확인 후 배송 주문 권장",
    isReusableFromFirst: false,
    reuseGuideNote:
      "피부 및 모유에 직접 닿는 일회용 위생용품이므로 둘째 출산 시 새로 준비하세요. (미개봉 새상품 제외)",
    review:
      "모유 양이 많은 편이라 옷이 젖는 일이 많았는데, 수유패드 덕분에 위생적이고 쾌적하게 유지할 수 있었어요.",
    tip: "출산 전 대량 구매는 피하시고, 조리원에서 모유 도는 양(유량)을 확인한 뒤 쿠팡 등으로 바로 주문하시는 것을 추천합니다.",
  },
  {
    id: 20,
    categoryId: 2,
    tagIds: [9, 8, 10],
    category: "잡화",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "산모용 슬리퍼",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1켤레",
    noticeTag: "부종 대비 1치수 크게/미끄럼 방지 쿠션 필수",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 가능한 바닥면 상태 및 미끄럼 방지 마모도를 점검한 뒤 둘째 출산 시 재사용할 수 있습니다.",
    review:
      "출산 후 몸이 엄청 부어서 평소 신던 신발이 안 맞았어요. 한 치수 크고 쿠션감 있는 슬리퍼 덕분에 조리원 복도를 편하게 다녔습니다.",
    tip: "출산 후 관절이 약해지고 발이 붓기 때문에 밑창이 폭신하고 미끄럼 방지가 확실한 슬리퍼로 평소보다 한 치수 크게 준비하세요.",
  },
  {
    id: 21,
    categoryId: 1,
    tagIds: [2, 11, 10],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "스와들(속싸개 대체)",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1~2개",
    noticeTag: "아기 성향에 따라 호불호 명확",
    isReusableFromFirst: true,
    reuseGuideNote:
      "지퍼, 밴드 탄력, 오염 상태를 점검한 뒤 세탁 및 소독 후 둘째에게 물려줄 수 있습니다.",
    review:
      "첫째는 스와들업 입히자마자 통잠을 잤는데, 둘째는 손이 갇히는 걸 싫어해서 속싸개도 다 풀어헤치더라고요.",
    tip: "모로반사를 잡아주는 지퍼형/스트랩형 스와들은 육아 질을 높여주지만 아기 성향을 타므로 출산 전에는 S사이즈 1~2개만 맛보기로 준비하세요.",
  },
  {
    id: 22,
    categoryId: 5,
    tagIds: [2, 5, 4, 10, 11],
    category: "생활,위생",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "방수패드",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "2~3개",
    noticeTag: "건조기 사용 금지 / 교체용 포함 2~3장 준비",
    isReusableFromFirst: true,
    reuseGuideNote:
      "뒷면 방수 코팅 균열이나 누수 여부를 체크한 뒤 세탁해서 재사용 가능합니다.",
    review:
      "기저귀 밖으로 소변이 새거나 분유를 게워낼 때마다 아기침대 매트리스 전체를 빠는 건 불가능했는데 방수패드만 갈아주니 살 것 같았어요.",
    tip: "세탁 후 건조기 사용 시 방수 코팅이 손상될 수 있으므로 자연 건조를 권장합니다. 교체용을 감안해 넉넉히 2~3장 준비해두세요.",
  },
  {
    id: 23,
    categoryId: 1,
    tagIds: [2, 11],
    category: "의류",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기이불/베개",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 4,
      toWeek: 12,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "질식 위험으로 신생아 푹신한 이불/베개 금지",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 후 재사용 가능하나, 신생아기에는 이불/베개 대신 스와들 및 얇은 손수건 활용을 권장합니다.",
    review:
      "세트로 사둔 아기이불은 질식 위험 때문에 전혀 못 덮였고, 베개 대신 거즈 손수건을 얇게 깔아두는 정도로만 사용했어요. 덮는 이불 대신 스와들업이나 수면조끼로 체온을 조절했습니다.",
    tip: "신생아는 질식 위험과 영아갑작사증후군(SIDS) 예방을 위해 푹신한 솜베개나 덮는 이불을 절대 사용하지 않는 것이 안전합니다. 베개 대신 얇은 손수건을 깔아주고, 이불 대신 입는 형태의 속싸개나 스와들, 수면조끼를 활용하세요.",
  },
  {
    id: 24,
    categoryId: 5,
    tagIds: [6, 11],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "목욕타월",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "천기저귀/천속싸개 활용 시 건조 빠르고 실용적",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 및 삶음 소독 후 둘째 목욕 타월 및 덮개로 그대로 재사용할 수 있습니다.",
    review:
      "처음엔 전용 후드 타월을 썼는데 건조가 느려서 결국 얇고 잘 마르는 천사속싸개/천기저귀를 목욕 타월로 전향해 썼어요.",
    tip: "아기 전용 겉싸개나 목욕 타월을 따로 사기보다는 흡수력이 좋고 빨리 마르는 천기저귀를 목욕 타월로 활용하는 것이 훨씬 실용적입니다.",
  },
  {
    id: 25,
    categoryId: 4,
    tagIds: [6, 11],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "목욕 온도계",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: -2,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "팔안쪽 피부 체온 체크로 대체 가능",
    isReusableFromFirst: true,
    reuseGuideNote:
      "센서 파손이나 배터리 누액 여부 점검 후 깨끗이 닦아 둘째 목욕 시 재사용 가능합니다.",
    review:
      "처음 몇 번만 띄워보고 나중에는 손목이나 팔꿈치를 물에 넣어서 온도를 맞추게 되더라고요.",
    tip: "초보 부모라 온도 맞추기가 불안하다면 온도 감지 스티커가 붙은 욕조나 디지털 탕온계를 준비하시되, 팔안쪽 피부로 체크하는 데 익숙해지면 생략해도 좋습니다.",
  },
  {
    id: 26,
    categoryId: 8,
    tagIds: [1, 2, 11],
    category: "수유용품",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "공갈젖꼭지(쪽쪽이)",
    priority: 2,
    usageStartWeek: 4,
    preparationPeriod: {
      fromWeek: 2,
      toWeek: 6,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1~2개",
    noticeTag: "모유수유 시 유두혼동 방지 위해 4주 후 권장",
    isReusableFromFirst: false,
    reuseGuideNote:
      "아기 입에 직접 노출되는 실리콘/라텍스 소모품으로 변형 및 세균 번식 위험이 있어 새 제품으로 준비해 주세요.",
    review:
      "아기가 칭얼거릴 때 쪽쪽이를 물리니 거짓말처럼 울음을 멈추고 잠들었어요. 엄마 손목과 멘탈을 지켜준 일등 공신입니다.",
    tip: "아기마다 물리적 모양(원형, 납작형 등) 호불호가 강합니다. 처음부터 특정 브랜드 제품을 대량 사지 마시고 1개씩 단품으로 시도해 보세요.",
  },
  {
    id: 27,
    categoryId: 8,
    tagIds: [1, 9],
    category: "수유용품",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "모유저장팩",
    priority: 1,
    usageStartWeek: 1,
    preparationPeriod: {
      fromWeek: 1,
      toWeek: 4,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "0~소량",
    noticeTag: "모유수유 시 유축/냉동 보관 여부 확인 후 준비",
    isReusableFromFirst: false,
    reuseGuideNote:
      "일회용 멸균 수유용품이므로 미개봉 상태가 아니라면 둘째 출산 시 새로 구매해야 합니다.",
    review:
      "직수 위주로 수유하다 보니 유축해둔 모유를 저장할 일이 거의 없어서 박스째로 당근에 팔았어요.",
    tip: "복직 예정이거나 조리원에서 유축 양이 많아 냉동 보관이 꼭 필요한 상황이 확인된 후 소량 팩으로 구매하셔도 늦지 않습니다.",
  },
  {
    id: 28,
    categoryId: 1,
    tagIds: [2, 3, 11, 10],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "신생아 양말",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "2~3켤레",
    noticeTag: "체온 유지 및 외출 필수품",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 후 보풀이나 밴드 늘어남 상태를 점검하여 둘째에게 그대로 신길 수 있습니다.",
    review:
      "체온 조절이 서툰 신생아 특성상 집에서도 조리원 퇴소 후나 딸꾹질할 때 유용하게 신겼어요.",
    tip: "신생아 발은 생각보다 금방 자라므로 너무 많이 사지 말고 2~3켤레만 준비하세요. 조리원 퇴소 선물로 들어오기도 합니다.",
  },
  {
    id: 29,
    categoryId: 1,
    tagIds: [2, 3, 11, 10],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "신생아 모자",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1~2개",
    noticeTag: "딸꾹질 보온 및 외출용",
    isReusableFromFirst: true,
    reuseGuideNote:
      "사용 기간이 짧아 오염이 적으므로 깨끗이 세탁해 두었다가 둘째 모자로 재사용하기 매우 좋습니다.",
    review:
      "딸꾹질할 때 체온 조절용으로 씌워주면 금방 멈췄고, 예방접종 등 외출할 때 사진도 예쁘게 나와서 만족했어요.",
    tip: "신생아는 머리로 열이 많이 방출되므로 딸꾹질 시 보온용으로 모자를 씌워주는 것이 효과적입니다.",
  },
  {
    id: 30,
    categoryId: 1,
    tagIds: [2, 11, 10],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "손싸개",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1~2개",
    noticeTag: "접이식 배냇저고리로 대체 가능",
    isReusableFromFirst: true,
    reuseGuideNote:
      "사용 빈도가 낮아 세탁 후 둘째용으로 원형 그대로 물려줄 수 있습니다.",
    review:
      "배냇저고리 소매를 접어서 쓸 수 있어서 손싸개는 거의 안 쓰게 되더라고요. 얼굴 긁는 거 방지용으로 1~2개만 있어도 충분했어요.",
    tip: "최근 배냇저고리는 손을 감쌀 수 있는 접이식 소매 기능이 많아 손싸개는 필수가 아닙니다. 출산 전 많이 사지 말고 필요시 구입하세요.",
  },
  {
    id: 31,
    categoryId: 5,
    tagIds: [1, 4, 5, 6, 11, 10],
    category: "생활,위생",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "거즈/엠보 손수건",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "30~40장",
    noticeTag: "거즈(수유/입안) + 엠보(엉덩이/목욕) 구분 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "오염이 심하거나 원단이 얇아진 손수건은 교체하되, 상태가 양호하고 세탁·삶음 소독을 거친 손수건은 재사용 가능합니다.",
    review:
      "침 흘리고 게우고 닦이다 보면 하루에 10장 넘게 써요. 30장 넘게 챙겨뒀는데도 빨래 돌리기 바빴습니다.",
    tip: "얇고 부드러운 거즈 손수건은 아기 입안 닦기 및 수유용으로, 약간 두꺼운 엠보 손수건은 엉덩이나 목욕 닦기용으로 구분해서 준비하면 쓰기 편리합니다.",
  },
  {
    id: 32,
    categoryId: 5,
    tagIds: [4, 5, 11],
    category: "생활,위생",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "물티슈(신생아용)",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "2~3캡",
    noticeTag: "신생아 엉덩이는 물세척 권장 / 저자극 무향",
    isReusableFromFirst: false,
    reuseGuideNote:
      "수분 증발 및 유통기한 변질 우려가 있는 일회용 위생 소모품이므로 둘째 출산 시 새로 준비해 주세요.",
    review:
      "신생아 피부가 약해서 엉덩이는 물로 씻겼고, 물티슈는 부모 손 닦거나 아기 주변 물건 닦는 용도로 주로 썼어요.",
    tip: "신생아 피부 직접 닦이용보다는 육아 환경 청결 유지용으로 많이 쓰입니다. 아기 피부에 닿는 것은 레이온 100% 무첨가 도터형으로 챙기세요.",
  },
  {
    id: 33,
    categoryId: 4,
    tagIds: [11, 8, 10],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "체온계",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "발열 대비 필수 준비",
    isReusableFromFirst: true,
    reuseGuideNote:
      "비접촉 또는 귀체온계 필터/팁을 교체하고 건전지 상태를 점검하여 둘째까지 오래 재사용할 수 있습니다.",
    review:
      "예방접종 후나 새벽에 아기가 열이 날 때 바로 체온을 체크할 수 있어 정말 든든했어요. 출산 가방 싸면서 미리 준비해 두길 가장 잘한 품목 중 하나입니다.",
    tip: "신생아는 정확한 체온 측정이 중요합니다. 특히 생후 3개월 미만 아기가 38℃ 이상 고열이 나면 즉시 병원 진료가 필요하므로, 측정 오차가 적은 제품으로 선택하고 사용법을 미리 익혀 두세요.",
  },
  {
    id: 34,
    categoryId: 6,
    tagIds: [4, 6, 11, 10],
    category: "케어,건강",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "아기 로션/수딩젤",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1~2개",
    noticeTag: "신생아 태열 진정용 수딩젤 + 고보습 로션 조합",
    isReusableFromFirst: false,
    reuseGuideNote:
      "개봉 후 유통기한(보통 6~12개월) 및 변질 가능성이 있으므로 둘째 때 새로 개봉하여 사용하세요.",
    review:
      "조리원 나와서 얼굴에 태열이 올라왔을 때 수딩젤 바르고 로션 덧발라주니 며칠 만에 깨끗하게 가라앉았어요.",
    tip: "기본 고보습 로션 1개와 함께, 신생아기 흔히 발생하는 태열 진정용으로 시원한 수딩젤을 세트로 미리 구비해 두시면 매우 유용합니다.",
  },
  {
    id: 35,
    categoryId: 6,
    tagIds: [11, 4],
    category: "케어,건강",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "아기 빗",
    priority: 1,
    usageStartWeek: 4,
    preparationPeriod: {
      fromWeek: 2,
      toWeek: 8,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0~1개",
    noticeTag: "두피 각질(소락) 케어용 부드러운 미세모 브러시",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세정 및 소독 후 세균 번식이나 모 변형이 없으면 둘째 아기에게 그대로 재사용할 수 있습니다.",
    review:
      "머리 숱이 별로 없어서 한동안 안 쓰다가 소락(두피 각질) 생겼을 때 오일 바르고 살살 빗어줄 때 썼어요.",
    tip: "머리카락 숱이 많은 아기나 두피 지루성 피부염(지루성 두피)으로 각질 관리가 필요할 때 부드러운 양모 브러시나 미세모 빗을 구비하세요.",
  },
  {
    id: 36,
    categoryId: 8,
    tagIds: [1],
    category: "수유용품",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "분유쉐이커 / 젖병 믹서",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 1,
      toWeek: 6,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "완모 시 불필요 / 잘 안 녹는 분유 수유 시 고려",
    isReusableFromFirst: true,
    reuseGuideNote:
      "완모 시에는 활용도가 적지만, 기기를 세척 및 소독하여 세균 우려 없이 둘째 때 재사용할 수 있습니다.",
    review:
      "완모(모유 수유) 위주로 수유하다 보니 젖병 섞을 일 자체가 없어서 쉐이커는 전혀 필요하지 않았어요. 완분하는 친구들은 잘 안 녹는 분유 섞을 때 편하다고 하니 수유 방식에 맞춰 고민해보세요.",
    tip: "해외 분유 등 잘 녹지 않는 분유를 먹일 때 유용하지만, 일반적인 분유는 손으로 둥글게 섞어주면 충분하므로 미리 살 필요는 없습니다.",
  },
  {
    id: 37,
    categoryId: 6,
    tagIds: [1, 9],
    category: "케어,건강",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "가슴 쿨링팩 / 마사지팩",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 0,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1세트",
    noticeTag: "출산 직후 젖몸살 완화용 냉/온찜질팩",
    isReusableFromFirst: true,
    reuseGuideNote:
      "겉면 소독 및 커버 세탁을 마친 뒤 터짐이나 누수가 없다면 둘째 젖몸살 케어 시 재사용할 수 있습니다.",
    review:
      "조리원에서 젖몸살 왔을 때 밤중에 가슴이 붓고 너무 아팠는데, 미리 사둔 쿨링팩 냉찜질하고 살 것 같았습니다.",
    tip: "출산 후 갑자기 유량이 늘며 젖몸살이 올 때 양배추진정팩이나 전용 냉온찜질팩을 대어주면 열감 완화에 큰 도움이 됩니다.",
  },
  {
    id: 38,
    categoryId: 2,
    tagIds: [3, 11],
    category: "잡화",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "유모차 라이너 / 쿨시트",
    priority: 1,
    usageStartWeek: 4,
    preparationPeriod: {
      fromWeek: 4,
      toWeek: 12,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "선풍기/양산 대체 가능 및 안전 고려",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 및 팬 동작 상태, 선 꼬임 결함 여부를 점검 후 둘째 유모차 외출용으로 재사용할 수 있습니다.",
    review:
      "저는 통풍 팬 쿨시트 대신 집게형 선풍기 고정시켜 두고 양산 달아서 다니는 걸로 충분했어요. 전열이나 배터리 선 같은 안전성 고민도 적고 알뜰하게 해결되더라고요.",
    tip: "유모차 라이너나 통풍 쿨시트를 사기 전 선 꼬임이나 안전 우려가 있다면, 집게형 무선 선풍기와 유모차용 양산/햇빛가리개 조합으로도 여름철 체온 조절을 충분히 해줄 수 있습니다.",
  },
  {
    id: 39,
    categoryId: 4,
    tagIds: [1, 11],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "분유 제조기 (자동)",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -2,
      toWeek: 2,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1대",
    noticeTag: "고가 가전 / 완분 확정 후 고려",
    isReusableFromFirst: true,
    reuseGuideNote:
      "내부 관 노후화 및 분출 노즐 분해 세척, 디스케일링(석회/자국 제거) 작업을 마친 뒤 둘째 때 재사용할 수 있습니다.",
    review:
      "저는 직접 쓰진 않았는데, 가격대가 좀 있는 편이라 처음부터 사기보다는 출산 후 완분으로 완전히 방향을 정한 분들이 고민 끝에 들여서 쓰는 편이더라고요. 세척 관리가 좀 번거롭다는 평도 있어요.",
    tip: "가격이 높은 편이고 신생아기 분유 수유 패턴이나 세척 관리 성향에 따라 호불호가 갈립니다. 출산 전 미리 사기보다는 모유/혼합/완분 여부가 결정된 후 필요에 따라 구매하는 것을 추천합니다.",
  },
  {
    id: 40,
    categoryId: 4,
    tagIds: [4, 10, 11],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 전용 세탁기",
    priority: 1,
    usageStartWeek: -8,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -8,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0~1대",
    noticeTag: "기존 세탁기 통세척 + 아기옷 코스로 대체 가능",
    isReusableFromFirst: true,
    reuseGuideNote:
      "분해 세척이나 무세제 통세척 후 둘째 아기 옷 및 손수건전용 삶음 세탁기로 계속 재사용 가능합니다.",
    review:
      "어른 빨래랑 섞이는 게 싫어서 미니 삶음 세탁기를 샀는데, 손수건이랑 배냇저고리 자주 삶아 빨 때 정말 잘 썼어요.",
    tip: "공간이나 비용이 부담스럽다면 기존 세탁기를 전문 업체 통세척 후 '아기옷 코스'를 활용해 따로 돌려도 충분합니다.",
  },
  {
    id: 41,
    categoryId: 5,
    tagIds: [6, 11],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "욕조 등받이/보조용품",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 4,
      toWeek: 12,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "목 가누기 전 신생아기 사용 비권장",
    isReusableFromFirst: true,
    reuseGuideNote:
      "물때 및 곰팡이 유무를 확인하고 소독 세척하여 둘째가 목을 가누는 시기(생후 3~4개월~)에 재사용할 수 있습니다.",
    review:
      "신생아 땐 아기가 너무 작아 등받이에 앉히면 오히려 미끄러져서 손으로 받쳐 씻기는 게 훨씬 편하고 안전했어요.",
    tip: "목을 못 가누는 신생아기에는 등받이보다 부모 손으로 목과 머리를 받쳐 씻기는 것이 안전하며, 목을 가눈 후 필요성을 느낄 때 고민하셔도 늦지 않습니다.",
  },
  {
    id: 42,
    categoryId: 2,
    tagIds: [11, 4, 10],
    category: "잡화",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 손톱관리 세트",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "신생아용 가위/네일트리머 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "소독용 알코올로 날/헤드 부분을 소독하고 트리머 헤드 팁만 새것으로 교체해 둘째에게 재사용할 수 있습니다.",
    review:
      "아기 손톱이 살점처럼 얇아 가위는 다칠까 봐 너무 무서웠는데, 전동 손톱 트리머로 살살 갈아주니 정말 안전했어요.",
    tip: "초보 부모는 날이 짧고 끝이 둥근 신생아용 손톱가위나, 살에 닿아도 안전한 전동 손톱 트리머를 고르는 것이 좋습니다.",
  },
  {
    id: 43,
    categoryId: 1,
    tagIds: [1, 11, 4],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "턱받이",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "3~5개",
    noticeTag: "수유 후 게워냄 방지 및 침받이 겸용",
    isReusableFromFirst: true,
    reuseGuideNote:
      "게워냄 또는 침으로 인한 누런 변색이 없다면 삶음 세탁 후 둘째 턱받이로 재사용하기 좋습니다.",
    review:
      "신생아 때는 수유 후 토하거나 게워낼 때 목 안쪽으로 흘러 들어가는 걸 막아줘서 옷을 매번 갈아입히지 않아도 됐어요. 생후 2~3개월부터는 침받이로도 아주 잘 썼습니다.",
    tip: "수유 후 자주 게워내는 신생아기에는 목을 부드럽게 감싸주는 순면/거즈 360도 롤링 턱받이를 미리 준비하시고, 침을 많이 흘리거나 이유식을 시작하는 시기에는 방수/실리콘 턱받이를 추가해 보세요.",
  },
  {
    id: 44,
    categoryId: 1,
    tagIds: [3, 11],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "외출용 겉옷(방한복)",
    priority: 2,
    usageStartWeek: 12,
    preparationPeriod: {
      fromWeek: 4,
      toWeek: 12,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1벌",
    noticeTag: "태어난 계절과 체중 고려하여 구매",
    isReusableFromFirst: true,
    reuseGuideNote:
      "착용 횟수가 많지 않아 오염이나 원단 손상이 없다면 세탁 후 둘째 계절에 맞춰 물려줄 수 있습니다.",
    review:
      "신생아 땐 겉싸개로 안고 다녀서 외출복이 안 필요했는데, 백일 예방접종 갈 때쯤 우주복 형태의 방한복 한 벌로 든든하게 다녔어요.",
    tip: "아주 어릴 땐 겉싸개나 블랭킷 감싸기로 대체 가능하므로 외출이 잦아지는 시기와 계절에 맞춰 우주복 등을 구매하세요.",
  },
  {
    id: 45,
    categoryId: 1,
    tagIds: [9, 8, 10],
    category: "의류",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "산모용 돌기/무압박 양말",
    priority: 2,
    usageStartWeek: -2,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "3~4켤레",
    noticeTag: "발목 고무줄 자국 안 남고 미끄럼 방지 처리된 제품",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 후 보풀이나 미끄럼 방지 돌기 마모도를 점검하여 둘째 출산 시 재사용할 수 있습니다.",
    review:
      "가을 출산이라 찬 바람이 들기 시작할 때였는데, 출산 후 붓고 약해진 관절용으로 정말 유용했어요. 발목이 조이지 않는 무압박 양말 덕분에 조리원이랑 집에서 발 시리지 않고 답답함 없이 편하게 지냈습니다.",
    tip: "출산 후 심하게 부은 발목에 자국이 남지 않는 무압박 골지 양말이나, 병원/조리원 복도에서 미끄러지지 않는 돌기 양말을 챙기세요.",
  },
  {
    id: 46,
    categoryId: 6,
    tagIds: [9, 4],
    category: "케어,건강",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "산후용 위생 팬티",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 2,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "입는 오버나이트 및 하이웨이스트 임산부 팬티 대체 가능",
    isReusableFromFirst: false,
    reuseGuideNote:
      "개인위생 속옷이므로 둘째 출산 시 입는 오버나이트나 기존 임산부 팬티를 새로 활용하는 것이 바람직합니다.",
    review:
      "입는 오버나이트를 며칠 쓴 뒤에는 임신 기간 동안 입던 하이웨이스트 임산부 팬티를 그대로 입어서 별도 산후 팬티가 안 필요했어요.",
    tip: "출산 직후 오로 기간에는 입는 오버나이트를 활용하고, 이후에는 기존에 착용하던 임산부 팬티나 심리스 팬티로 충분히 대체 가능합니다.",
  },
  {
    id: 47,
    categoryId: 3,
    tagIds: [5, 11, 10],
    category: "가구,수납",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "트롤리 (아기용품 이동식 정리함)",
    priority: 2,
    usageStartWeek: -4,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -4,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "서랍장/바구니로 대체 가능 및 먼지 관리 필요",
    isReusableFromFirst: true,
    reuseGuideNote:
      "바퀴 및 프레임 결함이 없다면 닦아서 둘째 때 아기용품 수납용으로 계속 사용할 수 있습니다.",
    review:
      "유명해서 고민했지만 저는 따로 사지 않고 기존 서랍장에 정돈해서 꺼내 썼는데 전혀 불편함 없이 충분했어요. 집안 가구 배치나 성향에 따라 서랍장이 더 깔끔할 수 있어요.",
    tip: "이동하며 쓰기엔 편할 수 있지만 먼지가 쌓이기 쉽고 자리를 차지할 수 있습니다. 이미 기저귀/손수건을 보관할 서랍장이나 수납 바구니가 있다면 필수 구매 항목은 아닙니다.",
  },
  {
    id: 48,
    categoryId: 3,
    tagIds: [4, 10, 11],
    category: "가구,수납",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "아기 전용 세탁바구니",
    priority: 1,
    usageStartWeek: -8,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -8,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0~1개",
    noticeTag: "어른 옷과 분리 세탁 필수 / 기존 안 쓰는 바구니 활용",
    isReusableFromFirst: true,
    reuseGuideNote:
      "파손이나 변형이 없다면 세척 후 둘째 빨랫감 분리용 바구니로 지속 사용 가능합니다.",
    review:
      "어른 빨래와 섞이지 않게 아기 옷만 따로 모으는 바구니가 필요하긴 했어요. 새로 사지 않고 집에서 안 쓰는 접이식 바구니를 아기 전용으로 지정해서 썼는데 충분했습니다.",
    tip: "신생아 옷은 침, 게움질 등으로 자주 빨아야 하므로 어른 옷과 분리할 공간이 필수입니다. 새로 구매하기보다는 통풍이 잘되는 기존 바구니나 접이식 패브릭 바구니로 대체하는 것을 추천합니다.",
  },
  {
    id: 49,
    categoryId: 6,
    tagIds: [9, 1, 10],
    category: "케어,건강",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "손목 보호대",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1~2개",
    noticeTag: "찍찍이(벨크로)/핑거홀 타입 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 후 벨크로 접착력이나 원단 탄성 상태를 점검하여 둘째 산후 케어 시 재사용할 수 있습니다.",
    review:
      "완모라 아기 머리를 받치고 수유하거나 안아 재울 때 손목이 정말 시큰거렸는데, 손목 보호대 덕분에 통증을 많이 줄일 수 있었습니다.",
    tip: "출산 후에는 호르몬 영향으로 관절이 매우 약해집니다. 압박감이 적당하고 탈착이 쉬운 찍찍이(벨크로)형이나 핑거홀 타입을 추천합니다.",
  },
  {
    id: 50,
    categoryId: 6,
    tagIds: [9, 10],
    category: "케어,건강",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "압박스타킹",
    priority: 2,
    usageStartWeek: -12,
    preparationPeriod: {
      fromWeek: -16,
      toWeek: -12,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1~2개",
    noticeTag: "산부인과 의사 처방 시 건강보험 적용 가능",
    isReusableFromFirst: true,
    reuseGuideNote:
      "탄력이 크게 저하되지 않았다면 올 나감 여부를 점검 후 세탁하여 둘째 임신 및 출산 후 부기 케어용으로 재사용할 수 있습니다.",
    review:
      "임신 막달부터 출산 후 일주일 동안 다리가 코끼리처럼 부었는데, 병원에서 처방받아 신은 의료용 압박스타킹이 부기 빼는 데 큰 도움이 됐어요.",
    tip: "임신 중 산부인과 진료 시 의사 처방을 받으면 의료용 압박스타킹을 훨씬 저렴한 건강보험 적용 가격으로 구매할 수 있습니다.",
  },
  {
    id: 51,
    categoryId: 4,
    tagIds: [2, 11, 10],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "온습도계",
    priority: 3,
    usageStartWeek: -2,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1~2개",
    noticeTag: "신생아 적정 환경(온도 22~24℃, 습도 50~60%) 유지",
    isReusableFromFirst: true,
    reuseGuideNote:
      "건전지 교체 및 센서 오차 점검 후 둘째 방 온습도 측정용으로 오래 재사용이 가능합니다.",
    review:
      "아기는 태열이 잘 올라와서 온습도 관리가 제일 중요했어요. 침대 옆에 두고 적정 온습도(22~24도/50~60%)를 늘 체크했습니다.",
    tip: "숫자가 크고 한눈에 잘 보이는 디지털 온습도계를 거실과 아기방/안방에 각각 하나씩 배치해 두면 관리하기 수월합니다.",
  },
  {
    id: 52,
    categoryId: 5,
    tagIds: [4, 6, 11, 10],
    category: "생활,위생",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "아기 면봉 (안전면봉/점착면봉)",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1~2케이스",
    noticeTag: "신생아 전용 슬림/안전헤드 면봉",
    isReusableFromFirst: false,
    reuseGuideNote:
      "미개봉 상태가 아니라면 세균 번식 및 위생 오염 위험이 있어 둘째 때 새로 구비해야 합니다.",
    review:
      "제대(배꼽) 떨어지고 나서 소독할 때나 목욕 후 귀 겉부분 물기 닦아줄 때 신생아 전용 얇은 면봉이 필수였어요.",
    tip: "일반 성인용 면봉은 너무 굵어 아기 귓구멍이나 코에 위험할 수 있습니다. 얇은 신생아 전용 면봉과 굴곡이 있는 안전 면봉을 준비하세요.",
  },
  {
    id: 53,
    categoryId: 8,
    tagIds: [1, 4, 11],
    category: "수유용품",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "젖병 건조대",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1개",
    noticeTag: "쪽쪽이, 치발기, 유축기 부품 건조대로 완모 시에도 유용",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세척 및 물때/곰팡이 소독 후 둘째 쪽쪽이·유축기·식기 건조대로 재사용할 수 있습니다.",
    review:
      "완모라 젖병 말릴 일은 거의 없어서 당황했지만... 열탕 소독한 쪽쪽이랑 치발기, 유축기 부품 올려놓는 건조대로 알차게 잘 썼어요! 트레이형이나 소형이 자리 안 차지해서 딱 좋습니다.",
    tip: "직수 위주라 젖병을 쓰지 않더라도 쪽쪽이나 치발기, 소형 수유 용품 세척 후 건조할 때 유용하게 쓰입니다. 젖병을 많이 쓰지 않는다면 대형보다는 컴팩트한 소형/접이식 건조대를 추천합니다.",
  },
  {
    id: 54,
    categoryId: 5,
    tagIds: [5, 4, 11, 10],
    category: "생활,위생",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "방수 비닐/아기 쓰레기통 (휴지통)",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1개",
    noticeTag: "밀폐형 밀폐 쓰레기통(매직캔 등) 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "내부 소독 및 패킹 링 상태를 점검하여 둘째 기저귀 쓰레기통으로 계속 재사용이 가능합니다.",
    review:
      "기저귀 냄새가 생각보다 강해서 밀폐력이 좋은 냄새 차단 휴지통을 안 샀으면 큰일 날 뻔했어요. 여름철 악취와 벌레 방지에 최고입니다.",
    tip: "이중 밀폐 구조로 냄새를 잡아주는 전용 쓰레기통을 미리 구비해 두시면 쾌적한 실내 환경 유지에 큰 도움이 됩니다.",
  },
  {
    id: 55,
    categoryId: 8,
    tagIds: [1, 4, 10],
    category: "수유용품",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "젖병 세척솔/젖꼭지 솔",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1세트",
    noticeTag: "주기적 교체 필수 소모품 (스폰지/실리콘) 선택",
    isReusableFromFirst: false,
    reuseGuideNote:
      "세균 번식 및 스폰지/실리콘 마모 위험이 매우 높은 위생 소모품이므로 둘째 출산 시 새것으로 준비해 주세요.",
    review:
      "완모였지만 유축해둔 모유를 먹이거나 물 먹일 때 쓴 젖병을 매일 닦아야 해서 세척솔은 꼭 필요했습니다. 스폰지형은 주기적으로 교체해 줬어요.",
    tip: "위생을 위해 1~2개월마다 주기적으로 교체해 주는 것이 좋습니다. 스폰지형은 거품이 잘 나고 실리콘형은 건조가 빨라 내구성이 좋습니다.",
  },
  {
    id: 56,
    categoryId: 5,
    tagIds: [1, 4, 10],
    category: "생활,위생",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "젖병 세정제",
    priority: 3,
    usageStartWeek: -8,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -8,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "1종 주방세제 / 무향·거품형 권장",
    isReusableFromFirst: false,
    reuseGuideNote:
      "개봉 후 변질 우려 및 지속 사용 소모품이므로 둘째 출산 전 세탁/세척 준비 시 새로 구매하세요.",
    review:
      "아기 입에 들어가는 열탕 용품이나 젖병, 장난감까지 모두 씻을 수 있는 1종 친환경 젖병 세정제로 출산 전 미리 닦아 소독해 뒀어요.",
    tip: "보건복지부 기준 1종 세척제(야채·과일 및 아기 식기 세척 가능)인지 확인하시고, 잔여물이 남지 않는 거품형 제품이 편리합니다.",
  },
  {
    id: 57,
    categoryId: 3,
    tagIds: [5, 11, 10],
    category: "가구,수납",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "기저귀갈이대",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "허리 통증 방지 / 당근/이동식 추천 (낙상 주의)",
    isReusableFromFirst: true,
    reuseGuideNote:
      "벨트 및 지지 프레임, 매트 오염 상태를 체크하고 둘째 신생아기 산후 관절 보호용으로 재사용하기 좋습니다.",
    review:
      "신생아 땐 하루에도 10번 이상 기저귀를 갈아야 하는데, 기저귀갈이대가 없었으면 허리랑 무릎이 남아나지 않았을 것 같아요. 서서 갈 수 있어서 출산 후 몸 회복할 때 효자템이었습니다.",
    tip: "당근이나 원목/이동식 기저귀갈이대를 적극 추천합니다. 아기 체중이 늘거나 뒤집기를 시작하면 낙상 위험이 있으므로 항상 한 손으로 아기를 잡고 사용하세요.",
  },
  {
    id: 58,
    categoryId: 6,
    tagIds: [9],
    category: "케어,건강",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "산후 복대",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 2,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1개",
    noticeTag: "분만 방법과 몸 상태에 따라 선택",
    isReusableFromFirst: true,
    reuseGuideNote:
      "벨크로 접착력과 원단 탄성 상태를 확인 후 둘째 산후 복대용으로 재사용 가능합니다.",
    review:
      "자연분만이라 출산 후 배가 묵직하고 허전해서 잠깐 차봤는데, 답답함이 더 커서 생각보다 오래 신지는 못했어요. 사람마다 호불호가 크게 갈립니다.",
    tip: "제왕절개 산모는 수술 부위 지지용으로 병원에서 권장하지만, 자연분만 산모는 필수품이 아닙니다. 출산 후 경과를 보고 필요 시 준비해도 늦지 않습니다.",
  },
  {
    id: 59,
    categoryId: 1,
    tagIds: [9, 8],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "수면양말 (산모용)",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 0,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "2~3켤레",
    noticeTag: "발목을 조이지 않는 제품 선택",
    isReusableFromFirst: true,
    reuseGuideNote:
      "보풀이나 실밥을 정리하고 발목 탄력을 점검하여 둘째 산후 케어 시 재사용할 수 있습니다.",
    review:
      "가을 출산이라 조리원과 집에서 발 시릴 때 푹신하게 잘 신었어요. 다만 땀 흡수가 안 되는 수면양말보다는 발목이 넉넉하고 면 함유량이 높은 양말이 훨씬 쾌적했습니다.",
    tip: "출산 후 부종 때문에 발목이 심하게 부으므로, 고무줄 압박이 전혀 없는 임산부 전용 무압박 양말이나 헐렁한 수면양말로 챙기세요.",
  },
  {
    id: 60,
    categoryId: 8,
    tagIds: [1, 11],
    category: "수유용품",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "젖병",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1~2개",
    noticeTag: "수유 방식과 아기에게 맞는 제품 확인",
    isReusableFromFirst: true,
    reuseGuideNote:
      "PPSU/유리 소재 젖병 본체는 열탕 소독 후 재사용 가능하나, 젖꼭지는 둘째 출산 시 새것으로 교체해 주세요.",
    review:
      "분유수유를 할 줄 알고 젖병을 여러 개 미리 샀는데, 실제로는 수유 방식이 달라져 대부분 사용하지 못하고 중고로 처분했어요. 출산 전에는 1~2개만 준비하고, 실제 수유 방식이 정해진 뒤 필요한 만큼 추가하는 게 좋을 것 같아요.",
    tip: "젖병은 수유 방식과 아기의 선호에 따라 필요한 수량이 크게 달라집니다. 출산 전에는 1~2개만 준비하고, 조리원 제공 여부와 실제 수유 상황을 확인한 뒤 추가 구매하세요. 특히 분유수유를 계획하더라도 젖꼭지나 젖병 종류가 아기에게 맞지 않을 수 있어 처음부터 여러 개를 사두는 것은 피하는 것이 좋습니다.",
  },
  {
    id: 61,
    categoryId: 4,
    tagIds: [1, 4, 11],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "젖병소독기",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 4,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1대",
    noticeTag: "UV 램프 교체 필요 여부 및 수유 방식 고려",
    isReusableFromFirst: true,
    reuseGuideNote:
      "내부 소독 및 UV 램프/필터 교체 후 둘째 쪽쪽이·완구 살균용으로 오래 재사용할 수 있습니다.",
    review:
      "완모라 젖병 소독용으론 거의 안 썼지만, 쪽쪽이, 치발기, 유축기 부품, 나중엔 이유식 식기 보관 및 UV 소독용으로 나름 알차게 활용했습니다.",
    tip: "완모 가정은 열탕 소독이나 미니 소독기로 대체 가능하지만, 쪽쪽이나 완구류 살균용으로 쓴다면 당근이나 중고로 구비하는 것도 좋은 방법입니다.",
  },
  {
    id: 62,
    categoryId: 8,
    tagIds: [1, 3],
    category: "수유용품",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "분유 보관용기",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 4,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1~2개",
    noticeTag: "완분/혼합 수유 전환 시 구매 권장",
    isReusableFromFirst: true,
    reuseGuideNote:
      "변형이나 스크래치가 없다면 소독 후 둘째 외출용 간식 통으로도 재사용이 가능합니다.",
    review:
      "직수 위주 완모여서 분유 보관용기는 쓸 일이 없었어요. 완분하는 조리원 동기들은 밤중 수유나 외출할 때 소분해 다니기 편하다고 했습니다.",
    tip: "완모 계획이라면 절대 미리 사실 필요 없습니다. 완분이나 혼합 수유로 전환된 후 외출 패턴에 맞춰 구매하셔도 충분합니다.",
  },
  {
    id: 63,
    categoryId: 5,
    tagIds: [5, 4, 11],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기비데",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 4,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "수전 호환성 및 세면대 안전 확인",
    isReusableFromFirst: true,
    reuseGuideNote:
      "흡착판 및 고정용 프레임 결합 상태를 점검하고 소독 후 둘째 때 손목 보호용으로 재사용할 수 있습니다.",
    review:
      "신생아 땐 하루에도 응가를 몇 번씩 싸서 세면대용 아기비데(포마이비 등)에 얹어놓고 씻기니 손목 통증을 엄청 줄여줬어요.",
    tip: "아기 몸무게가 늘어날수록 손목 보호에 큰 힘이 됩니다. 자택 세면대 수전 형태와 호환되는지 미리 체크해 두세요.",
  },
  {
    id: 64,
    categoryId: 5,
    tagIds: [5, 4, 11],
    category: "생활,위생",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "기저귀 교환매트",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 2,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "방수·세척이 쉬운 소재 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "오염 및 찢어짐이 없다면 세탁/소독 후 둘째 기저귀 교환 시 방수 매트로 재사용할 수 있습니다.",
    review:
      "기저귀 갈 때 갑자기 샘/쉬를 해서 바닥이나 부모 침대가 오염되는 걸 막아줬어요. 전용 매트 대신 얇은 방수패드나 일회용 패드로도 충분했습니다.",
    tip: "부피 큰 교환매트보다는 세탁이 편한 방수패드 2장이나, 외출 시 겸용으로 쓸 수 있는 일회용 방수 패드를 활용하는 것이 훨씬 효율적입니다.",
  },
  {
    id: 65,
    categoryId: 2,
    tagIds: [3, 5, 8],
    category: "잡화",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "기저귀가방",
    priority: 1,
    usageStartWeek: 1,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 0,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0~1개",
    noticeTag: "조리원 퇴원 선물 여부 확인",
    isReusableFromFirst: true,
    reuseGuideNote:
      "외출용 가방이므로 세탁 및 소독 후 둘째 때도 그대로 재사용 가능합니다.",
    review:
      "조리원에서 준 가방으로 버티다가, 아기 짐이 많아진 뒤에는 수납칸이 많은 백팩을 구매해서 썼는데 훨씬 만족스러웠어요.",
    tip: "전용 기저귀가방을 새로 사지 않더라도, 수납 포켓이 많고 가벼운 기성 백팩이나 에코백+이너백 조합으로 충분히 대체할 수 있습니다.",
  },
  {
    id: 66,
    categoryId: 2,
    tagIds: [3, 5, 4],
    category: "잡화",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "휴대용 기저귀매트",
    priority: 1,
    usageStartWeek: 2,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 4,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "일회용 방수 패드로 대체 시 가볍고 위생적",
    isReusableFromFirst: true,
    reuseGuideNote:
      "세탁 및 소독이 가능한 방수 매트라면 둘째에게 재사용할 수 있습니다.",
    review:
      "외출 시 수유실 매트 위생이 걱정되어 일회용 방수 패드를 가지고 다녔는데, 씻을 필요 없이 쓰고 버리면 돼서 매트보다 훨씬 편리했어요.",
    tip: "부피가 큰 천 매트보다는 일회용 방수 패드(배변 패드/산모 패드 남은 것 등)를 2~3장씩 외출 가방에 넣어 다니는 것이 위생적이고 가볍습니다.",
  },
  {
    id: 67,
    categoryId: 4,
    tagIds: [2, 11],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "백색소음기",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 4,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1개",
    noticeTag: "휴대폰 앱/유튜브로 먼저 테스트 추천",
    isReusableFromFirst: true,
    reuseGuideNote:
      "스피커 음질 및 충전 단자 이상이 없다면 둘째 재우기 수면 루틴용으로 오래 사용할 수 있습니다.",
    review:
      "아기가 등 센서 붙어서 잠투정할 때 빗소리나 쉬- 소리를 틀어주니 등 대고 잠드는 데 도움을 받았어요. 안 쓰는 스마트폰이나 유튜브로 틀어줘도 충분했습니다.",
    tip: "전용 기기를 사기 전에 안 쓰는 스마트폰 앱이나 유튜브, 음향기기로 아기 반응을 먼저 테스트해 보고 구매를 결정하세요.",
  },
  {
    id: 68,
    categoryId: 1,
    tagIds: [3, 2, 11],
    category: "의류",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "아기 외출용 담요(블랭킷)",
    priority: 1,
    usageStartWeek: 4,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 8,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "출생 계절과 외출 시기에 맞춰 준비",
    isReusableFromFirst: true,
    reuseGuideNote:
      "올 풀림이나 오염이 없다면 깨끗이 세탁 후 둘째 유모차/카시트 블랭킷으로 재사용 가능합니다.",
    review:
      "가을 출산이라 50일~백일 예방접종 갈 때 쌀쌀해서 유모차나 카시트에 덮어주는 용도로 유용하게 썼어요. 두꺼운 블랭킷이나 도톰한 속싸개로 덮어줬습니다.",
    tip: "가을/겨울 출생아는 외출 시 체온 유지가 필수입니다. 도톰한 블랭킷이나 겉싸개를 활용하시면 별도 담요를 사지 않아도 됩니다.",
  },
  {
    id: 69,
    categoryId: 4,
    tagIds: [1],
    category: "가전,디지털",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "젖병 보온/워머",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 4,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1개",
    noticeTag: "유축 모유 해동 및 분유 수유 시 유용",
    isReusableFromFirst: true,
    reuseGuideNote:
      "가열 장치 및 작동 상태 확인 후 둘째 때 유축 모유 데우기용으로 재사용할 수 있습니다.",
    review:
      "완모라 체온 그대로 직수해서 젖병 데울 일이 없어 전혀 쓰지 않았습니다. 냉동 유축 모유를 해동할 땐 따뜻한 물에 데우는 걸로 충분했어요.",
    tip: "완모 산모에겐 필요성이 거의 없는 품목입니다. 유축 모유 수유를 자주 하거나 완분으로 전향할 경우에만 구매를 고려하세요.",
  },
  {
    id: 70,
    categoryId: 8,
    tagIds: [1, 3],
    category: "수유용품",
    reuseType: "GOOD",
    secondHandType: "GOOD",
    title: "수유가리개",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 0,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "호불호 강함 / 천 스타일로 대체 가능",
    isReusableFromFirst: true,
    reuseGuideNote:
      "원단 손상이 없다면 세탁 후 둘째 모유 수유 외출용으로 재사용할 수 있습니다.",
    review:
      "친구한테 물려받아서 외출할 때 써보려고 들고 다녔는데, 아기 얼굴이 가려지니까 젖물리기도 불편하고 아기도 답답해해서 결국 한두 번 쓰고 안 쓰게 되더라고요.",
    tip: "완모(완전모유수유) 파여도 수유실이 잘 되어 있어 생각보다 사용할 일이 적습니다. 블랭킷이나 넓은 얇은 천으로 대체 가능하니 미리 사지 말고 외출 패턴을 보고 필요시 구매하세요.",
  },
  {
    id: 71,
    categoryId: 6,
    tagIds: [5, 11],
    category: "케어,건강",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "기저귀 발진 크림",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 0,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "비판텐 연고 하나로 대체 및 병행 가능",
    isReusableFromFirst: false,
    reuseGuideNote:
      "개봉 후 사용기한 및 세균 오염 위험이 있으므로 둘째 때 새로 구매하는 것을 권장합니다.",
    review:
      "조리원 퇴소 후 아기 엉덩이가 빨개질 때마다 발라줬어요. 발진 전용 크림을 따로 사기보다는 만능 연고인 비판텐 연고 하나로 기저귀 발진까지 다 해결해서 정말 유용했어요.",
    tip: "수분/보습용 수딩젤이나 발진 크림을 따로 살 수도 있지만, 약국에서 파는 비판텐 연고 하나만 준비해둬도 기저귀 발진 관리에 충분합니다.",
  },
  {
    id: 72,
    categoryId: 6,
    tagIds: [9, 10],
    category: "케어,건강",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "유두 보호 크림 / 상처 연고",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 0,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "모유수유 시 필수 / 비판텐 활용 가능",
    isReusableFromFirst: false,
    reuseGuideNote:
      "개봉 후 유통기한 변질 위험이 크므로 둘째 출산 시 새로 준비하는 것이 좋습니다.",
    review:
      "초반 모유수유할 때 유두가 상하고 상처가 나서 너무 힘들었는데, 비판텐이나 라놀린 크림 바르고 광명 찾았어요. 수유 직후 발라주면 회복이 훨씬 빨라요.",
    tip: "비판텐 연고를 바를 경우 아기에게 젖을 물리기 전에 깨끗이 닦아내고 수유해야 하며, 닦아내지 않는 라놀린 성분 크림도 선택지가 될 수 있습니다.",
  },
  {
    id: 73,
    categoryId: 6,
    tagIds: [8, 9, 10],
    category: "케어,건강",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "회음부 방석 (도넛방석)",
    priority: 3,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -6,
      toWeek: -2,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "자연분만 예정 시 출산가방 필수품",
    isReusableFromFirst: true,
    reuseGuideNote:
      "커버 세탁 및 내장재(에어/솜) 상태 확인 후 재사용이 가능합니다.",
    review:
      "자연분만 후 도넛방석 없이는 수유 의자나 침대에 앉기도 힘들었어요. 조리원은 물론 집에 와서도 한참 동안 제 분신이었습니다.",
    tip: "자연분만 산모에게는 회음부 통증 완화를 위해 필수입니다. 수유 쿠션과 함께 출산가방에 미리 챙겨두세요.",
  },
  {
    id: 74,
    categoryId: 6,
    tagIds: [8, 9, 10],
    category: "케어,건강",
    reuseType: "NEW",
    secondHandType: "NEW",
    title: "개인용 좌욕 대야 (좌욕기)",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -2,
      toWeek: 2,
    },
    purchaseDecision: "BUY_AFTER_BIRTH",
    recommendedQuantity: "1개",
    noticeTag: "병원/조리원 구비 여부 확인 후 구매",
    isReusableFromFirst: false,
    reuseGuideNote:
      "감염 위험 및 개인 위생이 중요한 품목이므로 둘째 때도 새 제품으로 구매해 사용하세요.",
    review:
      "병원과 조리원 양변기에 설치해서 매일 사용했어요. 회음부 회복과 통증 완화에 좌욕만 한 게 없었습니다.",
    tip: "병원이나 조리원에 양변기용 버블 좌욕기 본체가 구비되어 있는 경우가 많으니, 개인용 양변기 좌욕 대야/호스만 별도 구매해도 충분합니다.",
  },
  {
    id: 75,
    categoryId: 5,
    tagIds: [4, 10, 11],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 세탁세제",
    priority: 2,
    usageStartWeek: -8,
    preparationPeriod: {
      fromWeek: -12,
      toWeek: -4,
    },
    purchaseDecision: "PREPARE_IN_ADVANCE",
    recommendedQuantity: "1개",
    noticeTag: "무향·무첨가 제품 권장",
    isReusableFromFirst: false,
    reuseGuideNote:
      "지속 소모품으로 개봉 후 유통기한이 지나므로 둘째 출산 전 세탁 준비 시점에 맞춰 새 세제를 구매해 주세요.",
    review:
      "출산 한 달 전(임신 32주~)부터 아기 옷, 손수건, 밤부 소재 제품을 아기 전용 세제로 미리 세탁해 둘 때 꼭 필요한 필수품이었어요.",
    tip: "아기 옷과 손수건은 피부에 직접 닿으므로 계면활성제가 적고 향료나 형광증백제가 없는 무향·친환경 아기 전용 세제를 선택해 준비하세요.",
  },
  {
    id: 76,
    categoryId: 5,
    tagIds: [4],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 섬유유연제",
    priority: 1,
    usageStartWeek: 12,
    preparationPeriod: {
      fromWeek: 4,
      toWeek: 12,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "신생아기 피부 자극 및 잔여물 주의",
    isReusableFromFirst: false,
    reuseGuideNote:
      "액상 소모품으로 변질 위험 및 유통기한이 존재하므로 둘째 출산 시 새로 개봉해 사용하는 것을 권장합니다.",
    review:
      "신생아 피부에 자극이 될까 봐 유연제 없이 세제만 써서 헹굼을 추가했는데, 옷감도 상하지 않고 피부 트러블도 없었어요.",
    tip: "신생아 옷은 잔여물이 남을 수 있는 섬유유연제 사용을 권장하지 않습니다. 세제만 단독 사용하고 헹굼 횟수를 늘리는 것이 안전합니다.",
  },
  {
    id: 77,
    categoryId: 5,
    tagIds: [4, 6, 11],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "손·얼굴 전용 세정제",
    priority: 1,
    usageStartWeek: 16,
    preparationPeriod: {
      fromWeek: 8,
      toWeek: 16,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "0개",
    noticeTag: "신생아기 물 세척 또는 올인원 바스로 대체 가능",
    isReusableFromFirst: false,
    reuseGuideNote:
      "액상 개봉 세정제 특성상 변질 및 유통기한 우려가 있으므로 둘째 때 필요한 경우 새로 구매하세요.",
    review:
      "손과 얼굴은 외출 후 물로만 씻기거나 올인원 아기 바스로 충분해서 별도 전용 세정제는 거의 쓸 일이 없었어요.",
    tip: "신생아기에는 물 세척이나 기존 올인원 바스로 충분히 관리되므로, 손을 많이 쓰는 외출 시기 전까지는 사지 않아도 됩니다.",
  },
  {
    id: 78,
    categoryId: 5,
    tagIds: [6, 4, 11],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "목욕용품(세정제/샴푸)",
    priority: 2,
    usageStartWeek: 1,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 2,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1개",
    noticeTag: "초기 물목욕 가능 (올인원 샘플 먼저 사용)",
    isReusableFromFirst: false,
    reuseGuideNote:
      "개봉 후 유통기한이 지났거나 사용하던 제품은 변질 위험이 있어 새 제품을 권장합니다. (미개봉 새상품만 사용 가능)",
    review:
      "피부가 민감할까 봐 걱정했는데 올인원 바스(bath)&샴푸 하나로 머리부터 발끝까지 편하게 씻겼어요.",
    tip: "아기 피부 타입에 맞지 않을 수 있으므로 처음부터 대량 구매하지 마시고, 순한 성분의 올인원(바스&샴푸) 용품 소량/샘플을 먼저 써보세요.",
  },
  {
    id: 79,
    categoryId: 5,
    tagIds: [4, 10, 11],
    category: "생활,위생",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 빨래망",
    priority: 1,
    usageStartWeek: -4,
    preparationPeriod: {
      fromWeek: -8,
      toWeek: 0,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "2~3개",
    noticeTag: "일반 빨래망으로 대체 가능",
    isReusableFromFirst: true,
    reuseGuideNote:
      "지퍼 고장이나 망 찢어짐이 없다면 출산 전 삶음 세탁이나 소독 후 둘째 때도 그대로 재사용 가능합니다.",
    review:
      "원단이 약한 거즈 손수건이나 끈이 달린 배냇저고리를 나눠서 빠니 옷감 손상도 없고 빨래가 엉키지 않아 정말 편했어요.",
    tip: "전용 아기 빨래망을 새로 사지 않더라도 집에 있는 촘촘한 무통풍/무형광 일반 빨래망(원형, 사각)으로 충분히 대체하여 활용할 수 있습니다.",
  },
  {
    id: 80,
    categoryId: 7,
    tagIds: [7, 11],
    category: "완구,도서",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 병풍",
    priority: 1,
    usageStartWeek: 4,
    preparationPeriod: {
      fromWeek: 0,
      toWeek: 8,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1세트",
    noticeTag: "터미타임 시작 시 흑백·고대비 디자인부터 확인",
    isReusableFromFirst: true,
    reuseGuideNote:
      "구겨짐이나 오염 상태를 확인하고 세척할 수 있다면 둘째에게도 충분히 재사용할 수 있습니다.",
    review:
      "신생아 땐 볼 일이 없었지만 생후 한 달 뒤 터미타임 시작하면서 아기가 병풍 속 거울이랑 흑백 포스터에 엄청 집중해서 고개를 들더라고요! 처음부터 미리 살 필요는 없지만 터미타임 시작할 땐 정말 유용했어요.",
    tip: "터미타임을 시작할 무렵 흑백·고대비 그림이나 아크릴 거울이 있는 병풍부터 활용해 보세요. 아기가 자라면서 컬러 그림으로 넘어가면 신생아기를 지나서도 독립된 셀프 놀이 공간으로 오래 활용할 수 있습니다.",
  },
  {
    id: 81,
    categoryId: 7,
    tagIds: [7, 11],
    category: "완구,도서",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "사운드북",
    priority: 1,
    usageStartWeek: 8,
    preparationPeriod: {
      fromWeek: 4,
      toWeek: 16,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1~2권",
    noticeTag: "신생아기에는 우선순위가 낮아요",
    isReusableFromFirst: true,
    reuseGuideNote:
      "소리 출력, 버튼 상태, 건전지함 누액 여부를 확인한 후 세척하여 재사용하세요.",
    review:
      "출산 전에 많이 사둘 필요가 전혀 없었어요. 백일쯤 지나 아기가 소리에 반응하고 눈을 맞추기 시작할 때 튤립 사운드북 한두 권만 꺼내줘도 최애 장난감이 되었습니다.",
    tip: "신생아기에는 꼭 필요한 준비물이 아니에요. 아기가 소리나 그림에 관심을 보이기 시작하면 한두 권부터 시작해 보세요. 버튼을 누르면 소리가 신생아기 필수 준비물이 아니므로 출산 전 구매는 비추천합니다. 생후 2개월 이후 아기의 시청각 반응이 늘어날 때 한두 권으로 시작하시고, 아기 취향에 맞춰 좋아하는 사운드북을 하나씩 늘려가세요.나는 책은 부모가 함께 읽어주기에도 좋고, 이후 아이가 직접 버튼을 누르면서 놀이처럼 활용할 수 있습니다.",
  },
  {
    id: 82,
    categoryId: 3,
    tagIds: [7, 11],
    category: "가구,수납",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 바운서",
    priority: 1,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 4,
    },
    purchaseDecision: "SEE_AND_BUY",
    recommendedQuantity: "1개",
    noticeTag: "사용시간·아기 체형에 맞는 제품인지 확인",
    isReusableFromFirst: true,
    reuseGuideNote:
      "프레임과 안전벨트, 시트 오염 및 흔들림 상태를 확인하면 둘째에게도 재사용할 수 있습니다.",
    review:
      "첫째가 많이 게워내서 바운서에서 소화시키는 시간을 많이 가졌었어요. 둘째는 필요 없었지만 첫째 때 정말 많은 도움을 받았던 아이템입니다.",
    tip: "아기를 잠깐 눕혀두거나 보호자가 집안일을 하는 동안 가까이에서 지켜보기 위한 용도로 활용할 수 있습니다. 아기마다 호불호가 크게 달라 출산 전에 꼭 구매하기보다는 대여나 중고로 먼저 사용해보는 것도 좋아요.",
  },
  {
    id: 83,
    categoryId: 7,
    tagIds: [2, 7, 11],
    category: "완구,도서",
    reuseType: "CHECK",
    secondHandType: "CHECK",
    title: "아기 모빌",
    priority: 2,
    usageStartWeek: 0,
    preparationPeriod: {
      fromWeek: -4,
      toWeek: 8,
    },
    purchaseDecision: "PREPARE_BEFORE_USE",
    recommendedQuantity: "1개",
    noticeTag: "신생아기 흑백 ➡️ 생후 2개월 후 컬러 교체",
    isReusableFromFirst: true,
    reuseGuideNote:
      "모빌 줄, 회전 기능, 음악 재생 상태 및 오염을 점검하여 둘째 시각 발달용으로 재사용할 수 있습니다.",
    review:
      "이건 진짜 정말 필요한 아이템입니다. 엄마에게 혼자만의 숨 돌릴 시간을 주는 효자템이에요! 출산 전 꼭 준비해주세요.",
    tip: "신생아는 가까운 거리의 고대비 형태에만 반응하므로 초반엔 흑백 모빌을 쓰다가 생후 2개월 전후로 컬러 모빌로 교체해 주세요. (국민템 타이니모빌 추천)",
  },
];

// export const babyItems: BabyItem[] = [
//   {
//     id: 2,
//     category: "출산/병원",
//     title: "카시트",
//     priority: 3,
//     usageStartWeek: 0, // 출산 당일/퇴원 날 바로 사용
//     preparationPeriod: {
//       fromWeek: -12, // 임신 28주(출산 12주 전)부터 알아보고
//       toWeek: -4, // 임신 36주(출산 4주 전)까진 차에 설치 완료 권장
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE",
//     recommendedQuantity: "1개",
//     noticeTag: "신생아 전용(바구니) 또는 겸용 카시트 필수",
//     reuseType: "CHECK", // 사고 이력·사용 이력·제품 상태 확인
//     review:
//       "조리원 퇴원 날 바로 사용해야 해서 출산 전에 차에 미리 설치해뒀어요. 처음 설치할 때 시간이 걸리니 남편이 미리 연습해보는 게 좋습니다.",
//     tip: "신생아를 안고 차에 타는 것은 위험하며 불법입니다. 중고 구매 시에는 사고 이력 확인이 어려우므로 가급적 새 제품이나 내력을 아는 지인에게 받는 것을 권장합니다.",
//   },
//   {
//     id: 3,
//     category: "수면",
//     title: "아기침대",
//     priority: 3,
//     usageStartWeek: 0, // 조리원 퇴소/집에 오자마자 바로 사용
//     preparationPeriod: {
//       fromWeek: -8, // 임신 32주부터 조립 및 세탁 준비
//       toWeek: -2, // 임신 38주 전 세탁/환기 완료 권장
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE",
//     recommendedQuantity: "1개",
//     noticeTag: null,
//     reuseType: "CHECK", // 구조·매트리스 상태 등 확인
//     review:
//       "출산 전에 미리 세탁하고 환기시켜두었더니 조리원 퇴소 후 집에 와서 바로 눕힐 수 있어 정말 안심됐어요.",
//     tip: "원목 침대는 사용 기간이 짧아 대여나 중고 거래도 좋은 방법입니다. 매트리스 커버와 패드는 미리 세탁해두는 것을 잊지 마세요.",
//   },
//   {
//     id: 4,
//     category: "수면",
//     title: "속싸개",
//     priority: 3,
//     usageStartWeek: 0, // 출생 직후부터 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE",
//     recommendedQuantity: "2~3개",
//     noticeTag: null,
//     reuseType: "GOOD", // 세탁 가능한 섬유 제품
//     review:
//       "신생아 땐 모로반사 잡는 용도로 매일 썼고, 아기가 좀 자란 뒤에는 목욕 타월이나 유모차 블랭킷으로도 계속 유용하게 활용했어요.",
//     tip: "초보 부모는 일반 속싸개 싸기가 어려울 수 있으니, 지퍼나 벨크로형 스와들(스와들업 등)을 1~2개 섞어서 준비하면 밤잠 재울 때 훨씬 수월합니다.",
//   },
//   {
//     id: 5,
//     category: "목욕",
//     title: "아기욕조",
//     priority: 3,
//     usageStartWeek: 0, // 퇴원/퇴소 후 첫 목욕 시 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE",
//     recommendedQuantity: "2개",
//     noticeTag: "신생아는 헹굼용 포함 2개 필요",
//     reuseType: "GOOD", // 상태와 세척 상태 확인하면 재사용 가능
//     review:
//       "비싼 기능성 욕조 대신 다이소나 기본 욕조 2개를 샀는데, 신생아 목욕(비눗물용/헹굼물용)시킬 때 최고였습니다.",
//     tip: "신생아 목욕은 헹굼물이 필수라 욕조 2개가 필요합니다. 등받이가 있거나 크기가 너무 큰 것보다는 부모 손목에 무리가 안 가고 가벼운 대야 형태가 초반엔 제일 편합니다.",
//   },
//   {
//     id: 6,
//     category: "목욕",
//     title: "목욕용품(세정제/샴푸)",
//     priority: 2,
//     usageStartWeek: 1, // 생후 1~2주 이후부터 사용 (초기엔 물목욕도 함)
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: 2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE",
//     recommendedQuantity: "1개",
//     noticeTag: "신생아 초기엔 물목욕도 가능",
//     reuseType: "NEW", // 피부에 직접 사용하는 세정 제품
//     review:
//       "피부가 민감할까 봐 걱정했는데 올인원 바스(bath)&샴푸 하나로 머리부터 발끝까지 편하게 씻겼어요.",
//     tip: "아기 피부 타입에 맞지 않을 수 있으므로 처음부터 대량 구매하지 마시고, 순한 성분의 올인원(바스&샴푸) 용품 소량/샘플을 먼저 써보세요.",
//   },
//   {
//     id: 7,
//     category: "의류",
//     title: "배냇저고리",
//     priority: 2,
//     usageStartWeek: 0, // 퇴원 시점부터 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE",
//     recommendedQuantity: "2~3벌",
//     noticeTag: "병원·조리원 퇴원 선물 여부 확인",
//     reuseType: "GOOD", // 세탁 후 물려받기 좋음
//     review:
//       "생각보다 아기가 금방 자라고, 병원과 조리원에서 받아온 게 많아서 직접 산 건 몇 번 못 입혔어요.",
//     tip: "배냇저고리는 착용 기간이 3~4주로 매우 짧습니다. 선물이나 제공품이 자주 들어오는 품목이니 직접 구매는 최소화하고 배냇수트로 대체하셔도 됩니다.",
//   },
//   {
//     id: 8,
//     category: "의류",
//     title: "바디수트",
//     priority: 2,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE",
//     recommendedQuantity: "2~3벌",
//     noticeTag: null,
//     reuseType: "GOOD", // 세탁 후 물려받기 좋음
//     review:
//       "기저귀 갈 때 밑에 똑딱이 단추만 풀면 돼서 배냇저고리보다 말려 올라가지 않고 훨씬 편했어요.",
//     tip: "목을 아직 못 가누는 신생아용은 머리로 뒤집어쓰는 형태보다 앞트임(가디건형/똑딱이) 스타일로 구매해야 입히기 수월합니다.",
//   },
//   {
//     id: 9,
//     category: "의류",
//     title: "신생아 옷 전반",
//     priority: 3,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE",
//     recommendedQuantity: "4~5벌",
//     noticeTag: null,
//     reuseType: "GOOD", // 세탁·상태 확인 후 재사용
//     review:
//       "게우거나 게워낸 젖 때문에 하루에 2~3번씩 옷을 갈아입히기도 했지만, 매일 밤 세탁기를 돌아가니 옷이 10벌씩은 전혀 필요 없더라고요.",
//     tip: "신생아 옷은 60 사이즈 기준 4~5벌 정도면 일일 세탁 시 충분합니다. 70~80 사이즈부터는 계절감에 맞춰 천천히 구매하세요.",
//   },
//   {
//     id: 10,
//     category: "위생/세탁",
//     title: "기저귀(신생아 사이즈)",
//     priority: 2,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: -4, // 몸무게 변화 고려해서 출산 직전이나 조리원에서 구매
//       toWeek: 2,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 태어난 몸무게 보고 결정
//     recommendedQuantity: "1~2팩",
//     noticeTag: "아기 출생 체중에 따라 사이즈 변경",
//     reuseType: "NEW", // 소모품
//     review:
//       "첫째 때 박스째로 사뒀다가 아기 살이 금방 붙어 NB(신생아) 사이즈를 절반도 못 쓰고 다른 산모에게 나눔했습니다.",
//     tip: "신생아 단계(NB)는 보통 3~4kg 내외로 빠르게 지나갑니다. 조리원에서 아기 성장 속도를 보고 퇴소 직전에 1~2단계 기저귀를 주문하는 것이 안전합니다.",
//   },
//   {
//     id: 11,
//     category: "위생/세탁",
//     title: "콧물흡인기",
//     priority: 1,
//     usageStartWeek: 4, // 생후 1달 전후 감기/환절기 시점부터 사용
//     preparationPeriod: {
//       fromWeek: 2, // 출산 후 상황 보고 천천히
//       toWeek: 8,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 필요할 때 사도 되는 것
//     recommendedQuantity: "1개",
//     noticeTag: null,
//     reuseType: "CHECK", // 본체·부품 위생과 상태 확인
//     review:
//       "신생아 땐 거의 안 썼는데, 감기 걸리거나 환절기 때 콧물 때문에 잠 못 잘 때 구원자 역할을 해줬습니다.",
//     tip: "출산 전 필수 품목은 아니며, 신생아기 지나 수유나 수면 시 콧물로 불편해할 때 전동형(노시부 등)이나 수동형 중 선택하여 구매해도 늦지 않습니다.",
//   },
//   {
//     id: 12,
//     category: "외출",
//     title: "유모차",
//     priority: 3,
//     usageStartWeek: 8, // 생후 50~100일 전후 외출 시작할 때
//     preparationPeriod: {
//       fromWeek: 2, // 출산 후 아기 성향과 외출 환경 보고 천천히 준비
//       toWeek: 12,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 실제 사용 여부/상황 보고 준비
//     recommendedQuantity: "1개",
//     noticeTag: null,
//     reuseType: "CHECK", // 브레이크·잠금·바퀴·안전장치 확인
//     review:
//       "늦가을생이라 겨울엔 외출을 못 해서 100일 지나 봄부터 탔어요. 미리 샀으면 집안에서 짐만 될 뻔했습니다.",
//     tip: "디럭스, 절디(절충), 휴대용 등 종류가 다양합니다. 아기가 태어난 계절과 거주 환경(엘리베이터 유무, 보도 상태)을 직접 경험해본 후 50일~100일 전후로 구매하셔도 됩니다.",
//   },
//   {
//     id: 13,
//     category: "외출",
//     title: "아기띠",
//     priority: 3,
//     usageStartWeek: 0, // 신생아 슬링/아기띠는 출산 직후/퇴소 후 바로 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1개",
//     noticeTag: null,
//     reuseType: "CHECK", // 버클·봉제·원단·사용 상태 확인
//     review:
//       "신생아 땐 헝겊 슬링으로 안아 재우기 할 때 썼고, 목 가눈 뒤엔 버클형 올인원 아기띠 하나로 18개월까지 알차게 썼어요.",
//     tip: "신생아 시기에는 천 슬링이나 코나 아기띠가 편하고, 이후에는 체중 분산이 잘 되는 구조의 아기띠를 추천합니다. 착용자(부모)의 체형에 맞춰 조절이 잘 되는지 확인하세요.",
//   },
//   {
//     id: 14,
//     category: "산모",
//     title: "회음부 관리용품",
//     priority: 3,
//     usageStartWeek: 0, // 출산 직후 바로 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1개",
//     noticeTag: "자연분만 예정 시 필수",
//     reuseType: "NEW", // 위생용품
//     review:
//       "자연분만 후 도넛방석 없이는 앉기도 힘들었어요. 조리원은 물론 집에 와서도 한참 동안 제 필수품이었습니다.",
//     tip: "자연분만 산모는 회음부 방석(도넛방석)이 필수입니다. 좌욕기는 병원/조리원에 구비된 경우가 많으니 버블 좌욕기 전용 대야만 개인용으로 준비하셔도 충분합니다.",
//   },
//   {
//     id: 15,
//     category: "수유",
//     title: "유축기",
//     priority: 2,
//     usageStartWeek: 0, // 조리원 입소 후 모유 상태 확인 시점부터 사용
//     preparationPeriod: {
//       fromWeek: 0, // 출산 직후나 조리원에서 준비
//       toWeek: 2,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 필요할 때 사도 되는 것
//     recommendedQuantity: "1개",
//     noticeTag: "보건소 무료 대여 사업 확인",
//     reuseType: "CHECK", // 본체와 부품 상태·위생 확인
//     review:
//       "직수 위주 완모라 거의 안 썼지만, 젖몸살이 왔을 때 양 조절용으로 며칠 동안 유용하게 썼습니다.",
//     tip: "구매 전 관할 보건소의 유축기 대여 사업을 먼저 확인해보세요. 모유 수유 여부와 울혈(젖몸살) 상황을 보고 조리원에서 주문해도 배송이 빠릅니다.",
//   },
//   {
//     id: 16,
//     category: "수유",
//     title: "수유쿠션",
//     priority: 3,
//     usageStartWeek: 0, // 출산 당일/조리원 첫날부터 수유 시 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1개",
//     noticeTag: "모유/분유 수유 방식에 따라 선택",
//     reuseType: "GOOD", // 세탁·상태 확인 후 재사용
//     review:
//       "조리원에서부터 매일 썼어요. 수유할 때 손목과 허리로 가던 무리를 확 줄여줘서 없어서는 안 될 효자템이었습니다.",
//     tip: "C자형(모유수유용)과 D자형(버클 고정형) 중 수유 계획에 맞춰 선택하세요. 높이가 낮아 아기 머리가 떨어질 땐 아래에 수건을 말아 받치면 각도가 딱 맞습니다.",
//   },
//   {
//     id: 17,
//     category: "수유",
//     title: "수유시트",
//     priority: 1,
//     usageStartWeek: 0, // 필요성을 느낄 때부터 사용
//     preparationPeriod: {
//       fromWeek: 1,
//       toWeek: 4,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 실제 사용 여부 보고 준비해도 되는 것
//     recommendedQuantity: "0~1개",
//     noticeTag: "호불호가 갈리는 품목",
//     reuseType: "CHECK", // 제품 상태·안전성 확인
//     review:
//       "손목 아플까 봐 샀는데 아기가 답답해하고 자꾸 미끄러져서 몇 번 못 쓰고 처분했어요.",
//     tip: "초보 부모나 수유 시 아기 안는 게 미숙할 땐 도움 될 수 있으나 필수품은 아닙니다. 필요성을 느끼실 때 추가 구매를 고민해보세요.",
//   },
//   {
//     id: 18,
//     category: "수유",
//     title: "분유포트",
//     priority: 2,
//     usageStartWeek: 0, // 조리원 퇴소 후 또는 혼합/분유 수유 시작 시 사용
//     preparationPeriod: {
//       fromWeek: -2,
//       toWeek: 2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 필요해지기 전에 준비하면 되는 것
//     recommendedQuantity: "1개",
//     noticeTag: "분유/혼합 수유 시 필수",
//     reuseType: "CHECK", // 전기제품·내부 세척 상태 확인
//     review:
//       "새벽에 울며 깰 때 40도로 맞춘 물이 항상 준비되어 있으니 순식간에 분유를 타줄 수 있어서 육아의 질이 대폭 상승했습니다.",
//     tip: "100도까지 끓었다가 지정한 보온 온도(40~45도)로 유지되는 쿨링 기능이 있는 전용 포트를 선택하면 밤중 수유 시간을 획기적으로 줄여줍니다.",
//   },
//   {
//     id: 19,
//     category: "수유",
//     title: "수유등",
//     priority: 3,
//     usageStartWeek: 0, // 집/조리원에서 첫날부터 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1개",
//     noticeTag: "밝기 조절(디밍) 및 터치 기능 필수",
//     reuseType: "GOOD", // 상태가 좋다면 재사용 가능
//     review:
//       "컴컴한 밤에 아기 상태 확인하고 밤중 수유할 때 눈부심 없이 은은해서 산후 우울감도 줄여주는 따뜻한 아이템이었어요.",
//     tip: "자다 깨서 버튼을 찾기보다 터치형으로 켜지고, 미세하게 밝기 조절(디밍)이 가능한 제품을 고르세요. 타이머 기능이 있으면 더욱 편합니다.",
//   },
//   {
//     id: 20,
//     category: "산모",
//     title: "수유브라/나시",
//     priority: 3,
//     usageStartWeek: -2, // 임신 막달 가슴 사이즈 변화 시점부터 바로 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "3~4벌",
//     noticeTag: "출산 후 가슴 사이즈 변화 고려",
//     reuseType: "NEW", // 개인 위생·착용 제품
//     review:
//       "기존에 입던 브라는 답답해서 못 입겠더라고요. 랩 스타일이나 캡을 내릴 수 있는 수유 나시가 기저귀 갈고 수유할 때 훨씬 편했습니다.",
//     tip: "출산 후 모유(유즙) 생성으로 가슴이 1~2사이즈 커지고 조임에 민감해집니다. 와이어가 없고 한 치수 여유 있는 원단으로 준비하세요.",
//   },
//   {
//     id: 21,
//     category: "산모",
//     title: "산모패드",
//     priority: 3,
//     usageStartWeek: 0, // 출산 직후부터 오로 관리용 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1~2팩",
//     noticeTag: "병원·조리원 제공 수량 사전 확인",
//     reuseType: "NEW", // 위생 소모품
//     review:
//       "병원에서 준 건 출산 당일에 다 썼어요. 오로 양이 생각보다 많아서 개인용으로 사간 입는 오버나이트가 훨씬 편하고 유용했습니다.",
//     tip: "일반 산모패드보다 팬티형 오버나이트(입는 생리대)를 1~2팩 챙기시면 착용감도 편하고 샐 걱정 없이 조리원 생활을 할 수 있습니다.",
//   },
//   {
//     id: 22,
//     category: "수유",
//     title: "수유패드",
//     priority: 2,
//     usageStartWeek: -1, // 조리원에서 유량이 늘어나는 시점부터 사용
//     preparationPeriod: {
//       fromWeek: 0, // 출산 후 유량 보고 구매 권장
//       toWeek: 2,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 필요할 때 사도 되는 것
//     recommendedQuantity: "1팩",
//     noticeTag: "유량에 따라 필요량 상이",
//     reuseType: "NEW", // 위생 소모품
//     review:
//       "모유 양이 많은 편이라 옷이 젖는 일이 많았는데, 수유패드 덕분에 위생적이고 쾌적하게 유지할 수 있었어요.",
//     tip: "출산 전 대량 구매는 피하시고, 조리원에서 모유 도는 양(유량)을 확인한 뒤 쿠팡 등으로 바로 주문하시는 것을 추천합니다.",
//   },
//   {
//     id: 23,
//     category: "외출",
//     title: "기저귀가방",
//     priority: 1,
//     usageStartWeek: 1, // 병원 예방접종 등 첫 외출 시작 시점
//     preparationPeriod: {
//       fromWeek: 2,
//       toWeek: 8,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 상황 보고 대체/구매
//     recommendedQuantity: "0~1개",
//     noticeTag: "조리원 퇴원 선물 여부 확인",
//     reuseType: "GOOD", // 세척·상태 확인 후 재사용
//     review:
//       "조리원에서 준 가방으로 버티다가, 아기 짐이 많아진 뒤에는 수납칸이 많은 백팩을 구매해서 썼는데 훨씬 만족스러웠어요.",
//     tip: "전용 기저귀가방을 새로 사지 않더라도, 수납 포켓이 많고 가벼운 기성 백팩이나 에코백+이너백 조합으로 충분히 대체할 수 있습니다.",
//   },
//   {
//     id: 24,
//     category: "외출",
//     title: "휴대용 기저귀매트",
//     priority: 1,
//     usageStartWeek: 4, // 외출 시 수유실 이용 시점부터 사용
//     preparationPeriod: {
//       fromWeek: 2,
//       toWeek: 8,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 대체 가능/상황 보고 준비
//     recommendedQuantity: "0개",
//     noticeTag: null,
//     reuseType: "GOOD", // 세척 가능한 제품이면 재사용
//     review:
//       "외출 시 수유실 매트 위생이 걱정되어 일회용 방수 패드를 가지고 다녔는데, 씻을 필요 없이 쓰고 버리면 돼서 매트보다 훨씬 편리했어요.",
//     tip: "부피가 큰 천 매트보다는 일회용 방수 패드(배변 패드/산모 패드 남은 것 등)를 2~3장씩 외출 가방에 넣어 다니는 것이 위생적이고 가볍습니다.",
//   },
//   {
//     id: 26,
//     category: "출산/병원",
//     title: "아기 퇴원복",
//     priority: 3,
//     usageStartWeek: 0, // 병원/조리원 퇴원 날 바로 입힘
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1벌",
//     noticeTag: "병원·조리원 제공 여부 확인",
//     reuseType: "GOOD", // 의류
//     review:
//       "병원 퇴원 선물로 배냇저고리와 겉싸개를 받아서, 집으로 이동할 때 예쁘게 입혀서 무사히 올 수 있었어요.",
//     tip: "퇴원 시 병원이나 조리원에서 배냇저고리/속싸개/겉싸개를 선물로 주는지 미리 문의해 보세요. 세탁된 아기 옷 1벌은 퇴원 날 따로 챙기셔야 합니다.",
//   },
//   {
//     id: 27,
//     category: "출산/병원",
//     title: "산모용 슬리퍼",
//     priority: 3,
//     usageStartWeek: 0, // 입원/조리원 첫날부터 바로 신음
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1켤레",
//     noticeTag: "미끄럼 방지 필수",
//     reuseType: "CHECK", // 위생·밑창 상태 확인
//     review:
//       "출산 후 몸이 엄청 부어서 평소 신던 신발이 안 맞았어요. 한 치수 크고 쿠션감 있는 슬리퍼 덕분에 조리원 복도를 편하게 다녔습니다.",
//     tip: "출산 후 관절이 약해지고 발이 붓기 때문에 밑창이 폭신하고 미끄럼 방지가 확실한 슬리퍼로 평소보다 한 치수 크게 준비하세요.",
//   },
//   {
//     id: 28,
//     category: "수면",
//     title: "스와들(속싸개 대체)",
//     priority: 2,
//     usageStartWeek: 0, // 생후 직후~모로반사 시기 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 필요해지기 전에 맛보기로 준비
//     recommendedQuantity: "1~2개",
//     noticeTag: "아기 성향에 따라 호불호 명확",
//     reuseType: "GOOD", // 세탁 후 재사용 가능
//     review:
//       "첫째는 스와들업 입히자마자 통잠을 잤는데, 둘째는 손이 갇히는 걸 싫어해서 속싸개도 다 풀어헤치더라고요.",
//     tip: "모로반사를 잡아주는 지퍼형/스트랩형 스와들은 육아 질을 높여주지만 아기 성향을 타므로 출산 전에는 S사이즈 1~2개만 맛보기로 준비하세요.",
//   },
//   {
//     id: 29,
//     category: "수면",
//     title: "방수패드",
//     priority: 3,
//     usageStartWeek: 0, // 퇴소 후 아기침대/부모침대에 바로 깔아서 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "2~3개",
//     noticeTag: "무소음/면 소재 추천",
//     reuseType: "GOOD", // 세탁·방수 상태 확인
//     review:
//       "기저귀 밖으로 소변이 새거나 분유를 게워낼 때마다 아기침대 매트리스 전체를 빠는 건 불가능했는데 방수패드만 갈아주니 살 것 같았어요.",
//     tip: "세탁 후 건조기 사용 시 방수 코팅이 손상될 수 있으므로 자연 건조를 권장합니다. 교체용을 감안해 넉넉히 2~3장 준비해두세요.",
//   },
//   {
//     id: 30,
//     category: "수면",
//     title: "아기이불/베개",
//     priority: 1,
//     usageStartWeek: null, // 신생아기엔 안전상 권장 안 함 (필요 시 손수건/수면조끼로 대체)
//     preparationPeriod: {
//       fromWeek: 4,
//       toWeek: 12,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 구매 보류/상황 보고 결정
//     recommendedQuantity: "0개",
//     noticeTag: "신생아 질식 위험으로 푹신한 베개·덮는 이불 금지",
//     reuseType: "CHECK", // 신생아기 사용 자체는 별도 안전 고려
//     review:
//       "세트로 사둔 아기이불은 질식 위험 때문에 전혀 못 덮였고, 베개 대신 거즈 손수건을 얇게 깔아두는 정도로만 사용했어요. 덮는 이불 대신 스와들업이나 수면조끼로 체온을 조절했습니다.",
//     tip: "신생아는 질식 위험과 영아갑작사증후군(SIDS) 예방을 위해 푹신한 솜베개나 덮는 이불을 절대 사용하지 않는 것이 안전합니다. 베개 대신 얇은 손수건을 깔아주고, 이불 대신 입는 형태의 속싸개나 스와들, 수면조끼를 활용하세요.",
//   },
//   {
//     id: 31,
//     category: "목욕",
//     title: "목욕타월",
//     priority: 1,
//     usageStartWeek: 0, // 출산 직후/퇴소 후 첫 목욕 시 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 천기저귀로 대체 가능하여 판단 후 구매
//     recommendedQuantity: "0개",
//     noticeTag: null,
//     reuseType: "GOOD", // 세탁 후 재사용
//     review:
//       "처음엔 전용 후드 타월을 썼는데 건조가 느려서 결국 얇고 잘 마르는 천사속싸개/천기저귀를 목욕 타월로 전향해 썼어요.",
//     tip: "아기 전용 겉싸개나 목욕 타월을 따로 사기보다는 흡수력이 좋고 빨리 마르는 천기저귀를 목욕 타월로 활용하는 것이 훨씬 실용적입니다.",
//   },
//   {
//     id: 32,
//     category: "목욕",
//     title: "목욕 온도계",
//     priority: 1,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: -2,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 손목/팔꿈치 체온 체득 시 생략 가능
//     recommendedQuantity: "0개",
//     noticeTag: "센서 내장 욕조로 대체 가능",
//     reuseType: "CHECK", // 센서·측정 상태 확인
//     review:
//       "처음 몇 번만 띄워보고 나중에는 손목이나 팔꿈치를 물에 넣어서 온도를 맞추게 되더라고요.",
//     tip: "초보 부모라 온도 맞추기가 불안하다면 온도 감지 스티커가 붙은 욕조나 디지털 탕온계를 준비하시되, 팔안쪽 피부로 체크하는 데 익숙해지면 생략해도 좋습니다.",
//   },
//   {
//     id: 33,
//     category: "수유",
//     title: "공갈젖꼭지(쪽쪽이)",
//     priority: 2,
//     usageStartWeek: 4, // 모유 수유 안정화 및 신생아 4주 이후 사용 권장
//     preparationPeriod: {
//       fromWeek: 2,
//       toWeek: 6,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 상황/아기 성향 보고 구매
//     recommendedQuantity: "1~2개",
//     noticeTag: "신생아 4주 이후 사용 권장(모유수유 시)",
//     reuseType: "NEW", // 입에 직접 닿는 소모품
//     review:
//       "아기가 칭얼거릴 때 쪽쪽이를 물리니 거짓말처럼 울음을 멈추고 잠들었어요. 엄마 손목과 멘탈을 지켜준 일등 공신입니다.",
//     tip: "아기마다 물리적 모양(원형, 납작형 등) 호불호가 강합니다. 처음부터 특정 브랜드 제품을 대량 사지 마시고 1개씩 단품으로 시도해 보세요.",
//   },
//   {
//     id: 34,
//     category: "수유",
//     title: "모유저장팩",
//     priority: 1,
//     usageStartWeek: 1, // 조리원 입소 후 유량 모니터링 시점
//     preparationPeriod: {
//       fromWeek: 1,
//       toWeek: 4,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 유축/냉동 필요시 구매
//     recommendedQuantity: "0~소량",
//     noticeTag: "유축/냉동 보관 필요 시 사용",
//     reuseType: "NEW", // 일회용 보관 소모품
//     review:
//       "직수 위주로 수유하다 보니 유축해둔 모유를 저장할 일이 거의 없어서 박스째로 당근에 팔았어요.",
//     tip: "복직 예정이거나 조리원에서 유축 양이 많아 냉동 보관이 꼭 필요한 상황이 확인된 후 소량 팩으로 구매하셔도 늦지 않습니다.",
//   },
//   {
//     id: 35,
//     category: "의류",
//     title: "양말/모자/손싸개",
//     priority: 2,
//     usageStartWeek: 0, // 퇴원 날 체온 유지 및 딸꾹질 방지용 바로 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "각 2~3개",
//     noticeTag: "손싸개는 배냇저고리 접이식 소매로 대체 가능",
//     reuseType: "GOOD", // 세탁 후 재사용
//     review:
//       "딸꾹질할 때 모자 씌워주면 금방 멈췄고, 손싸개는 아기가 손톱으로 얼굴 긁는 걸 막아줘서 신생아 한 달간 유용하게 썼어요.",
//     tip: "양말은 체온 유지 및 외출용, 모자는 딸꾹질 보온용으로 유용합니다. 손싸개는 요즘 배냇저고리 손 접기 기능으로 대체되는 경우가 많으니 소량만 준비하세요.",
//   },
//   {
//     id: 36,
//     category: "위생/세탁",
//     title: "거즈/엠보 손수건",
//     priority: 3,
//     usageStartWeek: 0, // 수유, 입안 닦기, 목욕 등 출생 당일부터 매일 다량 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 필수적으로 미리 대량 세탁 준비
//     recommendedQuantity: "30~40장",
//     noticeTag: "거즈(수유/입안) + 엠보(엉덩이/목욕) 구분 추천",
//     reuseType: "GOOD", // 세탁 후 재사용
//     review:
//       "침 흘리고 게우고 닦이다 보면 하루에 10장 넘게 써요. 30장 넘게 챙겨뒀는데도 빨래 돌리기 바빴습니다.",
//     tip: "얇고 부드러운 거즈 손수건은 아기 입안 닦기 및 수유용으로, 약간 두꺼운 엠보 손수건은 엉덩이나 목욕 닦기용으로 구분해서 준비하면 쓰기 편리합니다.",
//   },
//   {
//     id: 37,
//     category: "위생/세탁",
//     title: "아기 세탁세제/빨래망",
//     priority: 3,
//     usageStartWeek: -8, // 출산 전 아기 옷/손수건 사전 세탁 시점부터 실제 사용 시작!
//     preparationPeriod: {
//       fromWeek: -12,
//       toWeek: -8,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 출산 전 밤부/손수건 무통풍 세탁용 필수 준비
//     recommendedQuantity: "1세트",
//     noticeTag: "무향/친환경 성분 권장",
//     reuseType: "CHECK", // 세제는 소모품, 빨래망은 재사용 가능 → 세트 구성상 CHECK
//     review:
//       "출산 한 달 전부터 아기 옷, 손수건, 밤부 베개 등을 아기 전용 세제로 무통풍 세탁하고 빨래망에 나눠 세탁해두니 편했어요.",
//     tip: "아기 옷 세탁 시 끈이나 버튼이 걸려 손상되는 것을 막기 위해 원형/사각 무통풍 빨래망 세트를 함께 준비하세요. 세제는 무향 무첨가 제품이 좋습니다.",
//   },
//   {
//     id: 38,
//     category: "위생/세탁",
//     title: "물티슈(신생아용)",
//     priority: 2,
//     usageStartWeek: 0, // 주변 청결 유지 및 급한 오염 시 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 미리 소량 준비
//     recommendedQuantity: "2~3캡",
//     noticeTag: "신생아 엉덩이는 물세척 권장",
//     reuseType: "NEW", // 위생 소모품
//     review:
//       "신생아 피부가 약해서 엉덩이는 물로 씻겼고, 물티슈는 부모 손 닦거나 아기 주변 물건 닦는 용도로 주로 썼어요.",
//     tip: "신생아 피부 직접 닦이용보다는 육아 환경 청결 유지용으로 많이 쓰입니다. 아기 피부에 닿는 것은 레이온 100% 무첨가 도터형으로 챙기세요.",
//   },
//   {
//     id: 39,
//     category: "생활",
//     title: "체온계",
//     priority: 3,
//     usageStartWeek: 0, // 접종/새벽 발열 체크 등 출생 직후 필수 사용
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 필수 비상용품으로 사전 준비
//     recommendedQuantity: "1개",
//     noticeTag: "신생아 발열 대비 필수 준비",
//     reuseType: "CHECK", // 측정 정확도·상태 확인
//     review:
//       "예방접종 후나 새벽에 아기가 열이 날 때 바로 체온을 체크할 수 있어 정말 든든했어요. 출산 가방 싸면서 미리 준비해 두길 가장 잘한 품목 중 하나입니다.",
//     tip: "신생아는 정확한 체온 측정이 중요합니다. 특히 생후 3개월 미만 아기가 38℃ 이상 고열이 나면 즉시 병원 진료가 필요하므로, 측정 오차가 적은 제품으로 선택하고 사용법을 미리 익혀 두세요.",
//   },
//   {
//     id: 40,
//     category: "위생/세탁",
//     title: "아기 로션/수딩젤",
//     priority: 3,
//     usageStartWeek: 0, // 퇴소 후 보습 및 태열 관리용 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해두면 좋은 것
//     recommendedQuantity: "1~2개",
//     noticeTag: "태열 발생 시 수딩젤+로션 조합",
//     reuseType: "NEW", // 피부용 제품
//     review:
//       "조리원 나와서 얼굴에 태열이 올라왔을 때 수딩젤 바르고 로션 덧발라주니 며칠 만에 깨끗하게 가라앉았어요.",
//     tip: "기본 고보습 로션 1개와 함께, 신생아기 흔히 발생하는 태열 진정용으로 시원한 수딩젤을 세트로 미리 구비해 두시면 매우 유용합니다.",
//   },
//   {
//     id: 44,
//     category: "위생/세탁",
//     title: "아기 빗",
//     priority: 1,
//     usageStartWeek: 4, // 머리 숱 정리 및 배냇머리 빠짐 관리 시점
//     preparationPeriod: {
//       fromWeek: 2,
//       toWeek: 8,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 상황 보고 구매
//     recommendedQuantity: "0~1개",
//     noticeTag: "부드러운 미세모 브러시 선택",
//     reuseType: "GOOD", // 세척 가능하고 상태가 좋다면 재사용
//     review:
//       "머리 숱이 별로 없어서 한동안 안 쓰다가 소락(두피 각질) 생겼을 때 오일 바르고 살살 빗어줄 때 썼어요.",
//     tip: "머리카락 숱이 많은 아기나 두피 지루성 피부염(지루성 두피)으로 각질 관리가 필요할 때 부드러운 양모 브러시나 미세모 빗을 구비하세요.",
//   },
//   {
//     id: 45,
//     category: "수유",
//     title: "분유쉐이커 / 젖병 믹서",
//     priority: 1,
//     usageStartWeek: 0, // 분유 수유 시 거품 방지/잘 안 녹는 분유 사용 시
//     preparationPeriod: {
//       fromWeek: 1,
//       toWeek: 6,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 대체 가능/필요 시 구매
//     recommendedQuantity: "0개",
//     noticeTag: "손으로 굴려 섞는 방법으로 대체 가능",
//     reuseType: "CHECK", // 세척 상태·제품 상태 확인
//     review:
//       "완모(모유 수유) 위주로 수유하다 보니 젖병 섞을 일 자체가 없어서 쉐이커는 전혀 필요하지 않았어요. 완분하는 친구들은 잘 안 녹는 분유 섞을 때 편하다고 하니 수유 방식에 맞춰 고민해보세요.",
//     tip: "해외 분유 등 잘 녹지 않는 분유를 먹일 때 유용하지만, 일반적인 분유는 손으로 둥글게 섞어주면 충분하므로 미리 살 필요는 없습니다.",
//   },
//   {
//     id: 46,
//     category: "수유",
//     title: "가슴 쿨링팩 / 마사지팩",
//     priority: 2,
//     usageStartWeek: 0, // 출산 후 3~5일 차 젖몸살(울혈) 발생 시 사용
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: 0,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 필요해지기 전에 미리 비치 권장
//     recommendedQuantity: "1세트",
//     noticeTag: "젖몸살 완화용 냉/온찜질팩",
//     reuseType: "CHECK", // 제품 상태·위생 확인
//     review:
//       "조리원에서 젖몸살 왔을 때 밤중에 가슴이 붓고 너무 아팠는데, 미리 사둔 쿨링팩 냉찜질하고 살 것 같았습니다.",
//     tip: "출산 후 갑자기 유량이 늘며 젖몸살이 올 때 양배추진정팩이나 전용 냉온찜질팩을 대어주면 열감 완화에 큰 도움이 됩니다.",
//   },
//   {
//     id: 47,
//     category: "수면",
//     title: "아기 침대 가드 / 범퍼가드",
//     priority: 2,
//     usageStartWeek: 12, // 아기가 뒤집기 시작하거나 가드에 부딪히는 시점
//     preparationPeriod: {
//       fromWeek: 8,
//       toWeek: 16,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 뒤집기 시기에 맞춰 구매
//     recommendedQuantity: "1세트",
//     noticeTag: "신생아기엔 통풍 및 안전 고려 필수",
//     reuseType: "CHECK", // 안전성과 상태 확인
//     review:
//       "아기가 100일 지나고 뒤집기 시작하면서 원목 침대 창살에 발이 자꾸 끼어서 구매했어요.",
//     tip: "신생아기에는 통풍과 영아갑작사증후군(SIDS) 방지를 위해 가드를 설치하지 않는 것이 좋습니다. 아기가 뒤집기를 시작하는 3~4개월 이후에 준비하세요.",
//   },
//   {
//     id: 48,
//     category: "외출",
//     title: "유모차 라이너 / 쿨시트",
//     priority: 2,
//     usageStartWeek: 8, // 유모차 탑승 시점 (여름/환절기)
//     preparationPeriod: {
//       fromWeek: 4,
//       toWeek: 12,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 유모차 구매 후 계절 맞춰 준비
//     recommendedQuantity: "1개",
//     noticeTag: "계절(여름 쿨시트 vs 겨울 사계절용)에 따라 선택",
//     reuseType: "GOOD", // 세탁·호환성 확인
//     review:
//       "여름에 통풍 팬이 달린 쿨시트를 달아줬더니 등 땀 차는 게 확실히 줄고 유모차에서도 잘 잤어요.",
//     tip: "유모차 브랜드와 호환되는지 확인하세요. 여름철 출생아나 열이 많은 아기는 팬이 내장된 통풍 쿨시트가 매우 유용합니다.",
//   },
//   {
//     id: 49,
//     category: "생활",
//     title: "분유 제조기 (자동)",
//     priority: 2,
//     usageStartWeek: 0, // 완분/혼합 수유 확정 후 집에 돌아와서 바로 사용
//     preparationPeriod: {
//       fromWeek: -2,
//       toWeek: 2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 완분 확정 시 필수 이모님 아이템
//     recommendedQuantity: "1대",
//     noticeTag: "완분 산모 강력 추천 (베이비브레짜 등)",
//     reuseType: "CHECK", // 전기제품·내부 세척/상태 확인
//     review:
//       "저는 완모라 직접 쓰진 않았지만, 완분으로 갈아탄 조리원 동기들은 새벽 수유할 때 버튼 하나로 7초 만에 타지니까 제일 잘 산 육아 이모님 아이템이라고 극찬하더라고요.",
//     tip: "분유 수유가 확정된 가정이라면 새벽 수유의 구원자입니다. 젖병 제조사 및 먹이는 분유 조제 가이드와 조유량이 잘 맞는지 미리 확인하세요.",
//   },
//   {
//     id: 50,
//     category: "생활",
//     title: "아기 전용 세탁기 / 아기바람 세탁기",
//     priority: 1,
//     usageStartWeek: -8, // 출산 전 아기 빨래 때부터 사용
//     preparationPeriod: {
//       fromWeek: -12,
//       toWeek: -8,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 선택사항 (기존 세탁기 세탁조 청소로 대체 가능)
//     recommendedQuantity: "0~1대",
//     noticeTag: "기존 세탁기 통세척으로 대체 가능",
//     reuseType: "CHECK", // 전기제품·세탁조 상태 확인
//     review:
//       "어른 빨래랑 섞이는 게 싫어서 미니 삶음 세탁기를 샀는데, 손수건이랑 배냇저고리 자주 삶아 빨 때 정말 잘 썼어요.",
//     tip: "공간이나 비용이 부담스럽다면 기존 세탁기를 전문 업체 통세척 후 '아기옷 코스'를 활용해 따로 돌려도 충분합니다.",
//   },
//   {
//     id: 51,
//     category: "목욕",
//     title: "욕조 등받이/보조용품",
//     priority: 1,
//     usageStartWeek: 0, // 목을 가누거나 체중이 늘어나는 2개월 이후 고려
//     preparationPeriod: {
//       fromWeek: 4,
//       toWeek: 12,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 아기 목 가눔 및 사용 상태 보고 판단
//     recommendedQuantity: "0개",
//     noticeTag: null,
//     reuseType: "CHECK", // 제품 상태와 안전성 확인
//     review:
//       "신생아 땐 아기가 너무 작아 등받이에 앉히면 오히려 미끄러져서 손으로 받쳐 씻기는 게 훨씬 편하고 안전했어요.",
//     tip: "목을 못 가누는 신생아기에는 등받이보다 부모 손으로 목과 머리를 받쳐 씻기는 것이 안전하며, 목을 가눈 후 필요성을 느낄 때 고민하셔도 늦지 않습니다.",
//   },
//   {
//     id: 52,
//     category: "위생/세탁",
//     title: "아기 손톱관리 세트",
//     priority: 3,
//     usageStartWeek: 0, // 출생 직후부터 길어지는 손톱 관리용 필수 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 필수 사전 준비
//     recommendedQuantity: "1개",
//     noticeTag: "신생아용 가위/네일트리머 추천",
//     reuseType: "CHECK", // 도구 상태·위생 확인
//     review:
//       "아기 손톱이 살점처럼 얇아 가위는 다칠까 봐 너무 무서웠는데, 전동 손톱 트리머로 살살 갈아주니 정말 안전했어요.",
//     tip: "초보 부모는 날이 짧고 끝이 둥근 신생아용 손톱가위나, 살에 닿아도 안전한 전동 손톱 트리머를 고르는 것이 좋습니다.",
//   },
//   {
//     id: 53,
//     category: "의류",
//     title: "아기 내의(실내복)",
//     priority: 2,
//     usageStartWeek: 12, // 생후 100일 전후 목을 가누기 시작하는 시점부터 사용
//     preparationPeriod: {
//       fromWeek: 4,
//       toWeek: 12,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 아기 성장 속도 보고 구매
//     recommendedQuantity: "3~4벌",
//     noticeTag: "생후 50~100일 이후 착용",
//     reuseType: "GOOD", // 의류
//     review:
//       "신생아 때는 배냇저고리와 바디수트만 입혔고, 100일 전후로 목을 가누기 시작하면서 상하의 분리된 내의를 잘 입혔어요.",
//     tip: "신생아 시기에는 상하의 분리 내의가 입히기 번거롭고 과할 수 있습니다. 70~80 사이즈 내의는 출산 후 천천히 준비하셔도 충분합니다.",
//   },
//   {
//     id: 54,
//     category: "의류",
//     title: "턱받이",
//     priority: 2,
//     usageStartWeek: 4, // 침을 많이 흘리기 시작하는 2~3개월 시점부터 사용
//     preparationPeriod: {
//       fromWeek: 4,
//       toWeek: 12,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 침 흘리는 양과 이유식 시기에 맞춰 구매
//     recommendedQuantity: "3~5개",
//     noticeTag: "침 흐름 및 이유식 시기 구분",
//     reuseType: "GOOD", // 세탁 후 재사용
//     review:
//       "생후 2~3개월부터 침을 많이 흘릴 때 면 턱받이가 열일했어요. 완모라 수유할 땐 손수건으로 닦아주고 턱받이는 침받이 용도로 주로 썼습니다.",
//     tip: "침 흘리는 시기(2~3개월~)에는 순면/거즈 롤링 턱받이를, 이유식을 시작하는 5~6개월 이후에는 방수/실리콘 턱받이를 준비하세요.",
//   },
//   {
//     id: 55,
//     category: "의류",
//     title: "외출용 겉옷(방한복)",
//     priority: 2,
//     usageStartWeek: 12, // 백일 접종 등 본격적인 외출 시작 시점
//     preparationPeriod: {
//       fromWeek: 4,
//       toWeek: 12,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH", // ⚪ 출산 후 계절과 체중 고려하여 구매
//     recommendedQuantity: "1벌",
//     noticeTag: "태어난 계절과 체중 고려",
//     reuseType: "GOOD", // 의류
//     review:
//       "신생아 땐 겉싸개로 안고 다녀서 외출복이 안 필요했는데, 백일 예방접종 갈 때쯤 우주복 형태의 방한복 한 벌로 든든하게 다녔어요.",
//     tip: "아주 어릴 땐 겉싸개나 블랭킷 감싸기로 대체 가능하므로 외출이 잦아지는 시기와 계절에 맞춰 우주복 등을 구매하세요.",
//   },
//   {
//     id: 56,
//     category: "위생/세탁",
//     title: "손·얼굴 전용 세정제",
//     priority: 1,
//     usageStartWeek: 16, // 외출이 빈번해지거나 손을 많이 쓰는 시기
//     preparationPeriod: {
//       fromWeek: 8,
//       toWeek: 16,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 기존 올인원 바스로 대체 가능
//     recommendedQuantity: "0개",
//     noticeTag: null,
//     reuseType: "NEW", // 피부용 세정제
//     review:
//       "손과 얼굴은 외출 후 물로만 씻기거나 올인원 아기 바스로 충분해서 별도 전용 세정제는 거의 쓸 일이 없었어요.",
//     tip: "신생아기에는 물 세척이나 기존 올인원 바스로 충분히 관리되므로, 손을 많이 쓰는 외출 시기 전까지는 사지 않아도 됩니다.",
//   },
//   {
//     id: 57,
//     category: "위생/세탁",
//     title: "아기 섬유유연제",
//     priority: 1,
//     usageStartWeek: null, // 신생아기엔 사용 권장 안 함
//     preparationPeriod: {
//       fromWeek: 4,
//       toWeek: 12,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 자극 우려로 사용 보류/비권장
//     recommendedQuantity: "0개",
//     noticeTag: "신생아기 피부 자극/잔여물 주의",
//     reuseType: "NEW", // 소모품/세제
//     review:
//       "신생아 피부에 자극이 될까 봐 유연제 없이 세제만 써서 헹굼을 추가했는데, 옷감도 상하지 않고 피부 트러블도 없었어요.",
//     tip: "신생아 옷은 잔여물이 남을 수 있는 섬유유연제 사용을 권장하지 않습니다. 세제만 단독 사용하고 헹굼 횟수를 늘리는 것이 안전합니다.",
//   },
//   {
//     id: 58,
//     category: "산모",
//     title: "산모용 돌기/무압박 양말",
//     priority: 2,
//     usageStartWeek: -2, // 막달 부종 및 출산 당일부터 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 미리 준비 권장
//     recommendedQuantity: "3~4켤레",
//     noticeTag: "발목 고무줄 자국 안 남는 제품",
//     reuseType: "GOOD", // 세탁 후 재사용
//     review:
//       "가을 출산이라 찬 바람이 들기 시작할 때였는데, 출산 후 붓고 약해진 관절 보호용으로 정말 유용했어요. 발목이 조이지 않는 무압박 양말 덕분에 조리원이랑 집에서 발 시리지 않고 답답함 없이 편하게 지냈습니다.",
//     tip: "출산 후 심하게 부은 발목에 자국이 남지 않는 무압박 골지 양말이나, 병원/조리원 복도에서 미끄러지지 않는 돌기 양말을 챙기세요.",
//   },
//   {
//     id: 59,
//     category: "산모",
//     title: "산후용 위생 팬티",
//     priority: 1,
//     usageStartWeek: 0, // 입는 오버나이트 사용 종료 후 오로 감소 시점
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: 2,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 기존 임산부 팬티/입는 오버나이트로 대체 가능
//     recommendedQuantity: "0개",
//     noticeTag: null,
//     reuseType: "NEW", // 개인 위생용품
//     review:
//       "입는 오버나이트를 며칠 쓴 뒤에는 임신 기간 동안 입던 하이웨이스트 임산부 팬티를 그대로 입어서 별도 산후 팬티가 안 필요했어요.",
//     tip: "출산 직후 오로 기간에는 입는 오버나이트를 활용하고, 이후에는 기존에 착용하던 임산부 팬티나 심리스 팬티로 충분히 대체 가능합니다.",
//   },
//   {
//     id: 60,
//     category: "생활",
//     title: "트롤리 (아기용품 이동식 정리함)",
//     priority: 3,
//     usageStartWeek: -4, // 출산 전 아기용품(손수건, 기저귀 등) 세팅 시 사용 시작
//     preparationPeriod: {
//       fromWeek: -8,
//       toWeek: -4,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 필수 사전 정리용품
//     recommendedQuantity: "1개",
//     noticeTag: "이동식 바퀴 및 덮개/마개 유무 확인",
//     reuseType: "GOOD", // 상태가 좋다면 재사용
//     review:
//       "1단엔 기저귀/물티슈, 2단엔 손수건/로션, 3단엔 옷을 넣어두고 안방과 거실로 끌고 다니면서 썼는데 국민 육아템인 이유를 알겠더라고요.",
//     tip: "먼지가 쌓이는 것을 방지하기 위해 덮개(캡)가 있거나 세척이 용이한 프라스틱/철제 트롤리를 추천합니다.",
//   },
//   {
//     id: 61,
//     category: "위생/세탁",
//     title: "아기 전용 세탁바구니",
//     priority: 1,
//     usageStartWeek: -8, // 출산 전 아기 빨래 구분 시작 시점
//     preparationPeriod: {
//       fromWeek: -12,
//       toWeek: -8,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 기존 바구니로 대체 가능
//     recommendedQuantity: "0~1개",
//     noticeTag: "어른 옷과 분리 세탁 필수",
//     reuseType: "GOOD", // 세척 가능한 생활용품
//     review:
//       "어른 빨래와 섞이지 않게 아기 옷만 따로 모으는 바구니가 필요하긴 했어요. 새로 사지 않고 집에서 안 쓰는 접이식 바구니를 아기 전용으로 지정해서 썼는데 충분했습니다.",
//     tip: "신생아 옷은 침, 게움질 등으로 자주 빨아야 하므로 어른 옷과 분리할 공간이 필수입니다. 새로 구매하기보다는 통풍이 잘되는 기존 바구니나 접이식 패브릭 바구니로 대체하는 것을 추천합니다.",
//   },
//   {
//     id: 62,
//     category: "산모",
//     title: "손목 보호대 / 관절 보호대",
//     priority: 3,
//     usageStartWeek: 0, // 출산 직후/조리원에서 아기 안아줄 때 바로 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 필수 사전 준비 품목
//     recommendedQuantity: "1~2개",
//     noticeTag: "출산 후 릴랙신 호르몬으로 관절 약화 대비",
//     reuseType: "CHECK", // 위생·탄성·상태 확인
//     review:
//       "완모라 아기 머리를 받치고 수유하거나 안아 재울 때 손목이 정말 시큰거렸는데, 손목 보호대 덕분에 통증을 많이 줄일 수 있었습니다.",
//     tip: "출산 후에는 호르몬 영향으로 관절이 매우 약해집니다. 압박감이 적당하고 탈착이 쉬운 찍찍이(벨크로)형이나 핑거홀 타입을 추천합니다.",
//   },
//   {
//     id: 63,
//     category: "생활",
//     title: "아기 병풍/사운드북",
//     priority: 1,
//     usageStartWeek: 4, // 터미타임 시작 및 시각 발달 시기(생후 1달 전후)부터 사용
//     preparationPeriod: {
//       fromWeek: 2,
//       toWeek: 8,
//     },
//     purchaseDecision: "SEE_AND_BUY", // 🔵 아이 발달/관심사에 맞춰 천천히 준비
//     recommendedQuantity: "1세트",
//     noticeTag: "터미타임 및 흑백/컬러 시각 자극용",
//     reuseType: "CHECK", // 전자음/부품·파손 여부 확인
//     review:
//       "생후 한 달쯤 지나 터미타임할 때 거울이나 흑백 포스터가 붙은 병풍을 세워주니 아기가 훨씬 집중해서 고개를 잘 들었어요.",
//     tip: "신생아 초기에는 초점이 안 맞아 흑백 병풍/모빌이 유용하며, 2~3개월 이후 컬러나 사운드북으로 넘어가시는 것을 추천합니다.",
//   },
//   {
//     id: 64,
//     category: "산모",
//     title: "압박스타킹 / 산모 레깅스",
//     priority: 2,
//     usageStartWeek: -12, // 임신 중후반 부종 시작 시점부터 출산 후까지 사용
//     preparationPeriod: {
//       fromWeek: -16,
//       toWeek: -12,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 부종 시작 시 미리 준비
//     recommendedQuantity: "1~2개",
//     noticeTag: "산부인과 처방 시 보험 적용 가능",
//     reuseType: "CHECK", // 탄성·위생 상태 확인
//     review:
//       "임신 막달부터 출산 후 일주일 동안 다리가 코끼리처럼 부었는데, 병원에서 처방받아 신은 의료용 압박스타킹이 부기 빼는 데 큰 도움이 됐어요.",
//     tip: "임신 중 산부인과 진료 시 의사 처방을 받으면 의료용 압박스타킹을 훨씬 저렴한 건강보험 적용 가격으로 구매할 수 있습니다.",
//   },
//   {
//     id: 65,
//     category: "생활",
//     title: "온습도계",
//     priority: 3,
//     usageStartWeek: -2, // 아기 맞이방 온도/습도 미리 세팅 시점부터 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 필수 사전 준비 품목
//     recommendedQuantity: "1~2개",
//     noticeTag: "신생아 적정 환경(온도 22~24℃, 습도 50~60%) 유지",
//     reuseType: "CHECK", // 측정 상태 확인
//     review:
//       "아기는 태열이 잘 올라와서 온습도 관리가 제일 중요했어요. 침대 옆에 두고 적정 온습도(22~24도/50~60%)를 늘 체크했습니다.",
//     tip: "숫자가 크고 한눈에 잘 보이는 디지털 온습도계를 거실과 아기방/안방에 각각 하나씩 배치해 두면 관리하기 수월합니다.",
//   },
//   {
//     id: 66,
//     category: "위생/세탁",
//     title: "아기 면봉 (안전면봉/점착면봉)",
//     priority: 2,
//     usageStartWeek: 0, // 퇴소 후 귀, 코, 배꼽 소독 시 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 미리 사두면 유용
//     recommendedQuantity: "1~2케이스",
//     noticeTag: "신생아 전용 슬림/안전헤드 면봉",
//     reuseType: "NEW", // 위생 소모품
//     review:
//       "제대(배꼽) 떨어지고 나서 소독할 때나 목욕 후 귀 겉부분 물기 닦아줄 때 신생아 전용 얇은 면봉이 필수였어요.",
//     tip: "일반 성인용 면봉은 너무 굵어 아기 귓구멍이나 코에 위험할 수 있습니다. 얇은 신생아 전용 면봉과 굴곡이 있는 안전 면봉을 준비하세요.",
//   },
//   {
//     id: 67,
//     category: "수유",
//     title: "젖병 건조대",
//     priority: 2,
//     usageStartWeek: 0, // 조리원 퇴소 후 세탁 및 소독 후 건조 시 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 미리 세팅해 두면 유용한 품목
//     recommendedQuantity: "1개",
//     noticeTag: "소독기 사용 시 생략 가능",
//     reuseType: "GOOD", // 세척 후 재사용
//     review:
//       "완모라 젖병 말릴 일은 거의 없어서 당황했지만... 열탕 소독한 쪽쪽이랑 치발기, 유축기 부품 올려놓는 건조대로 알차게 잘 썼어요! 트레이형이나 소형이 자리 안 차지해서 딱 좋습니다.",
//     tip: "직수 위주라 젖병을 쓰지 않더라도 쪽쪽이나 치발기, 소형 수유 용품 세척 후 건조할 때 유용하게 쓰입니다. 젖병을 많이 쓰지 않는다면 대형보다는 컴팩트한 소형/접이식 건조대를 추천합니다.",
//   },
//   {
//     id: 68,
//     category: "위생/세탁",
//     title: "방수 비닐/아기 쓰레기통 (휴지통)",
//     priority: 2,
//     usageStartWeek: 0, // 출산 후 집 귀가 직후 기저귀 배출 시부터 바로 사용
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE", // 🟡 미리 준비하면 악취 방지에 매우 유용
//     recommendedQuantity: "1개",
//     noticeTag: "밀폐형 밀폐 쓰레기통(매직캔 등) 추천",
//     reuseType: "GOOD", // 본체는 재사용 가능
//     review:
//       "기저귀 냄새가 생각보다 강해서 밀폐력이 좋은 냄새 차단 휴지통을 안 샀으면 큰일 날 뻔했어요. 여름철 악취와 벌레 방지에 최고입니다.",
//     tip: "이중 밀폐 구조로 냄새를 잡아주는 전용 쓰레기통을 미리 구비해 두시면 쾌적한 실내 환경 유지에 큰 도움이 됩니다.",
//   },
//   {
//     id: 69,
//     category: "수유",
//     title: "젖병 세척솔/젖꼭지 솔",
//     priority: 3,
//     usageStartWeek: 0, // 모유 수유여도 유축 젖병/직수 후 세척용으로 바로 사용
//     preparationPeriod: {
//       fromWeek: -6,
//       toWeek: -2,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 출산 전 필수 세탁/위생용 준비
//     recommendedQuantity: "1세트",
//     noticeTag: "실리콘 소재 vs 스폰지 소재 선택",
//     reuseType: "NEW", // 위생상 새 제품 권장
//     review:
//       "완모였지만 유축해둔 모유를 먹이거나 물 먹일 때 쓴 젖병을 매일 닦아야 해서 세척솔은 꼭 필요했습니다. 스폰지형은 주기적으로 교체해 줬어요.",
//     tip: "위생을 위해 1~2개월마다 주기적으로 교체해 주는 것이 좋습니다. 스폰지형은 거품이 잘 나고 실리콘형은 건조가 빨라 내구성이 좋습니다.",
//   },
//   {
//     id: 70,
//     category: "수유",
//     title: "젖병 세정제",
//     priority: 3,
//     usageStartWeek: -8, // 출산 전 미리 젖병/공갈젖꼭지 등 세탁/소독 시 사용
//     preparationPeriod: {
//       fromWeek: -12,
//       toWeek: -8,
//     },
//     purchaseDecision: "PREPARE_IN_ADVANCE", // 🟢 미리 준비해 두는 필수품
//     recommendedQuantity: "1개",
//     noticeTag: "1종 주방세제 / 무향 추천",
//     reuseType: "NEW", // 세정 소모품
//     review:
//       "아기 입에 들어가는 열탕 용품이나 젖병, 장난감까지 모두 씻을 수 있는 1종 친환경 젖병 세정제로 출산 전 미리 닦아 소독해 뒀어요.",
//     tip: "보건복지부 기준 1종 세척제(야채·과일 및 아기 식기 세척 가능)인지 확인하시고, 잔여물이 남지 않는 거품형 제품이 편리합니다.",
//   },
//   {
//     id: 71,
//     category: "생활",
//     title: "기저귀갈이대",
//     priority: 2,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: 2,
//     },
//     purchaseDecision: "SEE_AND_BUY",
//     recommendedQuantity: "1개",
//     noticeTag: "허리 높이와 안전한 사용 환경 확인",
//     reuseType: "CHECK", // 구조·안전장치·상태 확인
//     review:
//       "신생아 땐 하루에도 10번 이상 기저귀를 갈아야 하는데, 기저귀갈이대가 없었으면 허리랑 무릎이 남아나지 않았을 것 같아요. 서서 갈 수 있어서 출산 후 몸 회복할 때 효자템이었습니다.",
//     tip: "당근이나 원목/이동식 기저귀갈이대를 적극 추천합니다. 아기 체중이 늘거나 뒤집기를 시작하면 낙상 위험이 있으므로 항상 한 손으로 아기를 잡고 사용하세요.",
//   },
//   {
//     id: 72,
//     category: "산모",
//     title: "산후 복대",
//     priority: 1,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 2,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH",
//     recommendedQuantity: "1개",
//     noticeTag: "분만 방법과 몸 상태에 따라 선택",
//     reuseType: "CHECK", // 위생·탄성·착용 상태 확인
//     review:
//       "자연분만이라 출산 후 배가 묵직하고 허전해서 잠깐 차봤는데, 답답함이 더 커서 생각보다 오래 신지는 못했어요. 사람마다 호불호가 크게 갈립니다.",
//     tip: "제왕절개 산모는 수술 부위 지지용으로 병원에서 권장하지만, 자연분만 산모는 필수품이 아닙니다. 출산 후 경과를 보고 필요 시 준비해도 늦지 않습니다.",
//   },
//   {
//     id: 73,
//     category: "산모",
//     title: "수면양말",
//     priority: 2,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: 0,
//     },
//     purchaseDecision: "PREPARE_BEFORE_USE",
//     recommendedQuantity: "2~3켤레",
//     noticeTag: "발목을 조이지 않는 제품 선택",
//     reuseType: "GOOD", // 세탁 후 재사용
//     review:
//       "가을 출산이라 조리원과 집에서 발 시릴 때 푹신하게 잘 신었어요. 다만 땀 흡수가 안 되는 수면양말보다는 발목이 넉넉하고 면 함유량이 높은 양말이 훨씬 쾌적했습니다.",
//     tip: "출산 후 부종 때문에 발목이 심하게 부으므로, 고무줄 압박이 전혀 없는 임산부 전용 무압박 양말이나 헐렁한 수면양말로 챙기세요.",
//   },
//   {
//     id: 74,
//     category: "수유",
//     title: "젖병",
//     priority: 2,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 2,
//     },
//     purchaseDecision: "SEE_AND_BUY",
//     recommendedQuantity: "1~2개",
//     noticeTag: "수유 방식과 아기에게 맞는 제품 확인",
//     reuseType: "CHECK", // 본체 상태·사용 이력·젖꼭지 교체 확인
//     review:
//       "완모 작정이라 출산 전엔 안 샀는데, 유축 모유 먹이거나 산후조리원에서 퇴소할 때 물 먹이는 용도로 1~2개 정도만 챙겨두니 딱 적당했어요.",
//     tip: "미리 대량 구매하면 완모 시 전량 창고행이 됩니다. 조리원 퇴소 시 사은품으로 받거나 1~2개 소량만 구비한 뒤 수유 방식이 확정되면 추가 구매하세요.",
//   },
//   {
//     id: 75,
//     category: "수유",
//     title: "젖병소독기",
//     priority: 1,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 4,
//     },
//     purchaseDecision: "SEE_AND_BUY",
//     recommendedQuantity: "1대",
//     noticeTag: "젖병 사용량과 소독 방법에 따라 선택",
//     reuseType: "CHECK", // 전기제품·내부 상태 확인
//     review:
//       "완모라 젖병 소독용으론 거의 안 썼지만, 쪽쪽이, 치발기, 유축기 부품, 나중엔 이유식 식기 보관 및 UV 소독용으로 나름 알차게 활용했습니다.",
//     tip: "완모 가정은 열탕 소독이나 미니 소독기로 대체 가능하지만, 쪽쪽이나 완구류 살균용으로 쓴다면 당근이나 중고로 구비하는 것도 좋은 방법입니다.",
//   },
//   {
//     id: 76,
//     category: "수유",
//     title: "분유 보관용기",
//     priority: 1,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 4,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH",
//     recommendedQuantity: "1~2개",
//     noticeTag: "분유 수유 시 필요",
//     reuseType: "CHECK", // 세척 상태·밀폐 상태 확인
//     review:
//       "직수 위주 완모여서 분유 보관용기는 쓸 일이 없었어요. 완분하는 조리원 동기들은 밤중 수유나 외출할 때 소분해 다니기 편하다고 했습니다.",
//     tip: "완모 계획이라면 절대 미리 사실 필요 없습니다. 완분이나 혼합 수유로 전환된 후 외출 패턴에 맞춰 구매하셔도 충분합니다.",
//   },
//   {
//     id: 77,
//     category: "위생/세탁",
//     title: "아기비데",
//     priority: 2,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 4,
//     },
//     purchaseDecision: "SEE_AND_BUY",
//     recommendedQuantity: "1개",
//     noticeTag: "사용 환경과 설치 가능 여부 확인",
//     reuseType: "CHECK", // 설치·수전 호환성·상태 확인
//     review:
//       "신생아 땐 하루에도 응가를 몇 번씩 싸서 세면대용 아기비데(포마이비 등)에 얹어놓고 씻기니 손목 통증을 엄청 줄여줬어요.",
//     tip: "아기 몸무게가 늘어날수록 손목 보호에 큰 힘이 됩니다. 자택 세면대 수전 형태와 호환되는지 미리 체크해 두세요.",
//   },
//   {
//     id: 78,
//     category: "생활",
//     title: "기저귀 교환매트",
//     priority: 2,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: -4,
//       toWeek: 2,
//     },
//     purchaseDecision: "SEE_AND_BUY",
//     recommendedQuantity: "1개",
//     noticeTag: "방수·세척이 쉬운 소재 추천",
//     reuseType: "GOOD", // 세척 가능한 제품이면 재사용
//     review:
//       "기저귀 갈 때 갑자기 샘/쉬를 해서 바닥이나 부모 침대가 오염되는 걸 막아줬어요. 전용 매트 대신 얇은 방수패드나 일회용 패드로도 충분했습니다.",
//     tip: "부피 큰 교환매트보다는 세탁이 편한 방수패드 2장이나, 외출 시 겸용으로 쓸 수 있는 일회용 방수 패드를 활용하는 것이 훨씬 효율적입니다.",
//   },
//   {
//     id: 79,
//     category: "수면",
//     title: "백색소음기",
//     priority: 1,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 4,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH",
//     recommendedQuantity: "1개",
//     noticeTag: "아기 수면 환경에 따라 선택",
//     reuseType: "CHECK", // 전자제품 상태 확인
//     review:
//       "아기가 등 센서 붙어서 잠투정할 때 빗소리나 쉬- 소리를 틀어주니 등 대고 잠드는 데 도움을 받았어요. 안 쓰는 스마트폰이나 유튜브로 틀어줘도 충분했습니다.",
//     tip: "전용 기기를 사기 전에 안 쓰는 스마트폰 앱이나 유튜브, 음향기기로 아기 반응을 먼저 테스트해 보고 구매를 결정하세요.",
//   },
//   {
//     id: 80,
//     category: "외출",
//     title: "아기 외출용 담요",
//     priority: 1,
//     usageStartWeek: 4,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 8,
//     },
//     purchaseDecision: "SEE_AND_BUY",
//     recommendedQuantity: "1개",
//     noticeTag: "출생 계절에 따라 필요 여부가 달라짐",
//     reuseType: "GOOD", // 세탁 후 재사용
//     review:
//       "가을 출산이라 50일~백일 예방접종 갈 때 쌀쌀해서 유모차나 카시트에 덮어주는 용도로 유용하게 썼어요. 두꺼운 블랭킷이나 도톰한 속싸개로 덮어줬습니다.",
//     tip: "가을/겨울 출생아는 외출 시 체온 유지가 필수입니다. 도톰한 블랭킷이나 겉싸개를 활용하시면 별도 담요를 사지 않아도 됩니다.",
//   },
//   {
//     id: 81,
//     category: "수유",
//     title: "젖병 보온/워머",
//     priority: 1,
//     usageStartWeek: 0,
//     preparationPeriod: {
//       fromWeek: 0,
//       toWeek: 4,
//     },
//     purchaseDecision: "BUY_AFTER_BIRTH",
//     recommendedQuantity: "1개",
//     noticeTag: "수유 방식과 생활 패턴에 따라 선택",
//     reuseType: "CHECK", // 전기제품·상태 확인
//     review:
//       "완모라 체온 그대로 직수해서 젖병 데울 일이 없어 전혀 쓰지 않았습니다. 냉동 유축 모유를 해동할 땐 따뜻한 물에 데우는 걸로 충분했어요.",
//     tip: "완모 산모에겐 필요성이 거의 없는 품목입니다. 유축 모유 수유를 자주 하거나 완분으로 전향할 경우에만 구매를 고려하세요.",
//   },
// ];

//////////////🎨 1. 상태 배지 & UI 렌더링용 매핑 객체
// 1. 준비 시점 (timing)
export const TIMING_LABEL = {
  BEFORE_BIRTH: "출산 전",
  AFTER_BIRTH: "출산 후",
  NEED_ON_SITE: "필요 시 구매",
  CASE_BY_CASE: "상황에 따라",
} as const;

// 2. 필요도 배지 (priority)
export const PRIORITY_LABEL = {
  MUST: "🔴 꼭 준비",
  HANDY: "🟡 있으면 편함",
  LATER: "🟢 나중에 준비",
} as const;

// 3. 구매 판단 (purchaseDecision)
export const PURCHASE_DECISION_LABEL = {
  RECOMMENDED: "준비 추천",
  CASE_BY_CASE: "상황에 따라",
  AVOID_BULK: "대량 구매 자제",
  WAIT_AND_SEE: "나중에 판단",
  SUBSTITUTE: "대체 가능",
  NO_NEED: "구매 불필요",
} as const;

// 4. 재사용 태그 (isReusable)
export const REUSABLE_LABEL = {
  true: "🔁 첫째 물건 재사용 가능",
  false: null,
} as const;

//////////🎨 2. 디자인 시스템 Theme 연동용 배지 스타일 매핑

// 필요도 배지 스타일 매핑
export const PRIORITY_STYLE = {
  MUST: {
    bg: theme.colors.badge.needBg,
    text: theme.colors.badge.needText,
    label: "꼭 준비",
    icon: "🔴",
  },
  HANDY: {
    bg: theme.colors.badge.handyBg,
    text: theme.colors.badge.handyText,
    label: "있으면 편함",
    icon: "🟡",
  },
  LATER: {
    bg: theme.colors.badge.laterBg,
    text: theme.colors.badge.laterText,
    label: "나중에 준비",
    icon: "🟢",
  },
} as const;

// 재사용 가능 배지 스타일
export const REUSE_STYLE = {
  bg: theme.colors.badge.reuseBg,
  text: theme.colors.badge.reuseText,
  label: "🔁 재사용 가능",
} as const;
