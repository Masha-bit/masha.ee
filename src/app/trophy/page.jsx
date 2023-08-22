"use client"
import React from 'react'
import Nav from '../component/Nav'
import AwardContainer from '../component/AwardContainer'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

export default function Trophy() {
  return (
    <div 
    className='h-[auto] sm:w-[100vw] w-[100vw] sm:bg-center bg-[#35353527] bg-blend-overlay bg-fixed absolute left-0 bg-right flex flex-col justify-center items-center'
    style={{
    backgroundImage: `url('/canva-portfolio design/7.png')`
    }}>
        
    <div className='h-[100px] w-[100vw]'>
    <nav className='h-[100px] w-[100%] absolute top-0  z-[10]'>
        <Nav work={true} trophy={true}/>
    </nav>
    </div>
      
    <h1 className='font-rust text-[32px]'>/trophies.</h1>
    <p className='font-montserrat text-[20px] sm:p-3'>Feel free to contact me to discuss more on my achievements so far.</p>
    

      <section id='contact' className='transition-all duration-75 ease-in-out h-[100vh] w-[100%] overflow-hidden'>
      <Contact title={`Hi, there! Don't be a stranger!`} subtitle={`Suggestions, compliments or just a simple hello are all welcome`} messageplaceholder={`Hi, I would love to know more of X and what you have accomplished in your field`}/>
      </section>

      <section id='footer' className='transition-all duration-75 ease-in-out h-[100vh] w-[100%]'>
      <Footer work={true} trophy={true}/>
      </section>
    {/* </div> */}
    <style jsx>
      {
        `
        

h1{
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
p{
  text-align: center;
}
.project-grid{
  margin: 3rem auto;
//   background-color: green; 
  height: auto;
  width: auto;
  padding-top: 3rem;
  padding-bottom: 1rem;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  gap:30px;
  grid-template-columns: repeat(5);
  grid-template-rows: repeat(3);
  grid-template-areas: "a b c"
  "d e f";

  z-index: 4;
}
@media (max-width: 639px){
  .project-grid {
    display:flex;
    flex-direction:column;
    }
}
.project-container{
  height: 350px;
  width: 290px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.479);
  position: relative;
  z-index: 4;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
aside .top{
  height: 51%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #292f3b;
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
    </div>
  )
}

