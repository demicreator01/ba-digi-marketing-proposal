import ProgressBar from '../components/shared/ProgressBar';
import Navbar from '../components/shared/Navbar';
import SectionDivider from '../components/shared/SectionDivider';
import Footer from '../components/shared/Footer';
import Hero from '../components/blueprint/Hero';
import StrategicIdea from '../components/blueprint/StrategicIdea';
import VisitorBeliefs from '../components/blueprint/VisitorBeliefs';
import SiteArchitecture from '../components/blueprint/SiteArchitecture';
import PageHome from '../components/blueprint/PageHome';
import PageServices from '../components/blueprint/PageServices';
import PagePackages from '../components/blueprint/PagePackages';
import PageContact from '../components/blueprint/PageContact';
import VisitorJourney from '../components/blueprint/VisitorJourney';
import Closing from '../components/blueprint/Closing';

export default function BlueprintPage() {
    return (
        <>
            <ProgressBar />
            <Navbar />
            <Hero />
            <StrategicIdea />
            <VisitorBeliefs />
            <SiteArchitecture />
            <SectionDivider />
            <PageHome />
            <SectionDivider />
            <PageServices />
            <SectionDivider />
            <PagePackages />
            <SectionDivider />
            <PageContact />
            <SectionDivider />
            <VisitorJourney />
            <Closing />
            <Footer />
        </>
    );
}
