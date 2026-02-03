"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-[#e2dbd1] px-4 md:px-16 py-4">
            <nav className="text-[#2F3E46] flex items-center justify-between bg-transparent transform font-serif">
                <Reveal>
                    <a href="#" className="text-4xl tracking-wide">
                        DR. MAYA REYNOLDS
                    </a>
                </Reveal>
                <Reveal>
                    <div className="hidden md:flex gap-8 text-sm">
                        <a
                            href="#"
                            className="hover:opacity-70 transition duration-500 ease-in-out hover:scale-105 text-2xl"
                        >
                            Blog
                        </a>
                        <a
                            href="#"
                            className="hover:opacity-70 transition duration-500 ease-in-out hover:scale-105 text-2xl"
                        >
                            Contact
                        </a>
                    </div>
                </Reveal>
                <button
                    className="md:hidden text-xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </nav>
            {open && (
                <div className="md:hidden mt-6 flex flex-col gap-4 text-sm">
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
            )}
        </header>
    );
}
