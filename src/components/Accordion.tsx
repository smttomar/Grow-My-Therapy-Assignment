"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Item = {
    title: string;
    content?: string;
};

export default function Accordion({ items }: { items: Item[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border-b border-[#223614] pb-4">
                    <Reveal>
                        <button
                            className="w-full transition duration-1000 ease-in-out hover:scale-105 flex justify-between items-center text-left"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <span className="text-sm">{item.title}</span>
                            <span className="text-xl">
                                {openIndex === index ? "–" : "+"}
                            </span>
                        </button>
                    </Reveal>

                    {openIndex === index && item.content && (
                        <Reveal>
                            <p className="mt-4 text-sm text-[#223614]">
                                {item.content}
                            </p>
                        </Reveal>
                    )}
                </div>
            ))}
        </div>
    );
}
