import { Link } from 'react-router-dom';
import { Produto } from '../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
  return (
    <Link
      to={`/detalheProduto/${produto.id}`}
      className="flex flex-col gap-2 rounded border-2 border-neutral-900 hover:shadow-lg hover:shadow-purple-200 px-1 py-2 hover:cursor-pointer group"
    >
      <img
        src={produto.foto}
        className="w-full aspect-square object-fit object-top rounded"
        alt=""
      />
      <h3 className="text-sm font-bold font-mono text-center">
        {produto.titulo}
      </h3>
      <button className="border-purple-900 border-2 w-11/12 mx-auto rounded group-hover:bg-purple-900 group-hover:text-white text-purple-900 font-bold uppercase py-1 text-center">
        a partir de{' '}
        {produto.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </button>
    </Link>
  );
}

export default CardProdutos;
