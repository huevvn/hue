import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

type Props = {};

const Navbar = async (props: Props) => {
    return (
        <header className="fixed right-0 left-0 top-0 p-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
            <aside className="flex items-center gap-[2px]">
                <Image
                    src="/icon.png" // Ensure this path is correct relative to the public directory
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <p className="text-4xl ml-3 flex font-black">hue</p>
            </aside>
            <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
                <ul className="flex lg:text-xl md:text-lg font-black items-center gap-10 list-none">
                    <li>
                        <a href="#" className="text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white">
                            about
                        </a>
                    </li>
                </ul>
            </nav>
            <aside className="flex items-center gap-4">
                <Link
                    href="/dashboard"
                    className="relative inline-flex h-10 w-[130px] overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2d6a4f_0%,#52b788_50%,#d8f3dc_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {true ? "Dashboard" : "Get Started"}
                    </span>
                </Link>
                {/* WIP: wire up user */}
            </aside>
        </header>
    );
};

export default Navbar;
