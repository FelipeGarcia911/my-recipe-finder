import axios, { Method } from 'axios'

const instance = axios.create({
  baseURL: 'www.themealdb.com/api/json/v1/1/',
  headers: {},
})
export interface httpRequestProps {
  method: Method
  url: string
  params?: any
  data?: any
}

const httpRequest = async (payload: httpRequestProps) => {
  const { method, url, params, data } = payload
  try {
    const response = await instance({ method, url, params, data })
    return response
  } catch (error) {
    console.error('httpRequest', error)
  }
}

export default httpRequest
