import Link from "next/link";
import Image from "next/image";
import {Product} from "../../types/product";

export default function Products({products}: { products: Product[] }) {
    return (
        <>
            {products.map((product) => (
                <Link key={product.id} href={"/product/" + product.slug} className="group  w-full h-full">
                    <div
                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded bg-white flex-col shadow ">
                        <Image
                            width={0}
                            height={0}
                            sizes={'100vw'}
                            quality={75}
                            loading="lazy"
                            src={product.gallery.cover}
                            alt={'product_image_' + product.id}
                            className=" object-cover object-center opacity-100 transition delay-50  group-hover:opacity-0"
                        />
                        <Image
                            width={0}
                            height={0}
                            sizes={'100vw'}
                            quality={75}
                            loading="lazy"
                            src={product.gallery.hover}
                            alt={'product_image_two_' + product.id}
                            className=" object-cover object-center opacity-0 transition  delay-50 group-hover:opacity-100"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">{product.name}</h3>
                    <div className={"flex gap-2"}>
                        <p className="mt-1 text-lg font-medium text-gray-900">R$ {product.sale}</p>
                        {
                            product.sale !== product.price && <span
                                className="mt-1 text-lg font-normal text-gray-500 line-through ">R$ {product.price}</span>
                        }
                    </div>
                </Link>
            ))}
        </>
    )
}