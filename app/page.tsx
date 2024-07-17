import Image from "next/image";
import Landing from "./pages/Landing/page";
import Header from "./share-components/header";
import Footer from "./share-components/footer";

export default function Home() {
  return (
    <>
    <Header />
    <Landing />
    <Footer />
    </>
  );
}
