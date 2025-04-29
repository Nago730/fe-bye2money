// src/shared/lib/format.ts

/**
 * 숫자를 한국 원화 형식으로 포맷팅합니다.
 *
 * @param amount   포맷팅할 금액 (숫자)
 * @param withUnit 뒤에 '원' 단위 문자열을 붙일지 여부 (기본값: true)
 * @returns 쉼표가 적용된 문자열, withUnit이 true면 뒤에 '원'이 붙습니다.
 */
export function formatCurrency(
  amount: number,
  withUnit: boolean = true
): string {
  const formatted = amount.toLocaleString('ko-KR');
  return withUnit ? `${formatted}원` : formatted;
}

/**
 * 주어진 문자열 또는 Date 객체를 "M월 D일 요일" 형식의 한국어 날짜 문자열로 반환합니다.
 *
 * 예: formatDate('2025-04-24') → "4월 24일 목요일"
 *
 * @param date 문자열("YYYY-MM-DD") 또는 Date 객체
 * @returns "4월 24일 목요일" 같은 형식의 날짜 문자열
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const weekdays = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const weekday = weekdays[d.getDay()];
  return `${month}월 ${day}일 ${weekday}`;
}

/**
 * 오늘 날짜를 "YYYY. MM. DD" 형식의 문자열로 반환합니다.
 * 월과 일은 항상 두 자리 숫자로 표시됩니다 (예: 04, 09).
 *
 * @returns "YYYY. MM. DD" 형식의 오늘 날짜 문자열
 */
export function getTodayFormatted(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 0부터 시작하므로 +1, 두 자리로 패딩
  const day = today.getDate().toString().padStart(2, '0'); // 두 자리로 패딩

  return `${year}. ${month}. ${day}`;
}
/**
 * "YYYY. MM. DD" 형식의 날짜 문자열을 "YYYY-MM-DD" 형식으로 변환합니다.
 * 입력 문자열의 형식("YYYY. MM. DD")을 정확히 따른다고 가정합니다.
 *
 * 예: formatDotDateToISO('2025. 04. 24') → "2025-04-24"
 *
 * @param dotDate "YYYY. MM. DD" 형식의 날짜 문자열
 * @returns "YYYY-MM-DD" 형식의 날짜 문자열
 */
export function formatDotDateToISO(dotDate: string): string {
  // ". " 패턴으로 문자열을 분리합니다.
  const parts = dotDate.split('. ');
  // 분리된 부분을 "-"로 연결합니다.
  return parts.join('-');
}
