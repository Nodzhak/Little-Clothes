import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import logo from './images/leaf.svg';
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style['header-logo']}>
          <NavLink to="/">
            <img src={logo} alt="leaf" />
          </NavLink>
        </div>
        <div>
          <nav className={style.navTags}>
            <NavLink to="/shop">Shop +</NavLink>
            <NavLink to="/team">Our team</NavLink>
            <NavLink to="/impact">Our impact</NavLink>
            <NavLink to="/gift">Gift card</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/journal">Journal</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Header;