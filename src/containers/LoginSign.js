import React from 'react'
// import {TweenMax, Power3} from 'gsap'
// import Login from '../components/Login'
import SignUp from '../components/SignUp'

export default function LoginSign(props) {
    // let item = useRef(null); 

    // useEffect(() => {
    // }, [])

   
    return (
        <div className='login-signup-window'>
            <div className='form-container'>
                <SignUp {...props}/> 
            </div>
        </div>
    )
}
// { useRef, useEffect}
// ref={el => {item = el}}