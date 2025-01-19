import { ChartWrapper, DetailedDashboard, StateTable } from './components'

import { DataUSAResponse, ParsedDataUsaResponse } from './interfaces/data-usa-response.interface'
import { apiFetch, ApiResponse } from './lib/api'
import { parseDataUsaResponse } from './utils'

const getForeingAndNativesData = async (): Promise<Array<ParsedDataUsaResponse>> => {
	const apiResponse = await apiFetch<ApiResponse<Array<DataUSAResponse>>>({
		url: '/data?measure=Foreign-Born Citizens,Population&Geography=01000US',
	})

	return parseDataUsaResponse(apiResponse.data.sort((a, b) => (a.Year < b.Year ? -1 : 1)))
}

export default async function Home() {
	const foreignsAndNatives = await getForeingAndNativesData()

	return (
		<div className='p-4 md:px-6 lg:px-8'>
			<h1 className='text-xl md:text-3xl'>US Demographic data visualization</h1>
			<div className='my-5 grid grid-cols-8 gap-5 group'>
				<div className='col-span-8 lg:col-span-5 w-full grid gap-5 transition-all'>
					<ChartWrapper foreignsAndNatives={foreignsAndNatives}></ChartWrapper>
					<StateTable />
				</div>
				<div className='p-2 bg-[#1E1E1E] rounded-xl w-full hidden lg:block transition-all translate-x-0 col-span-3'>
					<DetailedDashboard />
				</div>
			</div>
		</div>
	)
}
