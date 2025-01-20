'use client'
import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import { ChartWrapper } from '../chart-wrapper'
import { DetailedDrawer } from '../detailed-view'

import { RadialChart, Spinner } from '../ui'
import { DetailedTable } from '../detailed-table'
import ChartForeignByRace from '../chart-wrapper/chart-foreign-by-race.component'

export default function DashboardCards() {
	const { isOpen, handleDrawerState, extraDetails, isFetchingExtraDetails } = useDatafetchingContext()
	return (
		<div className='my-5'>
			<div className='w-full'>
				<ChartWrapper />
			</div>

			<DetailedDrawer open={isOpen} handleDrawerState={handleDrawerState}>
				{isFetchingExtraDetails ? (
					<div className='w-full h-full'>
						<Spinner />
					</div>
				) : (
					<>
						<RadialChart data={extraDetails?.foreignPopulationByRace} />
						<ChartForeignByRace />
						<DetailedTable />
					</>
				)}
			</DetailedDrawer>
		</div>
	)
}
