import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { IoLogoSkype } from 'react-icons/io'
import { IoIosPhonePortrait } from 'react-icons/io'

const Contact = () => {

  const iconStyle = {
    color: '#8282ee', 
    fontSize: '45px',
    cursor: 'pointer'
  }

  return (
    <div>
      <div className='contact'>
        <div className='container'>
          <div class="header"><p>Reach out to me</p></div>
          <div className='box'>
            <div className='left'>
              <div className='icons'>
                <IoIosMail onClick={() => { window.open('mailto:safwan.du16@gmail.com', '_blank') }} style={iconStyle} title='Email: safwan.du16@gmail.com' />
                  <FaFacebook onClick={() => { window.open('https://www.facebook.com/hussain.safwan/', '_blank') }} style={iconStyle} />
                  <FaGithub onClick={() => { window.open('https://github.com/Hussain-Safwan', '_blank') }} style={iconStyle} />
                  <FaLinkedin onClick={() => { window.open('https://www.linkedin.com/in/hussain-md-safwan-649414138/', '_blank') }}  style={iconStyle} />
                  <IoLogoSkype onClick={() => { window.open('https://join.skype.com/invite/Uvk0glSwHJng', '_blank') }} style={iconStyle} />
              </div>
              
            </div>
            <div className='right'>
              <div className='msg-area'>
                <div className='inputs'>
                  <input type='text'  placeholder='Your name'/>
                  <input type='text' placeholder='Your email'/>
                </div>
                <textarea placeholder='Your precious message' />
                <p><button class='blue-btn'>Send</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact