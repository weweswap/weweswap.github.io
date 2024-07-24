import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./shared-componets/header";
import Footer from "./shared-componets/footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "WEWE - Together We Earn",
  description: "WeWe Swap - Together We Earn",
  metadataBase: new URL("https://weweswap.com"),
  keywords: ['WeWe', 'WeWe Swap', "WeWe Token"],
  authors: [{ name: 'Wewe' }, { name: 'Wewe', url: 'weweswap.com' }],
  openGraph: {
    siteName: 'WeWe',
    title: "WeWe - Together We Earn ",
    description: "We Love Yields!",
    url: 'https://weweswap.com',
    type: "website",
    images: 'https://weweswap.com/img/wewe-thumbnail1.png',
  },
  twitter: {
    site: "weweswap.com",
    card: "summary_large_image",
    title: "WeWe - Together We Earn",
    description: "We Love Yields!",
    images: "https://weweswap.com/img/wewe-thumbnail1.png"
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'fav-light.svg',
        href: 'fav-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'fav-dark.svg',
        href: 'fav-dark.svg',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
