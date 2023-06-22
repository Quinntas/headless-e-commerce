export interface ProductQuery {
    perPage?: number
    page?: number
    category?: string
    price?: string
    sort?: ['LOW_TO_HIGH' | 'HIGH_TO_LOW' | 'NEWEST' | 'OLDEST']
    search?: string
}

export interface Fetch {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: object
    headers?: object
}

