"use client";

import Head from "next/head";
import Link from "next/link";
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
            <Head>
                <Link rel="preload" href="/api/product" as="fetch"/>
            </Head>
            {products && <section className="bg-white h-screen w-full">
                <ProductGrid products={products.data}/>
            </section>}
        </>
    );
}
