import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Lightbox from '../modals/Lightbox'

const Projects = () => {

  const projects = useSelector(state => state.projects)
  const [opener, setOpener] = useState(false)
  const [projectID, setProjectID] = useState(null)
  let rows = []
  for (let i=0; i<projects.length-1; i+=2) {
    rows.push(i)
  }

  const openModal = e => {
    setOpener(!opener)
    setProjectID(e.target.id)
  }
  return (
    <div>
      {
        opener ? <Lightbox id={projectID} /> : <div></div>
      }
      <div class="projects">
          <div class="header"><p>Projects</p></div>
          <div class="subheader"><p>A random sub header for this section</p></div>

          <div class="projectset">
            {
              rows.map(row => (
                <div className='each-project-row'>
                    <div class="each-project">
                    <div class="image">
                      <img src="https://images5.alphacoders.com/374/thumb-1920-374329.jpg" alt=""  id={row} onClick={openModal}/>
                    </div>
                    <div class="title"><p>{projects[row].title}</p></div>
                  </div>

                  <div class="each-project">
                    <div class="image">
                      <img src="https://images5.alphacoders.com/374/thumb-1920-374329.jpg" alt=""  id={row+1} onClick={openModal}/>
                    </div>
                    <div class="title"><p>{projects[row+1].title}</p></div>
                  </div>

                  </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Projects
