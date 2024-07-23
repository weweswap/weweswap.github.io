"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
    const pathName = usePathname()
    return (
        <footer>
            {pathName != "/" &&
                <div className="w-full flex justify-center items-center px-3">
                    <Image src="/img/footer-logo.png" width={600} height={95} alt="" />
                </div>
            }
            <div className="w-full flex justify-center items-center my-20">
                <Link href="https://x.com/weweswap">
                    <Image src="/img/x.png" className="mx-2" width={30} height={30} alt="" />
                </Link>
                <Link href="https://github.com/weweswap">
                    <Image src="/img/github.png" className="mx-2" width={38} height={38} alt="" />
                </Link>
                <Link href="https://discord.com/invite/cV95JF7kGM">
                    <Image src="/img/discord.png" className="mx-2" width={38} height={38} alt="" />
                </Link>

            </div>

        </footer>

    );
}