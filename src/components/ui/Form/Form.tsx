import { type FieldValues, FormProvider } from 'react-hook-form';

import type { UseFormReturn } from 'react-hook-form';

import { FormField, FormMessage, FormItem, FormLabel, FormControl, FormDescription } from './components';

interface FormProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  children?: React.ReactNode;
  onSubmit: (data: TFieldValues) => void;
}

export const Form = <TFieldValues extends FieldValues>(props: FormProps<TFieldValues>) => {

  const { form, children, onSubmit } = props;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.Field = FormField;
Form.Message = FormMessage;
Form.Item = FormItem;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Description = FormDescription;