export interface DataUSAResponse {
	'Foreign-Born Citizens': number
	Geography: string
	'ID Geography': string
	'ID Year': number
	Population: number
	'Slug Geography': string
	Year: string
}

export interface ParsedDataUsaResponse {
	foreignBorn: number
	totalPopulation: number
	year: string
}

export type KeyForChart = keyof ParsedDataUsaResponse
