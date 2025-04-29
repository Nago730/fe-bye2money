import React from 'react';
import styled from '@emotion/styled';

interface ContentInputProps {
  value: string;
  maxCount?: number;
  setContent: (value: string) => void;
}

export const DescriptionInput: React.FC<ContentInputProps> = ({
  value,
  maxCount = 32,
  setContent,
}) => (
  <Container>
    <LabelRow>
      <Label>내용</Label>
      <Count>{`${value.length}/${maxCount}`}</Count>
    </LabelRow>
    <InputField
      type="text"
      value={value}
      maxLength={maxCount}
      onChange={(e) => setContent(e.target.value)}
      placeholder="내용을 입력하세요"
      aria-label="내용 입력"
      title="1~32자 사이로 입력하세요."
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 160px;
  height: 44px;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const Count = styled.span`
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.weak};
`;

const InputField = styled.input`
  ${({ theme }) => theme.typography.semibold12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};

  &::placeholder {
    ${({ theme }) => theme.typography.light12};
    color: ${({ theme }) => theme.tokens.nuetral.text.weak};
    opacity: 1;
  }
`;
