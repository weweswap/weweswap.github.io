import { earningsCopy } from "@/app/copy/earnings";
import { headerCopy } from "@/app/copy/header";
import { verdana } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";


export default function Sections() {
    return (
        <>
            <div className="w-full text-center mt-16">
                <h2 className="lg:text-6xl text-2xl text-white"
                    dangerouslySetInnerHTML={{ __html: earningsCopy.header.mainTitle }}></h2>

            </div>

            <div className="lg:w-[590px]  w-[90%] mx-auto border border-white p-3 m-10 bg-black">
                <p className="text-sm pb-5 border-b border-blue mb-5">
                    {earningsCopy.header.card[0].title}: {earningsCopy.header.card[0].description}</p>
                <div className="flex justify-between items-center">
                    <p className="text-sm">  {earningsCopy.header.card[1].title}: {earningsCopy.header.card[1].description}</p>
                    <Link href={earningsCopy.header.card[1].btn ? earningsCopy.header.card[1].btn.url : '#'} className="w-[190px] bg-blue h-[45px] flex justify-center font-bold  items-center text-white">
                        {earningsCopy.header.card[1].btn?.title}
                    </Link>
                </div>
            </div>

            <div className="lg:w-[50%] mx-auto w-[90%] text-center mt-16"
                dangerouslySetInnerHTML={{ __html: earningsCopy.description }}>

            </div>
            <div className="w-full text-center mt-16">
                <a href={headerCopy.button.url} target={headerCopy.button.target} className="md:w-[400px] md:text-2xl text-base w-[250px] mx-auto font-bold  bg-pink h-[30px] md:h-[38px] flex justify-center items-center text-black">{earningsCopy.header.cta.buttonText}</a>

                <h2 className="text-3xl text-white mt-16" dangerouslySetInnerHTML={{ __html: earningsCopy.Simplified.title }}>
                </h2>

            </div>
            <div className="w-full grid lg:grid-cols-2 col-auto mt-20">
                <div className="text-center p-5">
                    <Image src={earningsCopy.Simplified.image} alt="" width={560} height={400}
                        className="w-full" />
                </div>
                <div className={`text-white  text-sm lg:w-[90%] w-full p-5 ${verdana.className}`} style={{ display:"flex",justifyContent:"center",alignItems:"center" }}
                    dangerouslySetInnerHTML={{ __html: earningsCopy.Simplified.description }}>

                </div>
            </div>
        </>
    );
}