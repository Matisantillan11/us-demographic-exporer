'use client'
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts'
import { ParsedDataUsaResponse } from '~/app/interfaces/data-usa-response.interface'
import CustomTooltip from './custom-tooltip.component'

import { Dispatch, SetStateAction } from 'react'

export default function BarChart({
	handleDrawer,
	data,
}: {
	handleDrawer: Dispatch<SetStateAction<boolean>>
	data: Array<ParsedDataUsaResponse>
}) {
	const handlePressBar = () => {
		handleDrawer((prev) => !prev)
	}

	return (
		<ResponsiveContainer width='100%' height={400}>
			<ComposedChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid stroke='transparent' />
				<XAxis dataKey='year' stroke='transparent' />
				<YAxis stroke='transparent' />
				<Tooltip content={<CustomTooltip />} />
				<Legend />

				<Bar
					dataKey='foreignBorn'
					stackId='a'
					fill='#D8FD20'
					name='Foreing born'
					onClick={handlePressBar}
					radius={[10, 10, 10, 10]}
					className='hover:cursor-pointer'
				/>
				<Bar
					dataKey='totalPopulation'
					stackId='a'
					fill='#1453BC'
					name='Total population'
					onClick={handlePressBar}
					radius={[10, 10, 10, 10]}
					className='hover:cursor-pointer'
				/>
			</ComposedChart>
		</ResponsiveContainer>
	)
}
