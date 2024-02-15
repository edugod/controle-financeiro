import React from 'react';

const DespesaItem = ({ dia, valor, observacao, categoria }) => (
  <li key={dia}>
    Dia: {dia} | Valor: R$ {valor.toFixed(2)} | Observação: {observacao} | Categoria: {categoria}
    <button onClick={() => handleDelete(dia)}>Deletar</button>
  </li>
);

export default DespesaItem;