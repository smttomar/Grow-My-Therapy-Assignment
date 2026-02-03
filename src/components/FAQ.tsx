import Image from "next/image";
import Reveal from "./Reveal";

const faqs = [
    "Do you offer telehealth sessions?",
    "What is your approach to therapy?",
    "Do you currently have openings?",
];

export default function FAQ() {
    return (
        <section className="bg-background px-6 md:px-16 py-28">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div className="overflow-hidden rounded-t-full max-w-md mx-auto">
                    <Reveal>
                        <Image
                            src="/FAQ.jpg"
                            alt="Decorative flowers"
                            width={500}
                            height={650}
                            className="md:w-full md:h-full w-30 h-50 object-cover"
                        />
                    </Reveal>
                </div>
                <div className="max-w-xl">
                    <Reveal>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#2F3E46] mb-10">
                            FAQs
                        </h2>
                    </Reveal>

                    <div className="border-t border-[#7A8F85] mb-8" />

                    <div className="space-y-6">
                        {faqs.map((question, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-4 text-[#7A8F85]">
                                    <Reveal>
                                        <span className="text-3xl leading-none">
                                            +
                                        </span>
                                        <span className="text-xl">
                                            {question}
                                        </span>
                                    </Reveal>
                                </div>

                                <Reveal>
                                    <div className="mt-6 border-b border-[#7A8F85]" />
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
