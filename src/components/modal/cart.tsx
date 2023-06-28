import {selectProducts, selectTotals} from "@/store/cartSlice";

import Image from "next/image";
import {IoClose} from "react-icons/io5";
import Link from "next/link";
import ScrollBar from "@/components/scrollbar";
import {useAppSelector} from "@/store/hooks";

export default function CartModal({
                                      modalStateChange,
                                      modalState,
                                  }: {
    modalStateChange: () => void;
    modalState: boolean;
}) {
    const products = useAppSelector(selectProducts);
    const totals = useAppSelector(selectTotals);
    return (
        <>
            <div
                onClick={() => modalStateChange()}
                className={`bg-black z-40 inset-0 w-screen ${
                    modalState ? "" : "hidden"
                } h-screen fixed opacity-30 transition duration-300`}
            ></div>
            <div
                className={`opacity-100 bg-white fixed right-0 top-0 z-50 w-[370px] h-full border ${
                    modalState ? "" : "translate-x-full"
                } shadow-2xl duration-300 ease-in-out transition-transform`}
            >
                <div className="h-full w-full flex text-black flex-col">
                    <div className="flex justify-between w-full pr-4 pl-4 pt-5">
                        <h1 className="font-bold text-xl md:text-2xl m-0 text-heading">
                            Carrinho de Compras
                        </h1>
                        <button type="button" onClick={modalStateChange}>
                            <IoClose
                                color="black"
                                size="20"
                                className={"text-black mt-1 md:mt-0.5"}
                            />
                        </button>
                    </div>

                    <ScrollBar
                        className={"cart-scrollbar w-full h-full flex flex-col justify-between  pt-5 pb-5 flex flex-grow"}>
                        {products &&
                            products.map((product) => (
                                <>
                                    <div className="flex items-center pr-4 pl-4" key={product.id}>
                                        <Image
                                            width={112}
                                            height={122}
                                            sizes="100vw"
                                            quality={60}
                                            loading="eager"
                                            alt={""}
                                            className="h-112 w-112 rounded-md"
                                            src={product.image}
                                        />
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex flex-col justify-between pl-3">
                                                <Link
                                                    href={"/product/" + product.slug}
                                                    className="truncate text-sm text-heading mb-1.5 -mt-"
                                                >
                                                    {product.name}
                                                </Link>
                                                <span className="text-sm text-gray-400 mb-2.5">
                          Unity: R$ {product.price}
                        </span>
                                                <h1>Quantity: {product.quantity}</h1>
                                            </div>
                                            <div
                                                className="font-semibold text-sm md:text-base text-heading leading-5">
                                                <span>R$ {product.quantity * product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                    </ScrollBar>
                    <div className="pr-4 pl-4 pb-5">
                        <Link href="/cart" onClick={() => modalStateChange()}>
                            <div
                                className="w-full h-[55px] px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base bg-black text-white focus:outline-none transition duration-200 hover:bg-gray-950 ">
                  <span className="w-full pe-5 -mt-0.5 py-0.5">
                    {"Finalizar Compra"}
                  </span>
                                <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
                    <span className="border-s border-white pe-5 py-0.5"/>
                    R$ {totals.total}
                  </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
