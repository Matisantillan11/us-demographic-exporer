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
				percentage: data?.['Foreign-Born Citizens']
					? ((data?.['Foreign-Born Citizens'] / data.Population) * 100).toFixed(2)
					: '0',
			}
		})
	}

	throw new Error('No data to parse')
}

const groupEnrollmentByRace = (response: Array<USAEnrollmentResponse>): Array<ParsedEnrollmentResponse> => {
	const groupByRace: ParsedEnrollmentResponse[] = []

	response.forEach((item) => {
		const race = item['IPEDS Race']
		if (!groupByRace.find((el) => el?.race === race)) {
			groupByRace.push({
				race,
				enrollment_male: response.find((el) => el['IPEDS Race'] === race && el.Gender === 'Men')?.Enrollment ?? 0,
				enrollment_women: response.find((el) => el['IPEDS Race'] === race && el.Gender === 'Women')?.Enrollment ?? 0,
			})
		}
	})

	return groupByRace
}

export const transformEnrollmentResponse = (
	response: Array<USAEnrollmentResponse>,
): Array<ParsedEnrollmentResponse> => {
	if (response) {
		//group by IPEDS Race
		const groupedByRace = groupEnrollmentByRace(response)
		return groupedByRace
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
				totalPopulation: data['Total Population'],
				totalForeignPopulation: data['Total Population MOE Appx'],
			}
		})
	}

	throw new Error('No data to parse')
}
