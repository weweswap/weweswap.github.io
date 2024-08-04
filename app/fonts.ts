import localFont from "next/font/local";
export const verdana = localFont({
  src: "../public/fonts/Verdana.woff",
  variable: "--font-verdana",
});
export const dogica = localFont({
  src: [
    {
      path: "../public/fonts/Dogica.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Dogica Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dogica",
});
