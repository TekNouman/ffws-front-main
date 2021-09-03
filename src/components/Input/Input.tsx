import * as React from 'react';

import { Wrapper, StyledLabel, ErrorWrapper, ErrorMessage } from './styles';
import { InputHOCProps } from './types';
import InputText from './InputText';
import InputPassword from './InputPassword';

const Input: React.FC<InputHOCProps> = ({
  label,
  name,
  formik,
  password = false,
  withMargin = false,
  placeholder = '',
}: InputHOCProps) => {
  const inputId = 'input_' + label.replace(' ', '_').toLowerCase();
  const error = Boolean(formik.touched[name] && formik.errors[name]);

  const inputProps = {
    id: inputId,
    error,
    label,
    name,
    formik,
    withMargin,
    placeholder,
  };

  return (
    <Wrapper>
      <StyledLabel htmlFor={inputId} error={error}>
        {label}
        <ErrorWrapper visible={error}>
          {' '}
          • <ErrorMessage>{formik.errors[name]}</ErrorMessage>
        </ErrorWrapper>
      </StyledLabel>
      {password ? (
        <InputPassword {...inputProps} />
      ) : (
        <InputText {...inputProps} />
      )}
    </Wrapper>
  );
};

export default Input;
