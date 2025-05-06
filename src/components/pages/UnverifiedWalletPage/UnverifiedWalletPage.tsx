import { useEffect } from 'react';
import { initSdk } from '@/lib/sdk';

const customerId = '69965572-8b19-4abd-8f3c-746feff59821'
const iban = 'unverified'
const accountId = 'vlad-no-kyc3-test-unique'

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
