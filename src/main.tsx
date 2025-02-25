import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

import { ThemeProvider } from '@/context';
import { AlertProvider } from './context/alert-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <AlertProvider>
      <App />
    </AlertProvider>
  </ThemeProvider>
);
