"use client"

import Image from "next/image"

export default function Sections() {
    return (
        <>
            <section className="header-custom" >
                <div className="max-w-screen-xl mx-auto" >
                    <div className="w-full text-center lg:mt-20 lg:text-left h-[450px] flex justify-center items-center flex-col p-4">
                        <h1 className="text-8xl">
                            WEWE LOVE <br /> THE YIELDS
                        </h1>
                        <p className="text-4xl mt-2">Together We Earn</p>
                    </div>
                    <div className="lg:h-[500px] h-[300px]"></div>
                    <div className="flex w-full md:flex-nowrap flex-wrap" >
                    <Image src="/img/section-one.svg" width={400} height={400} alt="" 
                    className="w-full object-cover h-[400px] block md:hidden" />

                        <div className="lg:w-[50%] w-full lg:mr-20 mr-0  py-2  md:text-white">
                            <div className="w-full px-4">
                                {/*  WAMMv1 */}
                                <div className="lg:w-[70%] w-full" id="WAMMv1" >
                                    <h4 className="text-4xl">WAMMv1</h4>
                                    <p className="my-5">
                                        {`WAMMv1 revolutionizes how we perceive LP Positions.`}
                                    </p>
                                    <p className="my-5">
                                        Instead of viewing your assets as fixed and exposed to impermanent loss, we treat them as dynamic, working assets that generate yield.
                                    </p>
                                    <p>

                                        Just like real-world businesses, these assets can either appreciate or depreciate in value.
                                    </p>
                                    <p className="my-5">
                                        {` The key difference with WEWESWAP is that your yield is always received in USD stablecoins, providing you with the stability and assurance of "cash" returns (awesome!).`}


                                    </p>
                                </div>
                            </div>
                            <Image src="/img/section-two.svg" width={400} height={400} alt=""
                                className="w-full h-[400px] block md:hidden" />
                            <div className="w-full px-4">
                                {/* problems */}
                                <div className="lg:w-[70%] w-full" id="problems">

                                    <h4 className="text-4xl">Problems</h4>
                                    <p className="my-5">
                                        {`Traditional automated market makers  like UniV1 and UniV2 allowed for passive liquidity provision  but came with significant drawbacks. The primary issue was exposure to impermanent loss and a lack of capital efficiency.`}
                                    </p>
                                    <p className="my-5">
                                        The introduction of UniV3 and UniV4 aimed to improve capital efficiency by concentrating liquidity. However, this shift also brought increased complexity in user experience (UX). Key changes included:
                                    </p>
                                    <ul className="list-disc">
                                        <li className="mt-10">Price Ranges: Users had to select specific price ranges for their liquidity.</li>
                                        <li className="mt-10">NFT Positions: Liquidity positions were represented as non-fungible tokens (NFTs), adding a layer of abstraction.</li>
                                        <li className="mt-10">Yield Accrual: Yield accrued outside the pool, allowing users to claim fees in both tokens, which was an improvement. However, the need for active management deterred retail users, pushing them back to the simpler, albeit less efficient, CP pools typically used for memecoins.</li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                            <Image src="/img/section-three.svg" width={400} height={400} alt=""
                                className="w-full h-[400px] block md:hidden" />
                            <div className="w-full px-4">

                                {/* Solution */}
                                <div className="lg:w-[70%] w-full" id="problems">
                                    <br/>
                                    <h4 className="text-4xl">Solution</h4>
                                    <p className="my-5">
                                        {`To address the complexities and inefficiencies of traditional AMM designs, WEWESWAP introduces a streamlined, user-friendly approach. Our solution focuses on making the process easy, intuitive, and rewarding for all users.`}
                                    </p>
                                    <p className="my-5 border-4 p-5 rounded-lg">
                                        {`   1. Easy Pool Entry with One Asset (ZAP) `}
                                    </p>
                                    <p>
                                        Users can effortlessly enter a pool using just one asset, thanks to our ZAP functionality. This eliminates the need for multiple assets and simplifies the onboarding process.
                                    </p>
                                    <p className="my-5 border-4 p-5 rounded-lg">
                                        {`2. Simple Pool Selection`}
                                    </p>
                                    <p>
                                        We offer a straightforward selection of pools to prevent decision paralysis. Users can easily choose the best option without being overwhelmed by too many choices.
                                    </p>
                                    <p className="my-5 border-4 p-5 rounded-lg">
                                        {`3. Yield Accrued Outside the Pools`}
                                    </p>
                                    <p>
                                        To protect against impermanent loss, all yield is accrued outside the pools. This ensures that users' earnings are secure and not subject to fluctuations within the pool.
                                    </p>
                                    <p className="my-5 border-4 p-5 rounded-lg">
                                        {`4. Consistent Yield in USDC`}
                                    </p>
                                    <p>
                                        Yield is always paid in USDC, providing users with a stable and reliable return. This "cash back" approach offers the assurance of stablecoin rewards.
                                    </p>
                                    <p className="my-5 border-4 p-5 rounded-lg">
                                        {`5. Auto-Rebalancing for Passive Management`}
                                    </p>
                                    <p>
                                        Our system automatically rebalances users' positions to ensure they are always in range. This passive management feature allows users to earn yield without the need for constant monitoring.
                                    </p>
                                </div>
                                {/* Pool Types */}
                                <div className="lg:w-[70%] w-full mt-36" id="problems">
                                    <h4 className="text-4xl">Pool Types</h4>

                                    <p className="my-5 border-4 p-5 text-white rounded-lg  border-white">
                                        {`“STABLE”:`} <br />
                                        {`eg {USDT}-USDC  // +/- 1% range; 5bps`}
                                    </p>
                                    <p className="my-5 border-4 p-5 text-white rounded-lg  border-blue-700">

                                        {`“BLUE-CHIP”:`} <br />
                                        {` eg {WETH}-USDC // +/- 10% range; 30bps`}
                                    </p>
                                    <p className="my-5 border-4 p-5 text-white rounded-lg  border-black">

                                        {`“SMALL-CAP”:`} <br /> 
                                        {` eg {WEWE}-USDC // +/- 50% range; 100bps`}
                                    </p>
                                </div>
                                {/*  Simplified LP Ownership */}
                                <div className="lg:w-[70%] w-full  mt-36" id="WAMMv1">
                                    <h4 className="text-4xl">Simplified LP Ownership</h4>
                                    <p className="my-5">
                                        {`Simply add your assets into a pool through our Liquidity Manager contract (yay). Your assets are automatically split into three bands: Narrow, Mid, and Wide, to ensure effective liquidity.`}
                                    </p>
                                    <p className="my-5">
                                        {`Our system uses bots to keep your assets in range and earning yield (nice!). These bots move your assets back into range if needed, charging a small fee for the service.`}
                                    </p>
                                    <p>

                                        {`When you add your assets (either one type or two types) through our Liquidity Manager contract, it splits them into three bands for you. `}
                                    </p>
                                    <p className="my-5">
                                        {`The assets are optimized by an aggregator to be in the correct ratio before being deposited. If there are any leftover assets, they are refunded back to you. This ensures that your assets are managed efficiently and effectively.`}


                                    </p>
                                </div>
                            </div>
                            <Image src="/img/section-four.svg" width={400} height={600} alt=""
                                className="w-full  h-[600px] block md:hidden" />
                            <div className="w-full px-4">
                                {/* Liquidity Bands */}
                                <div className="lg:w-[70%] w-full  lg:mt-36" id="WAMMv1">
                                    <h4 className="text-4xl">Liquidity Bands</h4>
                                    <p className="my-5">
                                        {`There are 3 bands in each pool. The target price range is as per the Pool Type. The LM contract stores the desired band targets (but allows owner to update the strategy if required).`}
                                    </p>
                                    <p className="my-5">
                                        {`When the re-balancer moves the band, it will fetch the latest desired band + fee strategy from LM Owner and re-deploy liquidity as per the params.`}
                                    </p>

                                    <div className="border-4 border-white rounded-lg w-full p-4">
                                        <h3 className="text-2xl">Stable</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="font-verdana">Target Price Range</span>
                                            <span className="font-verdana font-bold">+/- 1%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-verdana">Fees</span>
                                            <span className="font-verdana font-bold">5BPS</span>
                                        </div>
                                    </div>
                                    <div className="border-4 border-blue-700 rounded-lg w-full p-4 my-4">
                                        <h3 className="text-2xl">Blue-Chip</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="font-verdana">Target Price Range</span>
                                            <span className="font-verdana font-bold">+/- 10%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-verdana">Fees</span>
                                            <span className="font-verdana font-bold">30BPS</span>
                                        </div>
                                    </div>
                                    <div className="border-4 border-black rounded-lg w-full p-4">
                                        <h3 className="text-2xl">Small-Cap</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="font-verdana">Target Price Range</span>
                                            <span className="font-verdana font-bold">+/- 50%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-verdana">Fees</span>
                                            <span className="font-verdana font-bold">100BPS</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full md:hidden block bg-[#33E6BF] p-4">
                            <h2 className="text-3xl mt-[10%]">StablePool - 1%</h2>
                            <table className="table-auto border-4 border-white p-4 w-full mb-20 text-black text-center">
                                <thead>
                                    <tr>
                                        <th className="border-4 border-white font-bold text-base">BAND</th>
                                        <th className="border-4 border-white font-bold text-base">RANGE</th>
                                        <th className="font-bold text-base">
                                        <div className="flex justify-center items-center">
                                          <span>LOWER</span>  
                                            <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1 rotate-180" />
                                            </div>
                                        </th>
                                        <th className="border-4 border-white font-bold text-base ">
                                            <div className="flex justify-center items-center">
                                        <span>UPPER</span>  
                                        <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1" />

                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-4 border-white">Narrow</td>
                                        <td className="border-4 border-white">40% Target</td>
                                        <td className="border-4 border-white">0.996</td>
                                        <td className="border-4 border-white">1.004</td>
                                    </tr>
                                    <tr>
                                        <td className="border-4 border-white">Mid</td>
                                        <td className="border-4 border-white">100% Target</td>
                                        <td className="border-4 border-white">0.99</td>
                                        <td className="border-4 border-white">1.01</td>
                                    </tr>
                                    <tr>
                                        <td className="border-4 border-white">Wide</td>
                                        <td className="border-4 border-white">170% Target</td>
                                        <td className="border-4 border-white">0.983</td>
                                        <td className="border-4 border-white">1.017</td>
                                    </tr>
                                   

                                </tbody>
                            </table>
                            <h2 className="text-3xl text-blue-700">StablePool - 10%</h2>
                            <table className="table-auto border-4 border-blue-700 p-4 w-full mb-20 text-black text-center">
                                <thead>
                                <tr>
                                        <th className="border-4 border-blue-700 font-bold text-base">BAND</th>
                                        <th className="border-4 border-blue-700 font-bold text-base">RANGE</th>
                                        <th className="font-bold text-base">
                                        <div className="flex justify-center items-center border-blue-700">
                                          <span>LOWER</span>  
                                            <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1 rotate-180" />
                                            </div>
                                        </th>
                                        <th className="border-4 border-blue-700 font-bold text-base ">
                                            <div className="flex justify-center items-center">
                                        <span>UPPER</span>  
                                        <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1" />

                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className="border-4 border-blue-700 ">Narrow</td>
                                            <td className="border-4 border-blue-700 ">40% Target</td>
                                            <td className="border-4 border-blue-700 ">0.96</td>
                                            <td className="border-4 border-blue-700 ">1.04</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-blue-700 ">Mid</td>
                                            <td className="border-4 border-blue-700 ">100% Target</td>
                                            <td className="border-4 border-blue-700 ">0.9</td>
                                            <td className="border-4 border-blue-700 ">1.1</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-blue-700 ">Wide</td>
                                            <td className="border-4 border-blue-700 ">170% Target</td>
                                            <td className="border-4 border-blue-700 ">0.83</td>
                                            <td className="border-4 border-blue-700 ">1.17</td>
                                        </tr>

                                    </tbody>
                            </table>
                            <h2 className="text-3xl text-black">StablePool - 50%</h2>
                            <table className="table-auto border-4 p-4 w-full mb-20 text-black text-center">
                                <thead>
                                  <tr>
                                        <th className="border-4 border-black font-bold text-base">BAND</th>
                                        <th className="border-4 border-black font-bold text-base">RANGE</th>
                                        <th className="font-bold text-base border-black border-4">
                                        <div className="flex justify-center items-center">
                                          <span>LOWER</span>  
                                            <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1 rotate-180" />
                                            </div>
                                        </th>
                                        <th className="border-4 border-black font-bold text-base ">
                                            <div className="flex justify-center items-center">
                                        <span>UPPER</span>  
                                        <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1" />

                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className="border-4 border-black">Narrow</td>
                                            <td className="border-4 border-black">40% Target</td>
                                            <td className="border-4 border-black">0.8</td>
                                            <td className="border-4 border-black">1.2</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-black">Mid</td>
                                            <td className="border-4 border-black">100% Target</td>
                                            <td className="border-4 border-black">0.5</td>
                                            <td className="border-4 border-black">1.5</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-black">Wide</td>
                                            <td className="border-4 border-black">170% Target</td>
                                            <td className="border-4 border-black">0.3</td>
                                            <td className="border-4 border-black">1.7</td>
                                        </tr>

                                    </tbody>
                            </table>

                            </div>
                            <div className="w-full px-4">
                                {/*  Earn Yield with WEWESWAP */}
                                <div className="lg:w-[70%] w-full  lg:mt-36" id="WAMMv1">
                                    <h4 className="text-4xl">Earn Yield with WEWESWAP</h4>
                                    <p className="my-5">
                                        {`All fees earned from the pool are converted to USDC (yay!). `}
                                    </p>
                                    <p className="my-5">
                                        {`This means your yield is always in stable and reliable USDC, giving you peace of mind. You can claim your USDC yield whenever you want (nice!), ensuring you have access to your earnings at any time. `}
                                    </p>
                                    <p>

                                        {`Your share of the fees is based on the value of your assets in the pool compared to the total value of the vault, making it easy to see how much you've earned and claim it.`}
                                    </p>

                                </div>
                            </div>
                            <Image src="/img/user-claim.png" width={400} height={400} alt=""
                                className="w-full  h-[400px] block md:hidden" />
                            <div className="w-full px-4">
                                {/* Earn Rewards with Subsidies */}
                                <div className="lg:w-[70%] w-full  lg:mt-36" id="WAMMv1">
                                    <h4 className="text-4xl">Earn Rewards with Subsidies</h4>
                                    <p className="my-5">
                                        {`As an initial user, you'll earn a points token called CHAOS. `}
                                    </p>
                                    <p className="my-5">
                                        {`These tokens can be redeemed via the Liquidity Manager Contract. Subsidies like CHAOS are essential to bootstrap liquidity until the system generates enough fees in USDC. `}
                                    </p>
                                    <p>

                                        {`Anyone can add a subsidy token, and users can claim these tokens just like they claim their USDC yield. This system ensures everyone has the opportunity to earn extra rewards while supporting the growth of the platform.`}
                                    </p>

                                </div>
                            </div>
                            <Image src="/img/section-seven.svg" width={400} height={400} alt=""
                                className="w-full  h-[400px] block md:hidden" />
                            <div className="w-full px-4">
                                {/* Withdrawing */}
                                <div className="lg:w-[70%] w-full  lg:mt-36" id="WAMMv1">
                                    <h4 className="text-4xl">Withdrawing</h4>
                                    <p className="my-5">
                                        {`You can withdraw your position anytime by checking your ownership units. `}
                                    </p>
                                    <p className="my-5">
                                        {`Your assets are withdrawn equally from all positions and can be swapped to a single asset if you prefer. `}
                                    </p>
                                    <p>

                                        {`This flexible withdrawal process ensures you have control over your assets and can access them whenever you need.`}
                                    </p>

                                    <Image src="/img/user.jpg" width={248} height={248} alt="user"
                                        className="my-10 hidden md:block" />

                                </div>

                            </div>
                            <Image src="/img/section-eight.svg" width={400} height={400} alt=""
                                className="w-full h-[400px] block md:hidden" />
                            <Image src="/img/weweswap.png" width={400} height={400} alt=""
                                className="w-full  h-[400px] block md:hidden p-4" />
                            <Image src="/img/user.jpg" width={248} height={248} alt="user"
                                className="my-10 mx-auto md:hidden block" />


                        </div>
                      
                        <div className="lg:w-[50%] w-full relative p-10 lg:p-0 md:block hidden">
                            <div className="line-left lg:block hidden"></div>

                            <Image src="/img/right-side-el.png" width={600} height={16000} className=" md:block hidden" alt="" />
                            <h2 className="text-3xl mt-[10%]">StablePool - 1%</h2>
                            <table className="table-auto border-4 border-white p-4 w-full mb-20 text-black text-center">
                                <thead>
                                    <tr>
                                        <th className="border-4 border-white font-bold text-base">BAND</th>
                                        <th className="border-4 border-white font-bold text-base">RANGE</th>
                                        <th className="font-bold text-base">
                                        <div className="flex justify-center items-center">
                                          <span>LOWER</span>  
                                            <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1 rotate-180" />
                                            </div>
                                        </th>
                                        <th className="border-4 border-white font-bold text-base ">
                                            <div className="flex justify-center items-center">
                                        <span>UPPER</span>  
                                        <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1" />

                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-4 border-white">Narrow</td>
                                        <td className="border-4 border-white">40% Target</td>
                                        <td className="border-4 border-white">0.996</td>
                                        <td className="border-4 border-white">1.004</td>
                                    </tr>
                                    <tr>
                                        <td className="border-4 border-white">Mid</td>
                                        <td className="border-4 border-white">100% Target</td>
                                        <td className="border-4 border-white">0.99</td>
                                        <td className="border-4 border-white">1.01</td>
                                    </tr>
                                    <tr>
                                        <td className="border-4 border-white">Wide</td>
                                        <td className="border-4 border-white">170% Target</td>
                                        <td className="border-4 border-white">0.983</td>
                                        <td className="border-4 border-white">1.017</td>
                                    </tr>
                                   

                                </tbody>
                            </table>
                            <h2 className="text-3xl text-blue-700">StablePool - 10%</h2>
                            <table className="table-auto border-4 border-blue-700 p-4 w-full mb-20 text-black text-center">
                                <thead>
                                <tr>
                                        <th className="border-4 border-blue-700 font-bold text-base">BAND</th>
                                        <th className="border-4 border-blue-700 font-bold text-base">RANGE</th>
                                        <th className="font-bold text-base">
                                        <div className="flex justify-center items-center border-blue-700">
                                          <span>LOWER</span>  
                                            <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1 rotate-180" />
                                            </div>
                                        </th>
                                        <th className="border-4 border-blue-700 font-bold text-base ">
                                            <div className="flex justify-center items-center">
                                        <span>UPPER</span>  
                                        <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1" />

                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className="border-4 border-blue-700 ">Narrow</td>
                                            <td className="border-4 border-blue-700 ">40% Target</td>
                                            <td className="border-4 border-blue-700 ">0.96</td>
                                            <td className="border-4 border-blue-700 ">1.04</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-blue-700 ">Mid</td>
                                            <td className="border-4 border-blue-700 ">100% Target</td>
                                            <td className="border-4 border-blue-700 ">0.9</td>
                                            <td className="border-4 border-blue-700 ">1.1</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-blue-700 ">Wide</td>
                                            <td className="border-4 border-blue-700 ">170% Target</td>
                                            <td className="border-4 border-blue-700 ">0.83</td>
                                            <td className="border-4 border-blue-700 ">1.17</td>
                                        </tr>

                                    </tbody>
                            </table>
                            <h2 className="text-3xl text-black">StablePool - 50%</h2>
                            <table className="table-auto border-4 p-4 w-full mb-20 text-black text-center">
                                <thead>
                                  <tr>
                                        <th className="border-4 border-black font-bold text-base">BAND</th>
                                        <th className="border-4 border-black font-bold text-base">RANGE</th>
                                        <th className="font-bold text-base border-black border-4">
                                        <div className="flex justify-center items-center">
                                          <span>LOWER</span>  
                                            <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1 rotate-180" />
                                            </div>
                                        </th>
                                        <th className="border-4 border-black font-bold text-base ">
                                            <div className="flex justify-center items-center">
                                        <span>UPPER</span>  
                                        <Image src="/img/arrow.svg" width={10} height={10} alt="" className="mx-1" />

                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className="border-4 border-black">Narrow</td>
                                            <td className="border-4 border-black">40% Target</td>
                                            <td className="border-4 border-black">0.8</td>
                                            <td className="border-4 border-black">1.2</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-black">Mid</td>
                                            <td className="border-4 border-black">100% Target</td>
                                            <td className="border-4 border-black">0.5</td>
                                            <td className="border-4 border-black">1.5</td>
                                        </tr>
                                        <tr>
                                            <td className="border-4 border-black">Wide</td>
                                            <td className="border-4 border-black">170% Target</td>
                                            <td className="border-4 border-black">0.3</td>
                                            <td className="border-4 border-black">1.7</td>
                                        </tr>

                                    </tbody>
                            </table>
                            <Image src="/img/el-all-2.png" width={500} height={16000} className="object-cover w-full h-[auto] mt-[30%] md:block hidden" alt="" />                            


                        </div>

                    </div>
                </div>
            </section>

        </>


    )
}
