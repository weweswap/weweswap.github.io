"use client"

export default function Sections() {
    return (
        <>
            <section className="header-custom h-[100vh]">
                <div className="max-w-screen-xl mx-auto">
                    <div className="w-full h-[450px] flex justify-center items-center flex-col">
                        <h1 className="text-8xl">
                            WEWE LOVE <br /> THE YIELDS
                        </h1>
                        <p className="text-4xl mt-2">Together We Earn</p>
                    </div>


                </div>
            </section>
            <section className="main-content min-h-[100vh]">
                <div className="flex">
                    <div className="w-[50%]">
                        <div className="lg:w-[70%] w-full ml-auto">
                            <h4 className="text-3xl">WAMMv1</h4>
                            <p>
                                {`WAMMv1 revolutionizes how we perceive LP Positions. 
                                Instead of viewing your assets as fixed and exposed to impermanent loss, we treat them as dynamic, working assets that generate yield. 
                                Just like real-world businesses, these assets can either appreciate or depreciate in value. 
                                The key difference with WEWESWAP is that your yield is always received in USD stablecoins, providing you with the stability and assurance of "cash" returns (awesome!).`}

                            </p>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        50

                    </div>
                </div>
            </section>
        </>


    )
}
