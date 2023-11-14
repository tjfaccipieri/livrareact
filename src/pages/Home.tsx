import { useContext } from 'react'
import ListaProdutos from '../components/produtos/ListaProdutos'
import { AuthContext } from '../contexts/AuthContext'
import { CarrinhoContext } from '../contexts/CarrinhoContext'



function Home() {

  const {listaCarrinho} = useContext(CarrinhoContext)

  return (
    <div className="container mx-auto flex flex-col gap-4 min-h-[85vh]">
      <h2 className='text-2xl font-bold text-center'>Catalogo de livros</h2>
      <ListaProdutos />

      <hr />
      <p>items comprados:</p>
      <div className='flex flex-col'>
        {listaCarrinho.map((item) => (
          <p>{item.titulo} + {item.qtd}</p>
        ))}
      </div>
    </div>
  )
}

export default Home