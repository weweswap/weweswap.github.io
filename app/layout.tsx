import type { Metadata } from "next";
import Head from "next/head";
import "./globals.scss";
import Header from "./shared-componets/header";
import Footer from "./shared-componets/footer";
import { dogica } from "./fonts";

export const metadata: Metadata = {
  title: "WEWE - Together We Earn - We Love Yields!",
  description:
    "Together We Earn - WEWESWAP",
  metadataBase: new URL("https://weweswap.com"),
  keywords: [
    "WeWeSwap",
    "WeWe",
    "WeWe Swap",
    "WeWe Token",
    "DeFi",
    "MEME",
    "MEME Coin",
    "DeFi",
    "USDC Yield",
    "Yields",
    "Earnings",
    "Chaos",
    "Pools",
  ],
  authors: [{ name: "Wewe" }, { name: "Wewe", url: "weweswap.com" }],
  openGraph: {
    siteName: "WeWe",
    title: "Together We Earn - WEWESWAP",
    description: "OFFICIAL | $WEWE",
    url: "https://weweswap.com",
    type: "website",
    images: "https://weweswap.com/img/wewe-thumbnail2.png",
  },
  twitter: {
    site: "weweswap.com",
    card: "summary_large_image",
    title: "Together We Earn - WEWESWAP",
    description: "OFFICIAL | $WEWE",
    images: "https://weweswap.com/img/wewe-thumbnail2.png",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "fav-light.svg",
        href: "fav-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "fav-dark.svg",
        href: "fav-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ldJson = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      id: "https://www.weweswap.com",
      name: "weweswap",
      alternateName: ["weweswap"],
      legalName: "WEWE SWAP",
      url: "https://www.weweswap.com",
      logo: "",
      email: "info@weweswap.com",
      sameAs: [
        "https://x.com/weweswap",
        "https://discord.gg/cV95JF7kGM",
        "http://t.me/weweonbase",
        "https://github.com/weweswap",
      ],
      founders: [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          image: "",
          jobTitle: "Founder",
          name: "JP Thor",
          sameAs: [
            "https://twitter.com/jpthor",
            "https://www.instagram.com/jpthor/",
            "https://www.github.com/jpthor",
            "https://www.tiktok.com/@jpthor89",
            "https://www.youtube.com/@jpthor",
            "https://www.linkedin.com/in/jpthor/"
          ]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      id: "https://www.weweswap.com",
      name: "weweswap",
      url: "https://www.weweswap.com",
      copyrightHolder: {
        "@type": "Corporation",
        id: "https://www.weweswap.com",
        name: "weweswap"
      },
      creator: {
        "@type": "Corporation",
        id: "https://weweswap.com",
        name: "weweswap"
      }
    }
  ]);

  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson }}
        />
      </Head>
      <body className={dogica.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
