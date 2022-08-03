import { useState } from 'react';

type InitialValue = string;

/**
 *
 * A custom hook that allows us to manage state for an Input Component
 * Similar to how you would track form state with Formik but for an individual input
 */
export const useInput = (initialValue: InitialValue) => {
  const [value, setValue] = useState<InitialValue>(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value as InitialValue);
      },
    },
  };
};
