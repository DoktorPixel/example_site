import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  AccountPage,
  StatementsPage,
  ConversionsPage,
  BusinessAccountPage,
  TransfersPage,
  SupportCenterPage,
} from './components/pages';

import { Layout } from '@/components/layouts';
import { ROUTES } from '@/routes';
import { VerifiedWalletPage } from './components/pages/VerifiedWalletPage/VerifiedWalletPage';
import { UnverifiedWalletPage } from './components/pages/UnverifiedWalletPage/UnverifiedWalletPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTES.STATEMENTS} element={<StatementsPage />} />
          <Route path={ROUTES.CONVERSIONS} element={<ConversionsPage />} />
          <Route path={ROUTES.BUSINESS} element={<BusinessAccountPage />} />
          <Route path={ROUTES.TRANSFERS} element={<TransfersPage />} />
          <Route path={ROUTES.SUPPORT} element={<SupportCenterPage />} />
          <Route path={ROUTES.VERIFIED_WALLET} element={<VerifiedWalletPage />} />
          <Route path={ROUTES.UNVERIFIED_WALLET} element={<UnverifiedWalletPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
