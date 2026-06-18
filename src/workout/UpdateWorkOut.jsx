import React from 'react'
import { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {useLocation,useNavigate} from 'react-router-dom';
import  UsePrivate from '../hooks/UsePrivate';
import './App.css';

function UpdateWorkOut() {
  const usePrivate = UsePrivate();
        const [title, setTitle] = useState('')
        const [reps, setReps] = useState(0)
        const [load, setLoad] = useState(0)
        const [data, setData] = useState({})
        const [isworkout, setIsWorkout] = useState(false)
        const{id} = useParams()
        const location = useLocation();
        const navigate = useNavigate()
              
        const CancelUpdate = async(e)=>{
          e.preventDefault()
          navigate(`/`)
        }
        const PostUpdateWorkout=async(e)=>{
              e.preventDefault()
             const Update = await usePrivate.patch(`${id}`,{title,reps,load})
               console.log(Update);
               navigate(`/`)
        }
        const UpdateWorkout = async(e) =>{
          try{
                console.log(id)
                const workout = await usePrivate.get(`workout/${id}`)
                const result = workout.data
                console.log(result);
                setData(result) 
                
                setTitle(result.title)
                setReps(result.reps)
                setLoad(result.load)
          }
          catch(err)
          {
          console.log(err)
          }      
          }
          
          useEffect(() => {
            UpdateWorkout()
          },[id])
            
  return (
    <div id='getwork'>
      <div className="container">
        <form className='form'  >
        <input className='inputWork' type="text" placeholder='Title' value={title}  onChange={(e)=>setTitle(e.target.value)}/>
        <input className='inputWork' type="number" placeholder='Reps' value={reps}  onChange={(e)=>setReps(e.target.value)}/>
        <input className='inputWork' type="number" placeholder='Loads' value={load} onChange={(e)=>setLoad(e.target.value)}/>
        <div className='btn'>
        <button type="submit" onClick={CancelUpdate} className='button'>cancel</button>
        <button type="submit" onClick={PostUpdateWorkout} className='button'>update</button>
        </div>

        {/* <input type="submit" value='Get update'  >  */}
        </form></div>
    </div>
  )
}

export default UpdateWorkOut