import { useEffect } from 'react';
import {
  XpaidWalletSdk,
  Message,
  SdkConfig,
  Environment
} from 'xpaid-wallet-sdk';
export const CryptoWalletPage = () => {
  useEffect(() => {
    const config: SdkConfig = {
      containerId: 'xpaid-wallet-container',
      token: '',
      environment: Environment.Staging,
      width: '100%',
      height: '100%',
      colorScheme: 'light'
    };

    XpaidWalletSdk.initialize(config);

    const handleTransferCreated = (payload: unknown) => {
      console.log('Transfer Created:', payload);
    };
    XpaidWalletSdk.subscribe(Message.TransferCreated, handleTransferCreated);

    return () => {
      XpaidWalletSdk.unsubscribe(Message.TransferCreated);
      XpaidWalletSdk.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col ">
      <div id="xpaid-wallet-container" className="w-full h-[91vh]" />
    </div>
  );
};
