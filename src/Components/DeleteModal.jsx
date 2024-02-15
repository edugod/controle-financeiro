import React from 'react';

const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className='modal'>
      <p>Tem certeza que deseja deletar?</p>
      <button onClick={onConfirm}>Sim</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default DeleteModal;