import ScrollReveal from '../shared/ScrollReveal';
import './PageServices.css';

export default function PageServices() {
    return (
        <section className="s">
            <div className="page-detail">
                <ScrollReveal className="page-header">
                    <div className="page-num-large">02</div>
                    <div className="page-name">Services</div>
                </ScrollReveal>
                <ScrollReveal className="page-intent" as="p">
                    The depth page. Answers "can you do what I specifically need?" Arc: <strong style={{ color: 'var(--cream-bright)' }}>Orient → Deep Dive × 3 → Process → Convert.</strong>
                </ScrollReveal>

                <div className="section-cards">
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 1</div>
                            <div className="sc-name">Hero</div>
                        </div>
                        <div className="sc-content">
                            Shorter hero — 60–70vh, centered. Heading: <strong>"Design · Build · Scale"</strong> — each word on its own line, in its pillar color (cream, copper, emerald). Large, bold, immediate orientation.<br />
                            Subtext: "Three disciplines. One infrastructure. Every project follows this logic — designed with intention, built from the ground up, scaled with precision."
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 2</div>
                            <div className="sc-name">DESIGN Pillar</div>
                            <div className="sc-belief">"They craft perception — brand, visual language, and the words that make it land."</div>
                        </div>
                        <div className="sc-content">
                            Cream accent label. Heading: "We Shape the Perception." Three service cards side by side:
                            <ul className="sc-list">
                                <li><strong>Brand Strategy &amp; Identity</strong> — positioning, brand voice, visual identity system, logo, style guide, messaging framework</li>
                                <li><strong>Graphic &amp; Presentation Design</strong> — social media assets, pitch decks, investor presentations, advertising creatives, print materials</li>
                                <li><strong>UI/UX Design &amp; Copywriting</strong> — interface design, user flows, wireframes, landing page copy, tone of voice</li>
                            </ul>
                            Each card has an icon, description, and capabilities list showing specific deliverables.
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 3</div>
                            <div className="sc-name">BUILD Pillar</div>
                            <div className="sc-belief">"They engineer the digital infrastructure — properly, not templated."</div>
                        </div>
                        <div className="sc-content">
                            Copper accent label. Heading: "We Engineer the Foundation." Three service cards:
                            <ul className="sc-list">
                                <li><strong>Custom Web Development</strong> — custom design &amp; dev, CMS integration, performance optimisation, mobile-first responsive, Core Web Vitals</li>
                                <li><strong>E-Commerce &amp; Platform Solutions</strong> — online stores, payment gateways, product catalogues, checkout optimisation, platform migration</li>
                                <li><strong>Technical SEO &amp; Integration</strong> — technical SEO audit, schema markup, third-party integrations, analytics &amp; tracking setup, site speed</li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 4</div>
                            <div className="sc-name">SCALE Pillar</div>
                            <div className="sc-belief">"Marketing here is strategy-led, not just ads."</div>
                        </div>
                        <div className="sc-content">
                            Emerald accent label. Heading: "We Amplify What We Build." Three service cards:<br /><br />
                            <ul className="sc-list">
                                <li><strong>Search Engine Marketing</strong> — SEO strategy &amp; execution, Google Ads, keyword research, content planning, technical audits, ranking reports</li>
                                <li><strong>Social Media &amp; Paid Campaigns</strong> — Meta Ads, LinkedIn, social management, retargeting, A/B testing, creative iteration</li>
                                <li><strong>Conversion &amp; Analytics</strong> — CRO, analytics setup, funnel design, landing page testing, monthly performance reviews</li>
                            </ul>
                            <strong>Below the 3 cards:</strong> Full Campaign Delivery spotlight card — a wide single card with the 5-node campaign flow diagram (Strategy &amp; Brief → Creative &amp; Assets → Launch &amp; Activate → Optimise → Report &amp; Refine). This card is the flagship offer — campaigns as the full-play culmination of Design + Build + Scale working together.
                            <div className="sc-note">The Campaign Delivery card sits below Scale's 3-card grid before the Process section — it breaks the grid rhythm intentionally. It's the only full-width card on the page. That visual weight signals Premium.</div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 5</div>
                            <div className="sc-name">How We Work</div>
                            <div className="sc-belief">"The process is clear, repeatable, and designed for client clarity."</div>
                        </div>
                        <div className="sc-content">
                            4-step horizontal timeline (desktop), vertical on mobile:
                            <div className="process-steps">
                                <div className="p-step">
                                    <div className="ps-num">01</div>
                                    <div className="ps-name">Discovery</div>
                                    <div className="ps-desc">We listen. Map the landscape before touching a pixel.</div>
                                </div>
                                <div className="p-step">
                                    <div className="ps-num">02</div>
                                    <div className="ps-name">Strategy</div>
                                    <div className="ps-desc">Define approach, channels, timeline, budget. You approve first.</div>
                                </div>
                                <div className="p-step">
                                    <div className="ps-num">03</div>
                                    <div className="ps-name">Execution</div>
                                    <div className="ps-desc">Build, launch, manage. Regular check-ins. Full visibility.</div>
                                </div>
                                <div className="p-step">
                                    <div className="ps-num">04</div>
                                    <div className="ps-name">Results</div>
                                    <div className="ps-desc">Measure, report, refine. Clear picture of what was achieved.</div>
                                </div>
                            </div>
                            <div className="sc-note">Business owners burned by agencies love seeing a process. It says "we won't disappear after taking your money" without saying it.</div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 6</div>
                            <div className="sc-name">CTA</div>
                        </div>
                        <div className="sc-content">"Know what you need? Let's scope it." — Get a Proposal (copper) · View Packages (outlined).</div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
