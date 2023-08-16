"use client"
import Link from 'next/link'
import React from 'react'

const LinkItem = (props) => {

    const font = props.font
  return (
    <p className={ !props.nav?`p`:`mobile_p`}>
        <a className={'mlink'} href={props.link}> 
            {props.text} 
        </a>
        <style jsx>{`
        .p{
            height: 40px;
            width:auto;
            padding: 5px;
            position: relative;
            font-family: Varela Round, sans-serif;
            font-size: ${font}:
            color: #43b08e;
            // background-color: red;
        }
        .mobile_p{
            height: 40px;
            width:auto;
            padding: 5px;
            position: relative;
            font-family: Varela Round, sans-serif;
            // font-size: ${font}:
            color: #43b08e;
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
            top: 0;
            height: 60%;
            width: 20%;
            margin-bottom: .61rem;
            margin-right:-.4rem;
            background-color: #96a0b6a1;
            z-index: -1;
            opacity: 1;
            transition: all 350ms ease-in-out;
        }
        @media (max-width: 639px){
            .mobile_p{
                height: auto;
                width: auto;
                font-family: RustSans;
                font-size: 30px;
                font-weight: 600;
                color: #0e0e1e;
                // background-color: black;
                padding: none;
            }
        }
        `}</style>
    </p>
  )
}
export default LinkItem
