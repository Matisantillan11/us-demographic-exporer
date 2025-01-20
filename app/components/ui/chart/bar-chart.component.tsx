'use client'
import { Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts'
import { ParsedDataUsaResponse } from '~/app/interfaces/data-usa-response.interface'
import CustomTooltip from './custom-tooltip.component'

export default function BarChart({
	handleDrawer,
	data,
}: {
	handleDrawer: (year: string) => void
	data: Array<ParsedDataUsaResponse> | undefined
}) {
	const handlePressBar = ({ year }: { year: string }) => {
		handleDrawer(year)
	}

	return (
		<ResponsiveContainer width='100%' height={700}>
			<ComposedChart
				data={data}
				margin={{
					top: 20,
					right: 0,
					left: 0,
					bottom: 5,
				}}>
				<XAxis dataKey='year' />
				<YAxis stroke='transparent' />
				<Tooltip content={<CustomTooltip />} />
				<Legend />

				<Bar
					dataKey='totalPopulation'
					fill='#1453BC'
					name='Total population'
					onClick={handlePressBar}
					radius={[10, 10, 10, 10]}
					className='hover:cursor-pointer'
				/>
				<Bar
					dataKey='foreignBorn'
					fill='#D8FD20'
					name='Foreing born'
					onClick={handlePressBar}
					radius={[10, 10, 10, 10]}
					className='hover:cursor-pointer'
				/>
			</ComposedChart>
		</ResponsiveContainer>
	)
}
