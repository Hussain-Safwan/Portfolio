import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops'
import { IoMdList } from 'react-icons/io'

const Navbar = () => {
  const navElements = [
    {
      link: '/',
      text: 'Home'
    },
    {
      link: '/about',
      text: 'About'
    },
    {
      link: '/skills',
      text: 'Skills'
    },
    {
      link: '/projects',
      text: 'Projects'
    },
    {
      link: '/contacts',
      text: 'Contacts'
    }
  ]

  const iconStyle = {
    color: '#fff', //'#8282ee', 
    fontSize: '25px',
    cursor: 'pointer',
    marginLeft: '5%'
  }

  const [open, setOpen] = useState(false)
  const openNav = () => {
    setOpen(!open)
  }
 
  return (
    <div>
      <div class="nav">
        <div class="space"></div>
        <div class="container">
          {
            navElements.map(ele => (
              <Spring
            from={{marginLeft: -1000, opacity: 0}}
            to={{marginLeft: 0, opacity: 1}}
            config={{duration: 750}}
          >
            {
              props => (
                <div style={props}>
                  <div class="tab"><Link to={ele.link}>{ele.text}</Link></div>
                </div>
              )
            }
          </Spring>
            ))
          }
        </div>
      </div>
      <div className='mobile-nav'>
      <IoMdList style={iconStyle} onClick={openNav} />
        {
          open ? (
            <div className='container'>
                      <p><Link style={{textDecoration: 'none', color: '#fff'}} to='/'>Home</Link></p>
                      <p><Link style={{textDecoration: 'none', color: '#fff'}} to='/about'>About</Link></p>
                      <p><Link style={{textDecoration: 'none', color: '#fff'}} to='/skills'>Skills</Link></p>
                      <p><Link style={{textDecoration: 'none', color: '#fff'}} to='/pojects'>Projects</Link></p>
                      <p><Link style={{textDecoration: 'none', color: '#fff'}} to='/contacts'>Contacts</Link></p>
                    </div>
          ) : <div></div>
        }
      </div>
    </div>
  )
}

export default Navbar
