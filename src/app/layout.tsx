import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import {ReactNode, Suspense} from "react";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--sans-serif'
})


export default function RootLayout({children}: { children: ReactNode }) {

    return (
        <html lang="pt">
        <body className={inter.className}>
        <Header/>
        <Suspense>
            <main>{children}</main>
        </Suspense>
        <Footer/>
        </body>
        </html>
    )
}
