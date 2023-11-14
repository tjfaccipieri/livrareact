import { ReactNode, createContext, useState } from "react";
import { Produto } from "../models/Produto";

type CarrinhoContextProps = {
  listaCarrinho: Array<Produto>
  insertItem: (produto: Produto) => void
  decreaseQuantity: (produto: Produto) => void
  removeItem: (produto: Produto) => void
  checkout: () => void
}

interface CarrinhoProviderProps {
  children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps)

export function CarrinhoProvider({children}: CarrinhoProviderProps) {

  const [listaCarrinho, setListaCarrinho] = useState<Produto[]>([])

  // function insertItem(prod: Produto){
  //   setListaCarrinho((currentItems) => {
  //     if(currentItems.find((item) => item.id === prod.id) == null) {
  //       return [...currentItems, {...prod, qtd: 1}]
  //     } else {
  //       return currentItems.map((item) => {
  //         if (item.id === prod.id){
  //           return {...item, qtd: item.qtd! + 1}
  //         } else {
  //           return item
  //         }
  //       })
  //     }
  //   })
  // }

  function insertItem(prod: Produto){
    setListaCarrinho((currentItems) => {
        return currentItems.some(item => item.id === prod.id)
            ? currentItems.map(item => item.id === prod.id ? {...item, qtd: item.qtd! + 1} : item)
            : [...currentItems, {...prod, qtd: 1}];
    })
}

  // function decreaseQuantity(prod: Produto) {
  //   setListaCarrinho((currentItems) => {
  //     if(currentItems.find((item) => item.id === prod.id)?.qtd === 1) {
  //       return currentItems.filter((item) => item.id !== prod.id)
  //     } else {
  //       return currentItems.map((item) => {
  //         if(item.id === prod.id) {
  //           return {...item, qtd: item.qtd! - 1}
  //         } else {
  //           return item
  //         }
  //       })
  //     }
  //   })
  // }

  function decreaseQuantity(prod: Produto) {
    setListaCarrinho((currentItems) => {
        return currentItems.some(item => item.id === prod.id && item.qtd === 1)
            ? currentItems.filter(item => item.id !== prod.id)
            : currentItems.map(item => item.id === prod.id ? {...item, qtd: item.qtd! - 1} : item);
    })
}

  function removeItem(prod: Produto) {
    setListaCarrinho((currentItems) => {
      return currentItems.filter((item) => item.id !== prod.id)
    })
  }

  function checkout() {
    setListaCarrinho([])
  }

  return(
    <CarrinhoContext.Provider value={{listaCarrinho, insertItem, decreaseQuantity, removeItem, checkout}}>
      {children}
    </CarrinhoContext.Provider>
  )
}