
import './Contact.css'
import walmrt from '../../assets/walmart.png'
import mcir from '../../assets/microsoft.png'
import adobe from '../../assets/adobe.png'
import facb from '../../assets/facebook.png'
import ficon from '../../assets/facebook-icon.png'
import insta from '../../assets/instagram.png';
import twit from '../../assets/twitter.png';
import yt from '../../assets/youtube.png'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import leet from '../../assets/Leetcode_logo.png'
import lkdn from '../../assets/linkinlogo.png'
import git from '../../assets/githublogo.png'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
    
      // Ensure the form element is accessible
      const formElement = e.target;
    
      // Get the email field value
      const emailValue = formElement.querySelector('input[name="your_email"]').value;
    
      // Check if the email value exists
      if (!emailValue) {
        alert('Please provide an email before sending.');
        return;
      }
    
      // Send the email if the email field has a value
      emailjs
        .sendForm('service_3s2aap5', 'template_hhu5458', formElement, {
          publicKey: 'xb_2UEUxHhWB8gaFP',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Email Sent');
            formElement.reset(); // Reset the form
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };
    

  return (
    <section id="contactpage">
        <div id="clients">
            <h1 className="cpageTitle">
                My Loudos
            </h1>
            <p className="desc">
                I have successfully designed systens for them at a very reasonable price and their reviews are very ood yoyu can look at them if you want
            </p>
            <div className="clientImgs">
                <img src={walmrt} alt="" className="clientImg" />
                <img src={adobe} alt="" className="clientImg" />
                <img src={mcir} alt="" className="clientImg" />
                <img src={facb} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <h1 className='cpageTitle'>Contact Me</h1>
                    <span className="cDesc">Feel free to mail me anytime </span>
                    <input type="text" className="Name" placeholder='Your Name' name="from_name" />
                    <input type="email" className="email" placeholder='Enter your E-mail' name="your_email" />
                    <textarea rows="5" name="message" className="msg" placeholder='Your message (No login required)' />
                    <button type='submit' value="Send" className="submitbtn">Submit</button>
                <div className='links'>
                <img src={ficon} className='hndl' />
                <img src={leet} className='hndl' />
                <img src={lkdn} className='hndl' />
                <img src={git} className='hndl' />
                <img src={insta} className='hndl' />
                {/* <img src={yt} className='hndl' />
                <img src={twit} className='hndl' /> */}
                </div>
            </form>
                
         </div>
    </section>
  )
}

export default Contact