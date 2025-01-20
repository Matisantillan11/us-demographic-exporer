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

export interface USAEnrollmentResponse {
	'ID Gender': number
	Gender: string
	'ID IPEDS Race': string
	'IPEDS Race': string
	'ID Year': number
	Year: string
	Enrollment: number
}

export interface USAPopulationByRaceResponse {
	'ID Race': number
	Race: string
	'ID Year': number
	Year: string
	'ID Nativity': number
	Nativity: string
	'Total Population': number
	'Total Population MOE Appx': number
	Geography: string
	'ID Geography': string
	'Slug Geography': string
}

export interface ParsedPopulationByRaceResponse {
	race: string
	totalPopulation: number
	totalForeignPopulation: number
}

export interface ParsedEnrollmentResponse {
	gender: string
	race: string
	enrollment: number
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
