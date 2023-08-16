"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import {HiArrowLongRight} from 'react-icons/hi2'

const CallToAction = (props) => {  
    const [hover, setHover] = useState(false)
    
    const hoverCheck = () => {
        setHover(true)
    }
    const hoverCheckOver = () =>{
        setHover(false)
    }
    
    const border_color= props.border_color
    const text_color= props.text_color
    const fill_color= props.fill_color

  return (
    <div id='form-submit' onMouseOver={hoverCheck} onMouseLeave={hoverCheckOver}>
    <Link href={props.Link} className='my-[1rem]'>
        <div className={`h-[60px] w-[190px] border-[2px] border-[${fill_color}] flex items-center justify-center overflow-hidden bg-transparent relative form-action`}>
             {props.Text} 
        <span className='ml-[1rem]'>
          <HiArrowLongRight style={{color:  hover === true? `white`:text_color}} size={40}/>
        </span>
        </div>
      </Link>

      {/* <button type="submit" id="form-submit">
                <div className='font-rust'>
                    SHOOT
                    <svg className='hover:text-[white]' width="72" height="20" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke="#B000FF" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                </div>
        </button> */}

        <style jsx>{`
        #form-submit{
            height: 45px;
            width: 240px;
            margin: 5rem auto;
            border: 1px solid ${border_color};
            font-family:'RustSans';
            display: block;
            padding: 0;
          
                position: relative;
                font-weight: bold;
                -webkit-text-transform: uppercase;
                text-transform: uppercase;
                overflow: hidden;
                background: transparent;
                /* white-space: nowrap; */
                -webkit-tap-highlight-color: transparent;
          }
          #form-submit div{
                z-index: 1;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                position: relative;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                /* padding: 0.6em 0.2em; */
                width: 100%;
                height: 100%;
                color: ${text_color};
          }

          #form-submit div::before{
            content: '';
            width: 108%;
            height: 108%;
            pointer-events: none;
            z-index: -1;
            position: absolute;
            top: -0.1em;
            bottom: 0;
            left: 0;
            right: 0;
            background: ${fill_color};
            -webkit-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            transform: translateX(-100%);
            -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            -webkit-transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
            
          #form-submit:hover div{
            color: white;
          }
          #form-submit:hover div::before{
            opacity: 1;
            transform: translate(0,0);
            /* color: white; */
          
          }
        `}</style>
   </div>   
  )
}

export default CallToAction
