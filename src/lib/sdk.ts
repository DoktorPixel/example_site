import { ApiKey } from "@/constants";
import { api } from "./axios";
// import { SdkConfig, Environment, XpaidWalletSdk } from 'xpaid-wallet-sdk';
import { SdkConfig, Environment, XpaidWalletSdk } from 'xpaid-wallet-sdk';

export async function initSdk(customerId: string, iban: string) {
  const response = await api.get(`/tokens/hash/iban/${customerId}/${iban}`, {
    headers: { 'X-API-KEY': ApiKey },
  })
  const config: SdkConfig = {
    environment: Environment.Development,
    containerId: 'xpaid-wallet-container',
    hashToken: response.data.data,
  };

  XpaidWalletSdk.initialize(config);

  return XpaidWalletSdk
}
