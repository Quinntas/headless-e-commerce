"use client"

import Image from "next/image";
import {ProductParams} from "../../../../types/product";
import {useState} from "react";
import {useProduct} from "../../../../lib/api";
import {notFound} from "next/navigation";


export default function Product({params}: ProductParams) {
    const {product, isError, isLoading} = useProduct(params.slug)
    const [quantity, setQuantity] = useState(1)

    if (isLoading) return <p>Loading...</p>
    if (isError) notFound()

    return (
        <section className="overflow-hidden bg-white py-1 font-poppins">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="sticky top-0 z-50 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <Image width={0} height={0} sizes={"100vw"}
                                       src={product.image.ogImageUrl} alt="og-image"
                                       className="object-cover w-full lg:h-full rounded"/>
                            </div>
                            <div className="flex-wrap hidden md:flex ">
                                {product.image.gallery.map((image, index) => (
                                    <div className="w-1/2 p-2 sm:w-1/4" key={index}>
                                        <a href="#"
                                           className="block border border-orange-300 dark:border-transparent dark:hover:border-orange-300 hover:border-orange-300">
                                            <Image width={0} height={0} sizes={"100vw"}
                                                   src={image}
                                                   alt={"\"gallery-image-\" + index"}
                                                   className="object-cover w-full lg:h-20 rounded"/>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="lg:pl-20">
                            <div>
                                <h2 className="max-w-xl mt-2 mb-5 text-40px font-normal text-black md:text-4xl">
                                    {product.name}
                                </h2>
                                <p className="inline-block mb-5 text-18px font-normal text-black break-words">
                                    <span>R${product.sale}</span>
                                    <span> </span>
                                    {
                                        product.sale === product.price ? null : <span
                                            className="text-base font-normal text-gray-500 line-through ">R${product.price}</span>
                                    }

                                </p>
                            </div>
                            <div>
                                <label htmlFor=""
                                       className="w-full text-13 font-normal text-gray-500">Quantity</label>
                                <label htmlFor=""
                                       className="w-full text-13 font-normal text-gray-500"> (1 in
                                    cart)</label>
                                <div className="w-32 mb-8 ">
                                    <div
                                        className="relative flex flex-row w-full h-10  bg-transparent rounded-lg border border-black rounded">
                                        <button
                                            className="w-20 h-full text-black  rounded-l outline-none cursor-pointer">
                                            <span className="m-auto text-2xl font-light">-</span>
                                        </button>
                                        <input type="number"
                                               className="flex border-transparent focus:border-transparent focus:ring-0 items-center w-full font-normal text-center text-black placeholder-black bg-white outline-none focus:outline-none text-md hover:text-black "
                                               placeholder="1"/>
                                        <button
                                            className="w-20 h-full text-black rounded-r outline-none cursor-pointer ">
                                            <span className="m-auto text-2xl font-light">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-4 ">
                                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    <button
                                        className="flex items-center justify-center w-full p-4  border border-black rounded-md hover:shadow-md text-black bg-white">
                                        Adcionar ao carrinho
                                    </button>
                                </div>
                                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                    <button
                                        className="flex items-center justify-center w-full p-4  border border-black rounded-md  hover:shadow-md text-black bg-white">
                                        Comprar agora
                                    </button>
                                </div>
                            </div>
                            <div className="pt-5 mb-8">
                                <p className="max-w-md mb-8 text-black">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}