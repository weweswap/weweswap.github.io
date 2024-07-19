import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./share-components/header";
import Footer from "./share-components/footer";

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
    images: 'https://weweswap.com/img/wewe-thumbnail.png',
  },
  twitter: {
    site: "weweswap.com",
    card: "summary_large_image",
    title: "WeWe - Together We Earn",
    description: "We Love Yields!",
    images: "https://weweswap.com/img/wewe-thumbnail.png"
  },
  icons: {
    icon: "fav.jpg"
  }
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
