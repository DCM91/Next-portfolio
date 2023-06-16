import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { RiMailSendLine } from "react-icons/ri";


export const Mail = () => {

    const refForm = useRef();
    const handleSubmit = (event) =>{
        event.preventDefault()
        const serviceID = 'default_service';
        const templateID = 'template_cu4gsdd';
        const apikey = "eCsDb9Fm4OuTqODpX"
        emailjs.sendForm(serviceID, templateID,refForm.current, apikey)
        .then((result) => {
            console.log(result.text);
            alert("Message Send!!")
        })
        .catch(error => console.error(error))
    }



  return (
    <div>
        <form ref={refForm} action="" onSubmit={handleSubmit} className='border-4 border-primary m-4 grid py-4 px-6 w-full rounded-lg' >

            <fieldset className='flex w-full p-1 py-2 justify-between items-center ' >
                <label className='w-15 p-1 text-success'  htmlFor=""><b>Name:</b></label>
                <input className="input input-ghost input-bordered input-primary px-2  text-base w-100 max-w-xs" placeholder="CapsuleCorp"  type="text" name="from_name" required />
            </fieldset>
            <fieldset className='flex w-full p-1 py-2 justify-between items-center' >
                <label className='w-15 p-1 text-success'  htmlFor=""><b>Email:</b></label>
                <input className="input input-ghost input-bordered input-primary px-2  text-base w-100 max-w-xs" placeholder="CapsuleCorp@mail.com"  type="email" name="email_id" required />
            </fieldset>
            <fieldset className='flex w-full p-1 py-2  justify-between items-center' >
                <label className='w-15 p-1 text-success'  htmlFor=""><b>Message:</b></label>
                <textarea className="textarea textarea-ghost textarea-bordered textarea-primary px-2 ml-3 w-full max-w-xs" placeholder="Your message here..." type="text" name="message" required></textarea> 
            </fieldset>

            <div className='flex justify-end'>
                <button className='btn btn-primary btn-circle p-3 m-3' type="submit" value="Send Email" ><b>Send </b><RiMailSendLine/></button>
            </div>
        </form>
    </div>
  )
}
