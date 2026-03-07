import React, { use, useState } from 'react'
import { BiSolidHide } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from "react-toastify";

const Login = () => {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const { signIn } = use(AuthContext)
  const [hide, setHide] = useState(true)
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate()
  const handleLogin = (e) => {  
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signIn(email, password)
    .then((result) => {
      const user = result.user
      // console.log(user)
      navigate(`${location.state? location.state : '/'}`)
      toast.success('You logged in successfully!!')
    })  
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    // alert(errorCode, errorMessage)
    setEmailError(errorCode)
    setPasswordError(errorMessage)
  });  
  }
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-3">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full md:w-100 max-w-sm shadow-2xl transition-transform duration-300 hover:scale-105">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name="email" required placeholder="Email" />

          {emailError && <p className='text-red-500 text-sm mt-2'>{emailError}</p>}

          <label className="label">Password</label>
          <div className="relative">
            <input type={hide? "password" : "text"} className="input" name="password" required   placeholder="Password" />
            <button type="button" className='absolute right-7 top-1/2 -translate-y-1/2 text-xl text-pink-500' onClick={()=>setHide(!hide)}>{hide? <BiSolidHide />:<MdOutlineVisibility />}</button>
          </div>

          {passwordError && <p className='text-red-500 text-sm mt-2'>{passwordError}</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="mt-4">Don't Have An Account? <Link to="/auth/register" className="ml-1 text-pink-500 font-semibold underline inline-block transition-all duration-300 hover:scale-125 hover:text-pink-600">Register</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login