import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import despesaService from '../controllers/despesas'

const DespesaForm = ({ onAddDespesa }) => {
	const [dia, setDia] = useState(new Date())
	const [valor, setValor] = useState('')
	const [observacao, setObservacao] = useState('')
	const [categoria, setCategoria] = useState('')
	const [isDespesa, setIsDespesa] = useState(true)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const valorNumerico = isDespesa ? -Math.abs(parseFloat(valor)) : Math.abs(parseFloat(valor))
		console.log('isDespesa :>> ', isDespesa)
		const novaDespesa = {
			dia: dia.toLocaleDateString('pt-BR'),
			valor: valorNumerico,
			observacao,
			categoria: categoria,
		}

		try {
			// Chame a função create do meu serviço para adicionar a nova despesa ao MongoDB
			await despesaService.create(novaDespesa)

			onAddDespesa(novaDespesa)
			clearForm()
		} catch (error) {
			console.error('Error adding despesa:', error)
		}
	}

	const clearForm = () => {
		setDia(new Date())
		setValor('')
		setObservacao('')
	}

	const categorias = isDespesa ? ['Gasolina', 'Comida', 'Investimento'] : ['Salário', 'Outros']

  console.log(categoria)
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Dia:
				<DatePicker
					selected={dia}
					onChange={(date) => setDia(date)}
					dateFormat='dd/MM/yyyy'
					maxDate={new Date(2024, 11, 31)}
				/>
			</label>
			<label>
				<span onClick={() => setIsDespesa((prev) => !prev)}>
					{isDespesa ? 'Despesa:' : 'Entrada:'}
				</span>
				<input type='number' value={valor} onChange={(e) => setValor(e.target.value)} />
			</label>
			<label>
				Categoria:
				<select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
					<option value=''>Selecione uma categoria</option>
					{categorias.sort().map((categoria, index) => (
						<option key={index} value={categoria}>
							{categoria}
						</option>
					))}
				</select>
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
parece que eu não tenho tempo para Nada.... o que está faltando para eu conseguir estudar? =/