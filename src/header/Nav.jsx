import React,{useState, useEffect, useContext} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import {UserDetailContext} from '../hooks/ApiContext';
import  UsePrivate from '../hooks/UsePrivate';
import axios from 'axios';
import "./nav.css";

 function Nav() {
  const [data, setData] = useContext(UserDetailContext)
  const [isLogIn, setIsLogin] = useState(false); 
  const [userDetail, setUserDetail] = useState('');
  const [className,setClassName] = useState('none');
  const [caret, setCaret] = useState({faCaretDown})
  const navigate = useNavigate();
  const usePrivate = UsePrivate()

  const Navigate = () =>{
        navigate('/login')
      
  }
  useEffect(()=>{
      setIsLogin(data.isLogin)
  },[data]) 
  
  const Logout = async(e) =>{
    try{ 
           e.preventDefault()
          const logout = await usePrivate.get('/token/logout').then(
            ()=>{
              navigate('/login')
            }
          ).catch(err=>{
            console.log(err)
          })
          console.log(logout);
          setData({})
          setClassName('none');
          setUserDetail('')
   
    }
    catch(err){
      console.log(err);
    }
   
  }
  

  const Display = () =>{
    if(className === 'none')
    {
    setClassName('block')
  }else
  {
  setClassName('none')}
  }
 function Profile(){
    setClassName('none')
  }
  

    const Onload = async() =>{
      try{
          if(data.isLogin){
                  setUserDetail(data.username)
                }else{
                  
                }
      }
      catch(err){
          console.log(err);
      }
      
    }

    useEffect(() => {
      Onload()
    },[data])
    
  return (
    <div className='nav'  ><div className='navlink' id='workout'>WORKOUT</div>
        <div className='navlink'>
        <NavLink to='/' className='navlink'>Home</NavLink>
        <NavLink to='/about' className='navlink'>About</NavLink>
        </div>
        <div>
         { data.isLogin?(<>
          <div ><div className='navlink'><div className='user' 
          onClick={Display}>{userDetail}</div>
          <FontAwesomeIcon icon={faCaretDown} onClick={Display}/>
          <div className={className} ><div className='navBlock'><NavLink to='/login' 
          onClick={Logout}>logout</NavLink> 
          <NavLink to='/profile' onClick={Profile}>profile</NavLink></div>
          </div>
       </div>
      </div>   
       </> ):( <><div className='navlink'> 
       <div><NavLink to='/user' className='navlink'>Signup</NavLink></div>
        <div><NavLink to='/login' >Login</NavLink></div></div>
       </> )
      } 
      </div>
   </div>
    
  )
}
export default Nav;
