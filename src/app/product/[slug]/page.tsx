"use client";

import Image from "next/image";
import Loading from "@/components/loading";
import {CartProduct, ProductParams} from "../../../../types/product";
import {useProduct} from "../../../../lib/api";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {increment, selectProducts} from "@/store/cartSlice";

export default function Product({params}: ProductParams) {
    const products = useAppSelector(selectProducts);
    const dispatch = useAppDispatch();

    const {product, isError, isLoading} = useProduct(params.slug);
    const [quantity, setQuantity] = useState(1);

    if (isLoading) return <Loading/>;

    // if (isError) notFound()

    function countProductQuantityInCart() {
        const foundIndex = products.findIndex(product => product.id === product.id);
        if (foundIndex === -1) return 0;
        return products[foundIndex].quantity;
    }


    function handleDownClick() {
        if (quantity - 1 <= 0) {
            setQuantity(1);
            return;
        }
        setQuantity(quantity - 1);
    }

    function handleInput(e: any) {
        const value = parseInt(e.target.value)
        if (value <= 1) {
            setQuantity(1);
            return;
        }
        setQuantity(value);
    }

    function handleUpClick() {
        setQuantity(quantity + 1);
    }

    function handleAddToCart() {
        const cartProduct: CartProduct = {
            id: product.id,
            name: product.name,
            price: product.sale,
            image: product.image.ogImageUrl,
            slug: product.slug,
            quantity,
        }
        dispatch(increment(cartProduct))
    }

    return (
        <section className="overflow-hidden bg-white py-1 font-poppins h-auto ">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="sticky top-0 z-1 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={"100vw"}
                                    src={product.image.ogImageUrl}
                                    alt="og-image"
                                    className="object-cover w-full lg:h-full rounded"
                                />
                            </div>
                            <div className="flex-wrap hidden md:flex ">
                                {product.image.gallery.map((image, index) => (
                                    <div className="w-1/2 p-2 sm:w-1/4" key={index}>
                                        <a
                                            href="#"
                                            className="block border border-orange-300 dark:border-transparent dark:hover:border-orange-300 hover:border-orange-300"
                                        >
                                            <Image
                                                width={0}
                                                height={0}
                                                sizes={"100vw"}
                                                src={image}
                                                alt={'"gallery-image-" + index'}
                                                className="object-cover w-full lg:h-20 rounded"
                                            />
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
                                    {product.sale === product.price ? null : (
                                        <span className="text-base font-normal text-gray-500 line-through ">
                      R${product.price}
                    </span>
                                    )}
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor=""
                                    className="w-full text-13 font-normal text-gray-500"
                                >
                                    Quantity
                                </label>
                                {
                                    countProductQuantityInCart() > 0 ? (<label
                                        htmlFor=""
                                        className="w-full text-13 font-normal text-gray-500"
                                    >
                                        {" "}
                                        ({countProductQuantityInCart()} in cart)
                                    </label>) : null
                                }
                                <div className="w-32 mb-8 ">
                                    <div
                                        className="relative flex flex-row w-full h-10  bg-transparent rounded-lg border border-black rounded">
                                        <button
                                            onClick={handleDownClick}
                                            className="w-20 h-full text-black  rounded-l outline-none cursor-pointer"
                                        >
                                            <span className="m-auto text-2xl font-light">-</span>
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            onInput={handleInput}
                                            className="flex border-transparent focus:border-transparent focus:ring-0 items-center w-full font-normal text-center text-black placeholder-black bg-white outline-none focus:outline-none text-md hover:text-black "
                                            placeholder={String(quantity)}
                                        />
                                        <button
                                            onClick={handleUpClick}
                                            className="w-20 h-full text-black rounded-r outline-none cursor-pointer "
                                        >
                                            <span className="m-auto text-2xl font-light">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-4 ">
                                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    <button
                                        onClick={() => handleAddToCart()}
                                        className="flex items-center justify-center w-full p-4  border border-black rounded-md hover:shadow-md text-black bg-white">
                                        Adcionar ao carrinho
                                    </button>
                                </div>
                                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                    <button
                                        onClick={() => handleAddToCart()}
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
    );
}
