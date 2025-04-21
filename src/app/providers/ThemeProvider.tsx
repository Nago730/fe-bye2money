import { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import GlobalStyle from '@/shared/styles/global';
import theme from '@/shared/styles/theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </EmotionThemeProvider>
  );
}; 