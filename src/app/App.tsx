import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { AppStateProvider } from './providers/AppStateProvider';

const App = () => (
  <AppStateProvider>
    <Header />
    <main>
      <Outlet />
    </main>
  </AppStateProvider>
);

export default App; 