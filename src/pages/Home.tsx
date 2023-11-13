import { useContext } from 'react'
import ListaProdutos from '../components/produtos/ListaProdutos'
import { AuthContext } from '../contexts/AuthContext'



function Home() {

  const {nome} = useContext(AuthContext)

  return (
    <div className="container mx-auto flex flex-col gap-4 min-h-[85vh]">
      {nome}
      <h2 className='text-2xl font-bold text-center'>Catalogo de livros</h2>
      <ListaProdutos />
    </div>
  )
}

export default Home