import React, { useEffect, useState } from 'react'
import CardProdutos from './CardProdutos'
import { Produto } from '../../models/Produto'
import { getWithoutHeader } from '../../service/Service'

function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  async function getAllProdutos(){
    await getWithoutHeader('/produtos/all', setProdutos)
  }

  useEffect(() => {
    getAllProdutos()
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-8'>
      {produtos.map(item => (
        <CardProdutos produto={item} key={item.id} />
      ))}
    </div>
  )
}

export default ListaProdutos