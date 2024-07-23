import Image from "next/image";
import Link from "next/link";

export default function Sections() {
    return (
        <>
            <div className="w-full text-center mt-16">
                <h2 className="lg:text-6xl text-2xl text-white"><b className="text-green">USDC</b> EARNINGS</h2>

            </div>
            <div className="lg:w-[590px] mx-auto w-full border border-white p-4 m-10">
                <p className="text-sm pb-5 border-b border-blue mb-5">POSITION: 10.2 WETH ($34,456)</p>
                <div className="flex justify-between items-center">
                    <p className="text-sm">EARNINGS: 234.54 USDC</p>
                    <Link href='#' className="w-[190px] bg-blue h-[45px] flex justify-center items-center">Claim</Link>
                </div>
            </div>
            <div className="lg:w-[50%] mx-auto w-full text-center mt-16">
                <p>
                    {`YOUR EARNINGS ACRUE AS USDC (YAY)`}
                </p>
                <p className="my-6">
                    {`NO MATTER THE POOL YOU ARE IN!`}
                </p>
                <p>
                    {` NEVER WORRY ABOUT LOSING IT!`}

                </p>
            </div>
            <div className="w-full text-center mt-16">
                <button className="lg:w-[20%] w-[200px] mx-auto font-bold bg-pink h-[45px] flex justify-center items-center text-black">
                    LAUNCH APP
                </button>
                <h2 className="text-3xl text-white mt-16"><b className="text-yellow">Simplified</b>  EARNINGS</h2>

            </div>
            <div className="w-full grid lg:grid-cols-2 col-auto mt-20">
                <div className="text-center p-5">
                    <Image src="/img/image-earning.png" alt="" width={560} height={400} 
                    className="w-full" />
                </div>
                <div className="text-white  text-sm lg:w-[90%] w-full p-5 font-verdana">
                    <p className="text-base">
                        All yield in the pool is converted into USDC and sent back to the Liquidity Manager Contract. A bot will convert the pool fees to USDC regularly your behalf.
                    </p>
                    <p className="my-10">

                        At any time you can claim your USDC! It is out of the pool and never will be lost to pool volatility.
                    </p>
                    <p className="my-10">

                        You can also “double down” by converting your USDC back into the pool again!
                    </p>
                    <p>
                        So simple!
                    </p>
                </div>
            </div>
        </>
    );
}