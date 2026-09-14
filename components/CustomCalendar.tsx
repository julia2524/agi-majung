import React from "react";
import styled, { useTheme } from "styled-components/native";
import { Calendar, LocaleConfig } from "react-native-calendars";

// 한국어 로케일 설정
LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
};
LocaleConfig.defaultLocale = "ko";

interface CustomCalendarProps {
  selectedDate: string; // YYYY-MM-DD 형식
  onSelectDate: (dateString: string) => void;
  minDate?: string;
}

export default function CustomCalendar({
  selectedDate,
  onSelectDate,
  minDate,
}: CustomCalendarProps) {
  const theme = useTheme();

  return (
    <CalendarContainer>
      <Calendar
        current={selectedDate || undefined}
        minDate={minDate}
        onDayPress={(day) => onSelectDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
          },
        }}
        theme={
          {
            // 전체 배경 및 카드
            backgroundColor: theme.colors.card,
            calendarBackground: theme.colors.card,

            // 헤더 (년/월)
            monthTextColor: theme.colors.text,
            textMonthFontFamily: theme.fontFamily.bold,
            textMonthFontSize: theme.typography.subheading,

            // 요일 텍스트 (일, 월, 화...)
            textSectionTitleColor: theme.colors.textSecondary,
            textDayHeaderFontFamily: theme.fontFamily.medium,
            textDayHeaderFontSize: theme.typography.small,

            // 날짜 텍스트 (기본/오늘 날짜 공통 폰트 지정)
            dayTextColor: theme.colors.text,
            textDayFontFamily: theme.fontFamily.medium,
            textDayFontSize: theme.typography.body,

            // 오늘 날짜 색상만 다르게 지정
            todayTextColor: theme.colors.primary,

            // 선택된 날짜 (핑크 동그라미)
            selectedDayBackgroundColor: theme.colors.primary,
            selectedDayTextColor: theme.colors.card,

            // 비활성화 날짜 (최소 날짜 이전)
            textDisabledColor: "#E0D7D3",

            // 좌우 이동 화살표
            arrowColor: theme.colors.primary,
            // ★ 선택 동그라미 및 숫자 수직 중앙 정렬 오버라이드
            "stylesheet.day.basic": {
              base: {
                width: 36,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
              },
              selected: {
                backgroundColor: theme.colors.primary,
                borderRadius: 18,
              },
              text: {
                marginTop: 0, // 기본 라이브러리에 잡혀있는 상단 마진 제거
                marginBottom: 0,
                fontSize: theme.typography.body,
                fontFamily: theme.fontFamily.medium,
                color: theme.colors.text,
                textAlign: "center",
              },
            },
          } as any
        }
      />
    </CalendarContainer>
  );
}

/* -----------------------------
   Styled Components
----------------------------- */

const CalendarContainer = styled.View`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 12px;

  /* 포근한 은은한 그림자 */
  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 12px;
  elevation: 3;
`;
