import { useEffect } from 'react';
import { XpaidWalletSdk, Message, SdkConfig } from 'xpaid-wallet-sdk';
export const CryptoWalletPage = () => {
  useEffect(() => {
    const config: SdkConfig = {
      containerId: 'xpaid-wallet-container',
      environment: 'production',
      width: '100%',
      height: '100%',
      colorScheme: 'light'
    };

    XpaidWalletSdk.initialize(config);

    const handleTransferCreated = (payload: any) => {
      console.log('Transfer Created:', payload);
    };
    XpaidWalletSdk.subscribe(Message.TransferCreated, handleTransferCreated);

    return () => {
      XpaidWalletSdk.unsubscribe(Message.TransferCreated);
      XpaidWalletSdk.destroy();
    };
  }, []);

  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl"> Crypto Wallet</h1>
      <div id="xpaid-wallet-container" className="w-full p-4" />
    </div>
  );
};
