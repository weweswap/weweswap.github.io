import { title } from "process";

export const chaosCopy = {
    header: {

        cta: {
            buttonText: "LAUNCH APP"
        },
    },
    body: {
        card: [
            {
                title: "UNISWAP",
                description: "Your positions (1)",
                image: {
                    src: "/img/et-1.jpg",
                    alt:""
                }
            },
            {
                title: "WETH/WEWE1.00%",
                description: ` <p>
                                    Min: 1,616.52 WETH per WEWE
                                </p>
                                <Image src="/img/Arrow.png" alt="" width={20} height={18}
                                    class=" object-contain mx-2" />
                                <p>
                                    Max: 1,650.52 WETH per WEWE
                                </p>`,
                images: [
                    { src: "/img/et-2.jpg", alt: "" },
                    { src: "/img/et-3.jpg", alt: "" }
                ],
                btn:{
                    title: 'Migrate',
                    url:'#'
                },
            },
        ],
    },
    vampiring: {
        title: `<b class="text-[#FE0000]">VAMPIRING</b>  LIQUIDITY`,
        description: ` <p>
                        It’s not fun without MAX CHAOS!!!
                    </p>
                    <p class="my-6">
                        Earn $CHAOS coins by migrating your liquidity from Uniswap to WEWESwap. 
                    </p>
                    <p>
                        You liquidity will be moved into the Liquidity Manager Contract. You will begin earning $CHAOS Coins!

                    </p>`,
        image: "/img/image-earning.png"

    }
}