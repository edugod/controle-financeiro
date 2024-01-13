import React, { useState } from 'react';

const DespesaForm = ({ onAddDespesa }) => {
  const [dia, setDia] = useState('');
  const [valor, setValor] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaDespesa = {
      dia,
      valor: parseFloat(valor),
      observacao,
    };

    onAddDespesa(novaDespesa);

    // Limpar os campos do formulário após adicionar a despesa
    setDia('');
    setValor('');
    setObservacao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dia:
        <input type="text" value={dia} onChange={(e) => setDia(e.target.value)} />
      </label>
      <label>
        Valor:
        <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      </label>
      <label>
        Observação:
        <input type="text" value={observacao} onChange={(e) => setObservacao(e.target.value)} />
      </label>
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default DespesaForm;
