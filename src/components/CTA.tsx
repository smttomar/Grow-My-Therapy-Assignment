import Reveal from "./Reveal";
export default function CTA() {
    return (
        <section className="bg-[#e2dbd1] text-[#2F3E46] px-6 py-24 text-center">
            <Reveal>
                <h2 className="font-serif text-3xl md:text-5xl mb-6">
                    Begin therapy with support and intention.
                </h2>
            </Reveal>

            <Reveal>
                <p className="text-lg max-w-xl mx-auto text-[#5F6F73] mb-10">
                    If you’re ready to take the next step, I invite you to reach
                    out and schedule a consultation. I look forward to
                    supporting you on your path toward greater clarity and
                    balance.
                </p>
            </Reveal>

            <Reveal>
                <button className="px-8 py-3 border border-[#7A8F85] text-sm tracking-wide duration-1000 ease-in-out hover:scale-105 uppercase hover:cursor-pointer hover:text-white hover:bg-[#7A8F85] hover:text-accent transition">
                    Schedule a Consultation
                </button>
            </Reveal>
        </section>
    );
}
