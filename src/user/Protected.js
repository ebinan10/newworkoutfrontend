import React, { useEffect } from 'react'
import { UserDetailContext } from '../hooks/ApiContext';
import { useContext } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Login from "./Login"

const Protected = ({children}) => {
    const [data,setData] = useContext(UserDetailContext)

    const Nav = ()=>{
        const location = useLocation()
        const navlink = useNavigate();
      useEffect(() => {
        
        return () => {
          navlink('/login',{state:{from:location},replace:true})
        } 
      })
    }
       
      if(data.isLogin){ 
      console.log(data.isLogin)
        return(children)
      }
      else{
      Nav()
    }
    
}

export default Protected