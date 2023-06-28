"use client";

import Head from "next/head";
import Link from "next/link";
import Loading from "@/components/loading";
import ProductGrid from "@/components/productGrid";
import { useFrontPageProducts } from "../../lib/api";

export default function Home() {
  const { products, isError, isLoading } = useFrontPageProducts();

  if (isLoading) return <Loading />;

  // if (isError) notFound()

  return (
    <>
      <Head>
        <Link rel="preload" href="/api/product" as="fetch" />
      </Head>
      <section className="bg-white h-full w-full">
        <ProductGrid products={products} />
      </section>
    </>
  );
}
