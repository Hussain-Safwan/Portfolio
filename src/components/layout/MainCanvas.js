import React, { useEffect } from 'react'
import me from '../../client/images/me-1.jpg'
import { Spring } from 'react-spring/renderprops'
import { useTransition, animated } from 'react-spring'
 
const MainCanvas = () => {
const bigTexts = ['Trying Something', 'Amazing']

const typeWrite = (text, id) => {
  const node = document.getElementById(id)
  let i=0
  setInterval(() => {
    node.innerHTML += text.charAt(i)
    i++
  }, 50);
}

useEffect(() => {
  typeWrite('Hey, this is Hussain Safwan. Nice of you to stop by!', 'small-text')
}, [])
  return (
    <div>
      <div class="main-canvas">
              <div className='mobile-img'>
                <img src={me} />
              </div>
              <div class="left">
                  <div class="texts">
                    <div class="small-text" id='small-text'></div>
                    <div class="big-texts">
                      {
                        bigTexts.map(text => (
                          <Spring
                        from={{opacity: 0, marginTop: 100}}
                        to={{opacity: 1, marginTop: 0}}
                        config={{duration: 2000, delay: 1000}}
                      >
                        {
                          props => (
                            <div style={props}>
                             {text}
                            </div>
                          )
                        }
                      </Spring>
                        ))
                      }
                      </div>
                    <Spring
                      from={{opacity: 0}}
                      to={{opacity: 1}}
                      config={{duration: 1000}}
                    >
                      {
                        props => (
                          <div style={props}>
                            <div>
                              <div class="profession">Full-Stack web developer, based in Dhaka</div>
                          </div>
                            <div class="buttons">
                              <button class="blue-btn" id='hire-me'>Hire Me!</button> 
                              <span>or</span>
                              <button class="blue-btn" id="know-more" onClick={() => {window.open('/about')}}>Know More</button>
                            </div>
                          </div>
                        )
                      }
                    </Spring>
                  </div>
                  </div>

                  <div class="right">
                  <div class="profile-pic">
                      <img src={me} alt="" />
                    </div>
                </div>

        </div>
    </div>
  )
}

export default MainCanvas

/*

The key fingerprint is:
SHA256:13i5lgB5WtwytaIV9YzpzEHDI4i436UsG4Z2BycHhXw mah-nigga@mahnigga-Swift-SF315-51
The key's randomart image is:
+---[RSA 2048]----+
|     o +...o=    |
|    . = Eo.=oB   |
|     . oo O.*.o  |
|    . o oB.X o   |
|     o BSo+ B    |
|    o * =. o o   |
|   . o =    +    |
|      .    .     |
|                 |
+----[SHA256]-----+


*/