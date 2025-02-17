import { useEffect } from 'react';
import {
  XpaidWalletSdk,
  SdkConfig,
  Environment
} from '../../../../../../../Monorepo/work/xpaid-wallet/packages/sdk/src';
import { api } from '@/lib/axios';
import { ApiKey } from '@/constants';

export const CryptoWalletPage = () => {
  useEffect(() => {

    const initSdk = async () => {
      const customerId = '1a963cad-a375-42b8-bc2a-428645d2181e'
      const iban = 'test'

      const response = await api.get(`/tokens/hash/${customerId}/${iban}`, {
        headers: { 'X-API-KEY': ApiKey },
      })

      const config: SdkConfig = {
        environment: Environment.Development,
        containerId: 'xpaid-wallet-container',
        hashToken: response.data
      };

      XpaidWalletSdk.initialize(config);
    }

    initSdk()
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div id="xpaid-wallet-container" className="w-full h-full" />
    </div>
  );
};
