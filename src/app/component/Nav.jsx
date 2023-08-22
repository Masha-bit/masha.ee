"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import LinkItem from './LinkItem'
import { gsap } from 'gsap'

export default function (props) {

    const [isActive, setActive] = useState(false)
    const [isScrolled, setScroll] = useState(false)
    const [navColor, setNavColor] = useState('#00FFB0')
    const [logo, setLogo] = useState('/canva-portfolio design/logo_g.svg')
    const [foot, setFoot] = useState(false)

    const ref = useRef(null)

    const handleActive = () =>{
        setActive(!isActive)
        console.log(isActive)


        const element = ref.current;
        !isActive?
        // useEffect(() => {
          gsap.fromTo( 
            element.querySelector("#sideNav"), {
              // opacity: 0,
              yPercent: -100,
              // ease: 'power2.inOut',
            },{
              duration: 0.3,
              opacity: 1,
              yPercent: 0,
              // backgroundColor: "red",
              // ease: 'power1.inOut',
            })   
        : gsap.to( 
          element.querySelector("#sideNav"), {
            opacity: 0,
            yPercent: -100,
            display:"hidden",
            // ease: 'power2.inOut',
          }) 
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

    if(!isActive){
      
      if (currentSectionId === 'about2') {
        setNavColor('#00FFB0');
        setLogo('/canva-portfolio design/logo_g.svg');
    } else {
        setNavColor('black');
        setLogo('/canva-portfolio design/logo_p.svg');
      }
          
    if (currentSectionId === 'about' || currentSectionId === 'work' || currentSectionId === 'contact') {
        setLogo('/canva-portfolio design/logo_p.svg');
    } else if (currentSectionId === 'home' || currentSectionId === 'about2') {
       setLogo('/canva-portfolio design/logo_g.svg');
       setNavColor('#00FFB0');
        }
    }
    else{
      setNavColor("black")
    }
    
          
    setFoot(currentSectionId === 'footer')


          
    }


    useEffect(() => {      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);

  return (
    <div className={ !foot ? isScrolled? ` sm:w-[100vw] sm:px-4 h-[120px] w-[100vw] flex items-center justify-around py-12 transition-all duration-[350ms] ease-in-out fixed sm:bg-[#B000FF]`:` sm:w-[100vw] sm:px-4  h-[120px] w-[100vw] bg-transparent flex items-center justify-around py-12 relative transition-all duration-[350ms] ease-in-out`: 'hidden transition-all duration-[350ms] ease-in-out '}>
        <div className='h-auto w-auto z-[100]'>
        <a href='/.'><p className={`font-rust text-[29px] text-[${navColor}] transition-all`}>masha</p></a>
            {/* <a href='/.'><img src={logo} width={'140px'}/></a> */}
        </div>

        <div className='h-auto w-[70%]'></div>

        <div ref={ref} className={isActive? 'menu-toggle-button open' : 'menu-toggle-button'} onClick={handleActive}>
            <div id='sideNav' className={ isActive? 'aside' : 'close'}>
                <div className='flex flex-col justify-around h-[32%] w-[200px] sm:w-[90%] text-left z-[100]'>

                    <LinkItem link={!props.work? `/work` : `/`} text={ !props.work?`MY WORK`:`HOME`} font={`16px`} nav={true} />
                    <LinkItem link={!props.trophy?`/trophy`: `/work`} text={!props.trophy?`MY TROPHIES`: `MY WORK`} font={`16px`} nav={true} /> 
                    <LinkItem link={`https://www.linkedin.com/in/christopher-masha-68377924a/`} text={`MY RESUME`} font={`16px`} nav={true}/>
                </div>

                <div className='flex flex-col justify-center  h-[45%] w-[200px] text-left sm:h-[30%] sm:w-[90%]'>
                
                <p className='font-rust text-[#00FFB0] '>SAY HELLO!</p>
                    <LinkItem link={`mailto:mashachristopherifechukwude@gmail.com`} text={`hello@masha.dev`} font={`16px`} nav={true}/>
                    <LinkItem link={`https://web.telegram.org/z/`} text={`telegram/masha`} font={`16px`} nav={true}/>
                </div>
            </div>

            <div className='menu-button-burger'></div>
        

        <style jsx>
            {`
        .menu-toggle-button{
            height: 80px;
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
            z-index:3;
            
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
            height: 450px;
            width: 350px;
            background-color: white;
            transition: all 500ms ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            margin-top: 1rem;
            shadow:;
            z-index: -1;


        }
        .close{
            position: absolute;
            top: 0;
            right: 0;
            height: 450px;
            width: 350px;
            background-color: white;
            transition: all 500ms ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            margin-top: 1rem;
            shadow:;
            z-index: -1;
            opacity:0;
            // background-color: red;
            
        
        }
        @media (max-width: 639px){
          .menu-button-burger::before,
          .menu-button-burger::after{
            background: #00FFB0;
          }

          .aside{
            position: fixed;
            height: 100vh;
            width: 100vw;
            background-color: rgb(176, 0, 255);
            transition: all 500ms ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0px;
            padding: 0.5rem;
            // z-index: 10;
        }
        .close{
          position: fixed;
          height: 100vh;
          width: 100vw;
          background-color: rgb(176, 0, 255);
          transition: all 500ms ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0px;
          padding: 0.5rem;
          // background-color: red;
          // z-index: 10;
      }


        }
        `}</style>
        </div>
    </div>
  )
}
