import React from 'react'

function CardProdutos() {
  return (
    <div className='flex flex-col gap-2 rounded border-2 border-neutral-900 hover:shadow-lg hover:shadow-purple-900 px-1 py-2'>
      <img src="https://i.imgur.com/Rx7auGM.png" className='w-full aspect-square object-fit object-top rounded' alt="" />
      <h3 className='text-sm font-bold font-mono text-center'>Titulo do livro</h3>
      <button className='border-purple-900 border-2 w-11/12 mx-auto rounded hover:bg-purple-900 hover:text-white text-purple-900 font-bold uppercase py-1'>a partir de R$ 1,99</button>
    </div>
  )
}

export default CardProdutos