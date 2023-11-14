import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Produto } from '../../models/Produto';
import {
  getWithoutHeader,
  postProduto,
  putProduto,
} from '../../service/Service';

function FormProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();
  // desestruturação

  async function getProdutoById() {
    try {
      await getWithoutHeader(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProdutoById();
  }, [id]);

  const { usuario } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleFields(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      usuario: usuario,
    });
  }

  async function handleForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await putProduto('/produtos', produto, setProduto, {
          headers: {
            Authorization: usuario.token,
          },
        });
      } catch (error) {
        console.log(error);
        alert('Falha ao cadastrar o livro');
      }
    } else {
      try {
        await postProduto('/produtos', produto, setProduto, {
          headers: {
            Authorization: usuario.token,
          },
        });
      } catch (error) {
        console.log(error);
        alert('Falha ao cadastrar o livro');
      }
    }

    navigate('/perfil');
  }

  return (
    <div className="container mx-auto flex flex-col mt-8 min-h-[85vh]">
      <h2 className="text-4xl font-black text-purple-900 text-center">
        {id !== undefined ? 'Editar livro' : 'Cadastrar novo livro'}
      </h2>
      <form className="flex flex-col gap-8" onSubmit={handleForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2 mx-auto mt-8">
          <div className="flex flex-col">
            <label htmlFor="titulo" hidden>
              Titulo do livro
            </label>
            <input
              type="text"
              name="titulo"
              value={produto.titulo}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFields(event)
              }
              placeholder="Titulo do livro"
              className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="autor" hidden>
              Autor do livro
            </label>
            <input
              type="text"
              name="autor"
              value={produto.autor}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFields(event)
              }
              placeholder="Autor do livro"
              className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
            />
          </div>
          </div>
          <div className="flex flex-col w-1/2 mx-auto">
            <label htmlFor="sinopse" hidden>
              sinopse do livro
            </label>
            <textarea
              name="sinopse"
              id="sinopse"
              rows={5}
              className="border-b-2 border-purple-900 px-2 text-lg py-1 font-lg"
              placeholder="Sinopse do livro aqui"
              value={produto.sinopse}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFields(event)
              }
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2 mx-auto mt-8">
          <div className="flex flex-col">
            <label htmlFor="editora" hidden>
              editora do livro
            </label>
            <input
              type="text"
              name="editora"
              value={produto.editora}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFields(event)
              }
              placeholder="editora do livro"
              className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="preco" hidden>
              preço do livro
            </label>
            <input
              type="text"
              name="preco"
              value={produto.preco}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFields(event)
              }
              placeholder="preço do livro"
              className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
            />
          </div>
        </div>
          <div className="flex items-center gap-8 w-1/2  mx-auto justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="foto" hidden>
              foto do livro
            </label>
            <input
              type="text"
              name="foto"
              value={produto.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFields(event)
              }
              placeholder="foto do livro"
              className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
            />
          </div>
          <img src={produto.foto || 'https://st3.depositphotos.com/17828278/33150/v/450/depositphotos_331503262-stock-illustration-no-image-vector-symbol-missing.jpg'} alt="" className='w-36 aspect-square object-fill rounded border-2 border-purple-800' />
          </div>
        <button
          type="submit"
          className="border-purple-900 border-2 w-1/2 mx-auto rounded hover:bg-purple-900 hover:text-white text-purple-900 font-bold uppercase py-1"
        >
          Cadastrar livro
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
