import {AiOutlineClose} from "react-icons/ai";

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
                <div className="bg-black rounded w-9/12 h-10">
            
                </div>
            </div>
        </div>
    </>
}