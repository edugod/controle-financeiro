import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<HomePage />} />
			</Routes>
		</Router>
	)
}

export default App
