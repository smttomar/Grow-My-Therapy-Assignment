"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const officeImages = ["/office1.jpeg", "/office2.jpeg"];

export default function OurOfficeSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % officeImages.length);
        }, 4500); // slow, calm transition

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#F4F1ED] py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#2F3E46]">
                                A Calm Space for Healing
                            </h2>
                        </Reveal>
                        <Reveal>
                            <p className="mt-6 text-lg text-[#5F6F73] leading-relaxed">
                                My Santa Monica office is designed to feel
                                quiet, private, and grounding a space where you
                                can slow down and feel supported. Sessions take
                                place in a comfortable, thoughtfully arranged
                                environment that prioritizes safety,
                                confidentiality, and ease.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mt-4 text-lg text-[#5F6F73] leading-relaxed">
                                Whether we’re meeting in person or working
                                together via telehealth across California, my
                                goal is to create a therapeutic space where you
                                feel comfortable showing up as you are.
                            </p>
                        </Reveal>
                        <div className="mt-10 border-t border-[#7A8F85]/40" />
                        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#7A8F85]">
                            <Reveal>
                                <span>Santa Monica, CA</span>
                                <span>In-person sessions available</span>
                                <span>Telehealth across California</span>
                            </Reveal>
                        </div>
                    </div>
                    <Reveal>
                        <div className="relative h-105 w-full overflow-hidden rounded-lg">
                            {officeImages.map((src, index) => (
                                <div
                                    key={src}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        index === current
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                >
                                    <Image
                                        src={src}
                                        alt="Therapy office interior"
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
