import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import MaskedInput from './MaskedInput'
const DespesaForm = ({ onAddDespesa }) => {
	const [dia, setDia] = useState('')
	const [valor, setValor] = useState('')
	const [observacao, setObservacao] = useState('')
  const [cpf, setCpf] = useState('')

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
				{/* Dia:
				<ReactInputMask
					mask='99/99/2024'
					maskChar=''
					value={dia}
					onChange={(e) => setDia(e.target.value)}
					placeholder='DD/MM/AAAA'
				/> */}
        <MaskedInput 
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}/>
        <button onClick={() => setCpf('')}>Limpar</button>
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
