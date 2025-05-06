import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = 'aefab6a2-4898-4a35-bbca-a807888429a0'
const iban = 'unverified'
const accountId = 'vlad-no-kyc-test-unique'

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
