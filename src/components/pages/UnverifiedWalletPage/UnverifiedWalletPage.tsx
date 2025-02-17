import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '01951512-9dd4-7475-8496-056c0cbba23e'
const iban = 'test'

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
