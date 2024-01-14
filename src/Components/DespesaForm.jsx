import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

const DespesaForm = ({ onAddDespesa }) => {
	const [dia, setDia] = useState(new Date())
	const [valor, setValor] = useState('')
	const [observacao, setObservacao] = useState('')

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
				<DatePicker
					selected={dia}
					onChange={(dia) => setDia(dia)}
					isClearable
					placeholderText='I have been cleared!'
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
