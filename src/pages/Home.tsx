import ListaProdutos from '../components/produtos/ListaProdutos'

function Home() {


  return (
    <div className="container mx-auto flex flex-col gap-4 min-h-[85vh]">
      <h2 className='text-2xl font-bold text-center'>Catalogo de livros</h2>
      <ListaProdutos />
    </div>
  )
}

export default Home