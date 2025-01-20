import { useState } from 'react'

export const useDetailedView = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
	const [selectedYear, setSelectedYear] = useState<string | undefined>(undefined)

	const handleDrawerState = (year: string) => {
		if (isDrawerOpen) {
			handleSelectYear(year)
		} else {
			setSelectedYear(undefined)
		}

		setIsDrawerOpen(!isDrawerOpen)
	}

	const handleSelectYear = (year: string) => {
		setSelectedYear(year)
	}

	return {
		isOpen: isDrawerOpen,
		handleDrawerState,
		handleSelectYear,
		selectedYear,
		setIsDrawerOpen,
	}
}
