import * as LabelPrimitive from '@radix-ui/react-label';
import { Label } from '@/components/ui';
import { forwardRef } from 'react';
import { useFormField } from '@/components/ui/Form/hooks';
import { cn } from '@/lib/utils';

export const FormLabel = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
