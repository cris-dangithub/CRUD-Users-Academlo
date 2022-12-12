import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

const useAxios = () => {
  const [users, setUsers] = useState()
  const sweetAlert = (title, icon, timer = 1500) => Swal.fire(
    {
      title,
      icon,
      timer
    }
  )

  const createNewUser = (data, closeForm, reset, resetObj) => {
    const URL = `http://users-crud.academlo.tech/users/`
    axios.post(URL, data)
      .then(res => {
        getAllUsers()
        closeForm()
        sweetAlert('Usuario creado exitosamente','success')
        reset(resetObj)
      })
      .catch(err => {
        sweetAlert('No se pudo crear el usuario','error')
      })
  }
  const getAllUsers = () => {
    const URL = `http://users-crud.academlo.tech/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => sweetAlert('No se pudieron cargar los usuarios, error del servidor', 'error'))
  }
  const updateUserById = (id, data, closeForm, setUpdateUser) => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        sweetAlert('Usuario editado exitosamente','success')
        getAllUsers()
        closeForm()
        setUpdateUser()
      })
      .catch(err => sweetAlert('No se ha podido actualizar el usuario', 'error'))
  }
  const deleteUserById = (id, setOffCardEffect) => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.delete(URL)
      .then(res => {
        setOffCardEffect(true)
        setTimeout(() => {
          sweetAlert('Usuario eliminado exitosamente', 'success')
          getAllUsers()
        }, 200)
        
      })
      .catch(err => sweetAlert('No se pudo eliminar el usuario, error del servidor', 'error'))
  }
  return {
    users,
    setUsers,
    createNewUser,
    getAllUsers,
    updateUserById,
    deleteUserById
  }
}


export default useAxios