import React from 'react'
import axios from 'axios'
import jwt from "jwt-decode";
import { useEffect } from 'react';
import { useParams,useLocation }from 'react-router-dom';
import { Buffer } from 'buffer';
import './App.css';

function WorkOut() { 
    const query = new URLSearchParams(useLocation().search);

     const Workout = async() =>{
        // const id = query.get("62d19a7bdf47ccf409668930");                                           
        let userId =  '62d19a7bdf47ccf409668930';
      const workout=  axios.get(`${userId}`)
       const data = await workout
        // console.log(data)
        // let payload = JSON.parse(Buffer.from(data.split(".")[1], "base64url"));
        // console.log(payload);
        try{
const result = jwt(data, 
Buffer.from('olotuudeebinan1993', 'base64'),
{ algorithms: ['RS384'] })
      console.log(result);
        }
        catch(err)
        {
          console.log(err);
        }
      

      
        }
    useEffect( () => {
        Workout()
    },[]) 
         
  
  return (
    <div className='workout'>
        get workout
    </div>
  )
}

export default WorkOut  