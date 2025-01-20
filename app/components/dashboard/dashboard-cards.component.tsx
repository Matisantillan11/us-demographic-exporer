'use client'
import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import { ChartForeignEnrolledByRace, ChartForeignByRace, ChartWrapper } from '../chart-wrapper'
import { DetailedDrawer } from '../detailed-view'

import { Spinner } from '../ui'
import { DetailedTable } from '../detailed-table'

export default function DashboardCards() {
	const { isOpen, handleDrawerState, isFetchingExtraDetails } = useDatafetchingContext()
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
						<ChartForeignByRace />
						<ChartForeignEnrolledByRace />
						<DetailedTable />
					</>
				)}
			</DetailedDrawer>
		</div>
	)
}
