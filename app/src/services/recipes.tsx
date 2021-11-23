import { get } from 'lodash'

import httpRequest, { httpRequestProps } from '@/utils/http'

const getRecipeDetails = async (id: string) => {
  const payload: httpRequestProps = { method: 'GET', url: `lookup.php?i=${id}` }
  const response = await httpRequest(payload)
  return response
}

const searchRecipe = async (string: string) => {
  const payload: httpRequestProps = {
    method: 'GET',
    url: `search.php?s=${string}`,
  }
  const response = await httpRequest(payload)

  return response
}

const getRandomRecipe = async () => {
  const payload: httpRequestProps = { method: 'GET', url: `random.php` }
  let response = await httpRequest(payload)
  if (response) response = get(response, 'meals[0]')

  return response
}

const getRandomRecipies = async (quantity: number) => {
  const requests = []
  for (let index = 0; index < quantity; index++) {
    const request = getRandomRecipe()
    requests.push(request)
  }
  const result = await Promise.all(requests)
  return result
}

const api = { getRecipeDetails, searchRecipe, getRandomRecipies }

export default api
