import { ParsedPopulationByRaceResponse } from '~/app/interfaces/data-usa-response.interface'
import { getTotalForeignPopulation } from '../../chart-wrapper/utils'

export const transformDataForAreaChart = (data: Array<ParsedPopulationByRaceResponse> | undefined) => {
	//get total population sumatory
	const fullMark = getTotalForeignPopulation(data)

	return data?.map((item) => {
		return {
			subject: item.race,
			totalForeignPopulation: item.totalForeignPopulation,
			totalPopulation: item.totalPopulation,
			fullMark,
		}
	})
}
