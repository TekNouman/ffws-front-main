import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';

export const useResetPassword = () => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // https://formik.org/docs/api/useFormik
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    // https://github.com/jquense/yup
    validationSchema: Yup.object({
      email: Yup.string()
        .email(messages.notValid.email)
        .required(messages.required),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      // eslint-disable-next-line no-console
      console.log('reset password submit', values);
      // TODO call API with input values and setSuccess(true) if the password is reseted
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    },
  });

  return { formik, success, loading };
};
