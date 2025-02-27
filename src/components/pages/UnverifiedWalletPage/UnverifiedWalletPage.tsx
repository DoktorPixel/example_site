import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = 'dfc83605-e2f9-43e1-9170-1bfebaf968a0'
const iban = 'unverified'

export const UnverifiedWalletPage = () => {
  useEffect(() => {
    const sdkPromise = initSdk(customerId, iban)

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
