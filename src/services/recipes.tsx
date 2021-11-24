import _ from 'lodash'

import httpRequest, { HTTPRequestProps } from '@/utils/http'

const getRecipeDetails = async (id: string) => {
  const payload: HTTPRequestProps = { method: 'GET', url: `lookup.php?i=${id}` }
  let response = await httpRequest(payload)
  if (response) response = _.get(response, 'meals[0]')

  return response
}

const searchRecipe = async (string: string) => {
  const payload: HTTPRequestProps = {
    method: 'GET',
    url: `search.php?s=${string}`,
  }
  let response = await httpRequest(payload)
  if (response) response = _.get(response, 'meals')

  return response
}

const getRandomRecipe = async () => {
  const payload: HTTPRequestProps = { method: 'GET', url: `random.php` }
  let response = await httpRequest(payload)
  if (response) response = _.get(response, 'meals[0]')

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
