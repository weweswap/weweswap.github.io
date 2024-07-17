"use server"

import Sections from "@/app/components/landing";

export default async function Landing() {
    return (
       <div className="w-full">
       <Sections />
       </div>
       
    );
}