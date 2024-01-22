import React, { useState } from 'react';
import despesaService from '../controllers/despesas';

const HistoricoDespesas = ({ despesas, setDespesas }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingDespesaId, setDeletingDespesaId] = useState(null);

  const handleDelete = async (despesaId) => {
    // Abre o modal de confirmação
    setShowDeleteModal(true);
    setDeletingDespesaId(despesaId);
  };

  const confirmDelete = async () => {
    try {
      // Chama a função de delete no serviço
      await despesaService.deleteDespesa(deletingDespesaId);

      // Atualiza o estado para refletir a exclusão no frontend
      setDespesas((prevDespesas) => prevDespesas.filter((despesa) => despesa.id !== deletingDespesaId));

      // Fecha o modal de confirmação
      setShowDeleteModal(false);
      setDeletingDespesaId(null);
    } catch (error) {
      // Lida com erros
      console.error('Erro ao deletar despesa:', error);
    }
  };

  const cancelDelete = () => {
    // Fecha o modal de confirmação
    setShowDeleteModal(false);
    setDeletingDespesaId(null);
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
