import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';
import axios from 'axios'
export const useSignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(messages.notValid.email)
        .required(messages.required),
      password: Yup.string().required(messages.required),
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log('signin submit', values);

  axios.post('https://ffws20210904004125.azurewebsites.net/api/SignIn/Login', {
    "Email" : values.email,
    "Password":values.password
  })
  .then(function (response) {   
      if(response.status == 200){
        alert("Login Success");
      }
  }, (error) => { 
    console.log(error);
  });
    

    },
  });

  return formik;
};
