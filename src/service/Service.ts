import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

// axios - biblioteca para requisições HTTP (automatizando o fetch API)

export const integracaoUsuario = async(url: string, dados: object, setDados: Function) => {
  const resp = await api.post(url, dados)
  setDados(resp.data)
}

export const getWithHeader = async(url: string, setDados: Function, header: object) => {
  const resp = await api.get(url, header)
  setDados(resp.data)
}

export const getWithoutHeader = async(url: string, setDados: Function) => {
  const resp = await api.get(url)
  setDados(resp.data)
}

export const postProduto = async(url: string, dados: object, setDados: Function, header: object) => {
  const resp = await api.post(url, dados, header)
  setDados(resp.data)
}

export const putProduto = async(url: string, dados: object, setDados: Function, header: object) => {
  const resp = await api.put(url, dados, header)
  setDados(resp.data)
}
