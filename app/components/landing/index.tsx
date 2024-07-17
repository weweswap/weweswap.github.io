"use client"

export default function Sections() {
    return (
        <>
            <section className="header-custom" >
                <div className="max-w-screen-xl mx-auto" >
                    <div className="w-full h-[450px] flex justify-center items-center flex-col">
                        <h1 className="text-8xl">
                            WEWE LOVE <br /> THE YIELDS
                        </h1>
                        <p className="text-4xl mt-2">Together We Earn</p>
                    </div>
                    <div className="h-[300px]"></div>
                    <div className="flex w-full" >
                        <div className="w-[50%] lg:mr-20 mr-0">
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
                            {/* problems */}
                            <div className="lg:w-[70%] w-full mt-36" id="problems">
                                <h4 className="text-4xl">Problems</h4>
                                <p className="my-5">
                                    {`Traditional automated market makers  like UniV1 and UniV2 allowed for passive liquidity provision  but came with significant drawbacks. The primary issue was exposure to impermanent loss and a lack of capital efficiency.`}
                                </p>
                                <p className="my-5">
                                    The introduction of UniV3 and UniV4 aimed to improve capital efficiency by concentrating liquidity. However, this shift also brought increased complexity in user experience (UX). Key changes included:
                                </p>
                               <ul className="list-disc">
                                    <li>Price Ranges: Users had to select specific price ranges for their liquidity.</li>
                                    <li>NFT Positions: Liquidity positions were represented as non-fungible tokens (NFTs), adding a layer of abstraction.</li>
                                    <li>Yield Accrual: Yield accrued outside the pool, allowing users to claim fees in both tokens, which was an improvement. However, the need for active management deterred retail users, pushing them back to the simpler, albeit less efficient, CP pools typically used for memecoins.</li>
                               </ul>
                            </div>
                            {/* Solution */}
                            <div className="lg:w-[70%] w-full mt-36" id="problems">
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
                              
                                <p className="my-5 border-4 p-5 text-black rounded-lg bg-white border-blue-600">
                                    {`“STABLE”: eg {USDT}-USDC  // +/- 1% range; 5bps`}
                                </p>
                                <p className="my-5 border-4 p-5 text-black rounded-lg bg-white border-blue-600">

                                    {`“BLUE-CHIP”: eg {WETH}-USDC // +/- 10% range; 30bps`}
                                </p>
                                <p className="my-5 border-4 p-5 text-black rounded-lg bg-white border-blue-600">

                                    {`“SMALL-CAP”: eg {WEWE}-USDC // +/- 50% range; 100bps`}
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
                        <div className="w-[50%] ">
                            50

                        </div>
                    </div>
                </div>
            </section>
         
        </>


    )
}
