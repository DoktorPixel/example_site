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

const customerId = '485bb67b-a9a2-4e0c-8a17-c1baa02dddd6'
const iban = 'test'

export const VerifiedWalletPage = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    initSdk(customerId, iban);

    XpaidWalletSdk.subscribe(Message.TransferCreated, ({ amount }) => {
      setOpen(true);
      setAmount(amount);
    });

    XpaidWalletSdk.subscribe(Message.SessionExpired, () => {
      console.log('Session expired')
      location.reload()
    })

    return () => {
      XpaidWalletSdk.destroy()
    }
  }, []);

  const handleContinue = () => {
    XpaidWalletSdk.publish(Message.TransferConfirmed, {});
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
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinue}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div >
  );
};