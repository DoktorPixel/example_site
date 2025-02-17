import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '1a963cad-a375-42b8-bc2a-428645d2181e'
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
