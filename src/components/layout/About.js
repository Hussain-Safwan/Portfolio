import React, {useEffect} from 'react'
import {Spring} from 'react-spring/renderprops'

const About = () => {

  const typeWrite = (text, id) => {
    const node = document.getElementById(id)
    let i=0
    setInterval(() => {
      node.innerHTML += text.charAt(i)
      i++
    }, 25);
  }
  const texts = 'Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module. Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.'

  useEffect(() => {
    typeWrite(texts, 'texts')
  }, [])

  return (
    <div>
      <div className='about'>
       <div className='container'>
       <div className='left'>
          <div className='image'>
            <Spring
              from={{opacity: 0, width: '200%'}}
              to={{opacity: 1, width: '100%'}}
              config={{duration: 1000}}
            >
              {
                props => (
                  <div style={props}>
                      <img src='https://www.webdesigningstudio.com/wp-content/uploads/2018/02/source.gif' />
                  </div>
                )
              }
            </Spring>
          </div>
        </div>
        <div className='right'>
            <div className='header'>
                little about me
            </div>
            <div className='texts' id='texts'>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default About
