import { IconBottomRightBorder } from "@/app/assets/icons/BottomRightBorder";
import { IconTopLeftBorder } from "@/app/assets/icons/TopLeftBorder";
import { landingCopy } from "@/app/copy/landing";
import Image from "next/image";
import Link from "next/link";

export default function Sections() {
    return (
        <>
            <h2 className="uppercase leading-10 lg:text-4xl text-2xl my-20">{landingCopy.header.mainTitle}</h2>
            <div className="w-[80%] md:w-max mx-auto mt-24 relative ">
                <IconTopLeftBorder />
                <h1 className="uppercase leading-relaxed font-black dogica-bold lg:text-6xl text-2xl  text-center color-turquoise" dangerouslySetInnerHTML={{ __html: landingCopy.header.subTitle }}></h1>
                <IconBottomRightBorder />
            </div>
            <div className="w-full flex justify-center items-center mt-20 px-3">
                <Image src="/img/footer-logo.png" width={600} height={95} alt="" />
            </div>

            <div className="w-[90%] lg:w-max  border-4 border-liberty rounded-lg  mx-auto mt-20" style={{ padding: '5px' }}>
                <div className="bg-pink lg:w-max w-full lg:px-10 px-3 py-3 ">
                    <a href="#" className="font-black dogica-bold lg:text-3xl text-black " dangerouslySetInnerHTML={{ __html: landingCopy.cta.buttonText }}></a>
                </div>
            </div>

            {/* Problem */}
            <div className="flex items-center justify-center mt-36 px-3" >
                <h2 className="color-dandelion font-black dogica-bold lg:text-4xl text-2xl">{landingCopy.problemSection.title}</h2>
                <Image className="lg:ms-5 h-[50px] w-[50px]" src={"/img/icon-sad-kirbys.png"} width={50} height={50} alt="Problem" />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 my-10">
                {landingCopy.problemSection.problems.map((item, index) => (
                    <div key={index} className="my-10">
                        <Image src={item.image} width={70} height={70} alt={item.title} className="mx-auto my-4" />
                        <h3 className="color-dandelion dogica-bold font-black my-4 ">{item.title}</h3>
                        <ul>
                            {item.description.map((description, index) => (
                                <li key={index} className="list-disc w-max mx-auto leading-10 lg:px-3 lg:text-base text-sm">{description} </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h3 className="uppercase dogica-bold lg:text-3xl text-xl mt-40">{landingCopy.problemSection.note}</h3>
            <h4 className="uppercase  my-20 lg:text-2xl text-lg">{landingCopy.problemSection.footerNote}</h4>

            {/* Solution */}

            <div className="flex items-center justify-center mt-44">
                <h2 className="color-turquoise font-black dogica-bold lg:text-4xl text-2xl">{landingCopy.solutionSection.title}</h2>
                <Image className="lg:ms-5  h-[50px] w-[50px]" src={"/img/icon-happy-kirbys.png"} width={50} height={50} alt="Solution" />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-24">
                {landingCopy.solutionSection.solutions.map((item, index) => (
                    <div key={index}>
                        <Image src={item.image} width={70} height={70} alt={item.title} className="mx-auto my-4" />
                        <h3 className="text-pink dogica-bold font-black my-4 text-xl leading-8 " dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                        <p className="leading-8 md:px-20 px-3 lg:text-base text-sm"> {item.description}</p>
                    </div>
                ))}
            </div>
            <div style={{ height: "100px" }}></div>
            <div className="mt-20 lg:w-max mx-auto">
                <h2 className="lg:text-2xl text-xl leading-10 my-4" dangerouslySetInnerHTML={{ __html: landingCopy.footerNote }}></h2>
                <Image className="ms-auto" src="/img/footer-vampire.png" width={300} height={80} alt="Vampire Attack" />
            </div>
        </>
    )

}