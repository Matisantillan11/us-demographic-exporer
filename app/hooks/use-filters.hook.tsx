'use client'
import { useState } from 'react'

export interface Filters {
	year?: string
	state?: string
}

export const useFilters = () => {
	const [filters, setFilters] = useState<Filters>({ year: undefined, state: undefined })

	const addFilter = (key: string, value: string) => {
		setFilters((prevFilters) => ({ ...prevFilters, [key]: value }))
	}

	const clearFilters = () => {
		setFilters({ year: undefined, state: undefined })
	}

	return { filters, addFilter, clearFilters }
}
