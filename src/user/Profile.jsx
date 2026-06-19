import React, { useState } from 'react'
import { useEffect, useContext,  } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  UsePrivate from '../hooks/UsePrivate';
import { UserDetailContext } from '../hooks/ApiContext';

function Profile() {
  const [data, setData] = useContext(UserDetailContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  const usePrivate = UsePrivate();
  const navigate = useNavigate()
  
  useEffect(() => {  
    const User = async()=>{ 
      try{
        const Update = await usePrivate.get(`/user/${data.id}`);
        setEmail(Update.data.email)
        setUsername(Update.data.username)
  console.log(Update)
    }
    catch(err){
      console.error(err)

     
    } 
  }
    User()
    
  }, [data])
    
    const CancelUpdate = async(e)=>{
      
      e.preventDefault()
      navigate(`/`)
   
        
       }
  
    const PostUpdateUser=async(e)=>{
      e.preventDefault()
     
        navigate(`/profile/update`)
               
    }
    

  return (
    <div className='profile'>
      <div className="container">
    <div className='form'>
      <div className='description'>Users Details</div>
    <ul >
      
      <li>Email:{email}</li>
      <li>Username:{username}</li> 
    </ul>
    <div className='btn'>  
    <button className='button' onClick={CancelUpdate}>Home </button>
    <button className='button' onClick={PostUpdateUser}>Update </button>
    </div></div></div>
    
</div> 
    
  )
}

export default Profile;