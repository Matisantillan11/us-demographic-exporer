'use client'

import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from '../ui'
import { createTableColumns } from './columns'
import { ParsedDataUsaResponseByYear } from '~/app/interfaces/data-usa-response.interface'
import TableFilters from './table-filters.component'
import { Filters } from '~/app/hooks/use-filters.hook'

export default function DetailedTable() {
	const { stateInformation, isFetchingStateInformation, addFilter, filters } = useDatafetchingContext()
	const columns = createTableColumns(['State', 'Population', 'Foreign born', '% Foreing'])

	return (
		<div className='flex flex-col px-20 bg-[#1E1E1E] rounded-xl w-full'>
			<div className='w-full flex justify-between my-10 px-2'>
				<h2 className='font-bold'> Percentage of foreign born by state</h2>
				<TableFilters addFilter={addFilter} filters={filters as Filters} />
			</div>
			{isFetchingStateInformation ? (
				<p>Loading...</p>
			) : (
				<Table>
					<TableCaption>A detailed list</TableCaption>
					<TableHeader>
						<TableRow>{columns}</TableRow>
					</TableHeader>

					<TableBody>
						{stateInformation?.map((state: ParsedDataUsaResponseByYear) => (
							<TableRow key={state.state}>
								<TableCell>{state.state}</TableCell>
								<TableCell>{state.population}</TableCell>
								<TableCell>{state.foreignBorn}</TableCell>
								<TableCell>{`${state.percentage}%`}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</div>
	)
}
