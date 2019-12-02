import React, {useRef, useEffect} from 'react'
import {gsap, Power0} from 'gsap'
import cloud1 from '../cloud1.png'
import cloud2 from '../cloud2.png'
import plane1 from '../plane1.png'


export default function Clouds() {

    let c1 = useRef(null); 
    let c2 = useRef(null); 
    let c3 = useRef(null); 
    let c4 = useRef(null); 
    let c5 = useRef(null); 
    let c6 = useRef(null); 
    let p1 = useRef(null); 
    let c7 = useRef(null); 
    let c8 = useRef(null); 
    let c9 = useRef(null); 
    let c10 = useRef(null); 
    let c11= useRef(null); 
    let c12 = useRef(null); 

    useEffect(() => {
        gsap.to(c1, 8, {left: '100%', ease: Power0.easeNone, repeat: Infinity, delay: 3})
        gsap.to(c2, 8, {left: '100%', ease: Power0.easeNone, repeat: Infinity})
        gsap.to(c3, 8, {left: '100%', ease: Power0.easeNone, repeat: Infinity, delay: 5})
        gsap.to(c4, 8, {left: '100%', ease: Power0.easeNone, repeat: Infinity, delay: 1})
        gsap.to(c5, 8, {left: '100%', ease: Power0.easeNone, repeat: Infinity, delay: 3.5})
        gsap.to(c6, 8, {left: '100%', ease: Power0.easeNone, repeat: Infinity, delay: 6})  
        gsap.fromTo(c7, 8, {left: '15%'}, {left: '100%', ease: Power0.easeNone})
        gsap.fromTo(c8, 2, {left: '73%'}, {left: '100%', ease: Power0.easeNone})
        gsap.fromTo(c9, 3, {left: '50%'}, {left: '100%', ease: Power0.easeNone})
        gsap.fromTo(c10, 1, {left: '80%'}, {left: '100%', ease: Power0.easeNone})
        gsap.fromTo(c11, 9, {left: '30%'}, {left: '100%', ease: Power0.easeNone})
        gsap.fromTo(c12, 6, {left: '20%'}, {left: '100%', ease: Power0.easeNone})
        gsap.fromTo(p1, 3, {top: '30%'}, {top: '35%', repeat: -1, yoyo: true, ease: Power0.easeNone})
    }, [])


    return (
        <div>
            <img ref={el => {c1 = el}} className='cloud-1' src={cloud1} alt='cloud'/> 
            <img ref={el => {c2 = el}} className='cloud-2' src={cloud2} alt='cloud'/> 
            <img ref={el => {c3 = el}} className='cloud-3' src={cloud1} alt='cloud'/> 
            <img ref={el => {c4 = el}} className='cloud-4' src={cloud2} alt='cloud'/> 
            <img ref={el => {c5 = el}} className='cloud-5' src={cloud1} alt='cloud'/> 
            <img ref={el => {c6 = el}} className='cloud-6' src={cloud2} alt='cloud'/> 
             <img ref={el => {c7 = el}} className='cloud-7' src={cloud1} alt='cloud'/> 
            <img ref={el => {c8 = el}} className='cloud-8' src={cloud2} alt='cloud'/> 
            <img ref={el => {c9 = el}} className='cloud-9' src={cloud1} alt='cloud'/> 
            <img ref={el => {c10 = el}} className='cloud-10' src={cloud2} alt='cloud'/> 
            <img ref={el => {c11 = el}} className='cloud-11' src={cloud1} alt='cloud'/> 
            <img ref={el => {c12 = el}} className='cloud-12' src={cloud2} alt='cloud'/> 
            <img ref={el => {p1 = el}} className='plane-1' src={plane1} alt='plane'/> 
        </div>
    )
}

    
       