"use client"
import React, { useEffect, useState } from 'react'
import LinkItem from './LinkItem'

export default function () {

    const [isActive, setActive] = useState(false)
    const [isScrolled, setScroll] = useState(false)
    const [navColor, setNavColor] = useState('#B000FF')
    const [logo, setLogo] = useState('/canva-portfolio design/logo_g.svg')
    const [foot, setFoot] = useState(false)


    const handleActive = () =>{
        setActive(!isActive)
        console.log(isActive)
    }
    const handleScroll = () => {
        if (window.pageYOffset >= 1) {
            setScroll(true)
          }else{
            setScroll(false)
          }

          const sections = document.querySelectorAll('section');
          let currentSectionId = '';
      
          sections.forEach((section) => {
            const sectionTop = section.offsetTop - 90;
            const sectionBottom = sectionTop + section.offsetHeight;

            
      
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
              currentSectionId = section.id;
            }
            
          });

          if (currentSectionId === 'about2') {
            setNavColor('#00FFB0');
            setLogo('/canva-portfolio design/logo_g.svg');
          } else {
            setNavColor('#B000FF');
            setLogo('/canva-portfolio design/logo_p.svg');
          }
          
          if (currentSectionId === 'about' || currentSectionId === 'work' || currentSectionId === 'contact') {
            setLogo('/canva-portfolio design/logo_p.svg');
          } else if (currentSectionId === 'home' || currentSectionId === 'about2') {
            setLogo('/canva-portfolio design/logo_g.svg');
          }
          
          setFoot(currentSectionId === 'footer')



        //   if (currentSectionId === 'about2'){
        //     setNavColor('#00FFB0')
        //     setLogo('/canva-portfolio design/logo_g.svg')
        // }else{
        //     setNavColor('#B000FF')
        //     setLogo('/canva-portfolio design/logo_p.svg')
        // }

        // if(currentSectionId === 'about' | 'work' | 'contact'){
        //     setLogo('/canva-portfolio design/logo_p.svg')
        // }
        // else if (currentSectionId === 'home' | 'about2'){
        //     setLogo('/canva-portfolio design/logo_g.svg')
        // }

        // if(currentSectionId === 'footer'){
        //     setFoot(true)
        // }else{
        //     setFoot(false)
        // }
      
      
          
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className={ !foot ? isScrolled? ` sm:w-[100vw] h-[120px] w-[100%] bg-transparent flex items-center justify-around py-12 transition-all duration-[350ms] ease-in-out fixed`:` sm:w-[100vw] sm:px-4 h-[120px] w-[100%] bg-transparent flex items-center justify-around py-12 relative transition-all duration-[350ms] ease-in-out`: 'hidden transition-all duration-[350ms] ease-in-out '}>
        <div className='h-auto w-auto'>
            <a href='#home'><img src={logo} width={'140px'}/></a>
        </div>

        <div className='h-auto w-[70%]'></div>

        <div id className={isActive? 'menu-toggle-button open' : 'menu-toggle-button'} onClick={handleActive}>
            <div className={ isActive? 'aside' : 'aside close'}>
                <div className='flex flex-col justify-center h-[45%] w-[auto] text-left z-[100]'>
                   
                    <LinkItem link={`/work`} text={`MY WORK`} font={`16px`} />
                    <LinkItem link={`/work`} text={`MY TROPHIES`} font={`16px`}/>
                    <LinkItem link={`/work`} text={`MY RESUME`} font={`16px`}/>
                </div>

                <div className='flex flex-col justify-center  h-[45%] w-[auto] text-left '>
                
                <p className='font-rust'>SAY HELLO!</p>
                    <LinkItem link={`mailto:mashachristopherifechukwude@gmail.com`} text={`hello@masha.dev`} font={`16px`}/>
                    <LinkItem link={`https://web.telegram.org/z/`} text={`telegram/masha`} font={`16px`}/>
                </div>
            </div>

            <div className='menu-button-burger'></div>
        

        <style jsx>
            {`
        .menu-toggle-button{
            height: 20px;
            width: 60px;
            margin-left: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 350ms ease-in-out;
            /* border: 3px solid white; */
            position: relative;
            // background-color: ${navColor}; 
            
          }
          .menu-button-burger{
            width: 50px;
            /* height: 6px; */
            background-color: ${navColor}; 
            transition: all 350ms ease-in-out;
            border-radius: 5px;
            position: relative;
          
          }
          .menu-button-burger::before,
          .menu-button-burger::after{
            content: "";
            position: absolute;
            height: 4px;
            width: 50px;
            background-color: ${navColor};
            transition: all 350ms ease-in-out;
            border-radius: 5px;
          }
          .menu-button-burger::before{
            transform: translateY(-6px
            );
          }
          .menu-button-burger::after{
            transform: translateY(6px);
            width: 35px;
          }
          .menu-toggle-button.open .menu-button-burger{
            
            /* transform: translateX(-50px); */
            background: transparent;
            box-shadow: none;
          }
          
          .menu-toggle-button.open .menu-button-burger::before{
            transform: rotate(45deg);
            background:  ${navColor};
             /* translate(35px, -35px); */
          }
          .menu-toggle-button.open .menu-button-burger::after{
            width: 50px;
            transform: rotate(-45deg);
            background: ${navColor}
            ;
             /* translate(35px, 35px); */
          }
          
          
          .aside{
            position: absolute;
            top: 0;
            right: 0;
            height: 400px;
            width: 300px;
            background-color: white;
            transition: all 500ms ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.25rem;
            margin-top: 0.5rem;
            shadow:;
            z-index: -1;


        }
        .aside.close{
            transition: all 500ms ease-in-out;
            display: none;
            
        
        }
        `}</style>
        </div>
    </div>
  )
}
