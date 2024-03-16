import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import despesaService from '../controllers/despesas'

const DespesaForm = ({ onAddDespesa, usuario, setShowDespesaForm }) => {
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
			categoria,
			createdBy: usuario,
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

	return (
		<form onSubmit={handleSubmit} className='p-6'>
			<label className='block mb-2'>
				Dia: <br />
				<DatePicker
					selected={dia}
					onChange={(date) => setDia(date)}
					dateFormat='dd/MM/yyyy'
					maxDate={new Date(2024, 11, 31)}
					className='border border-gray-300 rounded-xl px-2 py-1 w-full mt-2'
				/>
			</label>
			<label className='block mb-2'>
				<span onClick={() => setIsDespesa((prev) => !prev)}>
					{isDespesa ? 'Despesa:' : 'Entrada:'}
				</span>
				<input
					type='number'
					value={valor}
					onChange={(e) => setValor(e.target.value)}
					className='border border-gray-300 rounded-xl px-2 py-1 w-full mt-2'
				/>
			</label>
			<label className='block mb-2'>
				Categoria:
				<select
					value={categoria}
					onChange={(e) => setCategoria(e.target.value)}
					className='bg-secondary border border-gray-300 rounded-xl px-2 py-1 w-full mt-2 appearance-none'
					required
				>
					<option>Selecione uma categoria</option>
					{categorias.sort().map((categoria, index) => (
						<option key={index} value={categoria}>
							{categoria}
						</option>
					))}
				</select>
			</label>
			<label className='block mb-4'>
				Observação:
				<input
					type='text'
					value={observacao}
					onChange={(e) => setObservacao(e.target.value)}
					className='border border-gray-300 rounded-xl px-2 py-1 w-full mt-2'
				/>
			</label>
			<div className='flex justify-between'>
				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2'
				>
					Adicionar Despesa
				</button>
				<button
					type='button'
					onClick={() => setShowDespesaForm(false)}
					className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4'
				>
					Fechar
				</button>
			</div>
		</form>
	)
}

export default DespesaForm
