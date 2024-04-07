import React from 'react'
import meses from '../../utils/meses'

const TodosMeses = ({ usuario, despesas }) => {
	// Função para calcular o total das despesas por mês para o usuário logado
	const calcularTotalDespesasPorMes = () => {
		const totalDespesasPorMes = {}

		// Inicializar o objeto totalDespesasPorMes com os meses
		meses.forEach(({ value }) => {
			totalDespesasPorMes[value] = 0
		})

		// Filtrar as despesas do usuário logado
		const despesasUsuario = despesas.filter((despesa) => despesa.createdBy.id === usuario)

		// Iterar sobre as despesas do usuário logado
		despesasUsuario.forEach((despesa) => {
			// Obter o mês da despesa
			const [dia, mes, ano] = despesa.dia.split('/')
			const mesDespesa = mes

			// Adicionar o valor da despesa ao total do mês correspondente
			totalDespesasPorMes[mesDespesa] += despesa.valor
		})

		return totalDespesasPorMes
	}

	// Calcular o total das despesas por mês para o usuário logado
	const totalDespesasPorMes = calcularTotalDespesasPorMes()

	return (
		<div>
			{meses.map(
				({ value, label }) =>
					totalDespesasPorMes[value] !== 0 && (
						<div key={value}>
							{/* Exibir o nome do mês e o total das despesas */}
							<p>
								{label}: {totalDespesasPorMes[value].toFixed(2)}
							</p>
						</div>
					)
			)}
		</div>
	)
}

export default TodosMeses
