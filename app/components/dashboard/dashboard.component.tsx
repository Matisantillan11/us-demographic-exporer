'use client'
import { DataFetchingProvider } from '~/app/context/data-fetching.context'
import PageHeader from '../page-header/page-header.component'
import DashboardCards from './dashboard-cards.component'

export default function Dashboard() {
	return (
		<DataFetchingProvider>
			<PageHeader />
			<DashboardCards />
		</DataFetchingProvider>
	)
}
