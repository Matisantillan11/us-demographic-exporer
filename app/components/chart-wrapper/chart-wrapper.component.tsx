'use client'
import { useState } from 'react'
import { ParsedDataUsaResponse } from '../../interfaces/data-usa-response.interface'
import { Chart } from '../ui'
import { DetailedDrawer } from '../detailed-drawer/detailed-drawer.component'

export default function ChartWrapper({ foreignsAndNatives }: { foreignsAndNatives: Array<ParsedDataUsaResponse> }) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	return (
		<div className='flex flex-col space-y-4'>
			<Chart data={foreignsAndNatives} handleDrawer={setIsDrawerOpen} />
			<DetailedDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
		</div>
	)
}
