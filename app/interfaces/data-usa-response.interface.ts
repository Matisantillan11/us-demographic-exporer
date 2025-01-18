export interface DataUSAResponse {
	'Foreign-Born Citizens': number
	Geography: string
	'ID Geography': string
	'ID Year': number
	Population: number
	'Slug Geography': string
	Year: string
}

export interface DataUSAResponseByYear extends Partial<DataUSAResponse> {
	'Foreign-Born Citizens': number
	'ID State': string
	'ID Year': number
	Population: number
	'Slug State': string
	Year: string
	State: string
}

export interface ParsedDataUsaResponse {
	foreignBorn: number
	totalPopulation: number
	year: string
}

export interface ParsedDataUsaResponseByYear {
	foreignBorn: string
	population: string
	state: string
	percentage: string
}

export type KeyForChart = keyof ParsedDataUsaResponse
export type KeyForTable = keyof ParsedDataUsaResponseByYear
