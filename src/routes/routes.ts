export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ACCOUNT: '/account',
  TRANSFERS: '/transfers',
  STATEMENTS: '/statements',
  CONVERSIONS: '/conversions',
  BUSINESS: '/business-account',
  SUPPORT: '/support-center',
  CRYPTO: '/crypto-wallet'
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
