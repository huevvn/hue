import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Navbar />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-16 md:py-24 lg:py-32 my-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 font-sans font-bold mb-6 sm:mb-8 lg:mb-10">
                        Stay Productive With{" "}
                        <span className="4sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-200 font-sans font-bold mb-6 sm:mb-8 lg:mb-10">
                            hue
                        </span>
                    </h1>
                    <Button
                        size="lg"
                        className="p-6 sm:p-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 text-xl sm:text-2xl w-full sm:w-auto border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                            Start For Free Today
                        </span>
                    </Button>
                </div>
            </div>
            <WavyBackground />
        </main>
    );
}
