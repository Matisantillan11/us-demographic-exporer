import {
	DataUSAResponse,
	DataUSAResponseByYear,
	ParsedDataUsaResponse,
	ParsedDataUsaResponseByYear,
	ParsedEnrollmentResponse,
	ParsedPopulationByRaceResponse,
	USAEnrollmentResponse,
	USAPopulationByRaceResponse,
} from '../interfaces/data-usa-response.interface'
import { formatNumberToLabel } from './format-numbers-to-labels.util'

/**
 * Parses the response from the Data USA API into a more usable format.
 * @param response - The response from the Data USA API.
 * @returns - The parsed response.
 */
export const transformDataUsaResponse = (response: Array<DataUSAResponse>): Array<ParsedDataUsaResponse> => {
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

export const transformDataUSAResponseByYear = (
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

export const transformEnrollmentResponse = (
	response: Array<USAEnrollmentResponse>,
): Array<ParsedEnrollmentResponse> => {
	if (response) {
		return response.map((data) => {
			return {
				gender: data?.Gender,
				race: data['IPEDS Race'],
				enrollment: data.Enrollment,
			}
		})
	}

	throw new Error('No data to parse')
}

export const transformPopulationByRaceResponse = (
	response: Array<USAPopulationByRaceResponse>,
): Array<ParsedPopulationByRaceResponse> => {
	if (response) {
		return response.map((data) => {
			return {
				race: data.Race.length > 20 ? `${data.Race.slice(0, 20)}...` : data.Race,
				totalPopulation: parseInt(data['Total Population'].toFixed(0)),
				totalForeignPopulation: data['Total Population MOE Appx'],
			}
		})
	}

	throw new Error('No data to parse')
}
