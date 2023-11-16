import { MinusCircle, PlusCircle, Trash } from '@phosphor-icons/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import { Produto } from '../models/Produto';

function Carrinho() {
  const { decreaseQuantity, removeItem, checkout, insertItem, listaCarrinho } =
    useContext(CarrinhoContext);

  const navigate = useNavigate();

  let valorTotal: number = 0

  function comprar() {
    alert(
      'Obrigado pela compra, não entregaremos nada e vamos sumir com seu dinheiro... 🤣'
    );
    navigate('/');
    checkout();
  }

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col border-purple-900 border-2 rounded-xl p-4">
        <h2 className="text-3xl font-black font-mono text-purple-800 text-center border-b border-purple-900">
          Minhas compras
        </h2>
        <div className="flex w-full gap-8">
          <div className="w-1/12"></div>
          <p className="w-4/12 text-center">Titulo</p>
          <p className="w-1/12 text-center">Preço unitário</p>
          <p className="w-2/12 text-center">Quantidade</p>
          <p className="w-1/12 text-center">Valor total</p>
          <div className="w-3/12"></div>
        </div>
        {listaCarrinho.map((item: Produto) => (
          <div key={item.id} className="flex gap-4 items-center mb-4">
            <img
              src={item.foto}
              className="w-1/12 aspect-square object-fill"
              alt=""
            />
            <p className="w-4/12 font-bold text-purple-800 text-lg">
              {item.titulo}
            </p>
            <p className="w-1/12 text-center ">{item.preco.toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</p>
            <div className="w-2/12 flex justify-center items-center gap-4 text-purple-800 ">
              <button onClick={() => decreaseQuantity(item)}>
                <MinusCircle size={24} />
              </button>{' '}
              <span>{item.qtd}</span>{' '}
              <button onClick={() => insertItem(item)}>
                <PlusCircle size={24} />
              </button>
            </div>
            <p className="w-1/12 text-center ">{(item.preco * item.qtd!).toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</p>
            <button onClick={() => removeItem(item)} className="w-3/12 flex justify-end pr-10 text-red-500 hover:text-red-700 "><Trash size={32} weight='duotone' /></button>
          </div>
        ))}

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl font-black font-mono text-purple-800">
              Valor total: 
                {listaCarrinho.map((item) => {
                  {
                    valorTotal = valorTotal + item.preco * item.qtd!;
                  }
                  return <></>;
                })}
                <strong>
                  {valorTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
            </h2>
            <h3 className="text-lg font-medium font-mono text-sky-800">
              Em até 12x de: {(valorTotal / 12).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
            </h3>
          </div>
          <button
            onClick={() => comprar()}
            className="bg-sky-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrinho;