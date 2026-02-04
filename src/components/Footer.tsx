import Reveal from "./Reveal";
export default function Footer() {
    return (
        <footer className="bg-background px-6 md:px-16 py-10">
            <div className="grid md:grid-cols-3 gap-24">
                <div>
                    <Reveal>
                        <h3 className="font-serif text-4xl mb-8 hover:cursor-pointer text-[#2F3E46]">
                            <a href="/">Dr. Maya Reynolds</a>
                        </h3>
                    </Reveal>
                    <p className="text-lg leading-relaxed text-[#5F6F73]">
                        <a
                            href="https://share.google/o7IPyLQGbHQXJLkwS"
                            target="blank"
                        >
                            1700-1798 10th St
                            <br />
                            Santa Monica, CA 90404, USA
                        </a>
                    </p>

                    <p className="mt-6 text-lg text-[#5F6F73]">
                        <a
                            href="mailto:docmayareynolds@therapy.com"
                            target="blank"
                        >
                            docmayareynolds@therapy.com
                        </a>
                    </p>

                    <p className="mt-2 text-lg text-[#5F6F73]">
                        <a href="/">+1 (361) 800-4964</a>
                    </p>
                </div>
                <div className="md:text-right">
                    <Reveal>
                        <h4 className="font-serif text-3xl mb-8 text-[#2F3E46]">
                            Hours
                        </h4>
                    </Reveal>
                    <p className="text-lg text-[#5F6F73]">
                        <a
                            href="https://calendar.google.com/calendar/u/0/r/appointment?pli=1"
                            target="blank"
                        >
                            Monday – Friday
                            <br />
                            10am – 6pm
                        </a>
                    </p>
                </div>
                <div className=" md:text-right">
                    <Reveal>
                        <h4 className="font-serif text-3xl mb-8 text-[#2F3E46]">
                            Find
                        </h4>
                    </Reveal>
                    <ul className="space-y-4 text-lg text-[#5F6F73] ">
                        <li className="hover:cursor-pointer">
                            <a href="/">Home</a>
                        </li>
                        <li className="hover:cursor-pointer">
                            <a href="/">Contact</a>
                        </li>
                        <li className="hover:cursor-pointer">
                            <a href="/">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-[#5F6F73] mt-10 mb-0">
                All Rights Reserved © 2026 Dr. Maya Reynolds, LLC.
            </p>
        </footer>
    );
}
