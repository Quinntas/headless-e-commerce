export interface Product {
    id: string
    name: string
    description: string
    price: number
    sale: number
    stock: number
    slug: string
    image: {
        ogImageUrl: string
        gallery: string[]
    }
}

export interface ProductParams {
    params: {
        slug: string
    }
}