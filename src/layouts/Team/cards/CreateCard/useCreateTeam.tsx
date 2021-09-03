import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';

export const useCreateTeam = () => {
  const [success, setSuccess] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      'team-name': '',
      logo: null,
    },
    validationSchema: Yup.object({
      'team-name': Yup.string().required(messages.required),
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log('create team submit', values);
      setSuccess(true);
    },
  });

  return { formik, success };
};
