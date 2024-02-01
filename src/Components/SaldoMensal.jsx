import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const SaldoMensal = ({ despesas }) => {
	const [saldo, setSaldo] = useState(0)
	const dispatch = useDispatch()
	const mesSelecionado = useSelector((state) => state.filter)

	const despesasFiltradas = despesas.filter((despesa) => despesa.dia.includes(`/${mesSelecionado}/`))

	useEffect(() => {
		const despesasParaCalcularSaldo = mesSelecionado === '00' ? despesas : despesasFiltradas
		const saldoTotal = despesasParaCalcularSaldo.reduce((total, despesa) => total + despesa.valor, 0)
		setSaldo(saldoTotal)
	}, [mesSelecionado, despesas, despesasFiltradas])
	//essas 3 [] indicam que sempre que um deles sofrer alguma alteração
	//irá novamente fazer a renderização

	const filtrarPorMes = (mes) => {
		dispatch(setFilter(mes))
		console.log(`Escolhido o mês ${mes}`)
	}

	const meses = [
		{ value: '00', label: 'Todos os Meses' },
		{ value: '01', label: 'Janeiro' },
		{ value: '02', label: 'Fevereiro' },
		{ value: '03', label: 'Março' },
	]

	return (
		<div>
			<h2>{mesSelecionado == '00' ? 'Saldo Anual:' : `Saldo No Mês:`}</h2>
			<div>
				<select value={mesSelecionado} onChange={(e) => filtrarPorMes(e.target.value)}>
					{meses.map(({ value, label }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
			<p>{saldo}</p>
		</div>
	)
}

export default SaldoMensal


teste