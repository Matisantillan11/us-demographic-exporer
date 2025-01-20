'use client'
import { Bar } from 'recharts'
import { BarChart } from '../ui'

import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import { useMemo } from 'react'
import { getValuesForFilter } from '../filter-by-date/utils'

export default function ChartWrapper() {
	const { isFetchingForeignBornAndNativesData, foreingBornAndNativesData, handleDrawerState, filters } =
		useDatafetchingContext()
	const handlePressBar = ({ year }: { year: string }) => {
		handleDrawerState(year)
	}

	const foreingBornAndNativesDataForChart = useMemo(() => {
		if (filters?.year) {
			const valuesForFilter = getValuesForFilter(filters?.year)
			return foreingBornAndNativesData?.filter((data) => valuesForFilter.includes(data.year))
		}

		return foreingBornAndNativesData
	}, [filters, foreingBornAndNativesData])

	return (
		<div className='flex flex-col py-4 bg-[#1E1E1E] rounded-xl w-full'>
			{isFetchingForeignBornAndNativesData ? (
				<p>loading...</p>
			) : (
				<BarChart data={foreingBornAndNativesDataForChart} xAxisDataKey='year'>
					<Bar
						dataKey='totalPopulation'
						fill='#1453BC'
						name='Total population'
						onClick={handlePressBar}
						className='hover:cursor-pointer'
					/>
					<Bar
						dataKey='foreignBorn'
						fill='#D8FD20'
						name='Foreing born'
						onClick={handlePressBar}
						className='hover:cursor-pointer'
					/>
				</BarChart>
			)}
		</div>
	)
}
