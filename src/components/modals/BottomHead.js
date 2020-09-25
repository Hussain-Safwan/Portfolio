import React, { useState } from 'react'
import '../../client/css/auto.css'
import {FaComments, FaTimes} from 'react-icons/fa'

export const BottomHead = ( props ) => {
  let hide = {height: '0px', overflow: 'hidden'}
  let show = {height: '450px', overflow: 'hidden'}
  let textRef = React.createRef()
  const {messages} = props
  const [chatopen, setChatopen] = useState(false)
  const { themeColor } = props
  const { chatHead } = props
  const toggle = e => {
    setChatopen(!chatopen)
  }

const handleKeyDown = e => {
  if (e.key == 'Enter') {
    const msg = textRef.current.value
    const get = props.getMessage
    get(msg)
    textRef.current.value = ''
  }
}

  return (
    <div id='chatCon' style={{ bottom: '0' }}>
      <div class="chat-box down" >
    <div class="header" style={{backgroundColor: themeColor ? themeColor : 'violet' }} onClick={toggle}>{ chatHead }</div>
    <div className='internal' style={ chatopen ? show : hide }>
    <div class="msg-area">
      {
        messages.map((msg, i) => (
          msg.sender == 'others' ? (
          <p class="right"><span style={{backgroundColor: themeColor ? themeColor : 'violet' , color: '#fff'}}>{ msg.text }</span></p>
          ) : (
            <p class="left"><span>{ msg.text }</span></p>
          )
        ))
      }

    </div>
        <div class="footer">
          <input type="text"  ref={textRef} onKeyDown={handleKeyDown} />
        </div>
    </div>
  </div>
    </div>
  )
}

export default BottomHead