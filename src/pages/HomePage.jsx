import React, { useState, useEffect } from 'react';
import HistoricoDespesas from '../Components/HistoricoDespesas';
import DespesaForm from '../Components/DespesaForm';
import SaldoMensal from '../Components/SaldoMensal';
import despesaService from '../controllers/despesas';

const HomePage = () => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const fetchDespesas = async () => {
      try {
        const response = await despesaService.getAll();
        setDespesas(response.data);
      } catch (error) {
        console.error('Error fetching despesas:', error);
      }
    };
    fetchDespesas();
  }, []);

  const handleAddDespesa = (novaDespesa) => {
    setDespesas((prevDespesas) => [...prevDespesas, { id: prevDespesas.length + 1, ...novaDespesa }]);
  };

  return (
    <div>
      <DespesaForm onAddDespesa={handleAddDespesa} />
      <SaldoMensal despesas={despesas} />
      <HistoricoDespesas despesas={despesas} setDespesas={setDespesas} />
    </div>
  );
};

export default HomePage;