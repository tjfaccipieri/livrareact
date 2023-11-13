import { Eye, EyeSlash } from '@phosphor-icons/react';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { UsuarioLogin } from '../models/UsuarioLogin';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState(true);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)
  const {handleLogin, usuario} = useContext(AuthContext)

  const navigate = useNavigate()

  function handleFields(event: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [event.target.name]: event.target.value,
    });
  }

  function handleForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    handleLogin(usuarioLogin)
  }

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/')
    }
}, [usuario.token])

  return (
    <div className="h-[85vh] flex items-center justify-center bg-orange-200 bg-pattern">
      <form
        onSubmit={handleForm}
        className="border-2 border-purple-600 p-8 rounded-xl flex flex-col gap-4 w-3/4 md:w-1/4 md:min-w-[450px] 
      bg-neutral-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 "
      >
        <p className="font-extrabold text-purple-600 text-4xl text-center">
          Login
        </p>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" hidden>
            E-mail de cadastro:
          </label>
          <input
            type="email"
            name='usuario'
            value={usuarioLogin.usuario}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleFields(event)}
            placeholder="email@email.com"
            className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="senha" hidden>
            Senha:
          </label>
          <button
            type="button"
            onClick={() => setPassword((prev) => !prev)}
            className="absolute right-2 top-2"
          >
            {password ? (
              <EyeSlash size={24} weight="bold" className="text-purple-800" />
              ) : (
              <Eye size={24} weight="bold" className="text-purple-800" />
            )}
          </button>
          <input
            type={password ? 'password' : 'text'}
            name='senha'
            value={usuarioLogin.senha}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleFields(event)}
            placeholder="sua senha aqui"
            className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
          />
        </div>
        <button type='submit' className="bg-purple-700 hover:bg-purple-950 text-white font-bold uppercase font-mono text-xl py-2 rounded-lg">
          Logar
        </button>
      </form>
    </div>
  );
}

export default Login;
