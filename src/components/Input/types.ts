import { FormikProps } from 'formik';

export type InputHOCProps = {
  label: string;
  name: string;
  placeholder?: string;
  password?: boolean;
  withMargin?: boolean;
  formik: FormikProps<any>;
};

export type InputProps = {
  id: string;
  error?: boolean;
} & InputHOCProps;
