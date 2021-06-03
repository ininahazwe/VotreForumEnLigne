import React, {useState} from "react";
import emailjs from 'emailjs-com';
import './Contact.elements.css';
import Pulse from 'react-reveal/Pulse';
import Slide from "react-reveal/Slide";
import pk1 from "../../images/illustration-03.svg";
import {ImgFort2} from "../WhySection/Why.elements";

export default function ContactForm() {
    const [status, setStatus] = useState(false);
    const sendEmail = e =>{
        e.preventDefault();
        setStatus(true);

        emailjs.sendForm('service_0zt07fo', 'template_talents', e.target, 'user_tv0CLQdhdLqVKFXNYavb3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return(
        <>
           <div className="ContactContainer">
               <Slide bottom>
                   <form onSubmit={sendEmail}>
                       <div className="wrapper">
                           <div className="right">
                               <ImgFort2 src={pk1} />
                           </div>
                           <div className="left">
                               <div className="field">
                                   <input type="text" name="name" id="name" placeholder="Votre nom" />
                               </div>
                               <div className="field">
                                   <input type="text" name="subject" id="subject" placeholder="Sujet" />
                               </div>
                               <div className="field">
                                   <input type="text" name="email" id="email" placeholder="Email" />
                               </div>
                               <div className="field">
                                   <input type="text" name="phone" id="phone" placeholder="Téléphone" />
                               </div>
                               <div className="field">
                                   <textarea type="text" name="message" id="message" placeholder="Message" />
                               </div>
                               <input type="submit" value="Envoyer"/>
                               {status && (
                                   <Pulse>

                                   </Pulse>
                               )}
                           </div>
                       </div>
                   </form>
               </Slide>
           </div>
        </>
    )
}