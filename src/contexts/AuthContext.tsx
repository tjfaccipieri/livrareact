import { ReactNode, createContext, useState } from "react";
import { UsuarioLogin } from "../models/UsuarioLogin";
import { integracaoUsuario } from "../service/Service";

interface AuthContextProps {
  usuario: UsuarioLogin
  handleLogin(usuario: UsuarioLogin): Promise<void>
  handleLogout(): void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps) {

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  })

  function handleLogout() {
    setUsuario({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })
}

  async function handleLogin(userLogin: UsuarioLogin){
    try {
      await integracaoUsuario('/usuarios/logar', userLogin, setUsuario)
      alert('Conectado com sucesso')
    } catch (error) {
      console.log(error);
      alert('Falha ao logar, verifique os seus dados')
    }
  }

  return(
    <AuthContext.Provider value={{usuario, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}