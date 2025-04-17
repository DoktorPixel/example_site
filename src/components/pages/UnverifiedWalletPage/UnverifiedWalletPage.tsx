import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '85ef3b60-54ae-4841-8404-9cee6c2eceee'
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
