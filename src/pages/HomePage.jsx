import React, { useState, useEffect } from 'react'
import HistoricoDespesas from '../Components/HistoricoDespesas'
import DespesaForm from '../Components/DespesaForm'
import SaldoMensal from '../Components/SaldoMensal'
import despesaService from '../controllers/despesas'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
	const [despesas, setDespesas] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirecionar para a página de login se o token não estiver presente
      navigate('/login');
    }
  }, []);


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
			<DespesaForm onAddDespesa={handleAddDespesa} />
			<SaldoMensal despesas={despesas} />
			<HistoricoDespesas despesas={despesas} setDespesas={setDespesas} />
		</div>
	)
}

export default HomePage
