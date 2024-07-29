"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerCopy } from "@/app/copy/footer";
import { useEffect, useState } from "react";
import { IconChevronUp } from "../assets/icons/ChevronUp";

export default function Footer() {
    const pathName = usePathname()
    const [isVisible, setIsVisible] = useState(false);
    const isBrowser = () => typeof window !== 'undefined';


    const handleScroll = () => {
        if (window.scrollY > 700) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer>
            {pathName != "/" &&
                <div className="w-full flex justify-center items-center px-3">
                    <video width="600" height="95" autoplay loop muted>
                        <source src="/img/animation.mp4" type="video/mp4" />
                    </video>
                </div>
            }
            <div className="w-full flex justify-center items-center my-20">
                {footerCopy.socials.map((footer, index) => (

                    <Link href={footer.href}>
                        <Image src={footer.image} height={30} width={30} className="mx-2" alt="" />
                    </Link>
                ))}

            </div>
            {/* scroll to top */}
            <button
                className={`lg:opacity-0 fixed bottom-0 right-0 bg-turquoise text-black rounded-full p-4 mr-6 mb-[30px] z-50 items-center text-xs flex gap-2 scrollToTopButton ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <IconChevronUp />
            </button>
        </footer>

    );
}