import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';

export const useSignUp = () => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // https://formik.org/docs/api/useFormik
  const formik = useFormik({
    initialValues: {
      'given-name': '',
      'family-name': '',
      email: '',
      password: '',
      terms: false,
      'personal-data': false,
    },
    // https://github.com/jquense/yup
    validationSchema: Yup.object({
      'given-name': Yup.string().required(messages.required),
      'family-name': Yup.string().required(messages.required),
      email: Yup.string()
        .email(messages.notValid.email)
        .required(messages.required),
      password: Yup.string().required(messages.required),
      terms: Yup.boolean().oneOf([true], messages.required),
      'personal-data': Yup.boolean().oneOf([true], messages.required),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      // eslint-disable-next-line no-console
      console.log('signup submit', values);
      // TODO call API with input values and setSuccess(true) if the user has successfully registered
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    },
  });

  return { formik, success, loading };
};
