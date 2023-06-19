import {Product} from "../types/product";

export function getProduct(slug: string): Product {
    return {
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
    }
}