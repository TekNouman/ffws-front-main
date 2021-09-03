import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';

export const useSignIn = () => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // https://formik.org/docs/api/useFormik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // https://github.com/jquense/yup
    validationSchema: Yup.object({
      email: Yup.string()
        .email(messages.notValid.email)
        .required(messages.required),
      password: Yup.string().required(messages.required),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      // eslint-disable-next-line no-console
      console.log('signin submit', values);
      // TODO call API with input values and setSuccess(true) if the user is logged in
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    },
  });

  return { formik, success, loading };
};
