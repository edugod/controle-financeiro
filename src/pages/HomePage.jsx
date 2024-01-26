import React, { useState, useEffect } from 'react'
import HistoricoDespesas from '../Components/HistoricoDespesas'
import DespesaForm from '../Components/DespesaForm'
import SaldoMensal from '../Components/SaldoMensal'
import despesaService from '../controllers/despesas'

const HomePage = () => {
	const [despesas, setDespesas] = useState([])
	const [saldo, setSaldo] = useState(0)

	// useEffect para carregar dados iniciais
	useEffect(() => {
		despesaService
			.getAll()
			.then((response) => {
				setDespesas(response.data)
			})
			.catch((error) => {
				console.error('Error fetching despesas:', error)
			})
	}, [])

	// useEffect para calcular o saldo com base nas despesas
	useEffect(() => {
		const saldoTotal = despesas.reduce((total, despesa) => total - despesa.valor, 0)
		setSaldo(saldoTotal)
	}, [despesas])

	const handleAddDespesa = (novaDespesa) => {
		setDespesas([...despesas, { id: despesas.length + 1, ...novaDespesa }])
	}

	return (
		<div>
			<DespesaForm onAddDespesa={handleAddDespesa} />
			<SaldoMensal saldo={saldo} />
			<HistoricoDespesas despesas={despesas} setDespesas={setDespesas} />
		</div>
	)
}

export default HomePage
