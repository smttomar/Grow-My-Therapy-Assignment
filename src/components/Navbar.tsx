"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform px-4 py-2 backdrop-blur-xs bg-transparent duration-500 ease-in-out ${
                show ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <nav className="text-[#2F3E46] flex items-center justify-between font-serif">
                <Reveal>
                    <a href="#" className="md:text-4xl text-2xl tracking-wide">
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
