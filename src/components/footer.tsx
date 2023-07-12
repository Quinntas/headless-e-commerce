"use client";

import Link from "next/link";
import {config} from "@/config/site-config";


export default function Footer() {
    return <footer className="bg-white  shadow p-4">
        <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center ">© 2023 <Link
          href="/"
          className="hover:underline">{config.SITE_NAME}™</Link>. All Rights Reserved.
    </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                <li>
                    <Link href={config.LICENSE_URL} className="mr-4 hover:underline md:mr-6">Licensing</Link>
                </li>
                <li>
                    <Link href={config.CONTACT_URL} className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
    </footer>
}