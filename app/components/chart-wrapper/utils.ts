import { ParsedEnrollmentResponse, ParsedPopulationByRaceResponse } from '~/app/interfaces/data-usa-response.interface'

export const sumAllEnrolledRaces = (data: Array<ParsedEnrollmentResponse> | undefined) => {
	let allEnrolledRaces = 0
	if (data) {
		data.forEach((item) => {
			allEnrolledRaces = allEnrolledRaces + item.enrollment_male + item.enrollment_women
		})
	}

	return allEnrolledRaces
}

export const getTotalForeignPopulation = (data: Array<ParsedPopulationByRaceResponse> | undefined) => {
	let fullMark = 0
	if (data) {
		data.forEach((item) => (fullMark = fullMark + item.totalPopulation))
	}

	return fullMark
}
