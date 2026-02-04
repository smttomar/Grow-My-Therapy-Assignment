"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useState } from "react";

const faqs = [
    {
        question: "Do you offer telehealth sessions?",
        answer: "Yes. I offer secure telehealth sessions for adults throughout California as a flexible alternative to in-person therapy in Santa Monica.",
    },
    {
        question: "What is your approach to therapy?",
        answer: "My approach is warm, collaborative, and evidence-based, integrating CBT, EMDR, mindfulness, and body-oriented techniques. Sessions are paced thoughtfully with a focus on safety, insight, and resilience.",
    },
    {
        question: "Do you currently have openings?",
        answer: "Availability can change over time. Please reach out directly to inquire about current openings for in-person sessions in Santa Monica or telehealth across California.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <section className="bg-background px-6 md:px-16 py-20">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div className="overflow-hidden rounded-t-full max-w-md mx-auto">
                    <Reveal>
                        <Image
                            src="/FAQ.jpg"
                            alt="FAQ Image"
                            width={500}
                            height={650}
                            className="md:w-full md:h-full w-40 h-60 object-cover"
                        />
                    </Reveal>
                </div>
                <div className="max-w-xl">
                    <Reveal>
                        <h2 className="font-serif text-3xl md:text-6xl text-[#2F3E46] mb-10">
                            FAQs
                        </h2>
                    </Reveal>

                    <div className="border-t border-[#7A8F85] mb-6" />

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index}>
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between text-left hover:cursor-pointer"
                                    >
                                        <Reveal>
                                            <span className="text-2xl md:text-3xl font-serif text-[#2F3E46]">
                                                {faq.question}
                                            </span>
                                        </Reveal>

                                        <Reveal>
                                            <span className="ml-6 text-3xl md:text-4xl text-[#2F3E46]">
                                                {isOpen ? "–" : "+"}
                                            </span>
                                        </Reveal>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                            isOpen ? "max-h-40 mt-4" : "max-h-0"
                                        }`}
                                    >
                                        <Reveal>
                                            <p className="text-lg md:text-xl text-[#5F6F73] leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </Reveal>
                                    </div>
                                    <div className="border-t border-[#7A8F85] mt-6" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
