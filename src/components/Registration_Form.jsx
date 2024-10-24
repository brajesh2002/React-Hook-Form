import React from 'react'
import { useForm } from 'react-hook-form'
import '../style/registration_form.css'

export default function Registration_Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  function onSubmit(data) {
        console.log(data);
  }
  function validatePassword(value){
        if(value===''){
            return "please fill in this field";
        }else if(value!=watch('password')){
            return "password is incorrect";
        }else{
            return true;
        }
  }
  return (
    <div className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <div className='heading'>
        <h1>Sign Up Now</h1>
      </div>
      <form className='form-field'>
        <div>
          <input {...register("firstname", { required: 'please fill in this field', maxLength: { value: 20, message: "max length upto 20" } })} placeholder='First Name' />
          {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
        </div>
        <div>
          <input {...register("lastname", { required: 'please fill in this field', maxLength: { value: 20, message: "please fill in this field" } })} placeholder='Last Name' />
          {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
        </div>
        <div>
          <input {...register("email", { required: 'please fill in this field', pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, message: "invalid email" } })} placeholder='Email' />
          {errors.email && <p className='error-msg'>{errors.email.message}</p>}
        </div>
        <div>
          <input {...register("password", { required: 'please fill in this field', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "weak password" } })} placeholder='Password' />
          {errors.password && <p className='error-msg'>{errors.password.message}</p>}
        </div>
        <div>
          <input {...register("repeatPassword", {validate:validatePassword})} placeholder='Confirm Password' />
          {errors.repeatPassword && <p className='error-msg'>{errors.repeatPassword.message}</p>}
        </div>
        <div>
          <button className='submit'>Create an Account</button>
        </div>
      </form>
    </div>
  )
}
