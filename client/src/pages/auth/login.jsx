import CommonForm from '@/components/common/form'
import { loginFormControls } from '@/config'
import { useToast } from '@/hooks/use-toast'
import { loginUser } from '@/store/auth-slice'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const initialState = {
  userName:'',
  email:'',
  password:'',
}
const login = () => {
  const {toast} = useToast()
const dispatch  = useDispatch()

  function onSubmit (event){
    event.preventDefault();
    dispatch(loginUser(formData)).then((data)=>
    {if(data?.payload?.success){
      toast({
        title:data?.payload?.message
      })
    }
  else{
    toast({
      title:data?.payload?.message,
      variant:"destructive"
    })
  }
  })
  }
  const [formData,setFormData] = useState(initialState);
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Login to your Account</h1>
        <p className='mt-2 hover:text-red-600'>Do not have an account?</p>
        <Link to="/auth/register" className='font-medium text-primary hover:underline'>Sign Up</Link>
      </div>
      <CommonForm formControls={loginFormControls} formData={formData} setFormData={setFormData} buttonText={"Sign In"} onSubmit={onSubmit}/>
    </div>
  )
}

export default login
