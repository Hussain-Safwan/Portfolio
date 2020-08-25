import React from 'react'
import { Spring } from 'react-spring/renderprops'

export const Spring1 = () => {
  return (
    <Spring
      config={{duration: 5000}}
      from={{opacity: 0}}
      to={{opacity: 1}}
    >
      {
        props => (
          <div style={props}>
              <div style={styles}>
                <p style={{textAlign: 'center'}}>Component 1</p>
              </div>
          </div>
        )
      }
    </Spring>
  )
}

const styles = {
  color: '#fff',
  padding: '30px',
  backgroundColor: 'blue',
  width: '90%',
  margin: 'auto',
  borderRadius: '5px'
}
