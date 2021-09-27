import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../Contexts/AuthContext';

const SignUp = () => {
   const { signup } = useAuth()
   const fullNameRef = useRef()
   const emailRef = useRef()
   const passwordRef = useRef()
   const history = useHistory()

   async function signupHandler(e) {
      e.preventDefault()
      try {
         await signup(emailRef.current.value, passwordRef.current.value)
         history.push('/products')
      } catch (e) {
         console.log(e)
      }
   }

   return (
      <div>
         <h1>Sign Up</h1>
         <form onSubmit={signupHandler}>
            <div className='mb-3'>
               <label htmlFor='email'>Full Name</label>
               <input ref={fullNameRef} className='form-control' id='fullName' name='fullName' type='text' />
            </div>

            <div className='mb-3'>
               <label htmlFor='email'>Email</label>
               <input ref={emailRef} className='form-control' id='email' name='email' type='email' />
            </div>

            <div>
               <label htmlFor='password'>Password</label>
               <input ref={passwordRef} className='form-control' id='password' name='password' type='password' />
            </div>
            <button className='btn btn-primary mt-3'>Sign In</button>
         </form>
      </div>
   );
}

export default SignUp;
