"use client"
import Link from 'next/link'
import React from 'react'

const LinkItem = (props) => {

    const font = props.font
  return (
    <p className={ props.sm?`relative font-rust text-[28px] text-[#00FFB0]`:`relative font-montserrat text-[${font}] text-[#43b08e]`}>
        <a className={'mlink'} href={props.link}> 
            {props.text} 
        </a>
        <style jsx>{`
        p{
            height: 40px;
            width:auto;
            padding: 5px;
            position: relative;
            // background-color: red;
        }
        a{
            height:auto;
            width: auto;
            position: relative;
            // background-color: white;
        }
        a::after{
            content: '';
            right: 0;
            bottom: 0;
            // height: 40px;
            width: 30px;
            z-index: -1;
            opacity: 0;
            // transition: all 350ms ease-in-out;
        }
        a:hover::after{
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            height: 20px;
            width: 30px;
            margin-bottom: .61rem;
            margin-right:-.4rem;
            background-color: #96a0b6a1;
            z-index: -1;
            opacity: 1;
            transition: all 350ms ease-in-out;
        }
        `}</style>
    </p>
  )
}
export default LinkItem
