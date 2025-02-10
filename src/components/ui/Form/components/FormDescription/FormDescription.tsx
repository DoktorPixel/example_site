import { forwardRef } from "react";

import { useFormField } from "@/components/ui/Form/hooks";

import { cn } from "@/lib/utils";

interface FormDescriptionProps {
  className?: string;
}

export const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props: FormDescriptionProps, ref) => {
  const { className, ...rest } = props;
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
});