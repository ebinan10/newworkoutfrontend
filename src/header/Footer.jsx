import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {UseRefreshToken} from '../hooks/UseRefreshToken'
import "./footer.css"

const Footer =()=> {
 
  
  return (
    <div id='footer'>

         <div className='footer'>
         
                        <ul className='ul'>
                        <li>Phone Number</li>
                        <li>+234824585949</li>
                        <li>+234814512642</li>
                        <li>+234814512642</li>
                        </ul>
                    
         </div>
         <div className='footer'>
         
                        <ul className='ul'>
                        <li>Workout Training</li>
                        <li>Athletics</li>
                        <li>Body Building</li>
                        <li>Trainers</li>
                        </ul>
                    
         </div>
         <div className='footer'>
         
                        <ul className='ul'>
                            <li>Easy Training</li>
                            <li>Running</li>
                            <li>Skipping</li>
                            <li>Weight Lifting</li>
                        </ul>
                    
         </div>
          <div  id='footerLogo'>
              Workout &copy;2023
          </div>
    </div>
  )
}

export default Footer