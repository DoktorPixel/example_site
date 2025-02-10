import { forwardRef, useId, createContext } from 'react';
import { cn } from '@/lib/utils';

interface FormItemProps {
  className?: string;
}

type FormItemContextValue = {
  id: string;
};

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

export const FormItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props: FormItemProps, ref) => {
  const { className, ...rest } = props;
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn('space-y-2 text-start', className)}
        {...rest}
      />
    </FormItemContext.Provider>
  );
});
