import {remove, selectProducts, selectTotals} from "@/store/cartSlice";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {IoClose, IoTrash} from "react-icons/io5";
import ScrollBar from "@/components/scrollbar";
import Image from "next/image";
import Link from "next/link";
import {CartProduct} from "../../../types/product";

export default function CartModal({
                                      modalStateChange,
                                      modalState,
                                  }: {
    modalStateChange: () => void;
    modalState: boolean;
}) {
    const products = useAppSelector(selectProducts);
    const totals = useAppSelector(selectTotals);

    const dispatch = useAppDispatch();

    function removeItem(product: CartProduct) {
        dispatch(remove(product))
    }

    function isCartEmpty(): boolean {
        return products.length === 0
    }

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
                <div className="flex text-black justify-between w-full pr-4 pl-4 pt-5">
                    <h1 className="font-bold text-xl md:text-2xl m-0 text-heading">
                        Your Cart
                    </h1>
                    <button type="button" onClick={modalStateChange}>
                        <IoClose
                            color="black"
                            size="20"
                            className={"text-black mt-1 md:mt-0.5"}
                        />
                    </button>
                </div>
                {isCartEmpty() ?
                    <div className={"w-full h-full flex flex-col justify-center items-center"}>
                        <h2 className={"font-semibold text-2xl overflow-hidden"}>Seesh, you cart is empty :(</h2>
                        <Image
                            src={"/images/emptyCartModal.svg"}
                            alt={"Your Cart is Empty"}
                            height={450}
                            width={450}
                        >
                        </Image>
                    </div>
                    :
                    <div className="h-full w-full flex text-black flex-col">
                        <ScrollBar
                            className={"cart-scrollbar w-full h-full flex flex-col justify-between  pt-5 pb-5 flex flex-grow"}>
                            <ul className="space-y-4">
                                {products &&
                                    products.map((product) => (
                                        <li key={product.id}
                                            className="flex w-auto h-auto items-center pr-4 pl-4">
                                            <div className={"relative group"}>
                                                <button type={"button"}
                                                        onClick={() => removeItem(product)}
                                                >
                                                    <Image
                                                        width={90}
                                                        height={100}
                                                        quality={60}
                                                        alt={""}
                                                        className="rounded-md shadow transition group-hover:blur-sm "
                                                        src={product.image}
                                                    />

                                                    <IoTrash
                                                        color="black"
                                                        size="25"
                                                        className={"absolute font-light top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition "}
                                                    />
                                                </button>
                                            </div>
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
                                        </li>
                                    ))}
                            </ul>
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
                    </div>}
            </div>
        </>
    );
}
