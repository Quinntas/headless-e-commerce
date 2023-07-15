import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import {ReactNode, Suspense} from "react";
import {Providers} from "@/store/provider";
import {Metadata} from "next";
import {config} from "@/config/site-config";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--sans-serif'
})

export const metadata: Metadata = {
    title: config.SITE_NAME,
    description: config.SITE_DESCRIPTION,
    keywords: config.KEYWORDS,
    robots: 'index, follow',
}


export default function RootLayout({children}: { children: ReactNode }) {

    return (
        <html lang="pt">
        <body className={inter.className}>
        <Providers>
            <div className={"flex flex-col justify-between h-auto w-auto"}>
                <Header/>
                <Suspense>
                    <main>{children}</main>
                </Suspense>
                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    )
}

