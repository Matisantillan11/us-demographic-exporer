import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import { ChartWrapper } from '../chart-wrapper'
import { DetailedDrawer } from '../detailed-view'

import { RadialChart } from '../ui'
import { DetailedTable } from '../state-table'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

export default function DashboardCards() {
	const { isOpen, handleDrawerState, extraDetails, isFetchingExtraDetails, filters } = useDatafetchingContext()

	return (
		<div className='my-5'>
			<div className='w-full'>
				<ChartWrapper />
			</div>

			<DetailedDrawer open={isOpen} onOpenChange={handleDrawerState}>
				{isFetchingExtraDetails ? (
					<p>Loading...</p>
				) : (
					<>
						<RadialChart data={extraDetails?.foreignPopulationByRace} />
						<div className='px-20'>
							<div className='w-full my-10 px-2'>
								<h2 className='font-bold'>Enrollments by race</h2>
								<p>
									In {filters?.year} there were 19,205,707 students enrolled in the United States, this number
									represents 10% of the foreing citizens.
								</p>
							</div>
							<ResponsiveContainer width='100%' height={400}>
								<BarChart width={150} data={extraDetails?.enrollments}>
									<Tooltip />
									<Bar dataKey='gender' fill='#ce0e0e' />
									<Bar dataKey='enrollment' fill='#8884d8' />
								</BarChart>
							</ResponsiveContainer>
						</div>
						<DetailedTable />
					</>
				)}
			</DetailedDrawer>
		</div>
	)
}
