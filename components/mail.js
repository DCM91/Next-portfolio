import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

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
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <fieldset >
                <label htmlFor="">from_name</label>
                <input type="text" name="from_name" />
            </fieldset>
            <fieldset >
                <label htmlFor="">message</label>
                <input type="text" name="message"  />
            </fieldset>
            <fieldset >
                <label htmlFor="">email_id</label>
                <input type="text" name="email_id" />
            </fieldset>

            <button className='btn btn-primary' type="submit" value="Send Email" >Send</button>
        </form>

            {/* <script type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

            <script type="text/javascript">
            emailjs.init('eCsDb9Fm4OuTqODpX')
            </script> */}
    </div>
  )
}
