import Navbar from "@/components/global/navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Navbar />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold relative z-20 py-8">
                    Welcome to hue
                </h1>
            </div>
            <WavyBackground />
        </main>
    );
}
