import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact-section'>

      <div className='contact-title-container'>
        <h1 className='contact-title'>Let's Talk</h1>
      </div>

      <div className='contact-form-container'>
        <form className='contact-form'>
          <div className='email-form-name'><input type='text' name='user_name' placeholder='Name' /></div>
          
          <div className='email-form-email'><input type='email' name='user_email' placeholder='Email' /></div>
          
          <div  className='email-form-message'><textarea name='message' placeholder='Message'/></div>
        
          <btn className='email-form-send'><input  type='submit' value='Send' /></btn>
        </form>

      
      </div>


    </div>
  )
}

export default Contact