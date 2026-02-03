import Image from "next/image";
import Reveal from "./Reveal";

export default function IntroSplit() {
    return (
        <section className="bg-[#e2dbd1]">
            <div className="grid md:grid-cols-2 gap-2 items-center">
                <div className="max-w-prose md:px-16">
                    <div className="md:hidden">
                        <Reveal>
                            <Image
                                src="/intro.jpg"
                                alt="Lifestyle flat lay"
                                width={600}
                                height={600}
                                className="w-full h-60 object-cover"
                            />
                        </Reveal>
                    </div>
                    <div className="px-8 md:px-0">
                        <Reveal>
                            <h2 className="md:mt-10 mt-4 font-serif text-3xl md:text-4xl text-[#2F3E46]">
                                Find steadiness in the midst of everything
                                you’re carrying.
                            </h2>
                        </Reveal>
                        <Reveal>
                            <p className="mt-6 text-lg font-sans leading-relaxed text-[#5F6F73]">
                                Life can feel especially heavy when you’re
                                high-functioning on the outside but struggling
                                internally. Anxiety, self-doubt, and constant
                                pressure can make it hard to feel present,
                                rested, or at ease.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mt-4 text-lg font-sans leading-relaxed text-[#5F6F73]">
                                Therapy can be a space to slow down, understand
                                what’s happening beneath the surface, and build
                                tools that help you feel more grounded in daily
                                life.
                            </p>
                        </Reveal>
                        <div className="mt-20 border-t  border-[#7A8F85]" />
                        <div className="hover:cursor-pointer transition duration-1000 ease-in-out hover:bg-[#7A8F85] text-center text-[#2F3E46] hover:text-white">
                            <Reveal>
                                <button className="mb-4 md:mb-4 mt-4 md:mt-4 text-sm tracking-wide uppercase hover:cursor-pointer">
                                    Get in touch →
                                </button>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="md:w-full hidden md:block">
                    <Reveal>
                        <Image
                            src="/intro.jpg"
                            alt="Lifestyle flat lay"
                            width={600}
                            height={600}
                            className=" w-full h-145 object-cover"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
