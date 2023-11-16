import { MagnifyingGlass, ShoppingCart } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CarrinhoContext } from '../contexts/CarrinhoContext';

function Navbar() {
  const [haveToken, setHaveToken] = useState(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const {listaCarrinho} = useContext(CarrinhoContext)
  const itensComprados = listaCarrinho.length

  useEffect(() => {
    setHaveToken((prev) => !prev);
  }, [usuario.token]);

  return (
    <div className="flex bg-purple-700 py-4 justify-around   text-white">
      <h2 className="text-2xl font-mono font-bold">
        <Link to="/">Livrareact</Link>
      </h2>
      <div className="w-2/3 hidden md:block relative">
        <label htmlFor="">
          <MagnifyingGlass
            size={28}
            weight="bold"
            className="absolute top-1 text-purple-900 right-2"
          />
        </label>
        <input
          type="text"
          className="w-full border-2 rounded-lg border-purple-900 py-1 text-black px-4 font-medium"
        />
      </div>
      <div className="flex gap-2 items-center">
        {haveToken ? (
          <>
            <Link to='/carrinho' className='flex relative'>
              <ShoppingCart weight="fill" size={32} />
              <span className='w-4 h-4 text-xs rounded-full bg-sky-400 flex items-center justify-center absolute right-0'>{itensComprados}</span>
            </Link>

            <Link to="/perfil">
              <span className="w-10 aspect-square flex items-center justify-center rounded-full overflow-hidden border-2">
                <img
                  src={usuario.foto || 'https://i.imgur.com/0Hpwnjx.png'}
                  alt=""
                />
              </span>
            </Link>
          </>
        ) : (
          <span className="text-sm">
            Faça{' '}
            <Link className="underline" to="/login">
              login
            </Link>{' '}
            ou{' '}
            <Link className="underline" to="/cadastro">
              cadastre-se
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
