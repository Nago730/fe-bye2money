import styled from '@emotion/styled';
import { useInputBarContext } from '../store/InputBarContext';
import { GhostButton } from '@/shared/ui/Button';
import ChevronDownIcon from '@/assets/chevron-down.svg?react';
import { DropdownPanel, DropdownWrapper } from './DropdownPanel';

// 카테고리 데이터 (이미지 순서대로)
const TEMP_CATEGORIES = [
  '생활',
  '쇼핑/뷰티',
  '의료/건강',
  '식비',
  '교통',
  '문화/여가',
  '미분류',
  '월급',
  '기타 수입',
  '용돈',
];

export interface CategorySelectProps {
  value: string | null;
  placeholder?: string;
}

export const CategorySelect = ({
  value,
  placeholder = '선택하세요',
}: CategorySelectProps) => {
  const { isCategoryOpen, selectCategory, toggleCategory } =
    useInputBarContext();

  return (
    <Container>
      <Label>분류</Label>
      <Field onClick={toggleCategory}>
        <Selected isPlaceholder={!value}>{value ?? placeholder}</Selected>
        <ToggleButton size="small">
          <ChevronDownIcon />
        </ToggleButton>
      </Field>
      <DropdownWrapper isOpen={isCategoryOpen}>
        <DropdownPanel
          Methods={TEMP_CATEGORIES}
          onSelect={selectCategory}
          showAddItem={false}
          onAdd={() => {}}
        />
      </DropdownWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 104px;
`;

const Label = styled.span`
  ${({ theme }) => theme.typography.light12};
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

interface SelectedProps {
  isPlaceholder: boolean;
}

const Selected = styled.div<SelectedProps>`
  flex: 1;
  ${({ theme }) => theme.typography.semibold12};
  color: ${({ theme, isPlaceholder }) =>
    isPlaceholder
      ? theme.tokens.nuetral.text.weak
      : theme.tokens.nuetral.text.default};
`;

const ToggleButton = styled(GhostButton)``;

interface DropdownWrapperProps {
  isOpen: boolean;
}
