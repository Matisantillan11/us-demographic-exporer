import { apiFetch, ApiResponse } from '~/app/lib/api'
import { RadialChart } from '../../ui'

export const getDetailedData = async () => {
	const response = await apiFetch<ApiResponse<Array<unknown>>>({
		url: '/data?State=04000US01&drilldowns=Race,Ethnicity&measures=Hispanic%20Population,Hispanic%20Population%20Moe&year=2022',
	})

	return response.data
}
export default async function DetailedDashboard() {
	const detailedData = await getDetailedData()
	console.log({ detailedData })
	return <RadialChart />
}
