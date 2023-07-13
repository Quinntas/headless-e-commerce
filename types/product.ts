export interface Product {
    id: string
    name: string
    description: string
    price: number
    sale: number
    stock: number
    slug: string
    gallery: {
        ogImage: string
        cover: string
        hover: string
        images: string[]
    }
}


export interface CartProduct {
    id: string
    name: string
    slug?: string
    price: number
    quantity: number
    image: string
}


export interface ProductParams {
    params: {
        slug: string
    }
}