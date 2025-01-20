import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import FilterByDate from '../filter-by-date/filter-by-date.component'

export default function PageHeader() {
	const { filters, addFilter, clearFilters } = useDatafetchingContext()
	return (
		<div className='flex flex-row justify-between items-center'>
			<h1 className='text-xl md:text-3xl'>US Demographic data visualization</h1>
			<FilterByDate filters={filters} addFilter={addFilter} clearFilters={clearFilters} />
		</div>
	)
}
