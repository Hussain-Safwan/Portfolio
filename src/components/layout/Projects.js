import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spring } from 'react-spring/renderprops'
import Lightbox from '../modals/Lightbox'
import project2Img from '../../client/images/project-2.jpg'
import project1Img from '../../client/images/project-1.jpg'

const Projects = () => {
// "https://images5.alphacoders.com/374/thumb-1920-374329.jpg"
  const projects = useSelector(state => state.projects)
  const [opener, setOpener] = useState(false)
  const [projectID, setProjectID] = useState(null)
  const [inProp, setInProp] = useState(false)
  let rows = []
  for (let i=0; i<projects.length-1; i+=2) {
    rows.push(i)
  }

  const openModal = e => {
    setOpener(!opener)
    setProjectID(e.target.id)
    setInProp(true)
  }

  const closeModal = () => {
    setOpener(false)
  }
  return (
    <div >
      
      <div class="projects">
          <div class="header"><p>Projects</p></div>
          <div class="subheader"><p>A random sub header for this section</p></div>

          <div class="projectset">
            {
              rows.map(row => (
                <div className='each-project-row'>

              <div class="each-project first">
                    <Spring
                      from={{transform: `perspective(600px) rotateY(-30deg)`, opacity: 0}}
                      to={{transform: `perspective(600px) rotateY(0deg)`, opacity: 1}}
                      config={{duration: 1000}}
                    >
                        {
                          props => (
                            <div style={props}>
                                    <div class="image">
                                      <img src={project1Img} alt=""  id={row} onClick={openModal}/>
                                    </div>
                                    <div class="title"><p>{projects[row].title}</p></div>
                                    </div>
                          )
                        }
                    </Spring>
                    </div>

                <div class="each-project second">
                    <Spring
                      from={{transform: `perspective(600px) rotateY(30deg)`, opacity: 0}}
                      to={{transform: `perspective(600px) rotateY(0deg)`, opacity: 1}}
                      config={{duration: 1000}}
                    >
                        {
                          props => (
                            <div style={props}>
                                    <div class="image">
                                      <img src={project2Img} alt=""  id={row+1} onClick={openModal}/>
                                    </div>
                                    <div class="title"><p>{projects[row+1].title}</p></div>
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

        {
        opener ? <Lightbox id={projectID} closeModal={closeModal} />: <div></div>
      }

    </div>
  )
}

export default Projects
