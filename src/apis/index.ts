import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://8faa-103-47-103-12.ngrok-free.app/',
  timeout: 3000
})
