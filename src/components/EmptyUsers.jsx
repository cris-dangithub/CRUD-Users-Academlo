import React from 'react'
import './styles/emptyUsers.css'

const EmptyUsers = () => {
  return (
    <article className='c-empty-container'>
      <header className='empty-container__header'>
        <i className="fa-solid fa-person-circle-xmark"></i>
      </header>
      <footer className='empty-container__footer'>
        <span>There are no registered users</span>
      </footer>
    </article>
  )
}

export default EmptyUsers