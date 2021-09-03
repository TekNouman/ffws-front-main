import * as React from 'react';

import { StyledInput, PasswordVisibleToggle, Show, Hide } from './styles';
import { InputProps } from './types';

const InputPassword: React.FC<InputProps> = ({
  placeholder = '',
  name = '',
  withMargin = false,
  formik,
  error = false,
  id,
}: InputProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <>
      {!error && (
        <PasswordVisibleToggle
          onClick={() => setPasswordVisible((prev) => !prev)}
        >
          <Show visible={passwordVisible} />
          <Hide visible={!passwordVisible} />
        </PasswordVisibleToggle>
      )}
      <StyledInput
        name={name}
        id={id}
        type={passwordVisible ? 'text' : 'password'}
        value={formik.values[name]}
        placeholder={placeholder}
        withMargin={withMargin}
        error={error}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </>
  );
};

export default InputPassword;
