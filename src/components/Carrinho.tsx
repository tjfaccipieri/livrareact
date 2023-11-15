import React, { useContext } from 'react'
import { CarrinhoContext } from '../contexts/CarrinhoContext'
import { useNavigate } from 'react-router-dom'
import { Produto } from '../models/Produto'

function Carrinho() {
  const {decreaseQuantity, removeItem, checkout, insertItem, listaCarrinho} = useContext(CarrinhoContext)

  const navigate = useNavigate()

  function comprar() {
    alert('Obrigado pela compra, não entregaremos nada e vamos sumir com seu dinheiro... 🤣')
    navigate('/')
    checkout()
  }

  return (
    <div className='container mx-auto my-8'>
      <div className="flex flex-col border-purple-900 border-2 rounded-xl p-4">
        <h2 className='text-3xl font-black font-mono text-purple-800 text-center border-b border-purple-900'>Minhas compras</h2>

        {listaCarrinho.map((item: Produto) => (
          <p>{item.titulo}</p>
        ))}

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className='text-xl font-black font-mono text-purple-800'>Valor total:</h2>
            <h3 className='text-lg font-medium font-mono text-sky-800'>Em até 12x de: </h3>
          </div>
          <button onClick={() => comprar()} className='bg-sky-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600'>Finalizar compra</button>
        </div>
      </div>

    </div>
  )
}

export default Carrinho