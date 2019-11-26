import React from 'react'
// import {TweenMax, Power3} from 'gsap'
// import Login from '../components/Login'
import SignUp from '../components/SignUp'
import landscape from '../landscape.png'
import plane from '../plane2.png'

export default function LoginSign(props) {
    // let item = useRef(null); 

    // useEffect(() => {
    // }, [])

   
    return (
        <div className='login-signup-window'>
            <img className='login-background' src={landscape} alt='landscape' /> 
            <img className='plane-login' src={plane} alt='plane' /> 
            <div className='form-container'>
                <SignUp {...props}/> 
            </div>
        </div>
    )
}
// { useRef, useEffect}
// ref={el => {item = el}}