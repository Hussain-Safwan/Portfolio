import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Lightbox = (props) => {
  const projects = useSelector(state => state.projects)
  const id = parseInt(props.id)
  return (
    <div>
      <div class="lightbox">
    <div class="bg"></div>
    <div class="palette">
      <div class="image">
        <img src="https://images5.alphacoders.com/374/thumb-1920-374329.jpg" alt=""/>
      </div>
      <div class="texts">
      <div class="title"> { projects[id].title } </div>
        <div class="description"> { projects[id].description } </div>
        <div class="lower">
          <div class="left"><strong>Status</strong>  { projects[id].status } </div>
          <div class="right">
            <button class="blue-btn">Visit</button>
            <button class="blue-btn" style={{marginLeft: "30px"}}>View Source</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Lightbox