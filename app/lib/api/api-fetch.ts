import { BASE_URL } from './api-fetch.constants'
import { APIFetchArgs } from './api-fetch.types'

/**
 * Base API fetch function that handles the common logic for all API requests.
 * @returns - A promise that resolves to the parsed response data or rejects with an error.
 */
export const apiFetch = async <T>({ url, init, responseType }: APIFetchArgs): Promise<T> => {
	const endpoint = `${BASE_URL}${url}`
	const request = new Request(endpoint, {
		...init,
	})

	try {
		const response = await fetch(request)
		const result = await response.json()

		return result
	} catch (error) {
		console.error(`Error fetching data: ${responseType}: ${url}`, error)
		throw error
	}
}
