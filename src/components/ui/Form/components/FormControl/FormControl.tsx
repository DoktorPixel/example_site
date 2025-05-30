import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

import { Slot } from '@radix-ui/react-slot';

import { useFormField } from "@/components/ui/Form/hooks";

export const FormControl = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>((props, ref) => {
  //
  const {
    error,
    formItemId,
    formDescriptionId,
    formMessageId
  } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});