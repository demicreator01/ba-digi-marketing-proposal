import ScrollReveal from '../shared/ScrollReveal';
import './SiteArchitecture.css'; // Re-uses funnel styles

export default function VisitorJourney() {
    return (
        <section className="s" id="connections">
            <ScrollReveal className="s-label">The Visitor Journey</ScrollReveal>
            <ScrollReveal className="s-title">How Every Page <em>Connects.</em></ScrollReveal>
            <ScrollReveal className="s-sub" as="p">
                The site is a funnel. Every page has a CTA that moves the visitor forward. No dead ends. No orphan pages.
            </ScrollReveal>
            <div className="funnel">
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Home</div>
                    <h4>Creates Interest</h4>
                    <p>Previews everything → links to Services (depth), Packages (pricing), or Contact (ready buyer).</p>
                </ScrollReveal>
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Services</div>
                    <h4>Builds Confidence</h4>
                    <p>Detailed capabilities → links to Packages ("now you know what we do, here's what it costs") or Contact.</p>
                </ScrollReveal>
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Packages</div>
                    <h4>Enables Decision</h4>
                    <p>Clear tiers + configurator → feeds into Contact with package pre-selected and context pre-filled.</p>
                </ScrollReveal>
                <ScrollReveal className="funnel-step">
                    <div className="f-page">Contact</div>
                    <h4>Converts</h4>
                    <p>Multiple paths — email, phone, WhatsApp, form. Warm leads from configurator. Zero friction.</p>
                </ScrollReveal>
            </div>
        </section>
    );
}
