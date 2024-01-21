import axios from "axios";
const baseUrl = 'http://localhost:3000/api/despesas'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }
  
  const deleteDespesa = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
  }
  
export default { getAll, create, update, deleteDespesa }