import { useState, useEffect } from 'react'
import './App.css'
import CardUser from './components/CardUser'
import DarkLightMode from './components/DarkLightMode'
import EmptyUsers from './components/EmptyUsers'
import FormUser from './components/FormUser'
import useCrud from './hooks/useCrud'
import useHandleForms from './hooks/useHandleForms'

function App() {
  const root = document.querySelector('#root')

  const [updateUser, setUpdateUser] = useState()
  const [buttonModeLight, setButtonModeLight] = useState(true)

  const { isClosedForm, objStyleForm, closeForm, openForm } = useHandleForms()
  const { users, createNewUser, getAllUsers, updateUserById, deleteUserById } = useCrud()

  useEffect(() => {
    getAllUsers()
  }, [])

  useEffect(() => {
    buttonModeLight ? root.classList.remove('root--darkmode') : root.classList.add('root--darkmode')
  }, [buttonModeLight])

  return (
    <div className='App'>
      <header className='App__header'>
        <div className='dark-light-mode-container'>
          <DarkLightMode
            buttonModeLight={buttonModeLight}
            setButtonModeLight={setButtonModeLight}
          />
        </div>
        <h1 className='App__title'>Users CRUD</h1>
        <button className='form__btn form__btn--open' onClick={openForm}><i className="fa-regular fa-rectangle-list"></i> Open Form</button>
      </header>
      <div className={`form-container ` + (isClosedForm ? 'form-container--close' : '')} style={objStyleForm}>
        <FormUser
          createNewUser={createNewUser}
          getAllUsers={getAllUsers}
          updateUser={updateUser}
          setUpdateUser={setUpdateUser}
          updateUserById={updateUserById}
          isClosedForm={isClosedForm}
          closeForm={closeForm}
        />
      </div>
      <div className="users-container">
        {
          users?.length ?
            users.map(user => (
              <CardUser
                key={user.id}
                user={user}
                getAllUsers={getAllUsers}
                setUpdateUser={setUpdateUser}
                deleteUserById={deleteUserById}
                openForm={openForm}
              />
            ))
            :
            <EmptyUsers />
        }
      </div>

    </div>
  )
}

export default App
