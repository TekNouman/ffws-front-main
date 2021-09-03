import * as React from 'react';
import { FormikProps } from 'formik';

import { Wrapper, StyledCheckbox, Label } from './styles';

type Props = {
  label: React.ReactNode;
  name: string;
  formik: FormikProps<any>;
};

const Checkbox: React.FC<Props> = ({ label, name, formik }: Props) => {
  const checkboxId = 'checkbox_' + name;

  return (
    <Wrapper>
      <StyledCheckbox
        id={checkboxId}
        name={name}
        checked={formik.values[name]}
        onChange={formik.handleChange}
      />
      <Label htmlFor={checkboxId}>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
