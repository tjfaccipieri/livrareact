import { ReactNode, createContext, useState } from "react";
import { Produto } from "../models/Produto";

type CarrinhoContextProps = {
  listaCarrinho: Array<Produto>
  insertItem: () => void
}

interface CarrinhoProviderProps {
  children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps)

export function CarrinhoProvider({children}: CarrinhoProviderProps) {

  const [listaCarrinho, setListaCarrinho] = useState([])

  function insertItem(){
    
  }

  return(
    <CarrinhoContext.Provider value={{listaCarrinho, insertItem}}>
      {children}
    </CarrinhoContext.Provider>
  )
}