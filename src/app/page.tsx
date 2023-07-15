"use client";

import Loading from "@/components/loading";
import ProductGrid from "@/components/productGrid";
import {useFrontPageProducts} from "../../lib/api";
import {notFound} from "next/navigation";

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
