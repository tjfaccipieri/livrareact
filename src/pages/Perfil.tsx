import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Usuario } from '../models/Usuario';
import { getWithHeader } from '../service/Service';

function Perfil() {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState<Usuario>({} as Usuario);
  // useEffect(() => {
  //   if(usuario.token === '') {
  //     navigate('/login')
  //   }
  // }, [])

  async function getUserById() {
    await getWithHeader(`/usuarios/${usuario.id}`, setUser, {
      headers: {
        Authorization: usuario.token,
      },
    });
  }

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="container mx-auto py-8 flex flex-col gap-4">
      <h2 className="text-center font-black text-4xl font-serif text-purple-900">
        Perfil de Thiago Faccipieri
      </h2>

      <div className="flex justify-center gap-28 items-center mt-8">
      <img src={usuario.foto || 'https://i.imgur.com/0Hpwnjx.png'} alt="" className="w-48 rounded-full border-4 p-1 border-purple-900" />
        <div className='flex flex-col gap-4 justify-center '>
          <p>E-mail de cadastro: {usuario.usuario}</p>
          <p>Quantidade de produtos cadastrados: {user.produto?.length || 'você ainda não tem produtos cadastrados'}</p>
          <Link to="/cadastroProduto" className="mx-auto w-2/3 bg-purple-800 hover:bg-purple-950 text-white py-2 rounded-xl text-center">
              Cadastrar novo livro
          </Link>
        </div>
      </div>

      <hr />

      <h2>Meus livros:</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {user.produto?.map((item) => (
        <div className="flex flex-col gap-2 rounded border-2 border-neutral-900 hover:shadow-lg hover:shadow-purple-200 px-1 py-2">
          <img
            src={item.foto}
            className="w-full aspect-square object-fit object-top rounded"
            alt=""
          />
          <h3 className="text-sm font-bold font-mono text-center">
            {item.titulo}
          </h3>
          
          <button className="border-purple-900 border-2 w-11/12 mx-auto rounded hover:bg-purple-900 hover:text-white text-purple-900 font-bold uppercase py-1">
            Editar
          </button>
          
          <button className="border-red-900 border-2 w-11/12 mx-auto rounded hover:bg-red-900 hover:text-white text-red-900 font-bold uppercase py-1">
            Apagar
          </button>

        </div>
        ))}
      </div>
    </div>
  );
}

export default Perfil;
