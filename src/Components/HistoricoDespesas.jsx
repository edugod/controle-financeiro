import React from 'react';

const HistoricoDespesas = ({ despesas }) => {
  return (
    <div>
      <h2>Histórico de Despesas</h2>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa.id}>
           Dia: {despesa.dia} | Valor: R$ {despesa.valor.toFixed(2)} | Observação: {despesa.observacao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoDespesas;
