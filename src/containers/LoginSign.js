import React, {useRef, useEffect} from 'react'
import {gsap, Power0} from 'gsap'
import SignUp from '../components/SignUp'
import landscape from '../landscape.png'
import plane from '../plane2.png'

export default function LoginSign(props) {
    let item = useRef(null); 

    useEffect(() => {
        console.log(item)
        gsap.to(item, 9, {left: "-12%", top: '5%', ease: Power0.easeNone, repeat: 500, repeatDelay: 2}) 
    }, [])

   
    return (
        <div className='login-signup-window'>
            <img className='login-background' src={landscape} alt='landscape'/> 
            <img ref={el => {item = el}} className='plane-login' src={plane} alt='plane' /> 
            <div className='form-container'>
                <SignUp {...props}/> 
            </div>
        </div>
    )
}