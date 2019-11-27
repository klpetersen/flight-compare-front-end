import React, {useRef, useEffect} from 'react'
import {gsap, Power0} from 'gsap'
import cloud1 from '../cloud1.png'
import cloud2 from '../cloud2.png'

export default function Clouds() {

    let c1 = useRef(null); 
    let c2 = useRef(null); 
    let c3 = useRef(null); 
    let c4 = useRef(null); 
    let c5 = useRef(null); 
    let c6 = useRef(null); 

    useEffect(() => {
        console.log(c1, c2, c3, c4, c5, c6)

        gsap.to(c1, 8, {left: '100%', ease: Power0.easeNone, repeat: 10, delay: 3})
        gsap.to(c2, 8, {left: '100%', ease: Power0.easeNone, repeat: 10})
        gsap.to(c3, 8, {left: '100%', ease: Power0.easeNone, repeat: 10, delay: 5})
        gsap.to(c4, 8, {left: '100%', ease: Power0.easeNone, repeat: 10, delay: 1})
        gsap.to(c5, 8, {left: '100%', ease: Power0.easeNone, repeat: 10, delay: 3.5})
        gsap.to(c6, 8, {left: '100%', ease: Power0.easeNone, repeat: 10, delay: 6})
    }, [])


    return (
        <div>
            <img ref={el => {c1 = el}} className='cloud-1' src={cloud1} alt='cloud'/> 
            <img ref={el => {c2 = el}} className='cloud-2' src={cloud2} alt='cloud'/> 
            <img ref={el => {c3 = el}} className='cloud-3' src={cloud1} alt='cloud'/> 
            <img ref={el => {c4 = el}} className='cloud-4' src={cloud2} alt='cloud'/> 
            <img ref={el => {c5 = el}} className='cloud-5' src={cloud1} alt='cloud'/> 
            <img ref={el => {c6 = el}} className='cloud-6' src={cloud2} alt='cloud'/> 
        </div>
    )
}
