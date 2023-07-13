"use client";

import {useProducts} from "../../../lib/api";
import {useRouter, useSearchParams} from "next/navigation";
import SearchBar from "@/components/searchBar";
import ProductGrid from "@/components/productGrid";
import {useState} from "react";
import Loading from "@/app/loading";


export default function Page() {
    const query = useSearchParams();
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState('Search')
    const {products, isError, isLoading, mutate} = useProducts(query, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
    })

    function handleSearch(query: string) {
        setSearchQuery(query.toLowerCase())
        router.push('/search?perPage=10&page=0&search=' + searchQuery, {shallow: true})
    }

    if (isLoading) return <Loading/>

    return <div className="bg-white h-auto">
        <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} mutate={mutate}/>
        {products && <ProductGrid products={products.data}/>}
    </div>
}