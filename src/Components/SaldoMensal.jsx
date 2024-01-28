import React, { useState, useEffect } from 'react'
import despesaService from '../controllers/despesas'

const SaldoMensal = ({ saldo, despesa }) => {
	const [mesSelecionado, setMesSelecionado] = useState('')
	const [despesas, setDespesas] = useState([])

	useEffect(() => {
		despesaService
			.getAll()
			.then((response) => {
				setDespesas(response.data)
			})
			.catch((error) => {
				console.error('Error fetching despesas:', error)
			})
	}, []) // O array vazio significa que este useEffect será executado apenas uma vez, equivalente ao componentDidMount

	const filtrarPorMes = (mes) => {
		// Lógica para filtrar os dados pelo mês
		// Exemplo: Filtrar por mês "01" para janeiro
		const dadosFiltrados = despesas.filter((item) => item.dia.split('/')[1] === mes)
		console.log('dadosFiltrados :>> ', dadosFiltrados)
	}
	return (
		<div>
			<h2>Saldo do Mês</h2>
			<p>{saldo}</p>
			<div>
				<label>Selecione o Mês:</label>
				<select
					value={mesSelecionado}
					onChange={(e) => {
						setMesSelecionado(e.target.value)
						filtrarPorMes(e.target.value)
					}}
				>
					<option value=''>Todos os Meses</option>
					<option value='01'>Janeiro</option>
					<option value='02'>Fevereiro</option>
					{/* Adicione mais opções para os outros meses, se necessário */}
				</select>
			</div>
		</div>
	)
}

export default SaldoMensal
