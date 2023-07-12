"use client";

import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {decrement, increment, remove, selectProducts, selectTotals} from "@/store/cartSlice";
import {CartProduct} from "../../../types/product";
import Image from "next/image";

export default function Cart() {

    const products = useAppSelector(selectProducts);
    const totals = useAppSelector(selectTotals);
    const dispatch = useAppDispatch();


    function handleDownClick(product: CartProduct) {
        dispatch(decrement(product))
    }

    function handleInput(e: any) {

    }

    function handleUpClick(product: CartProduct) {
        let productClone: CartProduct = {
            ...product,
            quantity: 1
        }
        dispatch(increment(productClone))
    }

    return <div className="bg-white h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                </header>

                <div className="mt-8">
                    <ul className="space-y-4">
                        {products && products.map((product: CartProduct) => (
                            <li key={product.id}
                                className="flex items-center gap-4">
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={'100vw'}
                                    quality={75}
                                    loading="lazy"
                                    src={product.image}
                                    alt="Product Image"
                                    className="h-16 w-16 rounded object-cover"
                                />

                                <div>
                                    <h3 className="text-sm text-gray-900">{product.name}</h3>

                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                            <dd className="inline"> R$ {product.price}</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div className="flex flex-1 items-center justify-end gap-2">
                                    <div
                                        className="flex flex-row h-9 w-[100px] bg-transparent rounded-lg border border-black rounded">
                                        <button
                                            className="w-full h-full text-black rounded-l outline-none cursor-pointer"

                                            onClick={() => handleDownClick(product)}
                                        >
                                            <span className="m-auto text-2xl font-light">-</span>
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            className="flex w-full h-full border-transparent focus:border-transparent focus:ring-0 items-center font-normal text-center text-black placeholder-black bg-white outline-none focus:outline-none text-md hover:text-black "
                                            placeholder={String(product.quantity)}
                                            disabled={true}
                                        />
                                        <button
                                            className="w-full h-full text-black rounded-r outline-none cursor-pointer "
                                            onClick={() => handleUpClick(product)}
                                        >
                                            <span className="m-auto text-2xl font-light">+</span>
                                        </button>
                                    </div>

                                    <button
                                        className="text-gray-600 transition hover:text-red-600"
                                        onClick={() => dispatch(remove(product))}
                                    >
                                        <span className="sr-only">Remove item</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                        <div className="w-screen max-w-lg space-y-4">
                            <dl className="space-y-0.5 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <dt>Subtotal</dt>
                                    <dd>R$ {totals.subtotal}</dd>
                                </div>

                                <div className="flex justify-between !text-base font-medium">
                                    <dt>Total</dt>
                                    <dd>R$ {totals.total}</dd>
                                </div>
                            </dl>

                            <div className="flex justify-end">

                            </div>

                            <div className="flex justify-end">
                                <a
                                    href="#"
                                    className="block rounded bg-black px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-950"
                                >
                                    Checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
/* Discount bar
 <span
                  className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>

 */