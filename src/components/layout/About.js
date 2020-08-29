import React, {useEffect, useState, createElement} from 'react'
import { Link } from 'react-router-dom'
import {Spring} from 'react-spring/renderprops'
import Me2 from '../../client/images/me-2.jpg'

const About = () => {


  const typeWrite = (text, id) => {
    const node = document.getElementById(id)
    let i=0
    setInterval(() => {
      node.innerHTML += text.charAt(i)
      i++
    }, 25);
  }
  const texts = `Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module. Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.`

  const dur = texts.length * 25

  useEffect(() => {
    typeWrite(texts, 'texts')
  }, [])

  return (
    <div>
      <div className='about'>
       <div className='container'>
         <div className='about-header'>
           <p>A Little <strong>About Me</strong></p>
         </div>

         <div className='texts' id='texts'></div>
         { <Spring
           from={{opacity: 0}}
           to={{opacity: 1}}
           config={{duration: 2000, delay: dur}}
          >
            { props => (
              <div style={props}>
                 <p className='btn'><button className='blue-btn'>
                   <Link style={{textDecoration: 'none', color: '#fff'}} to="/HussainMdSafwan.pdf"       target="_blank"download>Download CV</Link>
                   </button>
                 </p>
              </div>
            )}
          </Spring>
         }
       </div>
      </div>
    </div>
  )
}

export default About
