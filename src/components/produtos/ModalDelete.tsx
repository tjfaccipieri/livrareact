import Popup from 'reactjs-popup';
import DeleteProduto from './DeleteProduto';


interface ModalDeleteProps {
  id: number
}

function ModalDelete({id}: ModalDeleteProps) {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 hover:bg-white hover:text-indigo-800">
          Nova postagem
        </button>
      }
      modal
    >
      <div>
        <DeleteProduto id={id} />
      </div>
    </Popup>
  );
}

export default ModalDelete;
