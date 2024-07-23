import { IconBottomRightBorder } from "@/app/assets/icons/BottomRightBorder";
import { IconTopLeftBorder } from "@/app/assets/icons/TopLeftBorder";
import Sections from "@/app/components/landing/sections";
import { landingCopy } from "@/app/copy/landing";
import Image from "next/image";
export default function Landing() {
    return (
        <section className="container mx-auto min-h-[100vh] text-center" >
            <Sections />
        </section>
    );
}