import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

import { ThemeProvider } from '@/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
);
