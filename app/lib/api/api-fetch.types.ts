export type FetchResponseTypes = 'json' | 'text'

export type APIFetchArgs = {
	url: string
	init?: RequestInit | undefined
	responseType?: FetchResponseTypes
}

export type ApiResponse<T> = { data: T }
