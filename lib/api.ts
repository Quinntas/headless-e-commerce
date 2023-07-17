import {Product} from "../types/product";
import useSWR from "swr";
import {ReadonlyURLSearchParams} from "next/navigation";
import {Fetch, PaginatedProducts, ProductQuery} from "../types/api";
import withQuery from "with-query";
import {config} from "@/config/site-config";

export const fetcher = (url: string, args: Fetch) => fetch(url, args as RequestInit).then((res) => res.json())


function makeQuery(query: ReadonlyURLSearchParams | undefined | URLSearchParams) {
    if (!query)
        return {}
    return {
        perPage: query.has('perPage') ? query.get('perPage') : undefined,
        page: query.has('page') ? query.get('page') : undefined,
        category: query.has('category') ? query.get('category') : undefined,
        priceStart: query.has('priceStart') ? query.get('priceStart') : undefined,
        priceEnd: query.has('priceEnd') ? query.get('priceEnd') : undefined,
        sort: query.has('sort') ? query.get('sort') : undefined,
        search: query.has('search') ? query.get('search') : undefined,
    } as ProductQuery
}


export function useProducts(queryParams?: ReadonlyURLSearchParams | URLSearchParams, swrOptions?: object) {
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR<PaginatedProducts, Error>(
        `${config.API_URL}/store/products`,
        url => fetcher(withQuery(url, makeQuery(queryParams)), {
            method: 'GET',
            headers: {'Content-Type': 'application/json', cache: 'no-cache'}
        }),
        {
            ...swrOptions,
            refreshInterval: 500
        })
    return {
        products: data,
        isLoading,
        isError: !!error,
        mutate: mutate
    }
}

export function useFrontPageProducts(perPage: number = 20, page: number = 0, swrOptions?: object) {
    return useProducts(
        new URLSearchParams({
            perPage: perPage.toString(),
            page: page.toString()
        }), swrOptions
    )
}

export function useProduct(slug: string) {
    const {data, error, isLoading} = useSWR<Product, Error>(
        `${config.API_URL}/store/product`,
        url => fetcher(url + '?slug=' + slug, {method: 'GET',}),
        {
            refreshInterval: 500,
        }
    )
    return {
        product: data,
        isLoading,
        isError: !!error
    }
}