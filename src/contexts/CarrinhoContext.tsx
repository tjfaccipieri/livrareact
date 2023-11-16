import { ReactNode, createContext, useState } from 'react';
import { Produto } from '../models/Produto';

interface CarrinhoContextProps {
  // ...funções e estados
  listaCarrinho: Array<Produto>;
  insertItem: (produto: Produto) => void;
  decreaseQuantity: (produto: Produto) => void;
  removeItem: (produto: Produto) => void;
  checkout: () => void
}

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps);

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
  const [listaCarrinho, setListaCarrinho] = useState<Produto[]>([]);

  function insertItem(prod: Produto) {
    setListaCarrinho((currentItems) => {
      if (currentItems.find((item) => item.id === prod.id) == null) {
        return [...currentItems, { ...prod, qtd: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === prod.id) {
            return { ...item, qtd: item.qtd! + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(prod: Produto) {
    setListaCarrinho((currentItems) => {
      if (currentItems.find((item) => item.id === prod.id)?.qtd === 1) {
        return currentItems.filter((item) => item.id !== prod.id);
      } else {
        return currentItems.map((item) => {
          if (item.id === prod.id) {
            return { ...item, qtd: item.qtd! - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(prod: Produto) {
    setListaCarrinho((currentItems) => {
      return currentItems.filter((item) => item.id !== prod.id)
    })
  }

  function checkout() {
    setListaCarrinho([])
  }

  return (
    <CarrinhoContext.Provider value={{ listaCarrinho, insertItem, decreaseQuantity, removeItem, checkout }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
