import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import despesaService from '../controllers/despesas';

const DespesaForm = ({ onAddDespesa }) => {
  const [dia, setDia] = useState(new Date());
  const [valor, setValor] = useState('');
  const [observacao, setObservacao] = useState('');
  const [isDespesa, setIsDespesa] = useState(true);

  const handleValorClick = () => {
    // Toggle entre despesa e entrada ao clicar no campo de valor
    setIsDespesa((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se é despesa ou entrada com base na variável isDespesa
    const valorNumerico = isDespesa ? -Math.abs(parseFloat(valor)) : Math.abs(parseFloat(valor));

    const novaDespesa = {
      dia: dia.toLocaleDateString('pt-BR'), // Formatando a data para dd/mm/yyyy
      valor: valorNumerico,
      observacao,
    };

    try {
      // Chame a função create do seu serviço para adicionar a nova despesa ao MongoDB
      await despesaService.create(novaDespesa);

      onAddDespesa(novaDespesa);
      clearForm();
    } catch (error) {
      console.error('Error adding despesa:', error);
    }
  };

  const clearForm = () => {
    setDia(new Date());
    setValor('');
    setObservacao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dia:
        <DatePicker
          selected={dia}
          onChange={(date) => setDia(date)}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date(2024, 11, 31)}
        />
      </label>
      <label>
        <span onClick={handleValorClick}>{isDespesa ? 'Despesa:' : 'Entrada:'}</span>
        <input type='number' value={valor} onChange={(e) => setValor(e.target.value)} />
      </label>
      <label>
        Observação:
        <input type='text' value={observacao} onChange={(e) => setObservacao(e.target.value)} />
      </label>
      <button type='submit'>Adicionar Despesa</button>
    </form>
  );
};

export default DespesaForm;
