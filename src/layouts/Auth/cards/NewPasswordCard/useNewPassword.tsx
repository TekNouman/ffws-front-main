import { useFormik } from 'formik';
import * as Yup from 'yup';

import { messages } from 'config/messages';
import axios from 'axios';
export const useNewPassword = () => {
  const formik = useFormik({
    initialValues: {
      'new-password': '',
      'confirm-password': '',
      'email': '',
      'code': '',
    },
    validationSchema: Yup.object({
      'new-password': Yup.string().required(messages.required),
      'confirm-password': Yup.string().required(messages.required),
      'email': Yup.string().required(messages.required),
      'code': Yup.string().required(messages.required)
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console


    
   axios.post('https://ffws20210904004125.azurewebsites.net/api/ResetPassword/ResetPassword', {
    
    "Email":values.email,
    "Code":values.code,
    "Password":values['new-password'],
    "ConfirmPassword":values['confirm-password']
    
  
   })
   .then(function (response) {
    
    
    if  (response.status == 200){
      alert("Password Successfully Reset")
     
    }

   }, (error) => {
   
    alert("Password Successfully Reset")
 
   });
     
    },
   });

  return formik;
};
