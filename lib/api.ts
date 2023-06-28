import {FrontPageProduct, Product} from "../types/product";
import useSWR from "swr";
import {ReadonlyURLSearchParams} from "next/navigation";
import {Fetch, ProductQuery} from "../types/api";
import withQuery from "with-query";

export const fetcher = (url: string, args: Fetch) => fetch(url, args as RequestInit).then((res) => res.json())

function makeQuery(query: ReadonlyURLSearchParams | undefined) {
    if (!query)
        return {}
    return {
        perPage: query.has('perPage') ? query.get('perPage') : undefined,
        page: query.has('page') ? query.get('page') : undefined,
        category: query.has('category') ? query.get('category') : undefined,
        price: query.has('price') ? query.get('price') : undefined,
        sort: query.has('sort') ? query.get('sort') : undefined,
        search: query.has('search') ? query.get('search') : undefined,
    } as ProductQuery
}

const productsSeed = [
    {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    }, {
        id: "1",
        name: 'Earthen Bottle',
        slug: 'earthen-bottle',
        sale: 32,
        price: 32,
        image: {
            cover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            hover: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg'
        }
    },
]

export function useProducts(queryParams?: ReadonlyURLSearchParams, swrOptions?: object) {
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR<FrontPageProduct[], Error>(`/api/product`, url => fetcher(withQuery(url,
        makeQuery(queryParams)), {
        method: 'GET',
    }), swrOptions)
    console.log(error)
    return {
        products: productsSeed,
        isLoading,
        isError: !!error,
        mutate: mutate
    }
}

export function useFrontPageProducts() {
    return useProducts()
}

export function useProduct(slug: string): { product: Product, isLoading: boolean, isError: boolean } {
    const {data, error, isLoading} = useSWR<Product, Error>(`/api/product/${slug}`, url => fetcher(url, {
        method: 'GET'
    }))
    return {
        product: {
            id: '1',
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            sale: 60,
            stock: 10,
            slug: 'earthen-bottle',
            image: {
                ogImageUrl: 'https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg',
                gallery: [
                    'https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg',
                    'https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg',
                    'https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg',
                    'https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg',
                ]
            }
        },
        isLoading,
        isError: !!error
    }
}