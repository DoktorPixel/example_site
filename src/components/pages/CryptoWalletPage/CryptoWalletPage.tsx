import { useEffect } from 'react';
import {
  XpaidWalletSdk,
  Message,
  SdkConfig,
  Environment
} from '../../../../../../../Monorepo/work/xpaid-wallet/packages/sdk/src';

export const CryptoWalletPage = () => {
  useEffect(() => {
    const config: SdkConfig = {
      environment: Environment.Staging,
      containerId: 'xpaid-wallet-container',
      customerAccount: {
        customerId: '1a963cad-a375-42b8-bc2a-428645d2181e',
        iban: 'test'
      },
    };

    XpaidWalletSdk.initialize(config);


    XpaidWalletSdk.subscribe(Message.TransferCreated, (payload) => {
      console.log('Transfer Created:', payload);
    });

    return XpaidWalletSdk.destroy
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div id="xpaid-wallet-container" className="w-full h-full" />
    </div>
  );
};
