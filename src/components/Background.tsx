"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const backgroundItems = [
    {
        title: "Education",
        content: (
            <ul className="space-y-2">
                <li>Doctor of Psychology (PsyD) in Clinical Psychology</li>
                <li>
                    Graduate training with a focus on adult psychotherapy and
                    trauma-informed care
                </li>
            </ul>
        ),
    },
    {
        title: "Licensure",
        content: (
            <ul className="space-y-2">
                <li>Licensed Clinical Psychologist</li>
                <li>State of California</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        content: (
            <ul className="space-y-2">
                <li>EMDR-informed therapy training</li>
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <li>Mindfulness-based and body-oriented approaches</li>
            </ul>
        ),
    },
];

export default function ProfessionalBackground() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#b9b9b2] py-20">
            <div className="mx-auto max-w-4xl px-6">
                <Reveal>
                    <h2 className="font-serif text-4xl md:text-5xl text-center text-[#2F3E46] mb-15">
                        My Professional Background
                    </h2>
                </Reveal>
                <div className="border-t border-[#7A8F85] mt-5" />
                {backgroundItems.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index}>
                            <Reveal>
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between text-left hover:cursor-pointer"
                                >
                                    <span className="text-xl md:text-3xl font-serif mt-5 text-[#2F3E46]">
                                        {item.title}
                                    </span>

                                    <span className="text-2xl md:text-4xl text-[#2F3E46] mt-5">
                                        {isOpen ? "–" : "+"}
                                    </span>
                                </button>
                            </Reveal>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                                }`}
                            >
                                <Reveal>
                                    <div className="text-lg md:text-xl text-[#5F6F73] leading-relaxed">
                                        {item.content}
                                    </div>
                                </Reveal>
                            </div>
                            <div className="border-t border-[#7A8F85] mt-5" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
