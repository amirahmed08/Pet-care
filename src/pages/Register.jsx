import React, { use, useState } from 'react'
import { BiSolidHide } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const {createUser, setUser, updateUser} = use(AuthContext)
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault()
    // console.log(e.target)
    const name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, photo, email, password  )
     createUser(email, password)
     .then(result=>{
      const user = result.user;
      updateUser({displayName:name, photoURL:photo}).then(() =>{
        // Profile updated!
        setUser({...user, displayName:name, photoURL:photo}),
        alert("Registration Successful")
        navigate('/')
      })
      .catch((error) => {
        // An error occurred
        console.log(error)
        setUser(user);
      })
     })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  })
  }
  
  const [hide, setHide] = useState(true)
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-3">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full md:w-100 max-w-sm shadow-2xl transition-transform duration-300 hover:scale-105">
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name='name' required placeholder="Name" />
          <label className="label">photo</label>
          <input type="text" className="input" name='photo' placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' required placeholder="Email" />
          <label className="label">Password</label>
          <div className="relative">
            <input type={hide? "password" : "text"} className="input" name='password' required  placeholder="Password" />
            <button type="button" className='absolute right-7 top-1/2 -translate-y-1/2 text-xl text-pink-500' onClick={()=>setHide(!hide)}>{hide? <BiSolidHide />:<MdOutlineVisibility />}</button>
          </div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='text-sm mt-2'>Already have an account? <Link to="/auth/login" className='ml-1 underline inline-block transition-all duration-300 hover:font-bold hover:scale-125 text-pink-500 font-semibold'>Login</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register;
