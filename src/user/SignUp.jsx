// import axios from 'axios';
// import React from 'react'
// import {useState, useEffect,useContext} from 'react'
// import { UserDetailContext } from '../hooks/ApiContext';
// import {Link,useNavigate} from 'react-router-dom'
// import "./signup.css"
//
// const SignUp = () => {
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [signupMsg, setSignUpMsg] =useState('')
//     const [created, setCreated] = useState(false);
//     const [data] = useContext(UserDetailContext)
//     const nav = useNavigate()
//     useEffect(()=>{
//       if(data.isLogin){
//         nav('/')
//       }
//     },[data])
//    const user = {
//                 email:email,
//                 username:username,
//                 password:password
//              }
//
//     const  SubmitUserDetail = async (e) =>{
//         try{
//           const userDetails =  await axios.post('https://workoutbyudehnanakumo.onrender.com/user',
//         {
//           email:email,
//           username:username,
//           password:password
//        }
//         )
//         console.log(userDetails)
//         setSignUpMsg(userDetails.data)
//         setEmail('');
//         setUsername('');
//         setPassword('');
//         setCreated(true)
//       }
//         catch(err){
//           console.log(err)
//         }
//
//              }
//
//
//
//
//
//
//   return (
//     <div  id='signup' >
//         {!created?(<div className='container'><form className ='form'>
//           <div className='description'>User Signup</div>
//     <input className ='input' type="email" placeholder='example@mail.com' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
//
//     <input className ='input' type="text" placeholder='@Username'  value={username} onChange={(e)=>setUsername(e.target.value)}/>
//
//     <input className ='input'   type="password" placeholder=' @Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
//             <Link to='/user'  onClick={SubmitUserDetail}><button className ='button'>Submit</button></Link>
//     </form></div>):(<div className='success'><h4>{signupMsg}</h4> </div>)}
//     </div>
//   )
// }
// export default SignUp;


import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserDetailContext } from "../hooks/ApiContext";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupMsg, setSignupMsg] = useState("");
  const [created, setCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data] = useContext(UserDetailContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.isLogin) {
      navigate("/");
    }
  }, [data, navigate]);

  const submitUserDetail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://workoutbyudehnanakumo.onrender.com/user",
        {
          email,
          username,
          password,
        }
      );

      setSignupMsg(response.data);
      setCreated(true);

      setEmail("");
      setUsername("");
      setPassword("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to create account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (created) {
    return (
      <div id="signup">
        <div className="success-card">
          <h1>🎉 Success!</h1>
          <p>{signupMsg}</p>

          <Link to="/user" className="success-btn">
            Continue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="signup">
      <div className="container">
        <form className="form" onSubmit={submitUserDetail}>
          <div className="description">User Signup</div>

          <input
            className="input"
            type="email"
            placeholder="example@mail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="@Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="@Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button className="button" type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;