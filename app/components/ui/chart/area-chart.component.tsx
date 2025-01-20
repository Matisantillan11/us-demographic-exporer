'use client'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ParsedPopulationByRaceResponse } from '~/app/interfaces/data-usa-response.interface'
import { transformDataForAreaChart } from './utils'
import CustomTooltip from './custom-tooltip.component'

export default function AreaChart({ data }: { data: Array<ParsedPopulationByRaceResponse> | undefined }) {
	const dataForArea = transformDataForAreaChart(data)

	return (
		<ResponsiveContainer width='100%' height='80%'>
			<RadarChart cx='50%' cy='50%' outerRadius='80%' data={dataForArea}>
				<PolarGrid />
				<PolarAngleAxis dataKey='subject' />
				<PolarRadiusAxis />
				<Tooltip content={<CustomTooltip />} />
				<Radar
					name='Foreing population'
					dataKey='totalForeignPopulation'
					stroke='#8884d8'
					fill='#8884d8'
					fillOpacity={0.6}
				/>
			</RadarChart>
		</ResponsiveContainer>
	)
}
