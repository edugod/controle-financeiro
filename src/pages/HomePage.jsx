import React, { useState, useEffect } from 'react'
import HistoricoDespesas from '../Components/HistoricoDespesas'
import DespesaForm from '../Components/DespesaForm'
import SaldoMensal from '../Components/SaldoMensal'
import despesaService from '../controllers/despesas'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const HomePage = () => {
	const [despesas, setDespesas] = useState([])
	const [usuario, setUsuario] = useState(null)
	const [showDespesaForm, setShowDespesaForm] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (!token) {
			navigate('/login')
			return
		}

		try {
			const decoded = jwtDecode(token)
			setUsuario(decoded.userId)
		} catch (error) {
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
		setShowDespesaForm(false)
	}

	return (
		<div className='container bg-secondary mx-auto mt-8 px-4 py-8 rounded-2xl flex flex-col items-center'>
			<div className='mb-8'>
				<SaldoMensal despesas={despesas} usuario={usuario} />
			</div>
			<div className='mb-8'>
				<HistoricoDespesas despesas={despesas} setDespesas={setDespesas} usuario={usuario} />
			</div>
			<div className='flex flex-col items-center'>
				<button
					onClick={() => setShowDespesaForm(true)}
					className='bg-forth hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'
				>
					Adicionar Despesa
				</button>
				{showDespesaForm && (
					<div className='fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50'>
						<div className='bg-white shadow-2xl rounded-xl p-6'>
							<DespesaForm onAddDespesa={handleAddDespesa} usuario={usuario} />
							<button
								onClick={() => setShowDespesaForm(false)}
								className='mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
							>
								Fechar
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default HomePage
