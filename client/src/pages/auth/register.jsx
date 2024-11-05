import CommonForm from '@/components/common/form'
import { registerFormControls } from '@/config'
import { useToast } from '@/hooks/use-toast'
import { registerUser } from '@/store/auth-slice'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


const initialState = {
  userName:'',
  email:'',
  password:'',
}
const register = () => {

  const [formData,setFormData] = useState(initialState);
  const {toast} = useToast()
  console.log(formData);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onSubmit (event){
    event.preventDefault();
    dispatch(registerUser(formData)).then((data)=>{if(data?.payload?.success){
      toast({
        
        title:data?.payload?.message,
        
      })
      navigate("/auth/login")}
    else
    toast({
        
      title:data?.payload?.message,
      variant: "destructive"
      
    })
    }
    
    
    ).catch((e)=>console.log(e)
    )
  }

  
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
