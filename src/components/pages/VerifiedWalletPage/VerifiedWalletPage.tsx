import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '485bb67b-a9a2-4e0c-8a17-c1baa02dddd6'
const iban = 'test'

export const VerifiedWalletPage = () => {
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
