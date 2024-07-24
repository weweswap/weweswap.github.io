"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerCopy } from "@/app/copy/footer";

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
                {footerCopy.socials.map((footer, index) => (

                    <Link href={footer.href}>
                        <Image src={footer.image} height={30} width={30} className="mx-2" alt="" />
                    </Link>
                ))}

            </div>

        </footer>

    );
}