import CommonForm from '@/components/common/form'
import { registerFormControls } from '@/config'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const initialState = {
  userName:'',
  email:'',
  password:'',
}
const register = () => {

  function onSubmit (){

  }
  const [formData,setFormData] = useState(initialState);
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create New Account</h1>
        <p className='mt-2 hover:text-red-600'>Already have an account?</p>
        <Link to="/auth/login" className='font-medium text-primary hover:underline'>Login</Link>
      </div>
      <CommonForm formControls={registerFormControls} formData={formData} setFormData={setFormData} buttonText={"Sign Up"} onSubmit={onSubmit}/>
    </div>
  )
}

export default register
