import { ApiKey } from "@/constants";
import { api } from "./axios";
import { Environment, SdkConfig, XpaidWalletSdk } from "xpaid-wallet-sdk";

export async function initSdk(customerId: string, iban: string) {
  const response = await api.get(`/tokens/hash/iban/${customerId}/${iban}`, {
    headers: { 'X-API-KEY': ApiKey },
  })

  const config: SdkConfig = {
    environment: Environment.Staging,
    containerId: 'xpaid-wallet-container',
    hashToken: response.data
  };

  XpaidWalletSdk.initialize(config);

  return XpaidWalletSdk
}
