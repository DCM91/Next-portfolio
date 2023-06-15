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
        .then(result => console.log(result.text))
        .catch(error => console.error(error))
    }



  return (
    <div>
        <form ref={refForm} action="" onSubmit={handleSubmit} className='border-4 border-primary m-4 grid p-2 px-6 w-100 rounded-lg' >
            <header>
                <h1 className='text-2xl text-center pb-2' ><b>Mail me!</b></h1>
            </header>
            <fieldset className='flex w-full p-1 py-2 justify-between ' >
                <label className='w-20 p-1 text-success'  htmlFor="">Name:</label>
                <input className="input input-ghost input-bordered input-primary  w-100 max-w-xs"  type="text" name="from_name" />
            </fieldset>
            <fieldset className='flex w-full p-1 py-2 justify-between' >
                <label className='w-20 p-1 text-success'  htmlFor="">Email:</label>
                <input className="input input-ghost input-bordered input-primary  w-100 max-w-xs"  type="text" name="email_id" />
            </fieldset>
            <fieldset className='flex w-full p-1 py-2 justify-between' >
                <label className='w-20 p-1 text-success'  htmlFor="">Message:</label>
                <textarea className="textarea textarea-ghost textarea-bordered textarea-primary p-1 w-full max-w-xs" placeholder="escribe" type="text" name="message"></textarea> 
            </fieldset>

            <div className='flex justify-end'>
                <button className='btn btn-primary btn-circle p-3 m-3' type="submit" value="Send Email" ><b>Send </b><RiMailSendLine/></button>
            </div>
        </form>
    </div>
  )
}
