"use client"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SwipeUp({delayTime, children}) {
    const ref = useRef(null)

    const [height, setHeight] = useState([]);
    let offsetHeight;
    console.log(height)


  
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
      const element = ref.current
      offsetHeight = element.offsetHeight 

      const dTime = delayTime ? delayTime : 0
      
      
      setHeight(offsetHeight);
      
      
      gsap.fromTo(
        element.querySelector("#title"),
        {
          opacity:0,
          top : `${offsetHeight + 'px'}`,
        },
        {
          delay: dTime,
          duration: 0.8,
          opacity: 1,
          top :0,
          ease: "power4.inOut",
          stagger:{amount:8},
          scrollTrigger:{
            trigger:element.querySelector("#title"),
            start:"-50% 90%",
            // end: "bottom center",
            // markers: true,
          },
        }
      )
  
  
      return () => {
        
      }
    }, [])
    
    return (
      <div ref={ref} className='h-[100%] w-[auto] overflow-hidden flex flex-col items-center justify-center relative'>
  
          <aside id='title' className='h-[100%] w-[100%] flex items-center justify-center relative'> 
            {children}
          </aside>
  
          <aside className={`h-[10px] w-[100%]  absolute top-0 left-0 mt-[100%]`}></aside>
        
      </div>
    )
  }
  
