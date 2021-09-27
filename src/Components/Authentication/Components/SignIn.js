import React from 'react';

const Login = () => {
   return (
      <>
         <h1>Sign In</h1>
         <form>
            <div className='mb-3'>
               <label htmlFor='email'>Email</label>
               <input className='form-control' id='email' type='text' />
            </div>

            <div>
               <label htmlFor='password'>Password</label>
               <input className='form-control' id='password' type='password' />
            </div>
            <button className='btn btn-primary mt-3'>Sign In</button>
         </form>
      </>
   );
}

export default Login;
