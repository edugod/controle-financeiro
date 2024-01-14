import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
const DespesaForm = ({ onAddDespesa }) => {
	const [dia, setDia] = useState('')
	const [valor, setValor] = useState('')
	const [observacao, setObservacao] = useState('')
  console.log('dia :>> ', dia);

	const handleSubmit = (e) => {
		e.preventDefault()

		const novaDespesa = {
			dia,
			valor: parseFloat(valor) * -1,
			observacao,
		}

		onAddDespesa(novaDespesa)

		// Limpar os campos do formulário após adicionar a despesa
		setDia('')
		setValor('')
		setObservacao('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Dia:
				<ReactInputMask
					mask='31/12/2024'
					maskChar=''
					value={dia}
					onChange={(e) => setDia(e.target.value)}
					placeholder='DD/MM/AAAA'
				/>
			</label>
			<label>
				Valor:
				<input type='number' value={valor} onChange={(e) => setValor(e.target.value)} />
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
