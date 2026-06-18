import React, { useState,useContext } from 'react'
import Axios from '../api/Axios'
import {useEffect} from 'react'
import { UserDetailContext } from '../hooks/ApiContext';
import './App.css';

function CreateWorkout() {
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState(0);
    const [load, setLoad] = useState(0);
    const {token} = useContext(UserDetailContext);


    const handleSubmit = (e) => {
      e.preventDefault();

      if (!title || !reps || !load) {
        alert("Please fill all fields");
        return;
      }

      const workout = {
        title,
        reps,
        load,
      };

      console.log("Workout created:", workout);

      // clear inputs
      setTitle("");
      setReps("");
      setLoad("");
    };
    
     
  return (
    <div className="workout-form">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />

        <input
          type="text"
          placeholder="Load"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />

        <input type="submit" value="Create Workout" />
      </form>
    </div>
  )
}

export default CreateWorkout