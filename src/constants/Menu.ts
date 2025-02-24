import {
  Banknote,
  ScrollText,
  BriefcaseBusiness,
  RefreshCcw,
  Grid2x2,
  Info,
  Wallet
} from 'lucide-react';
import { ROUTES } from '@/routes';

export const MENU = [
  {
    label: 'Account',
    link: ROUTES.ACCOUNT,
    icon: Grid2x2
  },
  {
    label: 'Transfers',
    link: ROUTES.TRANSFERS,
    icon: Banknote
  },
  {
    label: 'Statements',
    link: ROUTES.STATEMENTS,
    icon: ScrollText
  },
  {
    label: 'Conversions',
    link: ROUTES.CONVERSIONS,
    icon: RefreshCcw
  },
  {
    label: 'Business account',
    link: ROUTES.BUSINESS,
    icon: BriefcaseBusiness
  },
  {
    label: 'Support center',
    link: ROUTES.SUPPORT,
    icon: Info
  },
  {
    label: 'Crypto Wallet (verified)',
    link: ROUTES.VERIFIED_WALLET,
    icon: Wallet
  },
  {
    label: 'Crypto Wallet (unverified)',
    link: ROUTES.UNVERIFIED_WALLET,
    icon: Wallet
  }
];
