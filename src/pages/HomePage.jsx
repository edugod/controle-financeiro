import React, { useState, useEffect } from 'react';
import HistoricoDespesas from '../Components/HistoricoDespesas';
import DespesaForm from '../Components/DespesaForm';
import SaldoMensal from '../Components/SaldoMensal';
import despesaService from '../controllers/despesas';

const HomePage = () => {
  const [despesas, setDespesas] = useState([]);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    despesaService.getAll().then(response => {
      setDespesas(response.data)
    }).catch(error => {
      console.error("Error fetching despesas:", error);
    })
  },[])

  const handleAddDespesa = (novaDespesa) => {
    setDespesas([...despesas, { id: despesas.length + 1, ...novaDespesa }]);
    // Atualiza o saldo com base na nova despesa
    console.log('despesas :>> ', despesas);
    setSaldo(saldo - novaDespesa.valor);
    console.log('deposi de add :>> ', despesas);

  };
  
  return (
    <div>
      <DespesaForm onAddDespesa={handleAddDespesa} />
      <SaldoMensal saldo={saldo} />
      <HistoricoDespesas despesas={despesas} setDespesas={setDespesas} />
    </div>
  );
};

export default HomePage;
