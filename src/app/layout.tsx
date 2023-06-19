import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--sans-serif'
})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="pt">
        <body className={inter.className}>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}
