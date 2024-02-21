import React, { useState } from 'react';
import glass from './images/glass.svg'
import style from "./Header.module.css"

const Search = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    return (
      <div className={style.search}>
        <img src={glass} alt="glass"/>
        <input 
        className={style.input}
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Search"
      />
      </div>
    )
  }
  
  export default Search