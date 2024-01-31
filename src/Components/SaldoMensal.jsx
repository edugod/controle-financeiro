import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const SaldoMensal = ({ saldo, despesas }) => {
	
	const dispatch = useDispatch()
	const mesSelecionado = useSelector((state) => state.filter)

	const filtrarPorMes = (mes) => {
		dispatch(setFilter(mes))

		// Lógica para filtrar os dados pelo mês
		const dadosFiltrados = despesas.filter((despesa) => {
			const mesDespesa = despesa.dia.split('/')[1]
			return mes === '00' || mesDespesa === mes
		})

		console.log('dadosFiltrados :>> ', dadosFiltrados)
		console.log(`Escolhido o mês ${mes}`)
	}

	const meses = [
		{ value: '00', label: 'Todos os Meses' },
		{ value: '01', label: 'Janeiro' },
		{ value: '02', label: 'Fevereiro' },
		{ value: '03', label: 'Março' },
		// Adicione mais opções para os outros meses, se necessário
	]

	return (
		<div>
			<h2>Saldo do Mês</h2>
			<div>
				<select
					value={mesSelecionado}
					onChange={(e) => {
						filtrarPorMes(e.target.value)
					}}
				>
					{meses.map((mes) => (
						<option key={mes.value} value={mes.value}>
							{mes.label}
						</option>
					))}
				</select>
			</div>
			<p>{saldo}</p>
		</div>
	)
}

export default SaldoMensal
