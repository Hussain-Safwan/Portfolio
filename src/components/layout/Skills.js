import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Skills = () => {
  const skills = useSelector(state => state.skills)
  let rows = []
  for (let i=0; i<skills.length; i+=3) {
    rows.push(i)
  }
  console.log(rows)

  return (
    <div>
      <div class="skills" id="skills">
          <div class="header"><p>What I'm comfortable with</p></div>
          <div class="subheader"><p>It ain't much, but it's honest</p></div>

          {
            rows.map(row => (
              <div class="skillset">

              <div class="each-skill">
                <div class="top">
                  <div class="title">
                    <div class="logo">
                      <img src={skills[row].logo} alt=""/>
                    </div>
                    <div class="name">{skills[row].title}</div>
                  </div>
                  <div class="pc">{skills[row].expertise}%</div>
                </div>
                <div class="bottom">
                  <input type="range" value={skills[row].expertise}/>
                </div>
              </div>
  
                <div class="each-skill">
                <div class="top">
                  <div class="title">
                    <div class="logo">
                      <img src={skills[row+1].logo}  alt=""/>
                    </div>
                    <div class="name">{skills[row+1].title}</div>
                  </div>
                  <div class="pc">{skills[row+1].expertise}%</div>
                </div>
                <div class="bottom">
                  <input type="range" value={skills[row+1].expertise}/>
                </div>
              </div>

              <div class="each-skill">
                <div class="top">
                  <div class="title">
                    <div class="logo">
                      <img src={skills[row+2].logo}  alt=""/>
                    </div>
                    <div class="name">{skills[row+2].title}</div>
                  </div>
                  <div class="pc">{skills[row+2].expertise}%</div>
                </div>
                <div class="bottom">
                  <input type="range" value={skills[row+2].expertise}/>
                </div>
              </div>

          </div>
            ))
          }

        </div>
    </div>
  )
}

export default Skills