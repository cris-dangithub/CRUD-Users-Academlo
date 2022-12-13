import React from 'react'
import './styles/darkLightMode.css'

const DarkLightMode = ({ buttonModeLight, setButtonModeLight }) => {
  const changeMode = () => {
    setButtonModeLight(!buttonModeLight)
  }

  return (
    <div className='c-dark-mode '>
      <div className="dark-mode__btn-container">
        <button className={`dark-mode__btn ${buttonModeLight ? 'dark-mode__btn--light' : ''}`} onClick={changeMode}></button>
      </div>
      <div className='dark-mode__icons'>
        <i className="fa-solid fa-moon"></i>
        <i className="fa-regular fa-sun"></i>
      </div>
    </div>
  )
}

export default DarkLightMode