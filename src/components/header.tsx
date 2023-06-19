"use client";

import {AiOutlineSearch, AiOutlineShopping} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import CartModal from "@/components/modal/cart";


export default function Header() {
    const [showCartModal, setCartModal] = useState(false)

    function turnOffModal() {
        setCartModal(false)
    }

    return <nav>
        <div className="bg-white">
            <div className=" flex items-center pt-6 pl-6 pr-6 lg:px-8 mx-auto max-w-7xl ">
                <div className="flex lg:hidden">
                    <Link href={"/search"}>
                        <AiOutlineSearch color={"black"} size={'20'} cursor={'pointer'}/>
                    </Link>
                </div>
                <div className="flex lg:flex-1">
                    <Link href='/' className="-m-1.5 p-1.5">
                        <span className="sr-only">{"SITE_NAME"}</span>
                        <Image sizes='100vw' width={0} height={0} className="h-12 w-auto"
                               src="https://cdn.shopify.com/s/files/1/0612/2477/9832/files/logo40.png?v=1677092556&width=500"
                               alt=""/>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:pr-5">
                    <Link href={"/search"} className="-m-1.5 p-1.5">
                        <AiOutlineSearch color={"black"} size={'20'} cursor={'pointer'}/>
                    </Link>
                </div>
                <div>
                    <button type="button" onClick={() => setCartModal(true)} className="-m-1.5 p-1.5">
                        <AiOutlineShopping color={"black"} size={'20'} cursor={'pointer'}/>
                    </button>
                </div>
            </div>
            <CartModal modalStateChange={turnOffModal} modalState={showCartModal}/>
        </div>
    </nav>
}