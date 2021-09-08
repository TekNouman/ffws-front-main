import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';
import axios from 'axios'
export const useSignUp = () => {
  const formik = useFormik({
    initialValues: {
      'given-name': '',
      'family-name': '',
      email: '',
      password: '',
      playertag :'',
      terms: false,
      'personal-data': false,
    },
    validationSchema: Yup.object({
      'given-name': Yup.string().required(messages.required),
      'family-name': Yup.string().required(messages.required),
      email: Yup.string()
        .email(messages.notValid.email)
        .required(messages.required),
      password: Yup.string().required(messages.required),
      playertag: Yup.string().required(messages.required),
      terms: Yup.boolean().oneOf([true], messages.required),
      'personal-data': Yup.boolean().oneOf([true], messages.required),
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
     

     
      
   axios.post('https://ffws20210904004125.azurewebsites.net/api/SignUp/Signup', {
    
    "Email" :values.email,
    "FirstName":values['given-name'],
    "LastName":values['family-name'],
    "Handle" : values.playertag,
    "Password": values.password,
    "ConfirmPassword": values.password

 })
 .then(function (response) {
  
   alert(response.data);
 }, (error) => {
 
   console.log(error);

 });
   
  

    },
  });

  return formik;
};
