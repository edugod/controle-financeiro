import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault()

		// Validação básica
		if (username.trim() === '') {
			setError('Por favor, insira o nome de usuário.')
			return
		}

		if (password.trim() === '') {
			setError('Por favor, insira a senha.')
			return
		}

		// Autenticação simulada (substitua com sua lógica real de autenticação)
		if (username === 'admin' && password === 'admin') {
			// Login bem-sucedido
			setError('')
			navigate('/')
			alert('Login bem-sucedido!')
			// Redirecionar ou executar ações apropriadas após o login
		} else {
			setError('Nome de usuário ou senha incorretos.')
		}
	}

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='username'>Nome de usuário:</label>
					<input
						type='text'
						id='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Senha:</label>
					<input
						type='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{error && <div style={{ color: 'red' }}>{error}</div>}
				<button type='submit'>Entrar</button>
			</form>
		</div>
	)
}

export default Login