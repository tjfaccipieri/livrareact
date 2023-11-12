import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useState } from 'react';

function Cadastro() {
  const [password, setPassword] = useState(true);

  return (
    <div className="h-[85vh] flex items-center justify-center bg-orange-200 bg-pattern">
      <form
        className="border-2 border-purple-600 p-8 rounded-xl flex flex-col gap-4 w-3/4 md:w-1/4 md:min-w-[450px] 
      bg-neutral-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 "
      >
        <p className="font-extrabold text-purple-600 text-4xl text-center">
          Cadastro
        </p>
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" hidden>
            Nome completo:
          </label>
          <input
            type="text"
            placeholder="Nome completo"
            className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" hidden>
            E-mail de cadastro:
          </label>
          <input
            type="email"
            placeholder="email@email.com"
            className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="foto" hidden>
            Foto de usuário:
          </label>
          <input
            type="text"
            placeholder="URL da sua foto"
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
            placeholder="Sua senha aqui"
            className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="confirmarSenha" hidden>
            Confirme sua Senha:
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
            placeholder="Confirme sua senha aqui"
            className="border-b-2 border-purple-900  px-2 text-lg py-1 font-lg"
          />
        </div>
        <button className="bg-purple-700 hover:bg-purple-950 text-white font-bold uppercase font-mono text-xl py-2 rounded-lg">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
