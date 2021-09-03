import * as React from 'react';

import { StyledInput } from './styles';
import { InputProps } from './types';

const InputText: React.FC<InputProps> = ({
  placeholder = '',
  name = '',
  withMargin = false,
  formik,
  error = false,
  id,
}: InputProps) => {
  return (
    <StyledInput
      name={name}
      id={id}
      type="text"
      value={formik.values[name]}
      placeholder={placeholder}
      withMargin={withMargin}
      error={error}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  );
};

export default InputText;
