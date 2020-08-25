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
              <div className='head'><p>I'M SOCIAL</p></div>
              <div className='icons'>
                  <FaFacebook style={iconStyle} />
                  <FaGithub style={iconStyle} />
                  <FaLinkedin style={iconStyle} />
                  <IoLogoSkype style={iconStyle} />
              </div>
              <div className='head' style={{marginTop: '50px'}}><p>AND ALSO ON OTHER MEDIAS</p></div>
              <div className='icon-texts'>
                  <div className='each'>
                      <IoIosMail style={iconStyle} /> <span>safwan.du16@gmail.com</span>
                  </div>
                  <div className='each'>
                      <IoIosPhonePortrait style={iconStyle} /> <span>01778164366</span>
                  </div>
                  <div className='each'>
                      <FaBuilding style={iconStyle} /> <span>Dhaka, Bangladesh</span>
                  </div>
              </div>
            </div>
            <div className='right'>
              <div className='head'><p>BUT MOSTLY ENJOY LETTERS</p></div>
              <div className='msg-area'>
                <div className='inputs'>
                  <input type='text'  placeholder='Your name'/>
                  <input type='text' placeholder='Your email'/>
                </div>
                <textarea placeholder='Your precious message' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact