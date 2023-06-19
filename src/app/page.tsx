"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '/product/earthen-bottle',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    }, {
        id: 1,
        name: 'Earthen Bottle',
        href: '/product/earthen-bottle',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    }, {
        id: 1,
        name: 'Earthen Bottle',
        href: '/product/earthen-bottle',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    }, {
        id: 1,
        name: 'Earthen Bottle',
        href: '/product/earthen-bottle',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    }, {
        id: 1,
        name: 'Earthen Bottle',
        href: '/product/earthen-bottle',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    }, {
        id: 1,
        name: 'Earthen Bottle',
        href: '/product/earthen-bottle',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    }, {
        id: 1,
        name: 'Earthen Bottle',
        href: '/product/earthen-bottle',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
]

export default function Home() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} href={product.href} className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={'100vw'}
                                    quality={75}
                                    loading="lazy"
                                    src={product.imageSrc}
                                    alt={'product_image_' + product.id}
                                    className="h-full w-full object-cover object-center opacity-100 transition group-hover:opacity-0"
                                />
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={'100vw'}
                                    quality={75}
                                    loading="lazy"
                                    src={product.imageAlt}
                                    alt={'product_image_two_' + product.id}
                                    className="h-full w-full object-cover object-center opacity-0 transition group-hover:opacity-100"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">R$ {product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
