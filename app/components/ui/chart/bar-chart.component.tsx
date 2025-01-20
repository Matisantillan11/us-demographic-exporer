'use client'
import { XAxis, Tooltip, Legend, ResponsiveContainer, ComposedChart, YAxis } from 'recharts'

import CustomTooltip from './custom-tooltip.component'
import { ReactNode } from 'react'
import { formatNumberToLabel } from '~/app/utils'

export default function BarChart({
	xAxisDataKey,
	children,
	data,
}: {
	xAxisDataKey: string
	children: ReactNode | ReactNode[]
	data: Array<unknown> | undefined
}) {
	return (
		<ResponsiveContainer width='100%' height={600}>
			<ComposedChart
				data={data}
				margin={{
					top: 20,
					right: 0,
					left: 0,
					bottom: 5,
				}}>
				<XAxis dataKey={xAxisDataKey} className='text-wrap' />
				<YAxis tickFormatter={(value) => formatNumberToLabel(value)} />
				<Tooltip content={<CustomTooltip />} />
				<Legend />

				{children}
			</ComposedChart>
		</ResponsiveContainer>
	)
}
