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
    const { fontFamily, fontSize, lineHeight, fontWeight } = theme.typography.serif24;

    return css`
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${theme.tokens.nuetral.text.default};
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