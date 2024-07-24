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
                    src: "/img/et-1.svg",
                    alt: ""
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
                    { src: "/img/et-3.svg", alt: "" },
                    { src: "/img/et-2.svg", alt: "" }
                ],
                btn: {
                    title: 'Migrate',
                    url: '#'
                },
            },
        ],
    },
    vampiring: {
        title: `<b class="text-[#FE0000]">VAMPIRING</b>  LIQUIDITY`,
        description: `Click to migrate your LP from Uniswap to WEWESWAP now
        <br><br>
        Your liquidity will be moved to the liquidity manager contract and you will start earning $CHAOS immediately
        <br><br>
        The earlier you are, the more you earn`,
        image: "/img/image-earning.svg"

    }
}