import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({ updateUser, setUpdateUser, updateUserById, createNewUser, isClosedForm, closeForm }) => {
  const { register, reset, handleSubmit } = useForm()
  const resetObj = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
  }

  const onSubmit = data => {
    if (updateUser) {
      updateUserById(data.id, data, closeForm, setUpdateUser)
    } else {
      createNewUser(data, closeForm, reset, resetObj)
    }
  }

  const cancelUpdate = () => {
    setUpdateUser()
  }

  useEffect(() => {
    updateUser ? reset(updateUser) : reset(resetObj)
  }, [updateUser])

  return (
    <form className={'c-form ' + (isClosedForm ? `c-form--closed` : "")} onSubmit={handleSubmit(onSubmit)}>
      <div onClick={closeForm} className="u-close-form"><i className="fa-regular fa-rectangle-xmark"></i></div>
      <h2 className='form__title'>{updateUser ? `Update` : `Create`}</h2>
      <section className="form-body">
        <div className='form__item'>
          <label className='form__label' htmlFor="email">Email:</label>
          <input
            className='form__input' type="email" id="email"
            placeholder='example@mail.com' {...register("email")} />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="password">Password:</label>
          <input className='form__input' type="password" id="password"
            placeholder='ex: pepito123456789' {...register("password")} />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="firstName">First name:</label>
          <input className='form__input' type="text" id="firstName"
            placeholder='ex: Cristian'{...register("first_name")} />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="lastName">Last name:</label>
          <input className='form__input' type="text" id="lastName"
            placeholder='ex: Muñoz'{...register("last_name")} />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="birthday">Birthday:</label>
          <input className='form__input form__input--date' type="date" id="birthday" {...register("birthday")} />
        </div>
      </section>
      <footer className='form__footer'>
        <button className='form__btn' type='submit'>
          {updateUser ? <i className="fa-solid fa-arrow-rotate-right"></i> : <i className="fa-solid fa-user-plus"></i>}
          {updateUser ? `Update user` : `Add user`}
        </button>
        {
          updateUser ?
            <button className='form__btn form__btn--cancel' onClick={cancelUpdate}>Cancel</button>
            :
            ""
        }
      </footer>
    </form>
  )
}

export default FormUser