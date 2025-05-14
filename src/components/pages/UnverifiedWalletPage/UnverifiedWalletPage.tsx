import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '93c51dee-488e-47af-ac29-5d2c2eb758c9'
const iban = 'unverified'
const accountId = 'test-kyc-unique'

export const UnverifiedWalletPage = () => {
  useEffect(() => {
    const sdkPromise = initSdk(customerId, iban, accountId)

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
