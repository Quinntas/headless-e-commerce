import {AiOutlineClose} from "react-icons/ai";
import Link from "next/link";

export default function CartModal({modalStateChange, modalState}:
                                      { modalStateChange: () => void, modalState: boolean }) {
    return <>
        <div
            onClick={() => modalStateChange()}
            className={`bg-black z-40 inset-0 w-screen ${modalState ? "" : "hidden"} h-screen fixed opacity-30 transition`}>
        </div>
        <div
            className={`opacity-100 bg-white fixed right-0 top-0 z-50 w-[400px] h-screen border ${modalState ? "" : "translate-x-full"} shadow-2xl duration-300 ease-in-out transition-transform`}>
            <div className=" p-6 pt-10 flex items-center text-black justify-between flex-col">
                <div className="flex justify-between w-full">
                    <h1 className="text-2xl font-bold text-left text-black">Carrinho de Compras</h1>
                    <button type="button" onClick={modalStateChange}>
                        <AiOutlineClose color="black" size="20"/>
                    </button>
                </div>
                <Link
                    href="/cart"
                    onClick={() => modalStateChange()}
                >
                    <div
                        className="w-[350px] h-[55px] px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base bg-black text-white focus:outline-none transition duration-200 hover:bg-gray-950 ">
                    <span className="w-full pe-5 -mt-0.5 py-0.5">
						{"Finalizar Compra"}
					</span>
                        <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
						<span className="border-s border-white pe-5 py-0.5"/>
                            {123}
					</span>
                    </div>
                </Link>
            </div>
        </div>
    </>
}