import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '515562f0-6a8e-45c1-a18d-08323968427c'
const iban = 'unverified'

export const UnverifiedWalletPage = () => {
  useEffect(() => {
    const sdkPromise = initSdk(customerId, iban, '')

    return () => {
      sdkPromise.then((sdk) => sdk.destroy())
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div id="xpaid-wallet-container" className="w-full h-full" />
    </div>
  );
};
