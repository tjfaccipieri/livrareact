import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Produto } from '../../models/Produto'
import { getWithoutHeader } from '../../service/Service'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'

function DetalheProduto() {

  const {id} = useParams<{id: string}>()

  // const {insertItem} = useContext(CarrinhoContext)

  const [produto, setProduto] = useState<Produto>({} as Produto)

  async function getProdutoById() {
    try {
      await getWithoutHeader(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProdutoById()
  }, [produto.id])



  return (
    <div className='container mx-auto my-8'>
      <div className="border-2 rounded-lg border-purple-900 p-4 flex gap-12">
        <img src={produto.foto || 'https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg'} className='w-72 rounded-lg border-2 border-purple-900 p-2 aspect-[3/4] max-h-80' alt="" />
        <div className="flex flex-col gap-2 w-full">
          <h1 className='text-4xl font-black font-mono text-purple-800 border-b-2 border-black'>{produto.titulo}</h1>
          <span className='text-sm'>Editora: {produto.editora} - Autor: {produto.autor}</span>
          <pre className='font-sans whitespace-pre-wrap'>{produto.sinopse} </pre>

          <div className='flex justify-between mt-auto'>
            <h3 className='text-2xl font-bold text-sky-800'>Melhor preço: {produto.preco?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
            <button className='h-full bg-sky-700 text-white font-bold px-8 rounded-lg hover:bg-sky-900'>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalheProduto