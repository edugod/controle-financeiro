import React from 'react'
import meses from '../../utils/meses'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const TodosMeses = ({ usuario, despesas }) => {
	const dispatch = useDispatch()

	// Função para calcular o total das despesas por mês para o usuário logado
	const calcularTotalDespesasPorMes = () => {
		const totalDespesasPorMes = {}
		const totalInvestimeto = {}

		// Inicializar o objeto totalDespesasPorMes com os meses
		meses.forEach(({ value }) => {
			totalDespesasPorMes[value] = 0
			totalInvestimeto[value] = 0
		})

		// Filtrar as despesas do usuário logado
		const despesasUsuario = despesas.filter((despesa) => despesa.createdBy.id === usuario)
		const investimentosDoUsuario = despesasUsuario.filter((despesa) => despesa.categoria === 'Investimento')

		// Iterar sobre as despesas do usuário logado
		despesasUsuario.forEach((despesa) => {
			// Obter o mês da despesa
			const [dia, mes, ano] = despesa.dia.split('/')
			const mesDespesa = mes

			// Adicionar o valor da despesa ao total do mês correspondente
			totalDespesasPorMes[mesDespesa] += despesa.valor
		})

		investimentosDoUsuario.forEach((desapesa) => {
			const [dia, mes, ano] = despesa.dia.split('/')
			const mesDespesa = mes

			investimentosDoUsuario[mesDespesa] += despesa.valor
		})


		return totalDespesasPorMes, totalInvestimeto
	}

	// Calcular o total das despesas por mês para o usuário logado
	const totalDespesasPorMes = calcularTotalDespesasPorMes()

	const mudarMes = (mes) => dispatch(setFilter(mes)) //alterar o mês

	return (
		<div>
			<h2 className='text-lg font-bold mb-2 min-w-80'>Histórico Meses</h2>
			<div className='grid grid-cols-1 gap-4 '>
				{meses.map(
					({ value, label }) =>
						totalDespesasPorMes[value] !== 0 && (
							<div
								key={value}
								className='flex justify-between items-center bg-gray-100 p-2 rounded-xl mb-1 shadow-xl'
								onClick={() => mudarMes(value)}
							>
								<span className='font-semibold'>{label}</span>
								<span>{totalDespesasPorMes[value].toFixed(2)}</span>
							</div>
						)
				)}
			</div>
		</div>
	)
}

export default TodosMeses
