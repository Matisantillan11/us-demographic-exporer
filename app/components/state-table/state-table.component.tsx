import { apiFetch, ApiResponse } from '~/app/lib/api'
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from '../ui'
import { createTableColumns } from './columns'
import { DataUSAResponseByYear, ParsedDataUsaResponseByYear } from '~/app/interfaces/data-usa-response.interface'
import { parseDataUSAResponseByYear } from '~/app/utils'

const getStateInformationForSelectedYear = async (): Promise<Array<ParsedDataUsaResponseByYear>> => {
	const response = await apiFetch<ApiResponse<Array<DataUSAResponseByYear>>>({
		url: `/data?drilldowns=State&measure=Population,Foreign-Born%20Citizens&year=2022`,
	})

	return parseDataUSAResponseByYear(response.data)
}

export default async function StateTable() {
	const states = await getStateInformationForSelectedYear()

	const columns = createTableColumns([
		'State',
		'Total Population',
		'Total foreign citizens',
		'Percentage of foreign citizens',
	])

	return (
		<div className='flex flex-col p-4 bg-[#1E1E1E] rounded-xl w-full'>
			<Table>
				<TableCaption>A detailed list</TableCaption>
				<TableHeader>
					<TableRow>{columns}</TableRow>
				</TableHeader>
				<TableBody>
					{states.map((state) => (
						<TableRow key={state.state}>
							<TableCell>{state.state}</TableCell>
							<TableCell>{state.population}</TableCell>
							<TableCell>{state.foreignBorn}</TableCell>
							<TableCell>{`${state.percentage}%`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
