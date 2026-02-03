import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section className="bg-[#F4F1ED] px-6 md:px-16 py-20">
            <div className="grid md:grid-cols-2 gap-30 items-center">
                <div className="overflow-hidden rounded-t-full mx-auto">
                    <Reveal>
                        <Image
                            src="/hero.jpg"
                            alt="Flowers"
                            width={500}
                            height={50}
                            className="object-cover w-full h-full"
                        />
                    </Reveal>
                </div>

                <div className="text-center max-w-xl">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-serif text-[#2F3E46] leading-tight">
                            Anxiety & Trauma Therapy for Adults in Santa Monica,
                            CA
                        </h1>
                    </Reveal>
                    <p className="mt-6 text-xl font-sans text-[#5F6F73]">
                        If you’re feeling overwhelmed, anxious, or stuck in
                        patterns that no longer serve you, you don’t have to
                        navigate it alone. I offer thoughtful, evidence-based
                        therapy to help adults feel more grounded, resilient,
                        and connected to themselves.
                    </p>
                    <Reveal>
                        <button className="mt-10 px-5 py-5 border text-[#2F3E46] border-[#7A8F85] text-sm tracking-wide hover:scale-105 duration-1000 ease-in-out hover:bg-[#7A8F85] hover:text-white hover:cursor-pointer transition">
                            Schedule a Free Consultation &rarr;
                        </button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
