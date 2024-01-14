// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import HistoricoDespesas from '../Components/HistoricoDespesas';
import DespesaForm from '../Components/DespesaForm';
import SaldoMensal from '../Components/SaldoMensal';

const HomePage = () => {
  const [despesas, setDespesas] = useState([]);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    // Simula a leitura das despesas de um arquivo .json
    const fetchDespesas = async () => {
      try {
        const response = await fetch('/despesas.json');
        const data = await response.json();
        setDespesas(data.despesas);
        // Calcula o saldo total com base nas despesas
        const totalDespesas = data.despesas.reduce((total, despesa) => total + despesa.valor, 0);
        setSaldo(totalDespesas);
      } catch (error) {
        console.error('Erro ao obter as despesas:', error);
      }
    };

    fetchDespesas();
  }, []);

  const handleAddDespesa = (novaDespesa) => {
    setDespesas([...despesas, { id: despesas.length + 1, ...novaDespesa }]);
    // Atualiza o saldo com base na nova despesa
    console.log('Saldo :>> ', saldo);
    setSaldo(saldo - novaDespesa.valor);
  };

  return (
    <div>
      <DespesaForm onAddDespesa={handleAddDespesa} />
      <SaldoMensal saldo={saldo} />
      <HistoricoDespesas despesas={despesas} />
    </div>
  );
};

export default HomePage;
