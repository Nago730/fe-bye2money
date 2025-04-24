import { useDateParams } from '@/shared/hooks/useDateParams';

export const useChangeMonth = () => {
  const { year, month, setYearMonth } = useDateParams();

  const nextMonth = () => {
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = month === 12 ? year + 1 : year;
    setYearMonth(newYear, newMonth);
  };

  const prevMonth = () => {
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = month === 1 ? year - 1 : year;
    setYearMonth(newYear, newMonth);
  };

  return { nextMonth, prevMonth };
};