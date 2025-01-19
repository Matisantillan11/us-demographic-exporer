'use client'
import { useState } from 'react'
import { ParsedDataUsaResponse } from '../../interfaces/data-usa-response.interface'
import { BarChart } from '../ui'
import { DetailedDrawer } from '../detailed-view'

export default function ChartWrapper({ foreignsAndNatives }: { foreignsAndNatives: Array<ParsedDataUsaResponse> }) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	return (
		<div className='flex flex-col py-4 bg-[#1E1E1E] rounded-xl w-full'>
			<BarChart data={foreignsAndNatives} handleDrawer={setIsDrawerOpen} />
			<DetailedDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
		</div>
	)
}
