import React, { Component, useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

function LoginSign() {
    let item = useRef(null); 

    useEffect(() => {
        console.log(item)
    }, [])
   
   
    return (
        <div ref={el => {item = el}}>
            
        </div>
    )
}
export default LoginSign; 
