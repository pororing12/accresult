import axios from 'axios'
console.log('b')

const apiInstance = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})

export default apiInstance
