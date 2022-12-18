import React from 'react'
import { Link } from 'react-router-dom'
import { ConsumerContext } from './context'
import { useNavigate } from "react-router-dom";
import { auth } from './firebase-config';

const Navbar = ()=> {
const navigate = useNavigate();

  return (
 <>
 <ConsumerContext>
    { value =>{
        const {logout, currUser, show, setShow, setCurrUser, initialToken} = value;

        return(

            <section className='lg:flex lg:justify-between h-20 lg:h-10 bg-orange-500'>
                <Link to = '/'>
        <h3 className='ml-2 mt-2 box' onClick={()=> setShow(!show)}>Transcert</h3>
        </Link>
        <i className='fas fa-bars my-auto cursor-pointer text-cyan-200 px-4 lg:hidden' onClick={()=> setShow(()=>{
           return !show
        }
        )}/>
    <div className={`h-0 lg:mt-2 mt-12 lg:flex lg:justify-end mr-8 navbar-project lg:visible  transition-all ease-in delay-400 ${show ? 'h-0' : 'h-80 lg:h-0'} bg-gray-500 w-full  top-0 z-20 absolute block`}>
      <div className={`${show ? 'hidden' : 'block'} text-center lg:block`}>
        <div className='lg:mr-40 grid lg:grid-cols-4   lg:gap-x-32 my-auto text-white'>  
      
      
      <div className={`${initialToken ? "visible": "hidden"}`}>
      <Link to = '/registration'>
        <button type='button' className={`${initialToken ? "visible": "hidden"}`}  onClick={()=>{ setShow(!show);}}> 
       Register
    </button> 
      </Link>
      </div>
      <div className={`${initialToken ? "hidden": 'visible'}`}>
        <Link to = '/login'>
    <button   onClick={()=> setShow(!show)}>
        Login
    </button>
        </Link>
      </div>
      <div className={`${initialToken ? "hidden": 'visible'}`}>

        <Link to = '/signUp'>
    <button onClick={()=> { logout('register'); setShow(!show);}} >     
        SignUp
    </button>
    </Link>
     </div>
    <button type='button' className={`${initialToken ? "visible": 'hidden'}`} onClick={()=>{ logout(); setShow(!show);}}> 
       Signout
    </button>
      </div>
    </div>
    </div>
        
     {/* </div> */}
    </section>
            )
    }
}
 </ConsumerContext>
 </>
  )
}
export default Navbar 