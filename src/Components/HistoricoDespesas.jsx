import React, { useState } from 'react';
import despesaService from '../controllers/despesas';

const HistoricoDespesas = ({ despesas, setDespesas }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingDespesaId, setDeletingDespesaId] = useState(null);

  // console.log('despesas :>> ', despesas);
  // const despesasOrdenadas = [...despesas].sort((a, b) => new Date(a.dia) - new Date(b.dia));
  // console.log('object :>> ', object);


  const handleDelete = async (despesaId) => {
    // Abre o modal de confirmação
    setShowDeleteModal(true);
    setDeletingDespesaId(despesaId);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeletingDespesaId(null);
  };

  const confirmDelete = async () => {
    try {
      await despesaService.deleteDespesa(deletingDespesaId);

      // Atualiza o estado para refletir a exclusão no frontend
      setDespesas((prevDespesas) => prevDespesas.filter((despesa) => despesa.id !== deletingDespesaId));

      // Fecha o modal de confirmação
      setShowDeleteModal(false);
      setDeletingDespesaId(null);
    } catch (error) {
      console.error('Erro ao deletar despesa:', error);
    }
  };



  return (
    <div>
      <h2>Histórico de Despesas</h2>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa.id}>
            Dia: {despesa.dia} | Valor: R$ {despesa.valor.toFixed(2)} | Observação:{' '}
            {despesa.observacao}
            <button onClick={() => handleDelete(despesa.id)}>Deletar</button>
          </li>
        ))}
      </ul>

      {/* Modal de Confirmação */}
      {showDeleteModal && (
        <div className="modal">
          <p>Tem certeza que deseja deletar?</p>
          <button onClick={confirmDelete}>Sim</button>
          <button onClick={cancelDelete}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default HistoricoDespesas;
