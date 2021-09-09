import { useFormik } from 'formik';
import * as Yup from 'yup';
import { routes } from 'config/routes';
import { messages } from 'config/messages';
import axios from 'axios'
import { useRouter } from 'next/router';

export const useSignIn = () => {
  const formik = useFormik(
    {
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
      let x = true;
  axios.post('https://localhost:44378/api/SignIn/Login', {
    "Email" : values.email,
    "Password":values.password
  })
  .then(function (response) {   
      if(response.status == 200){
        window.location.href = 'http://localhost:3000/'
      }
      else{
        alert("Invalid Account")
      }
  }, (error) => { 
    alert("Invalid Account")
  });
    },

  });
  return formik;
};
