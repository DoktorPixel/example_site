import { useEffect, useState } from 'react';
import { initSdk } from '@/lib/sdk';
import { Message, XpaidWalletSdk } from 'xpaid-wallet-sdk';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const customerId = import.meta.env.DEV ? '485bb67b-a9a2-4e0c-8a17-c1baa02dddd6' : '0df4c171-bf74-4ba1-b326-d357bca99bf8'
const iban = 'test'
const accountId = import.meta.env.DEV ? '87854436885': 'anya-test-unique'

export const VerifiedWalletPage = () => {
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
      location.replace('/')
      alert('Session expired!')
    })

    return () => {
      XpaidWalletSdk.destroy()
    }
  }, []);

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
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinue}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div >
  );
};