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


export interface CartProduct {
    id: string
    name: string
    slug?: string
    price: number
    quantity: number
    image: string
}


export interface FrontPageProduct {
    id: string
    name: string
    price: number
    sale: number
    slug: string
    image: {
        cover: string
        hover: string
    }
}

export interface ProductParams {
    params: {
        slug: string
    }
}