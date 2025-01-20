import { ColumnDef } from '@tanstack/react-table'
import { ParsedDataUsaResponseByYear } from '~/app/interfaces/data-usa-response.interface'

export const accessorKeys = Object.freeze({
	foreignBorn: 'foreignBorn',
	population: 'population',
	state: 'state',
	percentage: 'percentage',
})

export const createTableColumns = () => {
	const columns: Array<ColumnDef<ParsedDataUsaResponseByYear>> = [
		{
			enableSorting: true,
			id: accessorKeys.state,
			accessorKey: accessorKeys.state,
			cell: ({ getValue }) => {
				return getValue() ?? 'No Info'
			},
			header: `State`,
		},
		{
			enableSorting: true,
			id: accessorKeys.population,
			accessorKey: accessorKeys.population,
			cell: ({ getValue }) => {
				return getValue() ?? 'No Info'
			},
			header: `Total Population`,
		},
		{
			enableSorting: true,
			id: accessorKeys.foreignBorn,
			accessorKey: accessorKeys.foreignBorn,
			cell: ({ getValue }) => {
				return getValue() ?? 'No Info'
			},
			header: `Foreign Born`,
		},
		{
			enableSorting: true,
			id: accessorKeys.percentage,
			accessorKey: accessorKeys.percentage,
			cell: ({ getValue }) => {
				return getValue() ? `${getValue()}%` : 'No Info'
			},
			header: `% Percentage`,
		},
	]

	return columns
}
