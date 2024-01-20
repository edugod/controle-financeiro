import React, { useState } from 'react'

const DespesaForm = ({ onAddDespesa }) => {
	const [dia, setDia] = useState('')
	const [valor, setValor] = useState('')
	const [observacao, setObservacao] = useState('')
	const [isDespesa, setIsDespesa] = useState(true)

	const handleValorClick = () => {
		// Toggle entre despesa e entrada ao clicar no campo de valor
		setIsDespesa((prev) => !prev);
	  };
	
	  const handleSubmit = (e) => {
		e.preventDefault();
	
		const clearForm = () => {
		  setDia('');
		  setValor('');
		  setObservacao('');
		};
	
		// Verifica se é despesa ou entrada com base na variável isDespesa
		const valorNumerico = isDespesa ? -Math.abs(parseFloat(valor)) : Math.abs(parseFloat(valor));
	
		const novaDespesa = {
		  dia,
		  valor: valorNumerico,
		  observacao,
		};
	
		onAddDespesa(novaDespesa);
	
		// Limpar os campos do formulário após adicionar a despesa
		clearForm();
	  };

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Dia:
				<input type='date' value={dia} onChange={(e) => setDia(e.target.value)} max='2024-12-31' />
			</label>
			<label>
				<span onClick={handleValorClick}>{isDespesa ? 'Despesa:' : 'Entrada:'}</span>
				<input
					type='number'
					value={valor}
					onChange={(e) => setValor(e.target.value)}
					
				/>
			</label>
			<label>
				Observação:
				<input type='text' value={observacao} onChange={(e) => setObservacao(e.target.value)} />
			</label>
			<button type='submit'>Adicionar Despesa</button>
		</form>
	)
}

export default DespesaForm
