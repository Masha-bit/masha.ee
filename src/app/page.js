"use client"
import Image from 'next/image'
import './globals.css'
import Nav from './component/Nav'
import TypingComponent from './component/TypingComponent';
import Contact from './component/Contact';
import Footer from './component/Footer';
import CallToAction from './component/CallToAction';
import SideNav from './component/SideNav';
import { useEffect, useRef } from 'react';
import { gsap, snap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SwipeUp from './component/SwipeUp';

export default function Home() {
  const words = ["Frontend Dev.", "React Developer.", "Designer."];

  const ref = useRef(null)
  const about_ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const element = ref.current
    const about_element = about_ref.current



    const sections = element.querySelectorAll("section")
    console.log(sections.length)
    
    // const sections = gsap.utils.toArray(ss)
    
    // gsap.to(sections,{
    //   yPercent: -100 * (sections.length-1),
    //   ease: "none" ,
    //   backgroundColor: "red",
    //   scrollTrigger: {
    //     trigger: element,
    //     pin:true,
    //     scrub: 1,
    //     snap: 1 / ( sections.length - 1),
    //     end: () => "+=" + element.offsetHeight - 50,
    //   }
    // })
  
    return () => {
      
    }
  }, [])
  


  return (
   <div className='h-[100vh] sm:w-[100vw] w-[100%] relative scroll-smooth' ref={ref}>

    <div className='sm:hidden'>
    <SideNav/>
    </div>

    <section id='home' className='transition-all duration-75 ease-in-out'>
      <div className='h-[780px] sm:w-[100vw] w-[100%] relative'>
      
      <nav className='h-[160px] w-[100vw] absolute top-0 z-10'>
        <Nav/>
      </nav>

      <div 
      id='left' 
      className='h-[100%] sm:w-[100vw] w-[65%] sm:bg-left bg-black absolute left-0 bg-right flex justify-center items-center'
      style={{
        backgroundImage: `url('/canva-portfolio design/6.png')`
        }}>
        <div className='h-[400px] sm:w-[100vw] w-[80%] sm:m-0  m-[2rem] p-8 sm:p-2 text-[#ffffff] transition-all ease-in-out'>
        <h1 className='min-h-[100px] h-[auto] transition-all ease-in-out '>
        <TypingComponent words={words}  />
        </h1>
        
        <h3 className='font-montserrat text-[25px] transition-all ease-in-out'>
          I am <span className='span font-rust'>Masha, Christopher</span>
        </h3>
        <br/>
        <p className='font-montserrat w-[400px]'>
          I like to craft solid and scalable frontend products with great user experiences
          
          {/* Welcome to this wormhole that is my brain.Explore my inner most thoughts[^_^]. Oh did i forget to mention, this is <span className='span font-rust'> MY PORTFOLIO PAGE </span> */}
          
          </p>

          <br/>
                
        <div className='h-[auto] w-[550px] flex items-center justify-between text-[14px] text-[#00FFB0] font-montserrat'>
          <p className=''>
            Highly skilled at progressive enhancement, design systems & UI engineering
          </p>
          <p className=''>
            Proven experience building successful products for clients across several countries
          </p>
        </div>
        </div>

      </div>
      
      <div 
      id='right' 
      className='h-[100%] sm:hidden w-[35%] absolute right-0 bg-transparent flex items-center justify-center' 
      style={{
        backgroundImage: `url('/canva-portfolio design/5.png')`
        }}>

          
      
      </div>

      </div>
    </section>

    <section id='about' className='h-[100vh] sm:h-[auto] sm:w-[100vw] sm:flex sm:flex-col sm:items-center w-[100%] relative font-montserrat text-[#B000FF] bg-cover transition-all duration-75 ease-in-out'
    style={{
      backgroundImage: `url('/canva-portfolio design/5.png')`
      }}>
        <div className='absolute sm:relative sm:w-[100%] sm:h-[50%] left-0 h-[100%] w-[50%] flex items-center justify-center p-[3rem]'>

          <aside className='h-[auto] w-[400px] sm:w-[100vw] sm:m-0 mt-[15rem] mr-[9rem]'>
          <h3 className='font-rust text-[32px] sm:text-[35px]'>
            <SwipeUp>
            Frontend Alchemist !
            </SwipeUp>
            </h3>
          <p className='sm:text-[18px]'>
            <SwipeUp>
            Welcome to my world of web enchantment, where I blend creativity, innovation, and code to bring digital wonders to life. As a passionate Frontend Alchemist, I have mastered the art of crafting captivating user experiences that leave a lasting impression. With a dash of pixel perfection and a sprinkle of interactivity, I weave spells of seamless navigation and visually stunning interfaces.
            </SwipeUp>
            </p>      
          </aside>

        </div>

        <div className='absolute sm:relative sm:h-[50%] sm:w-[100%] right-0 h-[100%] w-[50%] flex items-center justify-center p-[3rem] '>

        <aside className='h-[auto] w-[400px] sm:w-[100vw] sm:m-0  mb-[16rem] mr-[8rem]'>
        <h3 className='font-rust text-[32px] sm:text-[35px]'>
          <SwipeUp>
          Painting with Pixels
          </SwipeUp>
          </h3>
          <p className='sm:text-[18px]'>
            <SwipeUp>
            Every line of code I write is a brushstroke, and every pixel I place is carefully chosen to create a symphony of colors and shapes. As an artist, I believe in the power of aesthetics, using modern design principles and the latest technologies to create intuitive and visually striking websites.
            </SwipeUp>
            </p>  
        </aside>

        </div>

      
    </section>

    <section id='about2' className='sm:h-[auto] sm:w-[100vw] sm:flex sm:items-center h-[100vh] w-[100%] bg-[#B000FF] text-[#ffffff] p-[2rem] font-montserrat relative transition-all duration-75 ease-in-out'>

      <aside className='h-[100%] sm:w-[100%] sm:p-0 w-[50%] sm:relative absolute left-0 pl-[8rem] mt-[5rem]'>
        <div className='w-[auto]'>
      <h3 className='font-rust text-[32px]'>
        <SwipeUp>
        Igniting Innovation, One Project at a Time
        </SwipeUp>
        </h3>
      <br />
      <br />

      <p className='w-[450px] sm:w-[auto] text-[16px]'>
      <SwipeUp>
        Welcome to my frontend developer portfolio, where I blend innovation, experimentation, and a touch of culinary magic. As a frontend alchemist, I have explored uncharted territories, diving into experimental projects that push the boundaries of web development. From captivating storytelling websites to cutting-edge web animations, I've honed my skills by constantly learning and evolving.
      <br />
      <br />
       One of my standout experiences was crafting a delightful food app, where I worked closely with a talented team to transform concepts into a mouthwatering reality. Through wireframing, prototyping, and pixel-perfect UI design, I ensured that the app was visually appetizing and intuitive. Seamlessly integrating with backend systems, I brought the app to life with smooth user flows and real-time order tracking, ensuring a hassle-free and satisfying experience for users.
       </SwipeUp>
       </p>
       </div>
       </aside>

    </section>



  {/* work  */}
    <section id='work' className=' sm:h-[100vh] sm:p-[1rem] h-[100vh] w-[100%] flex items-center justify-center p-[2rem] font-montserrat transition-all duration-75 ease-in-out'>
      <aside className='h-[80%] sm:h-[95%] sm:p-[1rem] sm:w-[100%] w-[80%] flex flex-col items-center justify-center bg-[#f1f0f0]'>
      <h3 className='font-rust text-[32px] text-center'> I build & design stuffs</h3>
      <br />
      <br />
      <p className='text-center'>Mainly Open source projects, web apps and experimentals.</p>

      <div className='sm:w-[100vw]'>
        <CallToAction Text={'see my work'} Link={`/work`} border_color={`black`} text_color={`black`} fill_color={`black`}/>
      </div>
               
      </aside>
    </section>

    

  
  
  {/*contact me */}
    <section id='contact' className='transition-all duration-75 ease-in-out h-[100vh] w-[100%] overflow-hidden'>
      <Contact title={`Send me a Message!`} subtitle={`Got a question or proposal, or just want to say hello? Go ahead.`} messageplaceholder={`Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?`}/>
    </section>

    {/* footer */}
    <section id='footer' className='transition-all duration-75 ease-in-out h-[100vh] w-[100%]'>
      <Footer/>
    </section>

   </div>
  )
}
