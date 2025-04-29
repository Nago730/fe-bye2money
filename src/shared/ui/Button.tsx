import styled from '@emotion/styled';

type ButtonSize = 'small' | 'regular' | 'large';

interface GhostButtonProps {
  size?: ButtonSize;
}

export const GhostButton = styled.button<GhostButtonProps>`
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.tokens.nuetral.text.default};
  cursor: pointer;
  opacity: 1;
  vertical-align: middle;
  box-sizing: border-box;

  ${({ theme, size = 'regular' }) => theme.iconDimensions[size]}

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.64;
  }
  &:disabled {
    opacity: 0.32;
    cursor: not-allowed;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
