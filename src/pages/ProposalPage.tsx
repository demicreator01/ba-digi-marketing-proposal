import Navbar from '../components/shared/Navbar';
import ProgressBar from '../components/shared/ProgressBar';
import Hero from '../components/proposal/Hero';
import StrategicIdea from '../components/proposal/StrategicIdea';
import SiteArchitecture from '../components/proposal/SiteArchitecture';
import Pillars from '../components/proposal/Pillars';
import Packages from '../components/proposal/Packages';
import Configurator from '../components/proposal/Configurator';
import Closing from '../components/proposal/Closing';
import Footer from '../components/shared/Footer';

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
