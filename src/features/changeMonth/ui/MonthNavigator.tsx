import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useDateParams } from '@/shared/hooks/useDateParams';
import { useChangeMonth } from '../hooks/useChangeMonth';
import ChevronLeft from '@/assets/chevron-left.svg?react';
import ChevronRight from '@/assets/chevron-right.svg?react';
import { ArrowButton } from './ArrowButton';

export const MonthNavigator = () => {
  const { nextMonth, prevMonth } = useChangeMonth();
  const { year, month } = useDateParams();

  const engMonth = new Date(year, month - 1).toLocaleString('en-US', { month: 'long' });

  return (
    <Container>
      <ArrowButton onClick={prevMonth} aria-label="이전 달">
        <ChevronLeft />
      </ArrowButton>

      <DateDisplay>
        <SubText>{year}</SubText>
        <MonthText>{month}</MonthText>
        <SubText>{engMonth}</SubText>
      </DateDisplay>

      <ArrowButton onClick={nextMonth} aria-label="다음 달">
        <ChevronRight />
      </ArrowButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const DateDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const SubText = styled.span`
  ${({ theme }) => {
    const light14 = theme.typography.light14;

    return css`
      font-family: ${light14.fontFamily};
      font-size: ${light14.fontSize};
      line-height: ${light14.lineHeight};
      font-weight: ${light14.fontWeight};
      color: ${theme.tokens.nuetral.text.default};
    `;
  }}
`;

const MonthText = styled.span`
  ${({ theme }) => {
    const serif48 = theme.typography.serif48;

    return css`
      font-family: ${serif48.fontFamily};
      font-size: ${serif48.fontSize};
      line-height: ${serif48.lineHeight};
      font-weight: ${serif48.fontWeight};
      color: ${theme.tokens.nuetral.text.default};
    `;
  }}
`;
