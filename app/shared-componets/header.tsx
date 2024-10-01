"use client"
import Image from "next/image";
import Link from "next/link";
import { headerCopy } from "../copy/header";
import { OffcanvasProvider } from "./OffCanvas/Context";
import { Trigger } from "./OffCanvas/Trigger";
import { Offcanvas } from "./OffCanvas/OffCanvas";

export default function Header() {
    const handleOpen = () => console.log("");
    const handleClose = () => console.log("");
    return (
        <header className="">
            <nav className="mx-auto flex w-full items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image src="/img/logo.svg" alt="WeWe Logo" width={142} height={57} className="object-contain" />
                    </Link>
                </div>
                <div className="hidden">
                    <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                        <Trigger />
                        <Offcanvas />
                    </OffcanvasProvider>
                </div>
                <div className="hidden md:flex gap-x-12 mx-4">
                    {/* {headerCopy.navbarLinks.map((link, index) => (
                        <Link key={index} href={link.url} className="lg:text-2xl text-lg font-normal leading-6 text-yellow cursor-default">{link.name}</Link>
                    ))} */}
                </div>
                <div className="flex flex-1 justify-end">
                    <a href={headerCopy.button.url} target={headerCopy.button.target} className="text-lg font-bold  leading-6 text-black flex justify-center items-center bg-pink h-[43px] lg:w-[232px] w-[150px]">{headerCopy.button.name}</a>
                </div>

            </nav>

        </header>

    );
}