"use client";

import Loading from "@/components/loading";
import ProductGrid from "@/components/productGrid";
import {fetcher, useFrontPageProducts} from "../../lib/api";
import {notFound} from "next/navigation";
import {preload} from "swr";
import {config} from "@/config/site-config";

preload(`${config.API_URL}/store/products?perPage=20&page=0`,
    url => fetcher(url, {method: 'GET'}))

export default function Home() {
    const {products, isError, isLoading} = useFrontPageProducts(20, 0
    );

    if (isLoading) return <Loading/>;

    if (isError) notFound()

    return (
        <>
            {products && <section className="bg-white ">
                <ProductGrid products={products.data}/>
            </section>}
        </>
    );
}
