import React from 'react'
import CallToAction from './CallToAction'
import SwipeUp from './SwipeUp'

export default function Contact(props) {
  return (
    <div id="contact" className='text-[#B000FF] font-montserrat h-[100%] w-[100%] sm:w-[100vw]'>
            <h2 className='sm:w-[400px] sm:text-center sm:h-[auto] sm:text-[20px] font-rust text-[35px] sm:p-3'>
                <SwipeUp>
                {props.title}
                </SwipeUp>
                </h2>
            <p>
                <SwipeUp>
                {props.subtitle}
                </SwipeUp>
            </p>
    
        <form action="">
    
    
            <div id="form-row">            
                <aside>
                    <SwipeUp>
                    <label for="contact-name">Your Name<input type="text" id="contact-name" placeholder="Enter your name" required/></label>
                    </SwipeUp>
                </aside>
    
                <aside>
                    <SwipeUp>
                    <label for="contact-email">Email Address<input type="email" id="contact-email" placeholder="Enter your email address" required/></label>
                    </SwipeUp>
                </aside>
            </div>
    
            <SwipeUp>          
            <div id="form-message">
                <label for="message">Your Message</label>
                <textarea required name="message" id="message" cols="40" rows="5" minlength="5"  placeholder={props.messageplaceholder}></textarea> 
            </div>
            </SwipeUp>
    
            <div className='sm:h-[150px] h-[140px] sm:w-[100vw] flex items-center justify-center'>
                <SwipeUp>
                <CallToAction Link={`#`} Text={`SHOOT`} border_color={`#B000FF`} text_color={`#B000FF`} fill_color={`#B000FF`}/>
                </SwipeUp>
            </div>
        </form>
    
        </div>
    
  )
}
