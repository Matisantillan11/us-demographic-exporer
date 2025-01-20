'use client'

import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import { createTableColumns } from './columns'
import { ParsedDataUsaResponseByYear } from '~/app/interfaces/data-usa-response.interface'
import DataTable from '../ui/table/data-table.component'
import { Input } from '../ui'
import { useMemo, useState } from 'react'

export default function DetailedTable() {
	const [inputValue, setInputValue] = useState<string | undefined>(undefined)

	const { stateInformation, isFetchingStateInformation } = useDatafetchingContext()
	const columns = createTableColumns()

	const handleFilterByState = (value: string) => {
		setInputValue(value)
	}

	const stateInformationForTable = useMemo(() => {
		if (inputValue) {
			return stateInformation?.filter((stateInfo) => stateInfo.state.toLowerCase().includes(inputValue.toLowerCase()))
		}

		return stateInformation
	}, [stateInformation, inputValue])

	return (
		<div className='flex flex-col px-20 bg-[#1E1E1E] rounded-xl w-full'>
			<div className='w-full flex justify-between my-10 px-2'>
				<h2 className='font-bold'> Percentage of foreign born by state</h2>

				<div className='w-1/2'>
					<Input
						placeholder='Search by state...'
						className='rounded-lg'
						onChange={(e) => handleFilterByState(e.target.value)}
					/>
				</div>
			</div>
			{isFetchingStateInformation ? (
				<p>Loading...</p>
			) : (
				<DataTable columns={columns} data={stateInformationForTable as ParsedDataUsaResponseByYear[]} />
			)}
		</div>
	)
}
