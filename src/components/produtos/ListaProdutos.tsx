import React from 'react'
import CardProdutos from './CardProdutos'

function ListaProdutos() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-8'>
      {Array.from({length: 5}).map(item => (
        <CardProdutos />
      ))}
    </div>
  )
}

export default ListaProdutos