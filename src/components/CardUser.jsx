import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './styles/cardUser.css'

const CardUser = ({ user, setUpdateUser, deleteUserById, openForm }) => {
  const [offCardEffect, setOffCardEffect] = useState()

  const swtAlertConfirm = () => (
    Swal.fire({
      title: 'Do you want to delete this user?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserById(user.id, setOffCardEffect)
      } else {
        Swal.fire('Ningun usuario ha sido eliminado')
      }
    }))


  const getInfoToUpdateUser = () => {
    setUpdateUser(user)
    openForm()
  }

  const handleTrashButton = () => {
    swtAlertConfirm()
  }

  return (
    <article className={`c-card ` + (offCardEffect && `c-card--off`)}>
      <h2 className='card__title'>{`${user.first_name} ${user.last_name}`}</h2>
      <hr className='card__divider' />
      <ul className='card__list'>
        <li className='card__item'>
          <p className='card__item-title'>E-mail</p>
          <p className='card__item-content'>{user.email}</p>
        </li>
        <li className='card__item'>
          <p className='card__item-title'>Birthday</p>
          <p className='card__item-content'><i className="fa-solid fa-gift"></i> {user.birthday}</p>
        </li>
      </ul>
      <hr className='card__divider' />
      <footer className='card__footer'>
        <button className='card__btn card__btn--trash' onClick={handleTrashButton}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className='card__btn card__btn--update' onClick={getInfoToUpdateUser}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </footer>

    </article>
  )
}

export default CardUser