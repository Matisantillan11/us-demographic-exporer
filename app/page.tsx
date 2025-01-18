import { ChartWrapper } from './components'
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
			<ChartWrapper foreignsAndNatives={foreignsAndNatives} />
		</div>
	)
}
