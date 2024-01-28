import React, { useState } from 'react'

const SaldoMensal = ({ saldo, despesas }) => {
	const [mesSelecionado, setMesSelecionado] = useState('')

	const filtrarPorMes = (mes) => {
		// Lógica para filtrar os dados pelo mês
		// Exemplo: Filtrar por mês "01" para janeiro
		const dadosFiltrados = despesas.filter((item) => item.dia.split('/')[1] === mes)
		console.log('dadosFiltrados :>> ', dadosFiltrados)
		console.log(`escolhido o mÊs ${mes}`)
	}

	return (
		<div>
			<h2>Saldo do Mês</h2>
			<div>
				<select
					value={mesSelecionado}
					onChange={(e) => {
						setMesSelecionado(e.target.value)
						filtrarPorMes(e.target.value)
					}}>
					<option value='00'>Todos os Meses</option>
					<option value='01'>Janeiro</option>
					<option value='02'>Fevereiro</option>
					{/* Adicione mais opções para os outros meses, se necessário */}
				</select>
			</div>
			<p>{saldo}</p>
		</div>
	)
}

export default SaldoMensal
