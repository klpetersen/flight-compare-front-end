import React, { useRef, useEffect} from 'react'
// import {TweenMax, Power3} from 'gsap'
// import Login from '../components/Login'
import SignUp from '../components/SignUp'

export default function LoginSign(props) {
    let item = useRef(null); 

    useEffect(() => {
        // console.log(item)
    }, [])

   
    return (
        <div className='login-signup-window' ref={el => {item = el}}>
            <div className='form-container'>
                <SignUp {...props}/> 
            </div>
        </div>
    )
}

