import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';

export const useNewPassword = () => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // https://formik.org/docs/api/useFormik
  const formik = useFormik({
    initialValues: {
      'new-password': '',
      'confirm-password': '',
    },
    // https://github.com/jquense/yup
    validationSchema: Yup.object({
      'new-password': Yup.string().required(messages.required),
      'confirm-password': Yup.string().required(messages.required),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      // eslint-disable-next-line no-console
      console.log('new password submit', values);
      // TODO call API with input values and setSuccess(true) if the password is updated
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    },
  });

  return { formik, success, loading };
};
