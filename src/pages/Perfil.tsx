import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Perfil() {

  const {usuario} = useContext(AuthContext)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(usuario.token === '') {
  //     alert('Você precisa estar logado para ver seu perfil')
  //     navigate('/login')
  //   }
  // }, [])

  return (
    <div>Perfil</div>
  )
}

export default Perfil