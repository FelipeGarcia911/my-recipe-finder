import axios, { Method } from 'axios'

interface HTTPResponse {
  response: any
}

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  headers: {},
})
export interface httpRequestProps {
  method: Method
  url: string
  params?: any
  data?: any
}

const httpRequest = async (payload: httpRequestProps): Promise<HTTPResponse> => {
  const { method, url, params, data } = payload
  let response = null
  try {
    const config = { method, url, params, data }
    const { data: result, status } = await instance(config)
    if (status === 200) response = result
  } catch (error) {
    console.error('httpRequest', error)
  }

  return response
}

export default httpRequest
