import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { useFormField } from '@/components/ui/Form/hooks';

interface FormMessageProps {
  className?: string;
  children?: React.ReactNode;
}

export const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>((props: FormMessageProps, ref) => {

  const { className, children, ...rest } = props;

  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
      {...rest}
    >
      {body}
    </p>
  );
})