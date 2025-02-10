import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  AccountPage,
  StatementsPage,
  ConversionsPage,
  BusinessAccountPage,
  TransfersPage,
  SupportCenterPage,
  CryptoWalletPage
} from './components/pages';

import { Layout } from '@/components/layouts';
import { ROUTES } from '@/routes';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTES.STATEMENTS} element={<StatementsPage />} />
          <Route path={ROUTES.CONVERSIONS} element={<ConversionsPage />} />
          <Route path={ROUTES.BUSINESS} element={<BusinessAccountPage />} />
          <Route path={ROUTES.TRANSFERS} element={<TransfersPage />} />
          <Route path={ROUTES.SUPPORT} element={<SupportCenterPage />} />
          <Route path={ROUTES.CRYPTO} element={<CryptoWalletPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
