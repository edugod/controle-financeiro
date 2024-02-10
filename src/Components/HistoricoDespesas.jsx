import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import despesaService from '../controllers/despesas'

const HistoricoDespesas = ({ despesas, setDespesas }) => {
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [deletingDespesaId, setDeletingDespesaId] = useState(null)

	// Obter o mês selecionado do Redux
	const mesSelecionado = useSelector((state) => state.filter)

	useEffect(() => {
		console.log('Mes selecionado:', mesSelecionado)
	}, [mesSelecionado])

	const handleDelete = async (despesaId) => {
		// Abre o modal de confirmação
		setShowDeleteModal(true)
		setDeletingDespesaId(despesaId)
	}

	const cancelDelete = () => {
		setShowDeleteModal(false)
		setDeletingDespesaId(null)
	}

	const confirmDelete = async () => {
		try {
			await despesaService.deleteDespesa(deletingDespesaId)

			// Atualiza o estado para refletir a exclusão no frontend
			setDespesas((prevDespesas) => prevDespesas.filter((despesa) => despesa.id !== deletingDespesaId))
			// Fecha o modal de confirmação
			setShowDeleteModal(false)
			setDeletingDespesaId(null)
		} catch (error) {
			console.error('Erro ao deletar despesa:', error)
		}
	}

	const despesasFiltradas = despesas.filter((despesa) => despesa.dia.includes(`/${mesSelecionado}/`))
	console.log('despesasFiltradas :>> ', despesasFiltradas)

	return (
		<div>
			<h2>Histórico de Despesas</h2>
			<ul>
				{(mesSelecionado === '00' ? despesas : despesasFiltradas)
					.sort((a, b) => {
						// Converta as strings 'dd/mm/yyyy' em objetos de data
						const dateA = new Date(
							parseInt(a.dia.split('/')[2]),
							parseInt(a.dia.split('/')[1]) - 1,
							parseInt(a.dia.split('/')[0])
						)
						const dateB = new Date(
							parseInt(b.dia.split('/')[2]),
							parseInt(b.dia.split('/')[1]) - 1,
							parseInt(b.dia.split('/')[0])
						)

						// Compare as datas para ordenação crescente
						return dateA - dateB
					})
					.map((despesa) => (
						<li key={despesa.id}>
							Dia: {despesa.dia} | Valor: R$ {despesa.valor.toFixed(2)} | Observação:{' '}
							{despesa.observacao}
							<button onClick={() => handleDelete(despesa.id)}>Deletar</button>
						</li>
					))}
			</ul>

			{/* Modal de Confirmação */}
			{showDeleteModal && (
				<div className='modal'>
					<p>Tem certeza que deseja deletar?</p>
					<button onClick={confirmDelete}>Sim</button>
					<button onClick={cancelDelete}>Cancelar</button>
				</div>
			)}
		</div>
	)
}

export default HistoricoDespesas
