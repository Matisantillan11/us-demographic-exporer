import { DataUSAResponse, ParsedDataUsaResponse } from '../interfaces/data-usa-response.interface'

/**
 * Parses the response from the Data USA API into a more usable format.
 * @param response - The response from the Data USA API.
 * @returns - The parsed response.
 */
export const parseDataUsaResponse = (response: Array<DataUSAResponse>): Array<ParsedDataUsaResponse> => {
	if (response) {
		return response.map((data) => {
			return {
				foreignBorn: data?.['Foreign-Born Citizens'] ?? 0,
				totalPopulation: data.Population,
				year: data.Year,
			}
		})
	}

	throw new Error('No data to parse')
}
