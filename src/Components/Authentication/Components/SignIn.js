import React, { useRef } from 'react';

import { useAuth } from '../../../Contexts/AuthContext'

const Login = () => {
   const { signin } = useAuth()
   const emailRef = useRef()
   const passwordRef = useRef()

   async function loginHandler(e) {
      e.preventDefault()
      try {
         await signin(emailRef.current.value, passwordRef.current.value)
      } catch (e) {
         console.log(e)
      }
   }
   return (
      <>
         <h1>Sign In</h1>
         <form onSubmit={loginHandler}>
            <div className='mb-3'>
               <label htmlFor='email'>Email</label>
               <input ref={emailRef} className='form-control' id='email' type='text' />
            </div>

            <div>
               <label htmlFor='password'>Password</label>
               <input ref={passwordRef} className='form-control' id='password' type='password' />
            </div>
            <button className='btn btn-primary mt-3'>Sign In</button>
         </form>
      </>
   );
}

export default Login;
