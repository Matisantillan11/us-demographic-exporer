'use client'
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart } from 'recharts'
import { ParsedDataUsaResponse } from '~/app/interfaces/data-usa-response.interface'
import CustomTooltip from './custom-tooltip.component'

import { Dispatch, SetStateAction } from 'react'

export default function Chart({
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
			<BarChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray='2 2' />
				<XAxis dataKey='year' />
				<YAxis />
				<Tooltip content={<CustomTooltip />} />
				<Legend />

				<Bar dataKey='foreignBorn' stackId='a' fill='#D8FD20' name='Foreing born' onClick={handlePressBar} />

				<Bar dataKey='totalPopulation' stackId='a' fill='#1453BC' name='Total population' onClick={handlePressBar} />
			</BarChart>
		</ResponsiveContainer>
	)
}
