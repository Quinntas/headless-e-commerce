"use client";

import {useProducts} from "../../../lib/api";
import {notFound, useRouter, useSearchParams} from "next/navigation";
import SearchBar from "@/components/searchBar";
import ProductGrid from "@/components/productGrid";
import {useCallback, useRef, useState} from "react";
import Loading from "@/app/loading";


export default function Page() {
    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const router = useRouter()

    const searchParams = useSearchParams();

    const {products, isError, isLoading, mutate} = useProducts(searchParams, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
    })

    const onChange = useCallback((event: any) => {
        const query = event.target.value;
        setQuery(query);
        if (query.length) {
            router.push('/search?perPage=10&page=0&search=' + query, {shallow: true})
            mutate()
        }
    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((event: any) => {
        // @ts-ignore
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])

    if (isLoading) return <Loading/>

    if (isError) return notFound()

    return <div className="bg-white h-auto">
        <SearchBar
            onChange={onChange}
            onFocus={onFocus}
            value={query}
            searchRef={searchRef}
        />
        {products && !!products.data && products.data.length > 0 && (<ProductGrid products={products.data}/>)}
    </div>
}