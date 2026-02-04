import Image from "next/image";
import Reveal from "./Reveal";
import { link } from "fs";

export default function About() {
    return (
        <section className="bg-[#b9b9b2] px-6 md:px-16 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-10">
                <div className="max-w-prose order-2 md:order-1">
                    <Reveal>
                        {" "}
                        <h2 className="font-serif text-3xl md:text-4xl text-[#2F3E46]">
                            Hi, I’m Dr. Maya Reynolds.
                        </h2>
                    </Reveal>
                    <Reveal>
                        {" "}
                        <p className="mt-6 text-xl leading-relaxed text-[#5F6F73]">
                            I’m a licensed clinical psychologist (PsyD)
                            providing therapy for adults in Santa Monica,
                            California. I work with individuals who may appear
                            successful on the outside but feel anxious,
                            overwhelmed, or disconnected internally. My approach
                            is warm, collaborative, and grounded in
                            evidence-based practices, including CBT, EMDR,
                            mindfulness, and body-oriented techniques. I believe
                            therapy should feel supportive and practical,
                            helping you build insight, resilience, and a
                            stronger relationship with yourself over time. I
                            offer both in-person sessions in Santa Monica and
                            telehealth throughout California.
                        </p>
                    </Reveal>
                    <Reveal>
                        <button className="mt-10 px-8 py-3 border duration-1000 ease-in-out hover:scale-105 border-[#7A8F85] text-[#2F3E46] hover:cursor-pointer text-sm tracking-wide uppercase hover:bg-[#7A8F85] hover:text-white transition">
                            Let’s talk
                        </button>
                    </Reveal>
                </div>
                <div className="order-1 md:order-2">
                    <Reveal>
                        <div className="relative w-full md:h-120 h-80 flex justify-center">
                            <div className="absolute md:w-120 md:h-120 w-80 h-80 rounded-full overflow-hidden">
                                <Image
                                    src="/doc2.jpg"
                                    alt="Dr. Maya Reynolds"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* <div className="absolute bottom-0 left-3/4 -translate-x-1/2 w-54 h-54 rounded-full overflow-hidden">
                        <Image
                            src="/about-2.png"
                            alt="Flowers close-up"
                            fill
                            className="object-cover"
                        />
                    </div> */}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
