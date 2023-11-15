import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Produto } from '../../models/Produto';
import { deleteProduto, getWithoutHeader } from '../../service/Service';

function DeleteProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const navigate = useNavigate()
  const { usuario } = useContext(AuthContext);
  const { id } = useParams<{ id: string }>();

  async function getProdutoById() {
    try {
      await getWithoutHeader(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProdutoById();
  }, []);

  function deletarProduto() {
    try {
      deleteProduto(`/produtos/${produto.id}`, {
        headers: {
          Authorization: usuario.token
        }
      })
      navigate('/perfil')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mx-auto my-4">
      <h3 className="font-bold font-mono text-purple-800 text-2xl text-center w-1/2 mx-auto">
        Você tem certeza de que deseja remover esse livro do nosso catalogo?
      </h3>
      <div className="flex flex-col gap-2 rounded border-2 border-neutral-900 hover:shadow-lg hover:shadow-purple-200 px-1 py-2 w-56 mx-auto mt-8">
        <img
          src={produto.foto}
          className="w-full aspect-square object-fit object-top rounded"
          alt=""
        />
        <h3 className="text-sm font-bold font-mono text-center">
          {produto.titulo}
        </h3>

        <Link
          to={`/perfil`}
          className="border-purple-900 border-2 w-11/12 mx-auto rounded hover:bg-purple-900 hover:text-white text-purple-900 font-bold uppercase py-1 text-center"
        >
          Cancelar
        </Link>

        <button
          className="border-red-900 border-2 w-11/12 mx-auto rounded hover:bg-red-900 hover:text-white text-red-900 font-bold uppercase py-1 text-center"
          onClick={() => {deletarProduto()}}
        >
          Apagar
        </button>
      </div>
    </div>
  );
}

export default DeleteProduto;
