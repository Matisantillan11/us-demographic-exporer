import {
	DataUSAResponse,
	DataUSAResponseByYear,
	ParsedDataUsaResponse,
	ParsedDataUsaResponseByYear,
} from '../interfaces/data-usa-response.interface'
import { formatNumberToLabel } from './format-numbers-to-labels.util'

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

export const parseDataUSAResponseByYear = (
	response: Array<DataUSAResponseByYear>,
): Array<ParsedDataUsaResponseByYear> => {
	if (response) {
		return response.map((data) => {
			return {
				foreignBorn: data?.['Foreign-Born Citizens'] ? formatNumberToLabel(data?.['Foreign-Born Citizens']) : '0',
				population: formatNumberToLabel(data.Population),
				state: data.State,
				percentage: ((data?.['Foreign-Born Citizens'] / data.Population) * 100).toFixed(2),
			}
		})
	}

	throw new Error('No data to parse')
}
