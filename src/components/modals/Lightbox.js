import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spring } from 'react-spring/renderprops'

import project2Img from '../../client/images/project-2.jpg'
import project1Img from '../../client/images/project-1.jpg'

const Lightbox = (props) => {
  const projects = useSelector(state => state.projects)
  const id = parseInt(props.id)

  const images = [project1Img, project2Img]

  return (
    <Spring
      config={{duration: 500}}
      from={{opacity: 0, marginTop: -10}}
      to={{opacity: 1, marginTop: 0}}
    >
      {
        props => (
          <div style={props}>
              <div>
              <div class="lightbox">
            <div class="bg"></div>
            <div class="palette">
              <div class="image">
                <img src={images[id]} alt=""/>
              </div>
              <div class="texts">
              <div class="title"> { projects[id].title } </div>
                <div class="description"> { projects[id].description } </div>
                <div class="lower">
                  <div class="left"><strong>Status</strong>  { projects[id].status } </div>
                  <div class="right">
                    <button class="blue-btn">Visit</button>
                    <button class="blue-btn" id='view-source'>View Source</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        )
      }
    </Spring>
  )
}

export default Lightbox