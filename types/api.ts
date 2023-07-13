import {Product} from "./product";

export interface ProductQuery {
    perPage?: number
    page?: number
    category?: string
    priceStart?: number
    priceEnd?: number
    sort?: ['LOW_TO_HIGH' | 'HIGH_TO_LOW' | 'NEWEST' | 'OLDEST']
    search?: string
}

export interface PaginatedProducts {
    data: Product[]
    rows: number
}

export interface Fetch {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: object
    headers?: object
}

