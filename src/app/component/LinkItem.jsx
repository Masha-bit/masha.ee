"use client"
import Link from 'next/link'
import React from 'react'

const LinkItem = (props) => {

    const font = props.font
  return (
    <p className={`relative font-montserrat text-[${font}] text-[#43b08e]`}>
        <Link href={props.link}> 
            {props.text} 
        </Link>
        <style jsx>{`
        p{
            height: 40px;
            width:auto;
            padding: 5px;
            position: relative
        }
        p::after{
            content: '';
            right: 0;
            bottom: 0;
            height: 100%;
            width: 30px;
            z-index: -1;
            opacity: 0;
            // transition: all 350ms ease-in-out;
        }
        p:hover::after{
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            height: 60%;
            width: 30px;
            margin-bottom: 1rem;
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
