"use client"


import React from 'react'
import LinkItem from './LinkItem'


export default function Footer(props) {



  return (
        <div className='h-[100%] w-[100%] sm:w-[100vw] flex flex-col justify-center items-center border-t-2 border-[#236c55] font-montserrat bg-[#381e45]'>
            <aside id="footer-container-top" className='h-[60%] w-[96%] sm:flex-col  flex flex-row justify-around items-center'>
                <a href="#head">
                <div id="footer-logo">
                        <img src="/canva-portfolio design/logo_g.svg" alt="logo" width="130px"/>
                    </div>
                </a>
                <div id="code-profile">
                    <span><a href="https://www.linkedin.com/in/christopher-masha-68377924a"><img src="./Portfolio/Canva-Designs/icons8-github-48.png" alt=""/></a></span>
                    <span><a href="https://github.com/Masha-bit"><img src="./Portfolio/Canva-Designs/icons8-linkedin-48.png" alt=""/></a></span>
                    <span><img src="" alt=""/></span>
    
                </div>
    
                <div id="footer-nav">
                    <span className='font-rust text-white'>SAY HELLO!</span>
                    <LinkItem link={`mailto:mashachristopherifechukwude@gmail.com`} text={`hello@masha.dev`} font={`20px`}/>
                    <LinkItem link={`https://web.telegram.org/z/`} text={`telegram/masha`} font={`20px`} />
                </div>
    
                <div id="footer-nav">
                    <LinkItem link={!props.work? `/work` : `/`} text={ !props.work?`MY WORK`:`HOME`} font={`20px`} />
                    <LinkItem link={!props.trophy?`/trophy`: `/work`} text={!props.trophy?`MY TROPHIES`: `MY WORK`} font={`20px`} />
                    <LinkItem link={`https://www.linkedin.com/in/christopher-masha-68377924a/`} text={`MY RESUME`} font={`20px`}/>
                </div>
    
    
            </aside>
            <div id="footer-divider" className='h-auto w-[70%] border-t-[0.2px] border-[#43b08e] border-r-[30px] mt-[1rem]'></div>
            <aside id="footer-container-bottom" className='h-[30%] w-[90%] text-[#43b08e] font-rust text-[0.9em] flex items-center justify-center'>
                <p className='pt-[2rem] flex items-center justify-around w-[260px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
                      </svg>
                    Masha Christopher 2023</p>
            </aside>
    
        </div>
  )
}
