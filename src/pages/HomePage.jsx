import React, { useState, useEffect } from 'react'
import HistoricoDespesas from '../Components/HistoricoDespesas'
import DespesaForm from '../Components/DespesaForm'
import SaldoMensal from '../Components/SaldoMensal'
import despesaService from '../controllers/despesas'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const HomePage = () => {
	const [despesas, setDespesas] = useState([])
	const [usuario, setUsuario] = useState(null) // Estado para armazenar informações do usuário

	const navigate = useNavigate()

	useEffect(() => {
		const token = localStorage.getItem('token')

		if (!token) {
			// Redirecionar para a página de login se o token não estiver presente
			navigate('/login')
			return // Evita executar o restante do código se não houver token
		}

		try {
			const decoded = jwtDecode(token)
			console.log(decoded) //aqui ele envia um objeto
			setUsuario(decoded.userId) // Armazenar informações do usuário no estado
		} catch (error) {
			// Se ocorrer um erro ao decodificar o token, redirecione para a página de login
			navigate('/login')
		}
	}, [])

	useEffect(() => {
		const fetchDespesas = async () => {
			try {
				const response = await despesaService.getAll()
				setDespesas(response.data)
			} catch (error) {
				console.error('Error fetching despesas:', error)
			}
		}
		fetchDespesas()
	}, [])

	const handleAddDespesa = (novaDespesa) => {
		setDespesas((prevDespesas) => [...prevDespesas, { id: prevDespesas.length + 1, ...novaDespesa }])
	}

	return (
		<div>
			<DespesaForm onAddDespesa={handleAddDespesa} usuario={usuario}/>
			<SaldoMensal despesas={despesas} usuario={usuario} />
			<HistoricoDespesas despesas={despesas} setDespesas={setDespesas} usuario={usuario} />
		</div>
	)
}

export default HomePage
