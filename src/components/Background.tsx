const items = ["Education", "Licensure", "Certifications"];
import Reveal from "./Reveal";

export default function Background() {
    return (
        <section className="bg-[#b9b9b2] px-6 py-28">
            <div className="max-w-2xl mx-auto text-center text-[#2F3E46]">
                <Reveal>
                    <h2 className="font-serif text-3xl md:text-5xl mb-8">
                        My Professional Background
                    </h2>
                </Reveal>
                <div className="border-t border-[#7A8F85] mb-10" />
                <div className="space-y-6 text-left">
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center text-xl">
                                <Reveal>
                                    <span>{item}</span>
                                    <span className="text-xl">+</span>
                                </Reveal>
                            </div>
                            <div className="mt-4 border-b border-[#7A8F85]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
