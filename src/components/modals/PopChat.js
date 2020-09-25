import React, { useState } from 'react'
import '../../client/css/auto.css'
import {FaComments, FaTimes} from 'react-icons/fa'

export const PopChat = ( props ) => {
  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }
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
    <div id='chatCon'>
      <div class="chat-box" style={chatopen ? show : hide}>
    <div class="header" style={{backgroundColor: themeColor ? themeColor : 'violet' }}>{ chatHead }</div>
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
    <div class="pop">
      <p>
        <div className='icon' style={{backgroundColor: themeColor ? themeColor : 'violet' }} onClick={toggle}>
          {
            chatopen ? <FaTimes style={{color:'#fff', fontSize: '30px'}} /> : <FaComments style={{color:'#fff', fontSize: '35px'}} />
          }
        </div>
        </p>
    </div>
    </div>
  )
}

export default PopChat