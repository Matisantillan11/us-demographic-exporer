import { ParsedPopulationByRaceResponse } from '~/app/interfaces/data-usa-response.interface'

export const transformDataForRadialChart = (data: Array<ParsedPopulationByRaceResponse> | undefined) => {
	//get total population sumatory
	let fullMark = 0
	data?.forEach((item) => (fullMark = fullMark + item.totalPopulation))

	return data?.map((item) => {
		return { subject: item.race, A: item.totalForeignPopulation, B: item.totalPopulation, fullMark }
	})
}
