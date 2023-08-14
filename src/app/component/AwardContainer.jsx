import Link from 'next/link'
import React from 'react'

export default function AwardContainer(props) {
  return (
    <aside className="project-container">
      <Link href={`/${props.slug}`} className='hover:cursor-default'>
        <section className="top">
        <img src={props.img} alt="logo" width={150}/>
        </section>
            <section className="bottom font-montserrat">
            <p>{props.title}</p>
            <Link href={props.link? props.link: '/'} className='hover:transition-all transition-all text-[#B000FF]'>
                {props.linkText}
            </Link>
        </section>
        </Link>
        <style>
            {`
            .project-container{
                height: 500px;
                width: 380px;
                // border-radius: 5px;
                background-color: rgba(255, 255, 255, 0.479);
                position: relative;
                z-index: 4;
                box-shadow: 0 6px 12px 0 rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
              }
              aside .top{
                height: 51%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .top:hover .project-container{
                transform: translateY(50px);
                transition: all 350ms ease-in-out ;
              } 
              aside .bottom{
                position:absolute;
                bottom:0;
                left: 0;
                height: 49%;
                width: 100%;
                background-color:#ffffff;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              
              }
              .bottom a{
                font-weight: 600;
              }
              .bottom p,
              .bottom a{
                text-align: left;
                /* padding: 0; */
                width: 80%;
                height: auto;
                /* margin-left: 2rem; */
                /* background-color: #000000; */
              }
              
              /* .project-container:nth-of-type(1){
                grid-area: a;
              }
                      `
                    }
        </style>
    </aside>
  )
}
