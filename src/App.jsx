import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

const App = () => {
  useEffect(() => {
    const checkBackendAvailability = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        if (response.status === 200) {
          console.log('Backend está disponível!');
          // Ative o botão de login ou exiba uma mensagem indicando que o backend está pronto
        } else {
          console.log('O backend ainda está iniciando. Tente novamente mais tarde.');
          // Mantenha o botão de login desativado ou exiba uma mensagem informando que o backend está iniciando
        }
      } catch (error) {
        console.error('Erro ao verificar a disponibilidade do backend:', error);
        // Exiba uma mensagem de erro genérica
      }
    };

    // Verifique a disponibilidade do backend assim que o componente App for montado
    checkBackendAvailability();

    // Verifique periodicamente a disponibilidade do backend a cada 5 segundos
    const intervalId = setInterval(checkBackendAvailability, 5000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // Executar o efeito apenas uma vez após a montagem do componente

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
