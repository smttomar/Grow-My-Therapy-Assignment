import Image from "next/image";
import Reveal from "./Reveal";

export default function SupportSection() {
    return (
        <Reveal>
            <section className="bg-[#e2dbd1]">
                <div>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="md:w-full hidden md:block">
                            <Reveal>
                                <Image
                                    src="/support2.jpg"
                                    alt="Woman sitting calmly"
                                    width={700}
                                    height={900}
                                    className="w-full h-190 object-cover"
                                />
                            </Reveal>
                        </div>
                        <div className="max-w-prose md:px-16">
                            <div className="w-full md:hidden">
                                <Reveal>
                                    <Image
                                        src="/support2.jpg"
                                        alt="Woman sitting calmly"
                                        width={700}
                                        height={900}
                                        className="w-full h-auto object-cover"
                                    />
                                </Reveal>
                            </div>
                            <div className="mt-6 max-w-prose px-8 md:px-0 text-[#2F3E46]">
                                <Reveal>
                                    <h2 className="font-serif text-3xl md:text-4xl leading-snug">
                                        You don’t have to manage this on your
                                        own.
                                    </h2>
                                </Reveal>
                                <Reveal>
                                    <p className="mt-6 text-xl text-[#5F6F73]">
                                        You may benefit from therapy if you’re
                                        experiencing:
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <ul className="mt-6 space-y-3 text-xl list-disc list-inside text-[#5F6F73]">
                                        <li>Persistent anxiety or tension</li>
                                        <li>Difficulty relaxing or sleeping</li>
                                        <li>
                                            Trouble focusing or making decisions
                                        </li>
                                        <li>Emotional exhaustion or burnout</li>
                                        <li>
                                            A constant sense of pressure or
                                            overwhelm
                                        </li>
                                    </ul>
                                </Reveal>
                                <Reveal>
                                    <p className="mt-6 text-xl text-[#5F6F73]">
                                        With empathy and collaboration, we’ll
                                        work together to help you feel more
                                        steady, supported, and connected in your
                                        everyday life.
                                    </p>
                                </Reveal>
                                <div className="mt-15 border-t border-[#7A8F85]" />
                                <div className="hover:cursor-pointer hover:bg-[#7A8F85] text-[#2F3E46] transition duration-1000 ease-in-out text-center hover:text-white">
                                    <Reveal>
                                        <button className="mb-4 md:mb-4 mt-4 md:mt-4 text-sm tracking-wide uppercase hover:cursor-pointer">
                                            Work with me →
                                        </button>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
