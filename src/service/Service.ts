import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export const integracaoUsuario = async(url: string, dados: object, setDados: Function) => {
  const resp = await api.post(url, dados)
  setDados(resp.data)
}