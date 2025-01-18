import { Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from '../ui'
import { createTableColumns } from './columns'

export default function StateTable() {
	const columns = createTableColumns([
		'State',
		'Total Population',
		'Total foreign citizens',
		'Percentage of foreign citizens',
	])

	return (
		<Table>
			<TableCaption>A detailed list</TableCaption>
			<TableHeader>
				<TableRow>{columns}</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Virginia</TableCell>
					<TableCell>450m</TableCell>
					<TableCell>45m</TableCell>
					<TableCell>10%</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
