import { useSearchParams } from 'react-router-dom';

export const useDateParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const now = new Date();

  const year = parseInt(searchParams.get('year') || now.getFullYear().toString(), 10);
  const month = parseInt(searchParams.get('month') || (now.getMonth() + 1).toString(), 10);

  const setYearMonth = (newYear: number, newMonth: number) => {
    searchParams.set('year', newYear.toString());
    searchParams.set('month', newMonth.toString());
    setSearchParams(searchParams);
  };

  return { year, month, setYearMonth };
}; 