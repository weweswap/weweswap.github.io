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
                    <button className="lg:w-[20%] w-[200px] mx-auto font-bold bg-pink h-[45px] flex justify-center items-center text-black">
                        LAUNCH APP
                    </button>
                    <h2 className="text-3xl text-white mt-16"><b className="text-[#FE0000]">VAMPIRING</b>  LIQUIDITY</h2>

                </div>
                <div className="w-full border-2 border-white p-10 my-20 ">
                 <div className="w-full flex justify-between">
                        <div className="flex">
                            <Image src="/img/et-1.jpg" alt="" width={36} height={36}
                                className="h-[36px] w-[35px] rounded-full" />
                            <span className="text-lg mx-2">UNISWAP</span>
                        </div>
                        <p className="font-verdana">Your positions (1)</p>
                     
                 </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                        <div className="flex mt-5">
                            <Image src="/img/et-2.jpg" alt="" width={36} height={36}
                                className="h-[36px] w-[35px] rounded-full" />
                                <Image src="/img/et-3.jpg" alt="" width={36} height={36}
                                    className="h-[36px] w-[35px] rounded-full -ml-4" />
                                <span className="text-lg mx-2  font-verdana">WETH/WEWE1.00%</span>
                        </div>
                            <div className="flex mt-1  font-verdana">

                                <p>
                                    Min: 1,616.52 WETH per WEWE

                                </p>
                                <Image src="/img/Arrow.png" alt="" width={20} height={18}
                                    className=" object-contain mx-2" />
                                <p>
                                    Max: 1,650.52 WETH per WEWE
                                </p>
                            </div>
                            
                        </div>
                        <Link href='#' className="w-[190px] bg-blue h-[45px] flex justify-center items-center font-bold">Migrate</Link>
                    </div>
                   
                </div>
                <div className="lg:w-[40%] mx-auto w-full text-center my-16 text-base font-verdana">
                    <p>
                        {`It’s not fun without MAX CHAOS!!!`}
                    </p>
                    <p className="my-6">
                        {`Earn $CHAOS coins by migrating your liquidity from Uniswap to WEWESwap. `}
                    </p>
                    <p>
                        {`You liquidity will be moved into the Liquidity Manager Contract. You will begin earning $CHAOS Coins!`}

                    </p>
                </div>
            </div>

        </>
    )
}