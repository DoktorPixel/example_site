import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '885a785-307e-4e3e-bd02-b0f1097ed565'
const iban = 'unverified'
const accountId = 'bogdan-test-unique'

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
