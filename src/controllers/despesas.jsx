import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3000/api/despesas',
})

const getAll = () => {
	return api.get('/')
}

const create = (newObject) => {
	return api.post('/', newObject)
}

const update = (id, newObject) => {
	return api.put(`/${id}`, newObject)
}

const deleteDespesa = (id) => {
	return api.delete(`/${id}`)
}

export default { getAll, create, update, deleteDespesa }
