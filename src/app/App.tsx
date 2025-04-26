import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { HeaderWidget } from '@/widgets/HeaderWidget';
import { AppStateProvider } from './providers/AppStateProvider';

const App = () => (
  <AppStateProvider>
    <Container>
      <Background />
      <HeaderWidget />
      <Page>
        <Outlet />
      </Page>
    </Container>
  </AppStateProvider>
);

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 216px;
  background-color: ${({ theme }) => theme.tokens.colorchip[80]};
  z-index: -1;
`;

const Page = styled.main`
  display: flex;
  justify-content: center;
`;
