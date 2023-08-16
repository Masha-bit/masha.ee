import React from 'react'
import CallToAction from './CallToAction'

export default function Contact(props) {
  return (
    <div id="contact" className='text-[#B000FF] font-montserrat h-[100%] w-[100%] sm:w-[100vw]'>
            <h2 className='sm:w-[400px] sm:text-center sm:h-[auto] sm:text-[20px] font-rust text-[35px]'>{props.title}</h2>
            <p>{props.subtitle}</p>
    
        <form action="">
    
    
            <div id="form-row">            
                <aside>
                    <label for="contact-name">Your Name<input type="text" id="contact-name" placeholder="Enter your name" required/></label>
                </aside>
    
                <aside>
                    <label for="contact-email">Email Address<input type="email" id="contact-email" placeholder="Enter your email address" required/></label>
                </aside>
            </div>
    
            <div id="form-message">          
                <label for="message">Your Message</label>
                <textarea required name="message" id="message" cols="40" rows="5" minlength="5"  placeholder={props.messageplaceholder}></textarea> 
            </div>
    
            <div className='sm:h-[150px] h-[140px] sm:w-[100vw] flex items-center'>
                <CallToAction Link={`#`} Text={`SHOOT`} border_color={`#B000FF`} text_color={`#B000FF`} fill_color={`#B000FF`}/>
            </div>
        </form>
    
        </div>
    
  )
}
