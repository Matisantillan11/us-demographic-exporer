/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation, useQuery } from '@tanstack/react-query'
import { Filters, useFilters } from '../hooks/use-filters.hook'
import {
	ParsedDataUsaResponse,
	ParsedDataUsaResponseByYear,
	ParsedEnrollmentResponse,
	ParsedPopulationByRaceResponse,
} from '../interfaces/data-usa-response.interface'
import { getForeingAndNativesInformation, getExtraDetails, getStateInformationBySelectedYear } from '../services'
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect } from 'react'
import { useDetailedView } from '../hooks/use-detailed-view.hook'

interface DataFetchingContext {
	addFilter: (key: string, value: string) => void
	extraDetails:
		| {
				informationByState: unknown[]
				foreignPopulationByRace: ParsedPopulationByRaceResponse[]
				enrollments: ParsedEnrollmentResponse[]
		  }
		| undefined
	filters: Filters | undefined
	stateInformation: Array<ParsedDataUsaResponseByYear> | undefined
	foreingBornAndNativesData: Array<ParsedDataUsaResponse> | undefined
	isFetchingStateInformation: boolean
	isFetchingForeignBornAndNativesData: boolean
	isFetchingExtraDetails: boolean
	isOpen: boolean
	setIsDrawerOpen: Dispatch<SetStateAction<boolean>>
	handleDrawerState: (year: string) => void
}

const DataFetchingContext = createContext<DataFetchingContext>({
	extraDetails: {
		informationByState: [],
		foreignPopulationByRace: [],
		enrollments: [],
	},
	filters: undefined,
	stateInformation: undefined,
	foreingBornAndNativesData: undefined,
	isFetchingStateInformation: false,
	isFetchingForeignBornAndNativesData: false,
	isFetchingExtraDetails: false,
	addFilter: () => {},
	isOpen: false,
	handleDrawerState: () => {},
	setIsDrawerOpen: () => {},
})

export const DataFetchingProvider = ({ children }: { children: ReactNode }) => {
	const { isOpen, handleDrawerState, setIsDrawerOpen } = useDetailedView()
	const { filters, addFilter } = useFilters()

	const { data: foreingBornAndNativesData, isPending: isFetchingForeignBornAndNativesData } = useQuery({
		queryKey: ['foreignBornAndNativesData', filters],
		queryFn: () => getForeingAndNativesInformation({ year: filters.year }),
	})

	const {
		data: stateForeignBornAndNativesData,
		isPending: isFetchingStateInformation,
		mutate,
	} = useMutation({
		mutationKey: ['stateForeignBornAndNativesData', isOpen],
		mutationFn: () => getStateInformationBySelectedYear({ year: filters.year }),
	})

	const {
		data: extraDetails,
		isPending: isFetchingExtraDetails,
		mutate: mutateExtraDetails,
	} = useMutation({
		mutationKey: ['getExtraDetails', filters],
		mutationFn: () => getExtraDetails({ year: filters.year }),
	})

	const handleGetInformation = useCallback(async () => {
		if (isOpen) {
			await Promise.all([mutate(), mutateExtraDetails()])
		}
	}, [filters, isOpen])

	useEffect(() => {
		if (isOpen) {
			handleGetInformation()
		}
	}, [handleGetInformation, isOpen])

	console.log({ extraDetails, isFetchingExtraDetails })

	const handleDrawer = (year: string) => {
		handleDrawerState(year)
		addFilter('year', year)
	}

	return (
		<DataFetchingContext.Provider
			value={{
				addFilter,
				filters,
				foreingBornAndNativesData,
				handleDrawerState: handleDrawer,
				isFetchingStateInformation,
				isFetchingForeignBornAndNativesData,
				isOpen,
				setIsDrawerOpen,
				stateInformation: stateForeignBornAndNativesData,
				extraDetails: extraDetails,
				isFetchingExtraDetails: isFetchingExtraDetails,
			}}>
			{children}
		</DataFetchingContext.Provider>
	)
}

export const useDatafetchingContext = () => useContext(DataFetchingContext)
