import { Chart } from './components'
import { DataUSAResponse } from './interfaces/data-usa-response.interface'
import { apiFetch, ApiResponse } from './lib/api'
import { parseDataUsaResponse } from './utils'

export default async function Home() {
	const apiResponse = await apiFetch<ApiResponse<Array<DataUSAResponse>>>({
		url: '/data?measure=Foreign-Born Citizens,Population&Geography=01000US',
	})

	console.log({ apiResponse: apiResponse.data })
	return <Chart data={parseDataUsaResponse(apiResponse.data)} />
}
