import {FrontPageProduct, Product} from "../types/product";
import useSWR from "swr";

export const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json())

export function useFrontPageProducts() {
    const {data, error, isLoading} = useSWR<FrontPageProduct[], Error>(`/api/product/frontpage}`, fetcher)
    return {
        products: [
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
            },
        ],
        isLoading,
        isError: !!error
    }
}

export function useProduct(slug: string): { product: Product, isLoading: boolean, isError: boolean } {
    const {data, error, isLoading} = useSWR<Product, Error>(`/api/product/${slug}`, fetcher)
    return {
        product: {
            id: '1',
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            sale: 60,
            stock: 10,
            slug: 'product-1',
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