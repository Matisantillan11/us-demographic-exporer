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
import { apiFetch, ApiResponse } from '../lib/api'
import {
	transformDataUsaResponse,
	transformDataUSAResponseByYear,
	transformEnrollmentResponse,
	transformPopulationByRaceResponse,
} from '../utils'

const DRILLDOWNS = 'State'
const MEASURES = 'Foreign-Born Citizens,Population'
const GEOGRAPHY = '01000US'

export async function getForeingAndNativesInformation({
	year,
}: {
	year?: string
}): Promise<Array<ParsedDataUsaResponse>> {
	try {
		const url = year
			? `/data?measure=${MEASURES}&Geography=${GEOGRAPHY}&Year=${year}`
			: `/data?measure=${MEASURES}&Geography=${GEOGRAPHY}`

		const apiResponse = await apiFetch<ApiResponse<Array<DataUSAResponse>>>({
			url,
		})

		return transformDataUsaResponse(apiResponse.data.sort((a, b) => (a.Year < b.Year ? -1 : 1)))
	} catch (error) {
		throw new Error(`Error fetching foreign born and natives information: ${error}`)
	}
}

export async function getStateInformationBySelectedYear({
	year = '2022',
}: {
	year?: string
}): Promise<Array<ParsedDataUsaResponseByYear>> {
	try {
		const response = await apiFetch<ApiResponse<Array<DataUSAResponseByYear>>>({
			url: `/data?drilldowns=${DRILLDOWNS}&measure=${MEASURES}&year=${year}`,
		})
		return transformDataUSAResponseByYear(response.data)
	} catch (error) {
		throw new Error(`Error fetching state information: ${error}`)
	}
}

async function getInformationByState({ year = '2022' }: { state?: string; year?: string }) {
	try {
		const EXTRA_DRILLDOWNS = `${DRILLDOWNS},Race,Age,Gender`
		const EXTRA_MEASURES = `${MEASURES},Hispanic Population,Hispanic Population Moe`
		const response = await apiFetch<ApiResponse<Array<unknown>>>({
			url: `/data?drilldowns=${EXTRA_DRILLDOWNS}&measures=${EXTRA_MEASURES}&year=${year}`,
		})

		return response.data
	} catch (error) {
		throw new Error(`Error fetching information by state: ${error}`)
	}
}

async function getEnrollments({ year = '2022' }: { year?: string }): Promise<Array<ParsedEnrollmentResponse>> {
	try {
		const ENROLLMENT_DRILLDOWNS = `IPEDS Race,Gender`
		const ENROLLMENT_MEASURES = `Enrollment`
		const response = await apiFetch<ApiResponse<Array<USAEnrollmentResponse>>>({
			url: `/data?drilldowns=${ENROLLMENT_DRILLDOWNS}&measures=${ENROLLMENT_MEASURES}&year=${year}`,
		})

		return transformEnrollmentResponse(response.data)
	} catch (error) {
		throw new Error(`Error fetching information by state: ${error}`)
	}
}

async function getForeignPopulationByRace({
	year = '2022',
}: {
	year?: string
}): Promise<Array<ParsedPopulationByRaceResponse>> {
	try {
		const NATIVITY = '2'
		const FOREIGN_POPULATION_DRILLDOWNS = `Race,Gender`
		const FOREIGN_POPULATION_MEASURES = `Total Population,Total Population MOE Appx`
		const response = await apiFetch<ApiResponse<Array<USAPopulationByRaceResponse>>>({
			url: `/data?Geography=${GEOGRAPHY}&Nativity=${NATIVITY}&measure=${FOREIGN_POPULATION_MEASURES}&drilldowns=${FOREIGN_POPULATION_DRILLDOWNS}&year=${year}`,
		})

		return transformPopulationByRaceResponse(response.data)
	} catch (error) {
		throw new Error(`Error fetching information by race: ${error}`)
	}
}

export async function getExtraDetails({ year = '2022' }: { year?: string }) {
	try {
		const [informationByState, foreignPopulationByRace, enrollments] = await Promise.all([
			getInformationByState({ year }),
			getForeignPopulationByRace({ year }),
			getEnrollments({ year }),
		])

		return {
			informationByState,
			foreignPopulationByRace,
			enrollments,
		}
	} catch (error) {
		throw new Error(`Error fetching extra details: ${error}`)
	}
}
