import { useState, useEffect } from 'react'
import './App.css'
import CardUser from './components/CardUser'
import EmptyUsers from './components/EmptyUsers'
import FormUser from './components/FormUser'
import useCrud from './hooks/useCrud'
import useHandleForms from './hooks/useHandleForms'

function App() {
  const [updateUser, setUpdateUser] = useState()

  const { isClosedForm, objStyleForm, closeForm, openForm } = useHandleForms()
  const { users, createNewUser, getAllUsers, updateUserById, deleteUserById } = useCrud()

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <header className='App__header'>
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
