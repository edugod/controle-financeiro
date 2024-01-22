import React from 'react';
import despesaService from '../controllers/despesas';

const HistoricoDespesas = ({ despesas, setDespesas }) => {
  const handleDelete = async (despesaId) => {
    try {
      // Chama a função de delete no serviço
      await despesaService.deleteDespesa(despesaId);
      // Atualiza o estado para refletir a exclusão no frontend
      setDespesas((prevDespesas) => prevDespesas.filter((despesa) => despesa.id !== despesaId));
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
    </div>
  );
};

export default HistoricoDespesas;