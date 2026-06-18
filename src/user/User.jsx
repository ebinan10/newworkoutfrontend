import axios from 'axios'
import React from 'react'
import { library, dom } from 'react-fontawesome'
import {useEffect} from 'react'

function User() {
    const UserWorkout = () =>{
        
        const workout = axios.post("http://localhost:4000/workout");
        console.log(workout);
       } 

       useEffect(() => {
          UserWorkout()
        }, [])
        
      
  return (
    <div className="success">
         return (
             <div className="success-container">
                  <h1 className="success-title">🎉 Success!</h1>
                  <p className="success-message">
                    Your data was submitted successfully.
                  </p>
                </div>
          );
        </div>
  )
}

export default User;