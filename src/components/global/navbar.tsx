import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = async (props: Props) => {
    return (
        <header className="fixed top-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center justify-between border-b-[1px] border-neutral-900">
            {/* Logo and Title */}
            <aside className="flex items-center gap-2 sm:gap-4">
                <Image src="/icon.png" alt="Logo" width={50} height={50} />
                <h1 className="text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-black">
                    hue
                </h1>
            </aside>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
                <ul className="flex lg:text-xl md:text-lg font-black items-center gap-10 list-none">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            About
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation (Hamburger Menu) */}
            <div className="md:hidden flex items-center">
                <button className="text-white">
                    {/* Mobile hamburger icon, can be replaced with a real icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu"
                    >
                        <path d="M3 12h18M3 6h18M3 18h18"></path>
                    </svg>
                </button>
            </div>

            {/* Button (Responsive Dashboard Link) */}
            <aside className="flex items-center gap-4">
                <Link
                    href="/dashboard"
                    className="relative inline-flex h-10 w-[130px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2d6a4f_0%,#52b788_50%,#d8f3dc_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-semibold text-white backdrop-blur-3xl">
                        {true ? "Dashboard" : "Get Started"}
                    </span>
                </Link>
            </aside>
        </header>
    );
};

export default Navbar;
