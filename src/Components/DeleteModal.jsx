const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal p-4 bg-primary rounded-lg shadow-2xl">
      <div className="flex justify-between">
        <button
          className="w-2/5 px-4 py-2 font-semibold bg-forth text-white rounded-xl hover:bg-forthHover focus:outline-none"
          onClick={onConfirm}
        >
          Sim
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-black rounded-xl hover:bg-red-600"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
