import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginController from '../controllers/login'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
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

		// Chama a função de login do controller
		const success = await loginController.login(username, password)

		if (success) {
			// Login bem-sucedido
			setError('')
			navigate('/')
			alert('Login bem-sucedido!')
			// Redirecionar ou executar ações apropriadas após o login
		} else {
			setError('Nome de usuário ou senha incorretos.')
		}
	}

	const handleLogout = () => {
		// Chama a função de logout do controller
		loginController.logout()
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
				<button onClick={handleLogout}>Sair</button>
			</form>
		</div>
	)
}

export default Login
