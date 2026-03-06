import Closing from "@/components/proposal/Closing";
import Configurator from "@/components/proposal/Configurator";
import Hero from "@/components/proposal/Hero";
import Packages from "@/components/proposal/Packages";
import Pillars from "@/components/proposal/Pillars";
import SiteArchitecture from "@/components/proposal/SiteArchitecture";
import StrategicIdea from "@/components/proposal/StrategicIdea";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ProgressBar from "@/components/shared/ProgressBar";


export default function ProposalPage() {
    return (
        <>
            <ProgressBar />
            <Navbar />
            <Hero />
            <StrategicIdea />
            <SiteArchitecture />
            <Pillars />
            <Packages />
            <Configurator />
            <Closing />
            <Footer />
        </>
    );
}
