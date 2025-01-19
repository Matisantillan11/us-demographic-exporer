'use client'
import { ListFilter } from 'lucide-react'
import { Button, Popover, PopoverContent, PopoverTrigger, Select } from '../ui'
import { availableYears } from '~/app/constants/available-years.constant'
import { races } from '~/app/constants/races.constant'

export default function FilterWrapper() {
	return (
		<Popover>
			<PopoverTrigger>
				<Button variant='ghost' size='default' className='rounded-full'>
					Filters <ListFilter />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='min-w-52 p-5 bg-[#1E1E1E] grid gap-4'>
				<h2>Filters</h2>

				<Select
					id='year-selector'
					searcherPlaceholder='Search year...'
					intialPlaceholder='Select year...'
					options={availableYears}
				/>

				<Select
					id='race-selector'
					searcherPlaceholder='Search race...'
					intialPlaceholder='Select race...'
					options={races}
				/>
			</PopoverContent>
		</Popover>
	)
}
