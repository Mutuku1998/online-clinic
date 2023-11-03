import React, { useState } from 'react'
import loginimg from "../images/loginimg.jpg"
import   HashLoader from "react-spinners/HashLoader"
import uploadToCloudinary from '../../config/uploadCloudinary'
import { toast} from "react-toastify"
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {

  const[selectedFile, setSelectedFile] = useState(null)
  const[previewURL, setPreviewURL] = useState("")
  const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    photo: selectedFile,
    gender:"",
    role: 'patient'
   });

   const navigate = useNavigate()

   const handleInputChange = e =>{
    setFormData({... formData,[e.target.name]:e.target.value});
   }

const handleFileInputChange =  async (event) =>{
  const file = event.target.files[0]

  const data = await uploadToCloudinary(file)

setPreviewURL(data.url)
setSelectedFile(data.url)
setFormData({...formData,photo:data.url})

}

const handleSubmit = async event =>{

  event.preventDefault()

  setLoading(true)

  try {
    const res = await fetch(`http://localhost:8010/api/v1/auth/register`, {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const {message} =await res.json()
    
    if(!res.ok){
      throw new Error(message)
    }

    setLoading(false)
    toast.success(message)
    
    navigate('/login')

  } catch (err) {
    console.error(err); 
    toast.error("An error occurred. Please try again."); 
    setLoading(false);
  }
  
};

  return (
   <section className='px-5 xl:px-0'>
    <div className='max-w-[1170px] max-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>

      <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
        <figure className='rounded-l-lg'>
          <img src={loginimg} alt='' className='w-full h-[580px] rounded-l-lg'/>
        </figure>
      </div>

      <div className='rounded-l-lg lg:pl-16 py-10'>
        <h3  className='text-headingColor text-[22px] leading-7 font-bold mb-10'>
           Create an <span className='text-primaryColor'> account </span></h3>

           <form onSubmit={handleSubmit}> 
           <div className='mb-5'>
  <input type="text" placeholder='Enter Full name' name='name'
  value={formData.name}
  onChange={handleInputChange}
  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
  focus:border-b-primaryColor text-[17px] leading-7 text-headingColor
   placeholder:text-textColor cursor-pointer' required
   autoComplete='off'/>
  
  </div>
  <div className='mb-5'>
  <input type="email" placeholder='Enter your email' name='email'
   value={formData.email}
   onChange={handleInputChange}
  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
  focus:border-b-primaryColor text-[17px] leading-7 text-headingColor
   placeholder:text-textColor cursor-pointer' required
   autoComplete='off'/>
  
  </div>
  <div className='mb-5'>
  <input type="password" placeholder='Password' name='password'
   value={formData.password}
   onChange={handleInputChange}
  className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
  focus:border-b-primaryColor text-[17px] leading-7 text-headingColor
   placeholder:text-textColor cursor-pointer' required
   autoComplete='off'/>
  
  </div>
  <div className='flext items-center justify-between'>
<label htmlFor='' className='text-headingColor text-bold text-[16px] leading-7'>
Are you a :
<select
name='role'
value={formData.role}
onChange={handleInputChange}
className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
focus:outline-none'>
  <option value="patient">Patient</option>
  <option value="physician">Physician</option>

</select>
</label>
<label htmlFor='' className='text-headingColor text-bold text-[16px] leading-7 mx-2 lg:mx-11'>
Gender:
<select
name='gender'
value={formData.gender}
onChange={handleInputChange}
className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 
focus:outline-none'>
  <option value="">select</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
</label>
  </div>
  <div className='mb-5 flex items-center gap-3'>
 {
  selectedFile &&    <figure className='w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor
  flex items-center justify-center' >
    <img src={previewURL} alt='' className='w-full rounded-full'/>

  </figure>
 }
    <div className='relative w-[130px] h-[50px]'>
      <input
      type='file'
      name='photo'

      id='customFile'
      accept='.jpg,.png'
      onChange={handleFileInputChange}
      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
      <label 
      htmlFor='customFile'
      className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px]
      leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
        Upload profile
      </label>
    </div>

  </div>
  <div className='mt-7'>
  <button
  type="submit"
  disabled={loading}
  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
>
  {loading ? <HashLoader size={35} color="#fff" /> : 'Sign up'}
</button>

    <p className='mt-5 text-textColor text-center'> Already have an account?
   <Link to = '/login' className='text-primaryColor font-semibold'>Login here!</Link>
   </p>
  </div>
           </form>
      </div>
      </div>
     
    </div>

   </section>
  )
}

export default SignUp