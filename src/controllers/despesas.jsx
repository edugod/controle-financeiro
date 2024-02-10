import axios from 'axios'
const baseURL = 'http://localhost:3000/api/despesas'

const getAll = () => {
	return axios.get(baseURL)
}

const create = (newObject) => {
	return axios.post(baseURL, newObject)
}

const update = (id, newObject) => {
	return axios.put(`${baseURL}/${id}`, newObject)
}

const deleteDespesa = (id) => {
	return axios.delete(`${baseURL}/${id}`)
}


export default { getAll, create, update, deleteDespesa }