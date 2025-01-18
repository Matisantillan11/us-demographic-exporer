'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ParsedDataUsaResponse } from '~/app/interfaces/data-usa-response.interface'
import CustomTooltip from './custom-tooltip.component'

export default function Chart({ data }: { data: Array<ParsedDataUsaResponse> }) {
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
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='year' />
				<YAxis />
				<Tooltip content={<CustomTooltip />} />
				<Legend />
				<Bar dataKey='totalPopulation' fill='#8884d8' name='Población Total' />
				<Bar dataKey='foreignBorn' fill='#82ca9d' name='Nacidos en el Extranjero' />
			</BarChart>
		</ResponsiveContainer>
	)
}
