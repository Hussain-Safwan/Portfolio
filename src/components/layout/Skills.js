import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'

export const Skills = () => {
  const skills = useSelector(state => state.skills)
  let rows = []
  for (let i=0; i<skills.length; i+=3) {
    rows.push(i)
  }
  return (
    <div>
      <div class="skills" id="skills">
          <div class="header"><p>What I'm comfortable with</p></div>
          <div class="subheader"><p>It ain't much, but it's honest</p></div>

          {
            rows.map(row => (
              <div class="skillset">

              <div class="each-skill">
                <Spring
                  from={{transform: `perspective(600px) rotateY(90deg)`}}
                  to={{transform: `perspective(600px) rotateY(0deg)`}}
                  config={{duration: 2000}}
                  >
                    {
                      props => (
                        <div style={ props}>

                        <div className='skill-holder'>
                        <div class="top">
                  <div class="title">
                    <div class="logo">
                      <img src={skills[row].logo} alt=""/>
                    </div>
                    <div class="name">{skills[row].title}</div>
                  </div>
                  <Spring
                    from={{number: 0}}
                    to={{number: skills[row].expertise}}
                    config={{duration: 1500}}
                  >
                    {
                      props => (
                        <div style={props}>
                            <div class="pc">{props.number.toFixed()}%</div>
                        </div>
                      )
                    }
                  </Spring>
                </div>
                <div class="bottom">
                  <Spring
                    from={{number: 0}}
                    to={{number: skills[row].expertise}}
                    config={{duration: 1500}}
                  >
                    {
                      props => (
                        <div style={props}>
                           <input type="range" value={props.number}/>
                        </div>
                      )
                    }
                  </Spring>
                </div>
                        </div>
             

                        </div>
                      )
                    }
                  </Spring>
               </div>
  
                <div class="each-skill">
                    <Spring
                      from={{transform: `perspective(600px) rotateX(90deg)`}}
                      to={{transform: `perspective(600px) rotateX(0deg)`}}
                      config={{duration: 2000}}
                    >
                      {
                        props => (
                          <div style={props}>
                              <div className='skill-holder'>
                              <div class="top">
                  <div class="title">
                    <div class="logo">
                      <img src={skills[row+1].logo}  alt=""/>
                    </div>
                    <div class="name">{skills[row+1].title}</div>
                  </div>
                  <Spring
                    from={{number: 0}}
                    to={{number: skills[row+1].expertise}}
                    config={{duration: 1500}}
                  >
                    {
                      props => (
                        <div style={props}>
                            <div class="pc">{props.number.toFixed()}%</div>
                        </div>
                      )
                    }
                  </Spring>
                </div>
                <div class="bottom">
                <Spring
                    from={{number: 0}}
                    to={{number: skills[row+1].expertise}}
                    config={{duration: 1500}}
                  >
                    {
                      props => (
                        <div style={props}>
                           <input type="range" value={props.number}/>
                        </div>
                      )
                    }
                  </Spring>
                </div>
                              </div>
                          </div>
                        )
                      }
                    </Spring>
              </div>

              <div class="each-skill">
                <Spring
                  from={{transform: `perspective(600px) rotateY(-90deg)`, border: '2px solid white'}}
                  to={{transform: `perspective(600px) rotateY(0deg)`, border: 'none'}}
                  config={{duration: 2000}}
                >
                  {
                    props => (
                      <div style={props}>
                          <div className='skill-holder'>
                          <div class="top">
                  <div class="title">
                    <div class="logo">
                      <img src={skills[row+2].logo}  alt=""/>
                    </div>
                    <div class="name">{skills[row+2].title}</div>
                  </div>
                  <Spring
                    from={{number: 0}}
                    to={{number: skills[row+2].expertise}}
                    config={{duration: 1500}}
                  >
                    {
                      props => (
                        <div style={props}>
                            <div class="pc">{props.number.toFixed()}%</div>
                        </div>
                      )
                    }
                  </Spring>
                </div>
                <div class="bottom">
                <Spring
                    from={{number: 0}}
                    to={{number: skills[row+2].expertise}}
                    config={{duration: 1500}}
                  >
                    {
                      props => (
                        <div style={props}>
                           <input type="range" value={props.number}/>
                        </div>
                      )
                    }
                  </Spring>
                </div>
                          </div>
                      </div>
                    )
                  }
                </Spring>
              </div>

          </div>
            ))
          }

        </div>
    </div>
  )
}

export default Skills