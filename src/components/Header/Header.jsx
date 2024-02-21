import React from 'react'
import Search from './Search'
import logo from './images/leaf.svg'
import style from "./Header.module.css"

const Header = () => {
  return (
    <div className='styles.container'>
      <div className={style.header}>
      <div className='header-logo'>
        <a href="#">
          <img src={logo} alt="leaf" />
          </a>
      </div>
      <div>
        <nav className={style.navTags}>
          <a href="#">Shop +</a>
          <a href="#">Our team</a>
          <a href="#">Our impact</a>
          <a href="#">Gift card</a>
          <a href="#">FAQ</a>
          <a href="#">Journal</a>
          <a href="#">Contacts</a>
        </nav>
      </div>
      <Search/>
    </div>
    </div>
    
  )
}

export default Header
