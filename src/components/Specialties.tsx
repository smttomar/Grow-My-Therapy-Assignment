import Image from "next/image";
import Reveal from "./Reveal";

const specialties = [
    {
        title: "Anxiety & Panic",
        text: "Chronic worry, racing thoughts, or panic can leave you feeling tense and exhausted. I help clients understand the patterns driving anxiety and develop practical strategies to feel calmer, more regulated, and in control.",
        image: "/specialty-1.jpg",
    },
    {
        title: "Trauma Therapy",
        text: "Trauma can live in both the mind and body, even long after an experience has passed. My trauma-informed approach prioritizes safety, pacing, and nervous system regulation, helping you process experiences without feeling overwhelmed.",
        image: "/specialty-2.jpg",
    },
    {
        title: "Burnout & Perfectionism",
        text: "Burnout often affects high-achieving adults who feel constant pressure to perform or “hold it all together.” Therapy can help you reconnect with your values, set healthier boundaries, and build a more sustainable way of living.",
        image: "/specialty-3.jpg",
    },
];

export default function Specialties() {
    return (
        <section className="bg-background px-6 md:px-16 py-28">
            <Reveal>
                <h2 className="font-serif text-3xl md:text-5xl text-center text-[#2F3E46] mb-20">
                    My Specialties
                </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-10 ">
                {specialties.map((item, index) => (
                    <div
                        key={index}
                        className="border bg-[#e2dbd1] border-[#2F3E46] p-8 flex flex-col justify-between"
                    >
                        <div>
                            <Reveal>
                                <h3 className="font-serif text-xl text-[#2F3E46] mb-4">
                                    {item.title}
                                </h3>
                            </Reveal>
                            <Reveal>
                                <p className="text-lg leading-relaxed text-[#5F6F73]">
                                    {item.text}
                                </p>
                            </Reveal>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <Reveal>
                                <div className="w-56 h-56 rounded-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
