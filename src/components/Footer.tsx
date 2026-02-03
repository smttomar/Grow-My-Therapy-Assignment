import Reveal from "./Reveal";
export default function Footer() {
    return (
        <footer className="bg-background px-6 md:px-16 py-24">
            <div className="grid md:grid-cols-3 gap-24">
                <div>
                    <Reveal>
                        <h3 className="font-serif text-4xl mb-8 text-[#2F3E46]">
                            DR. MAYA REYNOLDS
                        </h3>
                    </Reveal>
                    <p className="text-lg leading-relaxed text-[#5F6F73]">
                        123 Example Road
                        <br />
                        Minneapolis, MN
                    </p>

                    <p className="mt-6 text-lg underline text-[#5F6F73]">
                        email@example.com
                    </p>

                    <p className="mt-2 text-lg underline text-[#5F6F73]">
                        (555) 555-5555
                    </p>
                </div>
                <div>
                    <Reveal>
                        <h4 className="font-serif text-3xl mb-8 text-[#2F3E46]">
                            Hours
                        </h4>
                    </Reveal>
                    <p className="text-lg leading-relaxed text-[#5F6F73]">
                        Monday – Friday
                        <br />
                        10am – 6pm
                    </p>
                </div>
                <div>
                    <Reveal>
                        <h4 className="font-serif text-3xl mb-8 text-[#2F3E46]">
                            Find
                        </h4>
                    </Reveal>
                    <ul className="space-y-4 text-lg text-[#5F6F73]">
                        <li className="underline">Home</li>
                        <li className="underline">Contact</li>
                        <li className="underline">Blog</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
