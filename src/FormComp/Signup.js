import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './Signup.css';

/* import CustomComponent from './CustomComponent'; */


const validation=Yup.object({
 firstName: Yup.string().required("First Name cannot be empty"),
 lastName: Yup.string().required("Last Name cannot be empty"),
 email: Yup.string().email("not valid email").required("Email cannot be empty"),
 password: Yup.string().matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,30}$/,"One upper, one lower, one number, one special, Min 8 & max 30").required("Password cannot be empty"),
});



function Signup() {
  const initalVal={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const onSubmit=values=>{
    console.log("Here are values: ",values);
  }

  return (
   <>
  
    <div className='form-container p-sm-4 p-1 bg-white'> 
   <Formik onSubmit={onSubmit} initialValues={initalVal} validationSchema={validation}>
   {formik=>{
   console.log("formik props: ",formik);
  return (
      <Form>
      
 <div className='my-2 py-2 field-container'>
 <Field type="text" id="firstName" name="firstName" placeholder="First Name"   className={`field ${formik.touched.firstName && formik.errors.firstName? "form-control is-invalid":"form-control "}`}  /* className="field" *//>
  
 <div className='errormsg invalid-feedback text-end'><ErrorMessage name='firstName'/></div>
 </div>
 <div className='my-2 py-2 field-container'>
 <Field type="text" id="lastName" name="lastName" placeholder="Last Name"   className={`field ${formik.touched.lastName  && formik.errors.lastName? "form-control is-invalid":"form-control "}`}/>
 <div className='errormsg invalid-feedback text-end'><ErrorMessage name='lastName'/></div>
 </div>

 <div className='my-2 py-2 field-container'>
 <Field type="text" id="email" name="email" placeholder="Email" className={`field ${formik.touched.email && formik.errors.email ? "form-control is-invalid":"form-control "}`}/>
 <div className='errormsg invalid-feedback text-end'><ErrorMessage name='email' /></div>
 </div>

 <div className='my-2 py-2 field-container'> 
 <Field type="password" id="password" name="password" placeholder="Password" className={`field ${formik.touched.password && formik.errors.password ? "form-control is-invalid ":"form-control "}`}/>
 <div className='errormsg invalid-feedback text-end'><ErrorMessage name='password'/></div>
 </div>

 <div className='field-container py-2'>
 <button type='submit' className='py-3 w-100 subbtn border-0'>Claim your free trial</button>
 </div>
  
  <div>
  <p className='terms'>By clicking the button, you are agreeing to our <a href='#'>Terms and Services</a></p>
  </div>
       </Form> 
   )}}
       </Formik>
       </div>
   </>
  )
}

export default Signup;