import { useEffect, useState } from 'react';
import { initSdk } from '@/lib/sdk';
import { Message, XpaidWalletSdk } from 'xpaid-wallet-sdk';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

const customerId = '93c51dee-488e-47af-ac29-5d2c2eb758c9'
const iban = 'unverified'
const accountId = 'test-kyc-unique'

export const UnverifiedWalletPage = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  useEffect(() => {
    initSdk(customerId, iban, accountId);

    XpaidWalletSdk.subscribe(Message.TransferCreated, ({ referenceId, amount }) => {
      setOpen(true);
      setAmount(amount);
      setReferenceId(referenceId);
    });

    XpaidWalletSdk.subscribe(Message.SessionExpired, () => {
      alert('Session expired!')
    })

    return () => {
      XpaidWalletSdk.destroy()
    }
  }, []);

  const handleCancel = () => {
    XpaidWalletSdk.publish(Message.TransferRejected)
  };

  const handleContinue = () => {
    XpaidWalletSdk.publish(Message.TransferConfirmed);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div id="xpaid-wallet-container" className="w-full h-full" />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Transaction</AlertDialogTitle>
            <AlertDialogDescription>
              {amount !== null ? (
                <>
                  Are you sure you want to confirm the transfer of {amount}?
                </>
              ) : (
                "Are you sure you want to confirm this transaction?"
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <p>Reference ID: {referenceId}</p>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinue}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div >
  );
};