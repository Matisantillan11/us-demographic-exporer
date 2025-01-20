'use client'
import { Select } from '../ui'

import { Filters } from '~/app/hooks/use-filters.hook'
import { getValuesForFilter } from './utils'
import { availableYears } from '~/app/constants/available-years.constant'
import { X } from 'lucide-react'

export default function FilterByDate({
	addFilter,
	clearFilters,
	filters,
}: {
	addFilter: (key: string, value: string) => void
	clearFilters: () => void
	filters: Filters | undefined
}) {
	const handleYearFilters = (value: string, filter: 'year' | 'state') => {
		const valuesForFilter = getValuesForFilter(value)
		addFilter(filter, valuesForFilter)
	}

	return (
		<div className='w-full flex flex-row items-center justify-end'>
			<Select
				multiple
				id='year-selector'
				searcherPlaceholder='Search year...'
				intialPlaceholder='Select year...'
				value={filters?.year}
				options={availableYears}
				handleSelection={(value) => handleYearFilters(value, 'year')}
			/>
			{filters?.year?.length ? (
				<X className='ml-2 h-4 w-4 shrink-0 opacity-50 cursor-pointer' onClick={clearFilters} />
			) : null}
		</div>
	)
}
