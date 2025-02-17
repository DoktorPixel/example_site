export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ACCOUNT: '/account',
  TRANSFERS: '/transfers',
  STATEMENTS: '/statements',
  CONVERSIONS: '/conversions',
  BUSINESS: '/business-account',
  SUPPORT: '/support-center',
  VERIFIED_WALLET: '/verified-wallet',
  UNVERIFIED_WALLET: '/unverified-wallet'
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
