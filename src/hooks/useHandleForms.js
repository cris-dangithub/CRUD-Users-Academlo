import { useState } from "react"

const useHandleForms = () => {
  const [isClosedForm, setIsClosedForm] = useState(true)
  const [objStyleForm, setObjStyleForm] = useState({ display: 'none' })

  const closeForm = () => {
    setIsClosedForm(true)
    setTimeout(() => { setObjStyleForm({ display: 'none' }) }, 400) // Si no se pone, la animación no se ejecuta.
  }

  const openForm = () => {
    setObjStyleForm({})
    setTimeout(() => setIsClosedForm(false)) // Si no se pone, la animación no se ejecuta.
  }

  return { isClosedForm, setIsClosedForm, objStyleForm, setObjStyleForm, closeForm, openForm }
}

export default useHandleForms