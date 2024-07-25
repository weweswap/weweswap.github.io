import { chaosCopy } from "@/app/copy/chaos";
import { headerCopy } from "@/app/copy/header";
import Image from "next/image";
import Link from "next/link";

export default function Sections() {
    return (
        <>
            <div className="w-full">
                <Image src="/img/chaos.png" alt="" width={1000} height={753} className="w-full object-contain lg:h-[100vh]" />
            </div>
            <div className="container mx-auto">
                <div className="w-full text-center mt-16">
                    <a href={headerCopy.button.url} target={headerCopy.button.target} className="md:w-[400px] md:text-2xl text-base w-[250px] mx-auto font-black dogica-bold bg-pink h-[30px] md:h-[38px] flex justify-center items-center text-black">{chaosCopy.header.cta.buttonText}</a>
                    <h2 className="text-3xl text-white mt-16" dangerouslySetInnerHTML={{ __html: chaosCopy.vampiring.title }}></h2>
                </div>
                <div className="md:w-[70%] w-[90%] mx-auto border-2 border-white p-4 my-20 bg-black">
                    <div className="w-full flex flex-wrap lg:flex-nowrap justify-between">
                        <div className="flex">
                            <Image
                                src={chaosCopy.body.card[0].image ? chaosCopy.body.card[0].image.src : ''}
                                alt={chaosCopy.body.card[0].image ? chaosCopy.body.card[0].image.alt : ''}
                                width={36} height={36}
                                className="h-[36px] w-[35px] rounded-full" />
                            <span className="text-lg mx-2">{chaosCopy.body.card[0].title}</span>
                        </div>
                        <p className="font-verdana">{chaosCopy.body.card[0].description}</p>

                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
                        <div className="flex flex-col">
                            <div className="flex mt-5">
                                {chaosCopy.body.card[1].images?.map((item, index) =>
                                (
                                    <Image key={index} src={item.src} alt={item.alt} width={36} height={36}
                                        className={`h-[36px] w-[35px] rounded-full ${index == 0 ? 'ml-0' : '-ml-4'}`} />
                                )
                                )}
                                <span className="text-lg mx-2 font-verdana">{chaosCopy.body.card[1].title}</span>
                            </div>
                            <div className="flex mt-1 flex-wrap lg:flex-nowrap font-verdana"
                                dangerouslySetInnerHTML={{ __html: chaosCopy.body.card[1].description }}>
                            </div>

                        </div>
                        <Link href={chaosCopy.body.card[1].btn ? chaosCopy.body.card[1].btn.url : '#'}
                            className="w-[190px] bg-blue h-[45px] flex justify-center items-center font-black dogica-bold mt-5 lg:mt-10">
                            {chaosCopy.body.card[1].btn?.title}
                        </Link>
                    </div>

                </div>
                <div className="lg:w-[40%] mx-auto w-full text-center my-16 text-base font-verdana p-4"
                    dangerouslySetInnerHTML={{ __html: chaosCopy.vampiring.description }}></div>
            </div>

        </>
    )
}