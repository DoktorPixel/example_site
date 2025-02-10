import { createContext } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { Controller, useFormContext } from 'react-hook-form';
import type { FieldPath, FieldValues } from 'react-hook-form';

interface FormFieldProps<TFieldValues, TName> {
  name: TName
  children: React.ReactNode
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: FormFieldProps<TFieldValues, TName>) => {

  const { name, children, ...rest } = props;

  const { control } = useFormContext<TFieldValues>();

  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <Slot {...field} children={children} />}
        {...rest}
      />
    </FormFieldContext.Provider>
  )
}