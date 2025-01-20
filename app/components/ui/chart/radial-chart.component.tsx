'use client'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import { ParsedPopulationByRaceResponse } from '~/app/interfaces/data-usa-response.interface'
import { transformDataForRadialChart } from './utils'

export default function RadialChart({ data }: { data: Array<ParsedPopulationByRaceResponse> | undefined }) {
	const dataForRadial = transformDataForRadialChart(data)
	console.log({ dataForRadial })
	return (
		<ResponsiveContainer width='100%' height='50%'>
			<RadarChart cx='50%' cy='50%' outerRadius='80%' data={dataForRadial}>
				<PolarGrid />
				<PolarAngleAxis dataKey='subject' />
				<PolarRadiusAxis />
				<Radar dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	)
}
