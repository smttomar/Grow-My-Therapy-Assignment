import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSplit from "@/components/IntroSplit";
import Specialties from "@/components/Specialties";
import SupportSection from "@/components/SupportSection";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import OurOfficeSection from "@/components/OurOfficeSection";

export default function Home() {
    return (
        <div className=" bg-[hsla(30,55.56%,96.47%,1)]">
            <Navbar />
            <Hero />
            <IntroSplit />
            <Specialties />
            <SupportSection />
            <About />
            <OurOfficeSection />
            <FAQ />
            <Background />
            <CTA />
            <Footer />
        </div>
    );
}
