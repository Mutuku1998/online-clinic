import React, { useState, useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {authContext} from "../../context/AuthContext.jsx"
import HashLoader from 'react-spinners/HashLoader.js'
const Login = () => {
  const [formData , setformData] = useState ({
    email:'',
    password:''
  });

  const [loading, setLoading] = useState(false)

  const handleInputChange = e=> {
    setformData({... formData, [e.target.name]: e.target.value});
  }

  const navigate = useNavigate()

  const {dispatch} =  useContext(authContext)
  const handleSubmit = async event =>{

    event.preventDefault()
  
    setLoading(true)
  
    try {
      const res = await fetch(`http://localhost:8010/api/v1/auth/login`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result =await res.json()
      
      if(!res.ok){
        throw new Error(result.message)
      }

      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user: result.data,
          token: result.token,
          role: result.role,
        }
      })
      
      console.log(result, "login data")
  
      setLoading(false)
      toast.success(result.message)
      
      navigate('/home')
  
    } catch (err) {
      console.error(err); 
      toast.error("An error occurred. Please try again."); 
      setLoading(false);
    }
    
  };
  
  return (
   <section className='px-5 lg:px-0'>
    <div className='w-full max-w-[570px] mx-auto 
    rounded-lg shadow-md md:p-0 '>
<h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
   Hello
  <span className='text-primaryColor'> Welcome </span> Back 👋
</h3>
<form className='py-4 md:py-0' onSubmit={handleSubmit}>
  <div className='mb-5'>
  <input type="email" placeholder='Enter Your Email' name='email'
  value={formData.email} onChange={handleInputChange}
  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
  focus:border-b-primaryColor text-[17px] leading-7 text-headingColor
   placeholder:text-textColor cursor-pointer' required
   autoComplete='off'/>
  
  </div>
  <div className='mb-5'>
  <input type="password" placeholder='Enter password' name='password'
  value={formData.password} onChange={handleInputChange}
  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
  focus:border-b-primaryColor text-[17px] leading-7 text-headingColor
   placeholder:text-textColor cursor-pointer' required
   autoComplete='off'/>
  
  </div>
  <div className='mt-7'>
    <button type='submit'
    className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'> 
    {loading? <HashLoader size={25} color='#fff'/> : 'login'}</button>
  </div>
  <p className='mt-5 text-textColor text-center'> Don't have an account?
   <Link to = '/register' className='text-primaryColor font-semibold'> signup here!</Link>
   </p>
</form>

    </div>
   </section>
  )
}

export default Login