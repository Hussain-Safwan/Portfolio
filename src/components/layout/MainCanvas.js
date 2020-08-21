import React from 'react'
import me from '../../client/images/me-1.jpg'

const MainCanvas = () => {
  return (
    <div>
      <div class="main-canvas">
          <div class="left">
            <div class="texts">
              <div class="small-text">Hey, this is <span>Hussain Safwan</span>. Nice of you to stop by!</div>
              <div class="big-texts">Lorem ipsum dolor sit, amet consectetur</div>
              <div class="profession">Full-Stack web developer, based in Dhaka</div>
            </div>
            <div class="buttons">
              <button class="blue-btn">Hire Me!</button> 
              <span>or</span>
              <button class="blue-btn" id="know-more">Know More</button>
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