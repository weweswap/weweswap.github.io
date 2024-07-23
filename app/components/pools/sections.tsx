import { poolsCopy } from "@/app/copy/pools";
import Image from "next/image";
import Link from "next/link";

export default function Sections() {
    return (
        <>
            <div className="w-full text-center mt-16">
                <h2 className="lg:text-6xl text-2xl text-white dogica-bold font-black" dangerouslySetInnerHTML={{ __html: poolsCopy.header.mainTitle }}></h2>

            </div>

            <div className="flex flex-col items-center  lg:w-[50%] mx-auto w-full text-center mt-16">
                {poolsCopy.header.cards.map((card, index) => (
                    <div key={index} className=" border-4 rounded-lg text-start p-3 font-verdana my-5 lg:w-1/2 md:w-full even:ms-10 " style={{ borderColor: card.borderColor }}>
                        <h4 className="text-2xl leading-8">{card.title}</h4>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className="w-full text-center mt-20">
                <button className="md:w-[400px] md:text-2xl text-base w-[250px] mx-auto font-black dogica-bold bg-pink h-[30px] md:h-[38px] flex justify-center items-center text-black">
                    {poolsCopy.header.cta.buttonText}
                </button>

            </div>

            <h2 className="text-2xl text-white mt-10 text-center font-black dogica-bold" dangerouslySetInnerHTML={{ __html: poolsCopy.poolOwnerShip.title }}></h2>
            <div className="w-full grid lg:grid-cols-2 col-auto my-20">
                <div className="text-center p-5">
                    <Image src={poolsCopy.poolOwnerShip.image} alt={poolsCopy.poolOwnerShip.title} width={560} height={400}
                        className="w-full" />
                </div>
                <div className="text-white  lg:w-[90%] w-full p-5 font-verdana">
                    <p dangerouslySetInnerHTML={{ __html: poolsCopy.poolOwnerShip.description }}></p>
                </div>
            </div>
        </>
    )
}