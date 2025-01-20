import { ListFilter } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger, Select } from '../ui'
import { availableYears } from '~/app/constants/available-years.constant'
import { races } from '~/app/constants/races.constant'
import { getValuesForFilter } from '../filter-wrapper/utils'
import { Filters } from '~/app/hooks/use-filters.hook'

export default function TableFilters({
	addFilter,
	filters,
}: {
	addFilter: (key: string, value: string) => void
	filters: Filters
}) {
	const handleYearFilters = (value: string, filter: 'year' | 'state') => {
		const valuesForFilter = getValuesForFilter(value)
		addFilter(filter, valuesForFilter)
	}

	return (
		<Popover>
			<PopoverTrigger className='cursor-pointer flex justify-between items-center gap-2'>
				Filters <ListFilter size={16} />
			</PopoverTrigger>
			<PopoverContent className='p-5 bg-[#1E1E1E] grid gap-4'>
				<h2>Filters</h2>

				<Select
					multiple
					id='year-selector'
					searcherPlaceholder='Search year...'
					intialPlaceholder='Select year...'
					value={filters?.year}
					options={availableYears}
					handleSelection={(value) => handleYearFilters(value, 'year')}
				/>

				<Select
					id='race-selector'
					searcherPlaceholder='Search race...'
					intialPlaceholder='Select race...'
					options={races}
					value={undefined}
					handleSelection={(value) => handleYearFilters(value, 'state')}
				/>
			</PopoverContent>
		</Popover>
	)
}
