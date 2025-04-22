import { useRefresh } from '../hooks/useRefresh';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 132px;
  gap: 4px;
  cursor: pointer;
`;

const LogoText = styled.span`
  
  ${({ theme }) => {
    const serif = theme.typography.serif24;

    return css`
      font-family: ${serif.fontFamily};
      font-weight: ${serif.fontWeight};
      font-size: ${serif.fontSize};
      line-height: ${serif.lineHeight};
      color: ${theme.neutral.text.default};
    `;
  }}
`;

export const Logo = () => {
  const { refresh } = useRefresh();

  return (
    <LogoContainer onClick={refresh}>
      <LogoText>Wise</LogoText>
      <LogoText>Wallet</LogoText>
    </LogoContainer>
  );
}; 