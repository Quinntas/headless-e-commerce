import {Product} from "../types/product";
import useSWR from "swr";

export const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json())

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