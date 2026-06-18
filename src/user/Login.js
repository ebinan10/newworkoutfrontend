import React, { useState, useContext, useEffect,useCallback } from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { UserDetailContext } from '../hooks/ApiContext';
import  {UseAxios} from '../hooks/UseAxios';
import axios from 'axios';
import "./login.css"


function Login() {
        const navigate = useNavigate() 
        const location = useLocation();
        const from = location.state?.from?.pathname || '/';
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [data, setData] = useContext(UserDetailContext);
        const [isError, setIsError] = useState(false)
        const [passwordtype, setPasswordtype] = useState('password');
          
       
      useEffect(()=>{
        let isMount =true
        const Redirect =()=>{
          if(data.isLogin){
            console.log(data.isLogin);
            navigate(from,{state:{data}})
          } 
          else{
            
          }   
        }
       isMount && Redirect()
       return()=>{
        isMount = false 
       }
      },[data])
 
        
        
        const Login = async(e) =>{
          try{
      e.preventDefault()
          const login =  await axios.post('https://workoutbyudehnanakumo.onrender.com/user/login',
            {
                email,
                password
            }) 
            console.log(login)
            console.log(email,password)
            if(login.status===200){
            e.preventDefault()
            console.log(data);
            
            setData(login.data) 
            console.log(data)
            navigate(from,{state:{data}})
           }
          //  return;
            }
            catch(err){
              
                 
                setIsError(true)
                console.log(isError)
            }
            
           
          
           
          
    }    
    const VisiblePassword = () =>{
      if(passwordtype ==='password'){
      setPasswordtype('text') 
    } 
    else{
      setPasswordtype('password')
    }
    }

    
  return (
    
     <div id='login' > <div>
        <form className ='form'>
          <h1 className='description'> User Login</h1>
      <input className ='input1'   type="email" placeholder='example@mail.com'
        value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <div className ='visible'>
         <input className ='input'   type={passwordtype} placeholder='Password'
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <div className='icon' onClick={VisiblePassword}><FontAwesomeIcon icon={faEye} />
             </div> 
             </div> 
              <Link to='/' onClick={Login}><button className ='button'>Submit</button></Link>
      <div className='loginspan'> forgot <Link to='/profile/password'className='loginlink' >password</Link>
      </div>
       
      </form>
       <div className='errorMsg'>{isError?(<>
      <div>invalid email or password</div>
      </>):( <></>)}</div></div>
     </div>
  )
}

export default Login;