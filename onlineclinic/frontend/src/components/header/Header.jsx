
import logo from "../../assets/images/logodh.jpeg"
import {NavLink, Link} from "react-router-dom"
import { useEffect, useRef, useContext } from 'react'
import {BiMenu} from "react-icons/bi"
import { authContext } from '../../context/AuthContext'
const Header = () => {
    const navLinks=[
        {
            path:"/home",
            display:"Home"
        },
        {
            path:"/doctors",
            display:"Find a Doctor"
        },
        {
            path:"/services",
            display:"What we Treat"
        },
        {
            path:"/contact",
            display:"Contact"
        },
        

    ]
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const { user, role, token } = useContext(authContext);

    const handleStickyHeader = ()=>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
                headerRef.current.classList.add('sticky_header')
            }
            else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(()=>{
        handleStickyHeader()
        return()=> window.removeEventListener('scroll',handleStickyHeader)
    })
    const toggleMenu = ()=>menuRef.current.classList.toggle('show_menu')
  return (
   <header className='header flex items-center'ref={headerRef}>
    <div className='container'>
<div className='flex items-center justify-between'>
    <div>
        <img src={logo}alt=''className='w-[100px] h-[100px] rounded-full cursor-pointer'/>

    </div>
    <div  className='navigation' ref={menuRef} onClick={toggleMenu}>
        <ul className='menu flex items-center gap-[2.7rem]'>
{
    navLinks.map((link,index)=><li key={index}>
        <NavLink to={link.path} className={navClass=> navClass.isActive? 'text-primaryColor text-[16px] leading-7 font-[600]'
        :'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor'}> 
        {link.display}</NavLink>

    </li>)
}
        </ul>
         </div>
         <div className='flex items-center gap-4'>
            {
                token && user ? 
                <div className="flex items-center gap-3">
                    <span className="text-headingColor font-bold">{user?.name}</span>
                <Link to= {`${role === 'doctor'? '/doctors/proofile/me': '/users/profile/me'}`}>
                    <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                        <img src={user?.photo}alt=''className='w-full rounded-full'/>
            
                    </figure>
                </Link>
            </div>:
            <Link to='/login'>
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] 
            h-[44px] flex items-center justify-center rounded-[50px]' > Login</button>
        </Link>
            }


<span className='md:hidden'onClick={toggleMenu}>
    <BiMenu className='w-6 h-6 cursor-pointer'/>
</span>

         </div>
</div>
    </div>
   </header>
  )
}

export default Header