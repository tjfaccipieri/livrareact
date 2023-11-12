import { Eye, EyeSlash } from '@phosphor-icons/react';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usuario } from '../models/Usuario';
import { integracaoUsuario } from '../service/Service';

function Cadastro() {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [password, setPassword] = useState(true);
  const [confirmSenha, setConfirmSenha] = useState('');

  const navigate = useNavigate();

  function handleFields(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  }

  async function handleForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if(usuario.senha === confirmSenha) {
      try {
        await integracaoUsuario('/usuarios/cadastrar', usuario, setUsuario);
        alert('Usuário cadastrado com sucesso');
        navigate('/login');
      } catch (error) {
        console.log(error);
        alert('Falha ao cadastrar');
      }
    } else {
      alert('campos de senha não batem')
      setConfirmSenha('')
      setUsuario({
        ...usuario,
        senha: ''
      })
    }

  }

  return (
    <div className="h-[85vh] flex items-center justify-center bg-orange-200 bg-pattern">
      <form
        className="border-2 border-purple-600 p-8 rounded-xl flex flex-col gap-4 w-3/4 md:w-1/4 md:min-w-[450px] 
      bg-neutral-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 "
        onSubmit={handleForm}
      >
        <p className="font-extrabold text-purple-600 text-4xl text-center">
          Cadastro
        </p>
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" hidden>
            Nome completo:
          </label>
          <input
            name="nome"
            value={usuario.nome}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleFields(event)
            }
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
          name="usuario"
          value={usuario.usuario}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleFields(event)
          }
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
          name="foto"
          value={usuario.foto}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleFields(event)
          }
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
          name="senha"
          value={usuario.senha}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleFields(event)
          }
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
          name="confirmarSenha"
          value={confirmSenha}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setConfirmSenha(event.currentTarget.value)
          }
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
