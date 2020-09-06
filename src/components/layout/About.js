import React, {useEffect, useState, createElement} from 'react'
import { Link } from 'react-router-dom'
import {Spring} from 'react-spring/renderprops'
import Me3 from '../../client/images/me-3.jpg'

const About = () => {
  const typeWrite = (text, id) => {
    const node = document.getElementById(id)
    let i=0
    setInterval(() => {
      node.innerHTML += text.charAt(i)
      i++
    }, 25);
  }
  const texts = `This is Hussain Md Safwan, currently a CS undergrad at the University of Dhaka and working as a part time developer at a local psychiatry farm. He is one hardworking fellow driven by the sheer urge of knowledge and motivated by curiosity. He brings to the table not only a number of technical skills but also is quite proficient with communication, time management and loves to work in teams. From his small but efficacious experiences, he's learnt to keep up with the deadlines while not compromising with the quality.
  
  Apart from develpment and all the science stuff, he's got keen interest in subjects like history and geography. And about having a hobby, it's SKETCHING and sometimes would spend hours shading the corners. `

  const dur = texts.length * 25

  useEffect(() => {
    typeWrite(texts, 'texts')
  }, [])

  return (
    <div>
      <div className='about'>
       <div className='container'>
         <Spring
          from={{opacity: 0}}
          to={{opacity: 1}}
          config={{duration: 1500}}
         >
           {
             props => (
               <div style={props}>
                  <div className='image'>
                      <img src={Me3} />
                  </div>
               </div>
             )
           }
         </Spring>
         <div className='about-header'>
           <p>Who's this guy?</p>
         </div>

         <div className='texts' id='texts'></div>
         <br />

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
