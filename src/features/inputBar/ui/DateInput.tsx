import styled from '@emotion/styled';

export interface DateInputProps {
  value: string;
  onChange: (val: string) => void;
}

export const DateInput = ({ value, onChange }: DateInputProps) => (
  <Container>
    <Label>날짜</Label>
    <InputField
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 88px;
  height: 44px;
`;

const Label = styled.span`
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const InputField = styled.input`
  flex: 1;
  ${({ theme }) => theme.typography.semibold12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};

  /* 브라우저 기본 데이트 피커 아이콘도 theme 색상으로 맞추기 */
  &::-webkit-calendar-picker-indicator {
    filter: invert(0.3) sepia(1) saturate(5)
      hue-rotate(${({ theme }) => theme.tokens.nuetral.text.default}deg);
    cursor: pointer;
  }

  /* placeholder 스타일 (지원되는 경우) webkit에서 지원 안 됨*/
  &::placeholder {
    ${({ theme }) => theme.typography.light12};
    color: ${({ theme }) => theme.tokens.nuetral.text.weak};
    opacity: 1;
  }
`;
