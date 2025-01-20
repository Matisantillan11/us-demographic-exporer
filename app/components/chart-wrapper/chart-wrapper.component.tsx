'use client'
import { BarChart } from '../ui'

import { useDatafetchingContext } from '~/app/context/data-fetching.context'

export default function ChartWrapper() {
	const { isFetchingForeignBornAndNativesData, foreingBornAndNativesData, handleDrawerState } = useDatafetchingContext()

	return (
		<div className='flex flex-col py-4 bg-[#1E1E1E] rounded-xl w-full'>
			{isFetchingForeignBornAndNativesData ? (
				<p>loading...</p>
			) : (
				<BarChart data={foreingBornAndNativesData} handleDrawer={handleDrawerState} />
			)}
		</div>
	)
}
