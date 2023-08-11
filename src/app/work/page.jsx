"use client"
import React from 'react'
import Nav from '../component/Nav'
import ProjectContainer from '../component/ProjectContainer'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import { useParams } from 'next/navigation'

export default function Work() {

  const router = useParams()
  const {slug} = router

  console.log(slug)


  return (
    <div className='h-[100%] w-[100%] relative scroll-smooth'>
      <nav className='h-[100px] w-[100%]  z-10'>
        <Nav/>
      </nav>

      {/* <div className='h-[800px] w-[auto] bg-[#a7cea7]'> */}
      
      <h1 className='font-rust text-[32px]'>/work.</h1>
        <p className='font-montserrat text-[20px]'>Selected projects i've worked on in the past.</p>

        <div className="project-grid">

            <ProjectContainer title="authentication ui" linkText="app.hellotax.com" link="https://authentication-masha-ui.vercel.app/" slug="authentication-ui"  img={"/pixel2Html.svg"}/>
            

            <ProjectContainer title="aptech food court" linkText="food-app.com" link="https://food-court-o4ac.vercel.app/" slug="aptech-mobile-foodcourt" img={"aptech.png"}/>


            <ProjectContainer title="webthreeconsulting" linkText="app.hellotax.com" link="https://web3-consulting-ui.vercel.app/" slug="webthreeconsulting" img={"wtc.svg"}/>

            <ProjectContainer title="masha.ee" linkText="masha.ee" link="" img={"/canva-portfolio design/logo_p.svg"}/>
            
            <ProjectContainer title="Dignisia"  slug="dignisia"  img={"/dingisia.svg"}/>
      </div>

      <section id='contact' className='transition-all duration-75 ease-in-out h-[100vh] w-[100%] overflow-hidden'>
      <Contact title={`Don't be a stranger!`} subtitle={`Suggestions, compliments or just a simple hello are all welcome`} messageplaceholder={`Hi, love what you do, I would love to connect`}/>
      </section>

      <section id='footer' className='transition-all duration-75 ease-in-out h-[100vh] w-[100%]'>
      <Footer work={true}/>
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
  /* background-color: green; */
  height: auto;
  width: 70%;
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
