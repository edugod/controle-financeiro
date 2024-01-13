import React from 'react';

const HistoricoDespesas = ({ despesas }) => {
  return (
    <div>
      <h2>Histórico de Despesas</h2>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa.id}>
            <strong>Dia:</strong> {despesa.dia} | <strong>Valor:</strong> R$ {despesa.valor.toFixed(2)} | <strong>Observação:</strong> {despesa.observacao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoDespesas;
