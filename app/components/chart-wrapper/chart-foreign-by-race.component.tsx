'use client'
import { AreaChart } from '../ui'
import { useDatafetchingContext } from '~/app/context/data-fetching.context'

export default function ChartForeignByRace() {
	const { extraDetails, filters } = useDatafetchingContext()

	return (
		<div className='px-20 h-full'>
			<div className='w-full my-10 px-2'>
				<h2 className='font-bold'>Population diversity</h2>
				<p>
					The United States is globally recognized for its cultural diversity. Throughout its history, it has welcomed
					people from various origins, languages, and traditions, forming a rich and complex society. The following
					chart illustrates this diversity of the year {filters?.year} by showing the quantity of the population
					represented by each race or ethnicity, including White, African American, Hispanic or Latino, Asian, Native
					American, and multiracial groups.
				</p>
			</div>

			<AreaChart data={extraDetails?.foreignPopulationByRace} />
		</div>
	)
}
