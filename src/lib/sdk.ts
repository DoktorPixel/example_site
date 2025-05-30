import { ApiKey, isDev } from "@/constants";
import { api, } from "./axios";
import { SdkConfig, Environment, XpaidWalletSdk, } from 'xpaid-wallet-sdk';

export async function initSdk(customerId: string, iban: string, accountId: string) {
  const response = await api.post(`/tokens/hash`, {
    customerId,
    iban,
    accountId
  }, {
    headers: { 'X-API-KEY': ApiKey },
  })
  const config: SdkConfig = {
    environment: isDev ? Environment.Development: Environment.Staging,
    containerId: 'xpaid-wallet-container',
    hashToken: response.data.data,
    colorScheme: {
      light: {
        primary: '#8000e5'
      }
    }
  };

  XpaidWalletSdk.initialize(config);

  return XpaidWalletSdk
}
