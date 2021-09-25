import React from 'react';

const SignUp = () => {
   return (
      <div>
         <h1>Sign Up</h1>
         <form>
            <div className='mb-3'>
               <label for='email'>Full Name</label>
               <input className='form-control' id='email' type='text' />
            </div>

            <div className='mb-3'>
               <label for='email'>Email</label>
               <input className='form-control' id='email' type='email' />
            </div>

            <div>
               <label for='password'>Password</label>
               <input className='form-control' id='password' type='password' />
            </div>
            <button className='btn btn-primary'>Sign In</button>
         </form>
      </div>
   );
}

export default SignUp;
